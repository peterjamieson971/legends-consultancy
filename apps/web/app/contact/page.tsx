'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-navy text-white py-20">
        <div className="section-container text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-6 text-white">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to build your legend? Let's start the conversation
          </p>
        </div>
      </header>

      {/* Contact Form */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✓</div>
                <h2 className="text-3xl font-heading mb-4 text-luxury-gold">
                  Message Sent Successfully!
                </h2>
                <p className="text-sophisticated-grey mb-8">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-accent mb-2 text-navy">
                    Name <span className="text-deep-burgundy">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-accent mb-2 text-navy">
                    Email <span className="text-deep-burgundy">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-accent mb-2 text-navy">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-accent mb-2 text-navy">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                  >
                    <option value="">Select a service</option>
                    <option value="brand-development">Brand Development</option>
                    <option value="expert-advisory">Expert Advisory</option>
                    <option value="market-entry">Market Entry</option>
                    <option value="company-turnaround">Company Turnaround</option>
                    <option value="operational-deep-dive">Operational Deep Dive</option>
                    <option value="distribution-wholesale">Distribution & Wholesale</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-accent mb-2 text-navy">
                    Message <span className="text-deep-burgundy">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-heading mb-6">Other Ways to Reach Us</h3>
            <div className="space-y-3 text-sophisticated-grey">
              <p>
                <strong className="text-navy">Email:</strong>{' '}
                <a href="mailto:info@legends-consultancy.com" className="hover:text-luxury-gold transition-colors">
                  info@legends-consultancy.com
                </a>
              </p>
              <p>
                <strong className="text-navy">Phone:</strong> Coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="section-container bg-gray-50 text-center">
        <Link href="/" className="btn-secondary inline-block">
          Back to Home
        </Link>
      </section>
    </main>
  )
}
