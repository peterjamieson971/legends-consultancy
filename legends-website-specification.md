# Legends Consultancy Website - Technical Specification

## Project Overview
Build a modern, professional consultancy website for **Legends** - a collective of luxury & lifestyle industry veterans providing consulting, advisory, and market expertise services.

---

## 1. Brand Identity

### Business Name
**Legends**

### Tagline
"Legend - a known story, to be known"

### Brand Positioning
- Legendary: To be very well known, to be a point of reference, to create an enduring legacy
- A collective of luxury & lifestyle veterans from various specialties
- Deep market insight, commercial acumen, and high emotional intelligence
- New reference point for consulting, advisory boards, and industry expertise

---

## 2. Core Services

The website should clearly communicate these service offerings:

1. **Brand Development**
   - Help brands develop their own legend, marque, signature and lore

2. **Expert Advisory**
   - Facilitate expert advisory capabilities

3. **Market Entry**
   - Facilitate market entry strategies

4. **Company Turnaround**
   - Bring company turnaround solutions to life

5. **Operational Deep Dive**
   - Deep dive into real operational market conditions

6. **Experience & Expertise**
   - Hundreds of collective years of experience across luxury & lifestyle sectors

7. **Distribution & Wholesale**
   - Support and manage distribution and wholesale strategies

---

## 3. Technical Stack

### Core Technologies
- **Framework**: Node.js with Turborepo (monorepo structure)
- **Frontend**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Email Service**: Resend API
- **Environment Variables**: .env file for secrets

### Project Structure
```
legends-consultancy/
├── apps/
│   └── web/                    # Main Next.js application
│       ├── app/
│       │   ├── page.tsx       # Home page
│       │   ├── services/      # Services pages
│       │   ├── about/         # About/Team page
│       │   ├── contact/       # Contact page with form
│       │   └── api/
│       │       └── contact/   # API route for Resend
│       ├── components/
│       ├── public/
│       │   └── images/        # Shutterstock images
│       └── .env.local
├── packages/
│   ├── ui/                    # Shared UI components
│   └── typescript-config/
├── turbo.json
└── package.json
```

---

## 4. Page Structure & Content

### 4.1 Home Page (/)
**Sections:**
1. **Hero Section**
   - Full-width hero with impactful image
   - Main tagline: "Legend - a known story, to be known"
   - Secondary headline: "Creating Legendary Brands"
   - CTA: "Discover How" → scroll to services

2. **Introduction**
   - Brief overview of Legends collective
   - Value proposition statement
   - "Why do we exist? What can we help with?"

3. **Services Overview**
   - Grid/card layout showcasing 7 core services
   - Icon + Title + Brief description for each
   - Links to detailed service information

4. **Why Legends**
   - Highlight: Collective experience
   - Highlight: Deep market insight
   - Highlight: High emotional intelligence
   - Stats/numbers if available (years of experience, industries served)

5. **CTA Section**
   - "Ready to build your legend?"
   - Contact button

### 4.2 Services Page (/services)
**Content:**
- Detailed breakdown of each service offering
- Use case examples for each service
- Process/methodology overview
- Testimonial placeholders (for future)

### 4.3 About Page (/about)
**Content:**
- Full story of Legends collective
- Team member profiles (placeholder structure)
- Philosophy and approach
- Industries of expertise

### 4.4 Contact Page (/contact)
**Features:**
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Company (optional)
  - Service Interest (dropdown)
  - Message (required)
- Success/error messaging
- Alternative contact methods (email, phone if available)
- Office location/meeting options

---

## 5. Design Requirements

### Design Inspiration
Modern consultancy aesthetic inspired by:
- **PWC**: Clean, professional, blue/orange accent
- **KPMG**: Bold typography, navy/blue palette
- **EY**: Sophisticated, yellow accent, strong imagery

### Color Palette
**Primary Colors:**
- Deep Navy/Midnight Blue: #1A2332 (primary brand)
- Sophisticated Grey: #4A5568 (secondary text)
- Pure White: #FFFFFF (backgrounds)

**Accent Colors:**
- Luxury Gold: #D4AF37 (CTAs, highlights)
- Deep Burgundy: #8B2635 (alternative accent)
- Charcoal: #2D3748 (footer, headers)

### Typography
**Recommended Font Pairings:**
- **Headings**: Playfair Display or Cormorant Garamond (serif, elegant)
- **Body**: Inter or Roboto (sans-serif, clean)
- **Accent**: Montserrat (for CTAs, nav)

```css
/* Tailwind Config Example */
fontFamily: {
  'heading': ['Playfair Display', 'serif'],
  'body': ['Inter', 'sans-serif'],
  'accent': ['Montserrat', 'sans-serif'],
}
```

