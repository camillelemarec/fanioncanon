import { createContext, useContext, useEffect, useState } from 'react'

type Cart = any
type Ctx = {
  cart: Cart | null
  open: boolean
  setOpen: (v: boolean) => void
  add: (variantId: string, quantity?: number) => Promise<void>
  remove: (lineId: string) => Promise<void>
  update: (lineId: string, quantity: number) => Promise<void>
  checkout: () => void
}

const CartContext = createContext<Ctx>(null as any)

export function CartProviderShopify({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)
  const [open, setOpen] = useState(false)
  const [cartId, setCartId] = useState<string | undefined>()

  function isValidCartId(id?: string | null) {
    if (!id) return false
    if (id === 'undefined') return false
    return id.startsWith('gid://shopify/Cart/')
  }

  useEffect(() => {
    const stored = localStorage.getItem('fc_cart_id') || undefined
    const id = isValidCartId(stored) ? stored : undefined
    if (!id && stored) localStorage.removeItem('fc_cart_id')
    setCartId(id)
    if (id)
      fetch(`/api/cart/get?id=${encodeURIComponent(id)}`)
        .then((r) => r.json())
        .then(setCart)
        .catch(() => setCart(null))
  }, [])

  async function ensureCart(): Promise<{ id: string }> {
    if (isValidCartId(cartId)) return { id: cartId as string }
    const c = await fetch('/api/cart/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    }).then((r) => r.json())
    if (isValidCartId(c?.id)) {
      localStorage.setItem('fc_cart_id', c.id)
    } else {
      localStorage.removeItem('fc_cart_id')
    }
    setCartId(c.id)
    setCart(c)
    return { id: c.id }
  }

  async function add(variantId: string, quantity = 1) {
    const { id } = await ensureCart()
    const c = await fetch('/api/cart/lines/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartId: id, lines: [{ merchandiseId: variantId, quantity }] }),
    }).then((r) => r.json())
    setCart(c)
    setOpen(true)
  }

  async function remove(lineId: string) {
    if (!cartId) return
    const c = await fetch('/api/cart/lines/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartId, lineIds: [lineId] }),
    }).then((r) => r.json())
    setCart(c)
  }

  async function update(lineId: string, quantity: number) {
    if (!cartId) return
    const c = await fetch('/api/cart/lines/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartId, lines: [{ id: lineId, quantity }] }),
    }).then((r) => r.json())
    setCart(c)
  }

  function checkout() {
    if (cart?.checkoutUrl) window.location.href = cart.checkoutUrl
  }

  return (
    <CartContext.Provider value={{ cart, open, setOpen, add, remove, update, checkout }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartShopify = () => useContext(CartContext)



