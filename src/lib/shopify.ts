const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN as string
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN as string
const apiVersion = '2024-10'

export async function shopifyFetch<T>(query: string, variables?: Record<string, any>): Promise<T> {
  if (!domain || !token) throw new Error('Shopify env variables missing')
  const r = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store',
  })
  const j = await r.json()
  if (!r.ok || j.errors) throw new Error('Shopify error: ' + JSON.stringify(j.errors ?? j))
  return j.data
}