### Design Elements
1. **Whitespace**: Generous spacing, breathing room
2. **Imagery**: High-quality, professional lifestyle/business images
3. **Icons**: Minimal, line-style icons for services
4. **Buttons**: 
   - Primary: Gold background, navy text
   - Secondary: Navy outline, transparent background
5. **Cards**: Subtle shadows, clean borders
6. **Sections**: Alternating white/light grey backgrounds

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile navigation
- Touch-friendly buttons and forms

---

## 6. Shutterstock Image Requirements

### Image Specifications
- **Format**: JPEG or WebP
- **Resolution**: Minimum 1920x1080 for hero images
- **Orientation**: Mix of landscape and portrait
- **Style**: Professional, aspirational, luxury lifestyle

### Required Images (10-12 total)

1. **Hero Section (1 image)**
   - Professional business meeting in luxury setting
   - Diverse team of executives collaborating
   - Keywords: "luxury business consultancy meeting modern"

2. **Services Section (7 images)**
   - Brand strategy workshop with designers
   - Keywords: "brand development luxury workshop"
   
   - Executive advisory board meeting
   - Keywords: "expert advisory board luxury"
   
   - Market expansion/global business concept
   - Keywords: "market entry international business"
   
   - Business turnaround/growth visualization
   - Keywords: "business turnaround strategy meeting"
   
   - Operations analysis/data review
   - Keywords: "operational analysis business professionals"
   
   - Diverse team collaboration
   - Keywords: "experienced professionals teamwork luxury"
   
   - Distribution/logistics in luxury context
   - Keywords: "luxury distribution wholesale strategy"

3. **About Section (2-3 images)**
   - Professional team portrait in modern office
   - Keywords: "professional consultancy team portrait"
   
   - Handshake/partnership concept
   - Keywords: "luxury business partnership handshake"

4. **Background/Texture Images (2 images)**
   - Subtle abstract luxury texture
   - Keywords: "abstract luxury background texture navy gold"
   
   - Modern office interior
   - Keywords: "modern luxury office interior"

### Image Optimization Requirements
- Compress images using Next.js Image component
- Implement lazy loading
- Provide alt text for accessibility

---

## 7. Contact Form Implementation

### Resend Integration

**API Route**: `/app/api/contact/route.ts`

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Legends Website <onboarding@resend.dev>', // Update with verified domain
      to: process.env.CONTACT_EMAIL!, // Jonathan's email
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

### Environment Variables (.env.local)

```env
# Resend API Configuration
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=jonathan@legends-consultancy.com

# Vercel Configuration (auto-populated on Vercel)
NEXT_PUBLIC_VERCEL_URL=
```

### Form Validation
- Client-side validation using React Hook Form or native HTML5
- Email format validation
- Required field indicators
- Character limits on message field
- Honeypot field for spam prevention

---

## 8. Navigation Structure

### Main Navigation
```
Logo [Legends]  |  Services  |  About  |  Contact  |  [Get Started - CTA Button]
```

### Footer Navigation
```
Column 1: Services          Column 2: Company        Column 3: Contact
- Brand Development        - About Us               - Email
- Expert Advisory          - Our Approach           - Phone
- Market Entry             - Team                   - LinkedIn
- Turnaround Solutions     - Privacy Policy
- Operational Insight
- Distribution Strategy

Copyright © 2024 Legends Consultancy. All rights reserved.
```

---

## 9. SEO & Performance Requirements

### Meta Information
```html
<title>Legends | Luxury & Lifestyle Consultancy</title>
<meta name="description" content="A collective of luxury & lifestyle veterans providing expert consulting, advisory, and market expertise to create legendary brands." />
<meta name="keywords" content="luxury consultancy, lifestyle consulting, brand development, market entry, expert advisory" />
```

### Performance Targets
- Lighthouse Score: 90+ on all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Image optimization with Next.js Image component
- Font loading optimization

### Accessibility
- WCAG 2.1 Level AA compliance
- Semantic HTML
- Keyboard navigation support
- Screen reader compatible
- Color contrast ratios meet standards

---

## 10. Deployment Configuration

### Vercel Setup

**vercel.json**
```json
{
  "buildCommand": "turbo run build",
  "devCommand": "turbo run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": "apps/web/.next"
}
```

### Environment Variables in Vercel
1. Navigate to Project Settings → Environment Variables
2. Add:
   - `RESEND_API_KEY` (Secret)
   - `CONTACT_EMAIL` (Plain Text)

### Build Configuration
- Node.js Version: 18.x or later
- Build Command: `turbo run build`
- Output Directory: `apps/web/.next`
- Install Command: `npm install`

---

