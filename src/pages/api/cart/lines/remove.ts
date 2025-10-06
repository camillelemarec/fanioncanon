import type { NextApiRequest, NextApiResponse } from 'next'
import { CART_FIELDS } from '@/lib/shopify'

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN as string
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN as string
const apiVersion = '2024-10'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })
  const { cartId, lineIds } = req.body as { cartId: string; lineIds: string[] }
  if (!cartId) return res.status(400).json({ error: 'cartId required' })
  const m = `mutation($cartId:ID!,$lineIds:[ID!]!){ cartLinesRemove(cartId:$cartId, lineIds:$lineIds){ cart { ${CART_FIELDS} } userErrors{ message } } }`
  const r = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': token },
    body: JSON.stringify({ query: m, variables: { cartId, lineIds } }),
  })
  const j = await r.json()
  const err = j?.data?.cartLinesRemove?.userErrors?.[0]
  if (!r.ok || err) return res.status(500).json({ error: err?.message ?? 'cartLinesRemove failed' })
  res.status(200).json(j.data.cartLinesRemove.cart)
}


