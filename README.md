# Legends Consultancy Website

A modern, professional consultancy website for **Legends** - a collective of luxury & lifestyle industry veterans providing consulting, advisory, and market expertise services.

## Tech Stack

- **Framework**: Node.js with Turborepo (monorepo structure)
- **Frontend**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Email Service**: Resend API

## Project Structure

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
│       │   └── images/        # Project images
│       └── .env.local
├── packages/
│   ├── ui/                    # Shared UI components
│   └── typescript-config/
├── turbo.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Resend API key (get one at https://resend.com)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd legends-consultancy
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Copy the example env file
cp apps/web/.env.example apps/web/.env.local

# Edit .env.local and add your Resend API key
# RESEND_API_KEY=your_actual_api_key_here
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file in `apps/web/` with the following variables:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=info@legends-consultancy.com
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build artifacts

## Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy!

The `vercel.json` configuration is already set up for Turborepo.

## Features

- ✅ Fully responsive design
- ✅ Modern consultancy aesthetic
- ✅ Contact form with email integration
- ✅ SEO optimized
- ✅ Performance optimized with Next.js
- ✅ Professional color scheme and typography

## Color Palette

- **Navy**: #1A2332 (Primary brand)
- **Sophisticated Grey**: #4A5568 (Secondary text)
- **Luxury Gold**: #D4AF37 (CTAs, highlights)
- **Deep Burgundy**: #8B2635 (Alternative accent)
- **Charcoal**: #2D3748 (Footer, headers)

## Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accent**: Montserrat (CTAs, navigation)

## Next Steps

1. Add high-quality images to `/apps/web/public/images/`
2. Configure Resend with a verified domain
3. Add team member information to About page
4. Set up analytics (Google Analytics 4)
5. Create privacy policy page
6. Add custom 404 page
7. Create favicon and social sharing images

## License

Copyright © 2024 Legends Consultancy. All rights reserved.
