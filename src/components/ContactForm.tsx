'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/FORMSPREE_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json()
        setErrorMessage(json?.errors?.[0]?.message ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="(225) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
          Service Interested In
        </label>

        <select
          id="service"
          name="service"
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition bg-white"
        >
          <option value="">Select a service...</option>
          <option>Free Water Testing</option>
          <option>Whole-House Water Filtration</option>
          <option>Water Softeners</option>
          <option>Reverse Osmosis Drinking Water</option>
          <option>Well Water Treatment</option>
          <option>Complete Home Package</option>
          <option>Other / General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Tell Us About Your Water <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-y"
          placeholder="City water or well water? Any staining, smells, or taste issues? Anything you want tested..."
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3">
          {errorMessage}
        </p>
      )}

      {status === 'success' ? (
        <div role="status" className="text-sm text-green-700 bg-green-50 border border-green-200 rounded px-4 py-4 text-center">
          <p className="font-semibold text-base mb-1">Message Sent!</p>
          <p>Thank you for reaching out. We will get back to you shortly.</p>
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-splash text-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Request My Free Water Test'}
        </button>
      )}
    </form>
  )
}
