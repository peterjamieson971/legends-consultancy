import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder')

export async function POST(request: Request) {
  // Check if API key is configured
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 503 }
    )
  }

  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Legends Website <onboarding@resend.dev>', // Update with verified domain
      to: process.env.CONTACT_EMAIL || 'info@legends-consultancy.com',
      reply_to: email,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Inter', sans-serif;
                line-height: 1.6;
                color: #4A5568;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #1A2332;
                color: white;
                padding: 30px;
                text-align: center;
              }
              .content {
                background-color: #ffffff;
                padding: 30px;
                border: 1px solid #e2e8f0;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: 600;
                color: #1A2332;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #4A5568;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
                font-size: 14px;
                color: #718096;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-family: 'Playfair Display', serif;">Legends</h1>
                <p style="margin: 10px 0 0 0;">New Contact Form Submission</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value"><a href="mailto:${email}">${email}</a></span>
                </div>
                <div class="field">
                  <span class="label">Company:</span>
                  <span class="value">${company || 'Not provided'}</span>
                </div>
                <div class="field">
                  <span class="label">Service Interest:</span>
                  <span class="value">${service || 'Not specified'}</span>
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
                <div class="footer">
                  <p>This message was sent from the Legends Consultancy website contact form.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
