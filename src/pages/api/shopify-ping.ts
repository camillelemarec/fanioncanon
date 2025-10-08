import type { NextApiRequest, NextApiResponse } from 'next'
import { shopifyFetch } from '@/lib/shopify'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const q = `query { shop { name primaryDomain { url } } }`
    const data = await shopifyFetch<{ shop: { name: string; primaryDomain: { url: string } } }>(q)
    res.status(200).json(data.shop)
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}



