import ExpertiseSection from '../components/ExpertiseSection'

export default function ServicesPage() {
  return (
    <>
      <section className="hero-section services-hero">
        <div className="services-hero-image-wrap">
          <img
            src="/images/futuretech news and events page image.png"
            alt="News and Events"
            className="services-hero-image"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="hero-overlay">
          <h1>News &amp; Events</h1>
          <p className="tagline">
            Stay informed with the latest from MW Futuretech — insights, announcements, and industry events.
          </p>
        </div>
      </section>
      <ExpertiseSection />
    </>
  )
}
