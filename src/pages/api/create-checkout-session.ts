import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
// Note: no apiVersion pinned to avoid mismatch with deployed SDK

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const { items } = req.body as { items: Array<{ name: string; price: number; quantity: number }> }
    if (!items || items.length === 0) return res.status(400).json({ error: 'No items' })

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((i) => ({
      quantity: i.quantity,
      price_data: {
        currency: 'eur',
        unit_amount: Math.round(i.price * 100),
        product_data: { name: i.name },
      },
    }))

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      success_url: `${req.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/checkout/cancel`,
    })

    return res.status(200).json({ id: session.id, url: session.url })
  } catch (e: any) {
    console.error(e)
    return res.status(500).json({ error: 'Stripe error' })
  }
}


