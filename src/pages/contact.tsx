import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  return (
    <div className="min-h-screen bg-white">
      <Head><title>Contact — Fanion Canon</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-playfair text-navy-700 mb-6">Contact</h1>
        <form className="space-y-6">
          <input className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Nom" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
          <input className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
          <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3" rows={6} placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
          <button className="bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg">Envoyer</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}


