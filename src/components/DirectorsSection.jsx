import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { DIRECTOR_PROFILES } from '../data/directors'
import './DirectorsSection.css'

const sectionReveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
}

const cardReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] },
}

const AVIRAJ = DIRECTOR_PROFILES['aviraj-sharma']
const SHAKEEL = DIRECTOR_PROFILES['shakeel-jamadar']

export default function DirectorsSection() {
  return (
    <section className="directors-section">
      <div className="directors-section__inner">
        <motion.div
          className="directors-section__hero"
          {...sectionReveal}
        >
          <div
            className="directors-section__hero-bg"
            aria-hidden="true"
          >
            OUR
            <br />
            DIRECTOR'S
          </div>

          <div className="directors-section__hero-content">
            <div className="directors-section__hero-line hero-line-1">
              Our
            </div>

            <div className="directors-section__hero-line hero-line-2">
              Visionary
            </div>

            <div className="directors-section__hero-line hero-line-3">
              Directors
            </div>
          </div>
        </motion.div>

        <div className="directors-section__grid">
          {/* Aviraj Sharma — the image is already a complete card design */}
          <motion.div className="directors-card-image" {...cardReveal}>
            <Link to={`/director/${AVIRAJ.slug}`} className="directors-card-image__link">
              <img
                src="/directors/Aviraj director card mw futuretech.png"
                alt="Aviraj Sharma"
                className="directors-card-image__img"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </motion.div>

          {/* Shakeel Jamadar — placeholder until card image is ready */}
          <motion.div className="directors-card" {...cardReveal}>
            <div className="directors-card__image-wrap directors-card__image-wrap--empty">
              <div className="directors-card__placeholder-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p className="directors-card__placeholder-text">Photo coming soon</p>
            </div>
            <div className="directors-card__body">
              <h3 className="directors-card__name">{SHAKEEL.name}</h3>
              <p className="directors-card__role">{SHAKEEL.role}</p>
              <Link
                to={`/director/${SHAKEEL.slug}`}
                className="directors-card__btn liquid-glass liquid-glass--card liquid-glass-button"
              >
                Visit Pages
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