## 11. Phase 1 Deliverables (MVP)

### Must Have
- [x] Fully responsive home page with all sections
- [x] Services page with detailed information
- [x] About page structure (team member placeholders)
- [x] Functional contact form with Resend integration
- [x] Professional design matching consultancy aesthetic
- [x] Mobile navigation
- [x] Footer with all links
- [x] SEO meta tags
- [x] Vercel deployment

### Nice to Have (Future Phases)
- Blog/Insights section
- Case studies showcase
- Team member bios with photos
- Newsletter signup
- Multi-language support
- Client testimonials
- Interactive service selection tool

---

## 12. Content Writing Guidelines

### Tone of Voice
- **Professional yet approachable**: Authoritative without being stuffy
- **Confident**: Showcase deep expertise
- **Aspirational**: Inspire clients to build their legend
- **Clear**: Avoid jargon, communicate value clearly

### Key Messaging
- "Creating Legendary Brands"
- "Deep Market Insight Meets High Emotional Intelligence"
- "Hundreds of Collective Years of Experience"
- "Your Partner in Building Enduring Legacy"

---

## 13. Testing Checklist

### Functionality Testing
- [ ] Contact form submits successfully
- [ ] Email received via Resend
- [ ] Form validation works correctly
- [ ] Error handling displays properly
- [ ] All navigation links work
- [ ] Mobile menu functions correctly

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Responsive Testing
- [ ] Desktop (1920px+)
- [ ] Laptop (1366px - 1920px)
- [ ] Tablet (768px - 1024px)
- [ ] Mobile (375px - 767px)

### Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test image loading
- [ ] Test form submission speed

---

## 14. Project Timeline Estimate

### Phase 1: Setup & Infrastructure (Day 1)
- Initialize Turborepo structure
- Set up Next.js app
- Configure Tailwind CSS
- Set up Resend integration
- Configure environment variables

### Phase 2: Design Implementation (Days 2-3)
- Implement color scheme and typography
- Create reusable UI components
- Build navigation and footer
- Design system documentation

### Phase 3: Page Development (Days 4-6)
- Build home page with all sections
- Create services page
- Develop about page
- Implement contact page with form

### Phase 4: Integration & Testing (Day 7)
- Resend email testing
- Cross-browser testing
- Responsive testing
- Performance optimization

### Phase 5: Deployment (Day 8)
- Vercel deployment
- Environment variable configuration
- DNS setup (if custom domain)
- Final QA

**Total Estimated Timeline**: 8-10 days

---

## 15. Launch Checklist

### Pre-Launch
- [ ] All content reviewed and approved
- [ ] Images optimized and alt text added
- [ ] Contact form tested and receiving emails
- [ ] SEO meta tags implemented
- [ ] Analytics setup (Google Analytics 4)
- [ ] Privacy policy page created
- [ ] 404 page designed
- [ ] Favicon and social sharing images created

### Launch
- [ ] Deploy to Vercel production
- [ ] Configure custom domain (if applicable)
- [ ] Submit sitemap to Google Search Console
- [ ] Test all functionality on live site
- [ ] Monitor error logs

### Post-Launch
- [ ] Monitor email submissions
- [ ] Check analytics for traffic
- [ ] Gather initial user feedback
- [ ] Plan Phase 2 features

---

## 16. Contact Information Required

Please provide the following from Jonathan:
- [ ] Business email address for contact form submissions
- [ ] Phone number (if to be displayed on website)
- [ ] LinkedIn profile/company page URL
- [ ] Preferred contact email display
- [ ] Any specific team member information for About page
- [ ] Logo files (if available) in SVG or high-res PNG
- [ ] Any existing brand guidelines or color preferences
- [ ] Custom domain name (if different from legends-consultancy.com)

---

## 17. Additional Notes

### Scalability Considerations
- Structure allows for easy addition of blog
- Component-based architecture enables quick updates
- Turborepo enables future addition of admin panel or client portal

### Security Considerations
- Rate limiting on contact form (implement in future)
- CAPTCHA consideration for spam prevention
- Environment variables properly secured
- No sensitive data stored client-side

### Maintenance
- Regular dependency updates
- Monthly security audits
- Quarterly content reviews
- Annual design refresh consideration

---

## Conclusion

This specification provides a complete blueprint for building a professional, modern consultancy website for Legends. The technical stack ensures scalability, the design requirements align with industry standards, and the functionality delivers immediate value to potential clients.

**Next Steps:**
1. Provide this specification to Claude Code
2. Download required Shutterstock images
3. Set up Resend account and obtain API key
4. Gather contact information from Jonathan
5. Begin development following the phased timeline

For any questions or clarifications during development, refer back to this specification document.
