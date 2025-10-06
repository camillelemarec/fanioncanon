import type { NextApiRequest, NextApiResponse } from 'next'

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN as string
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN as string
const apiVersion = '2024-10'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })
  const { variantId, quantity = 1 } = req.body as { variantId: string; quantity?: number }
  if (!variantId) return res.status(400).json({ error: 'variantId required' })

  const mutation = `mutation($lines:[CartLineInput!]!){ cartCreate(input:{lines:$lines}){ cart{ id checkoutUrl } userErrors{ message } } }`

  const r = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': token },
    body: JSON.stringify({ query: mutation, variables: { lines: [{ merchandiseId: variantId, quantity }] } }),
  })
  const j = await r.json()
  const err = j?.data?.cartCreate?.userErrors?.[0]
  if (!r.ok || err) return res.status(500).json({ error: err?.message ?? 'Shopify cartCreate failed' })

  res.status(200).json({ checkoutUrl: j.data.cartCreate.cart.checkoutUrl as string })
}


