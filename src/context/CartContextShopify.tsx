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

  async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
    const res = await fetch(url, init)
    const data = await res.json().catch(() => null)
    if (!res.ok || (data as any)?.error) {
      throw new Error((data as any)?.error ?? `Request failed (${res.status})`)
    }
    return data as T
  }

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
      fetchJson(`/api/cart/get?id=${encodeURIComponent(id)}`)
        .then(setCart)
        .catch(() => {
          localStorage.removeItem('fc_cart_id')
          setCartId(undefined)
          setCart(null)
        })
  }, [])

  async function ensureCart(): Promise<{ id: string }> {
    if (isValidCartId(cartId)) return { id: cartId as string }
    const c = await fetchJson('/api/cart/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })
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
    async function addOnce(targetCartId: string) {
      const c = await fetchJson('/api/cart/lines/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartId: targetCartId, lines: [{ merchandiseId: variantId, quantity }] }),
      })
      setCart(c)
    }

    try {
      const { id } = await ensureCart()
      await addOnce(id)
      setOpen(true)
    } catch (err) {
      // Cart expiré ou invalide : on purge et on retente une fois
      localStorage.removeItem('fc_cart_id')
      setCartId(undefined)
      try {
        const { id: newId } = await ensureCart()
        await addOnce(newId)
      } catch (err2) {
        console.error('add to cart failed', err2)
      } finally {
        setOpen(true)
      }
    }
  }

  async function remove(lineId: string) {
    if (!cartId) return
    const c = await fetchJson('/api/cart/lines/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartId, lineIds: [lineId] }),
    })
    setCart(c)
  }

  async function update(lineId: string, quantity: number) {
    if (!cartId) return
    const c = await fetchJson('/api/cart/lines/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartId, lines: [{ id: lineId, quantity }] }),
    })
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



