import type { NextApiRequest, NextApiResponse } from 'next'
import { CART_FIELDS } from '@/lib/shopify'

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN as string
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN as string
const apiVersion = '2024-10'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' })
  const id = (req.query.id as string) ?? ''
  if (!id) return res.status(400).json({ error: 'cartId required' })

  const query = `query CartGet($id:ID!){ cart(id:$id){ ${CART_FIELDS} } }`
  const r = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': token },
    body: JSON.stringify({ query, variables: { id } }),
  })

  const j = await r.json()
  if (!r.ok || j.errors || !j?.data?.cart) {
    const message = j?.errors?.[0]?.message ?? 'cart get failed'
    return res.status(500).json({ error: message })
  }

  res.status(200).json(j.data.cart)
}

