import { useCartShopify } from '@/context/CartContextShopify'

export default function CartDrawer() {
  const { cart, open, setOpen, remove, update, checkout } = useCartShopify()
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b">
          <h2 className="text-lg font-semibold">Votre panier</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="p-6 space-y-4 overflow-auto h-[calc(100%-200px)]">
          {!cart?.lines?.edges?.length && <p className="text-gray-500">Votre panier est vide.</p>}
          {cart?.lines?.edges?.map((e: any) => {
            const l = e.node
            const m = l.merchandise
            return (
              <div key={l.id} className="flex gap-4">
                {m.image && (
                  <img
                    src={m.image.url}
                    alt={m.image.altText ?? m.product.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                )}
                <div className="flex-1">
                  <div className="font-medium">{m.product.title}</div>
                  <div className="text-sm text-gray-600">{Number(m.price.amount).toFixed(2)} €</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="px-2 py-1 border" onClick={() => update(l.id, Math.max(1, l.quantity - 1))}>
                      −
                    </button>
                    <span>{l.quantity}</span>
                    <button className="px-2 py-1 border" onClick={() => update(l.id, l.quantity + 1)}>
                      +
                    </button>
                    <button className="ml-4 text-red-600" onClick={() => remove(l.id)}>
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="p-6 border-t">
          <div className="flex justify-between mb-4">
            <span>Sous-total</span>
            <strong>
              {cart?.cost?.subtotalAmount?.amount ? Number(cart.cost.subtotalAmount.amount).toFixed(2) : '0.00'} €
            </strong>
          </div>
          <button onClick={checkout} className="w-full py-3 rounded bg-blue-900 text-white hover:bg-blue-800">
            Procéder au paiement
          </button>
        </div>
      </aside>
    </div>
  )
}



