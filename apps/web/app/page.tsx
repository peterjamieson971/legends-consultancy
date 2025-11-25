import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-navy text-white">
        <Image
          src="/images/hero-image.jpg"
          alt="Legends Consultancy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-charcoal/60 to-navy/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6 text-white">
            Legends
          </h1>
          <p className="font-accent text-xl md:text-2xl mb-4 text-luxury-gold">
            Legend - a known story, to be known
          </p>
          <p className="font-body text-2xl md:text-3xl mb-8 text-white">
            Creating Legendary Brands
          </p>
          <Link href="#services" className="btn-primary inline-block">
            Discover How
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            A Collective of Excellence
          </h2>
          <p className="text-lg md:text-xl text-sophisticated-grey leading-relaxed mb-4">
            Legends brings together luxury and lifestyle industry veterans with deep market insight,
            commercial acumen, and high emotional intelligence.
          </p>
          <p className="text-lg md:text-xl text-sophisticated-grey leading-relaxed">
            We exist to help brands develop their own legend, marque, signature, and lore -
            creating enduring legacies that resonate across markets and generations.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="section-container bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-heading text-center mb-16">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-heading mb-4">{service.title}</h3>
              <p className="text-sophisticated-grey">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            Learn More About Our Services
          </Link>
        </div>
      </section>

      {/* Why Legends */}
      <section className="section-container bg-navy text-white">
        <h2 className="text-4xl md:text-5xl font-heading text-center mb-16 text-white">
          Why Legends
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl font-heading text-luxury-gold mb-4">100+</div>
            <h3 className="text-xl font-accent mb-2">Years of Experience</h3>
            <p className="text-gray-300">Collective expertise across luxury & lifestyle sectors</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-heading text-luxury-gold mb-4">∞</div>
            <h3 className="text-xl font-accent mb-2">Deep Market Insight</h3>
            <p className="text-gray-300">Real operational understanding of market conditions</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-heading text-luxury-gold mb-4">★</div>
            <h3 className="text-xl font-accent mb-2">High Emotional Intelligence</h3>
            <p className="text-gray-300">Understanding brands, people, and culture</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-heading mb-6">
          Ready to Build Your Legend?
        </h2>
        <p className="text-xl text-sophisticated-grey mb-8 max-w-2xl mx-auto">
          Let's create an enduring legacy for your brand together.
        </p>
        <Link href="/contact" className="btn-primary inline-block">
          Get in Touch
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-heading text-xl mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="hover:text-luxury-gold transition-colors">Brand Development</Link></li>
                <li><Link href="/services" className="hover:text-luxury-gold transition-colors">Expert Advisory</Link></li>
                <li><Link href="/services" className="hover:text-luxury-gold transition-colors">Market Entry</Link></li>
                <li><Link href="/services" className="hover:text-luxury-gold transition-colors">Turnaround Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xl mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-luxury-gold transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-luxury-gold transition-colors">Our Approach</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xl mb-4 text-white">Contact</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="hover:text-luxury-gold transition-colors">Get in Touch</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Legends Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

const services = [
  {
    title: 'Brand Development',
    description: 'Help brands develop their own legend, marque, signature and lore for lasting impact.',
  },
  {
    title: 'Expert Advisory',
    description: 'Facilitate expert advisory capabilities with deep industry knowledge and insight.',
  },
  {
    title: 'Market Entry',
    description: 'Strategic market entry planning backed by real-world operational experience.',
  },
  {
    title: 'Company Turnaround',
    description: 'Bring company turnaround solutions to life with proven methodologies.',
  },
  {
    title: 'Operational Deep Dive',
    description: 'Deep dive into real operational market conditions for actionable insights.',
  },
  {
    title: 'Experience & Expertise',
    description: 'Hundreds of collective years across luxury and lifestyle sectors.',
  },
  {
    title: 'Distribution & Wholesale',
    description: 'Support and manage distribution and wholesale strategies effectively.',
  },
]
