import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-navy text-white py-20">
        <div className="section-container text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-6 text-white">
            About Legends
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collective of luxury and lifestyle industry veterans
          </p>
        </div>
      </header>

      {/* Story Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading mb-6 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-sophisticated-grey">
            <p>
              <strong className="text-navy">Legend</strong> - a known story, to be known.
              This simple yet profound definition captures the essence of what we do at Legends.
            </p>
            <p>
              We are a collective of luxury and lifestyle industry veterans who have come together
              with a shared vision: to help brands create their own enduring legends. Our team brings
              together hundreds of collective years of experience across diverse specialties within
              the luxury and lifestyle sectors.
            </p>
            <p>
              What sets us apart is not just our deep market insight and commercial acumen, but our
              high emotional intelligence. We understand that creating a legendary brand is not just
              about strategy and execution - it's about connecting with people, understanding culture,
              and building something that resonates across generations.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-container bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading mb-12 text-center">Our Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-heading mb-4">Legendary Thinking</h3>
              <p className="text-sophisticated-grey">
                To be legendary is to be very well known, to be a point of reference, to create
                an enduring legacy. We help brands achieve this through strategic insight and
                authentic storytelling.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-heading mb-4">Collective Wisdom</h3>
              <p className="text-sophisticated-grey">
                Our strength lies in our diversity. Each member brings unique expertise,
                creating a powerful collective that can address any challenge in the luxury
                and lifestyle space.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-heading mb-4">Real Experience</h3>
              <p className="text-sophisticated-grey">
                We don't just theorize - we've been in the trenches. Our insights come from
                real operational experience in the luxury and lifestyle markets worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-heading mb-4">Emotional Intelligence</h3>
              <p className="text-sophisticated-grey">
                Understanding brands, people, and culture requires more than data. Our high
                emotional intelligence enables us to create solutions that truly resonate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading mb-12 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry} className="text-center p-6 border border-gray-200 rounded-lg">
                <p className="text-lg font-accent text-navy">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Placeholder */}
      <section className="section-container bg-navy text-white">
        <h2 className="text-4xl font-heading mb-12 text-center text-white">Our Team</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8">
            Our collective brings together seasoned professionals from across the luxury and
            lifestyle sectors. Each member is a recognized expert in their field, contributing
            unique insights and decades of experience.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-charcoal p-6 rounded-lg">
                <div className="bg-gray-600 h-48 mb-4 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Team Member Photo</span>
                </div>
                <h3 className="text-xl font-heading mb-2 text-white">Team Member {i}</h3>
                <p className="text-luxury-gold mb-2">Position / Specialty</p>
                <p className="text-gray-300 text-sm">Brief bio and expertise placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container text-center">
        <h2 className="text-4xl font-heading mb-6">
          Partner With Us
        </h2>
        <p className="text-xl text-sophisticated-grey mb-8 max-w-2xl mx-auto">
          Let's work together to create your brand's legend
        </p>
        <Link href="/contact" className="btn-primary inline-block">
          Get in Touch
        </Link>
      </section>
    </main>
  )
}

const industries = [
  'Luxury Fashion',
  'Fine Jewelry',
  'Premium Beauty',
  'Luxury Hospitality',
  'High-End Retail',
  'Lifestyle Brands',
  'Premium Spirits',
  'Luxury Automotive',
  'Exclusive Travel',
]
