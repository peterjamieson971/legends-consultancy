import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-navy text-white py-20">
        <div className="section-container text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-6 text-white">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive consulting solutions for luxury and lifestyle brands
          </p>
        </div>
      </header>

      {/* Services Detail */}
      <section className="section-container">
        <div className="space-y-20">
          {servicesDetail.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-heading mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-sophisticated-grey mb-6">
                  {service.description}
                </p>
                <h3 className="text-xl font-accent mb-3">What We Deliver:</h3>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span className="text-sophisticated-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-sophisticated-grey">Image Placeholder</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-navy text-white text-center">
        <h2 className="text-4xl font-heading mb-6 text-white">
          Let's Discuss Your Needs
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Every brand has a unique story. Let's craft yours together.
        </p>
        <Link href="/contact" className="btn-primary inline-block">
          Contact Us
        </Link>
      </section>
    </main>
  )
}

const servicesDetail = [
  {
    title: 'Brand Development',
    description: 'Help brands develop their own legend, marque, signature and lore. We work with you to create a brand identity that resonates deeply with your target audience and stands the test of time.',
    deliverables: [
      'Brand strategy and positioning',
      'Brand identity development',
      'Storytelling and narrative creation',
      'Brand guidelines and standards',
    ],
  },
  {
    title: 'Expert Advisory',
    description: 'Access to seasoned professionals with decades of combined experience in luxury and lifestyle sectors. Our advisory services provide strategic guidance when you need it most.',
    deliverables: [
      'Strategic business advisory',
      'Board advisory services',
      'Executive coaching and mentoring',
      'Industry insights and trends',
    ],
  },
  {
    title: 'Market Entry',
    description: 'Successfully enter new markets with confidence. Our market entry strategies are built on real operational experience and deep understanding of local market dynamics.',
    deliverables: [
      'Market research and analysis',
      'Entry strategy development',
      'Partnership identification',
      'Launch planning and execution',
    ],
  },
  {
    title: 'Company Turnaround',
    description: 'Bring company turnaround solutions to life with proven methodologies. We help struggling businesses find new direction and sustainable growth paths.',
    deliverables: [
      'Business diagnostics and analysis',
      'Restructuring strategy',
      'Operational improvement plans',
      'Change management support',
    ],
  },
  {
    title: 'Operational Deep Dive',
    description: 'Deep dive into real operational market conditions to uncover opportunities and challenges. Our operational expertise ensures practical, implementable solutions.',
    deliverables: [
      'Operational assessment',
      'Process optimization',
      'Performance improvement',
      'Best practice implementation',
    ],
  },
  {
    title: 'Experience & Expertise',
    description: 'Tap into hundreds of collective years of experience across luxury and lifestyle sectors. Our team has worked with leading brands worldwide.',
    deliverables: [
      'Industry expertise access',
      'Best practice sharing',
      'Network introductions',
      'Thought leadership',
    ],
  },
  {
    title: 'Distribution & Wholesale',
    description: 'Support and manage distribution and wholesale strategies to maximize market reach and profitability. We understand the complexities of luxury distribution.',
    deliverables: [
      'Distribution strategy development',
      'Partner identification and vetting',
      'Channel optimization',
      'Wholesale management',
    ],
  },
]
