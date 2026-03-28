/**
 * Collections — Homepage editorial showcase
 *
 * Layout: 2-column editorial grid (vs. the 3-column catalog on CollectionPage).
 * Each card has:
 *   – Ambient radial glow from its ribbon colour (subtle, only on hover)
 *   – Ghost watermark index number behind the content
 *   – left ribbon accent (ribbon-left)
 *   – Rich display typography with generous vertical breathing room
 *   – Price + Discover CTA on the bottom edge
 *
 * Deliberately uses 2 columns on desktop so each collection feels spacious
 * and editorial, not like a grid of product thumbnails.
 */

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { collections } from '../data/products'
import { staggerContainer, cardReveal } from '../lib/motion'

export function Collections() {
  const headerRef  = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)
  const headerView = useInView(headerRef, { once: true, margin: '-10%' })
  const gridView   = useInView(gridRef,   { once: true, margin: '-6%'  })

  return (
    <section className="section-y bg-espresso">

      {/* ── Section header ─────────────────────────────────────────────── */}
      <div ref={headerRef} className="container-maison mb-16">
        <div className="flex items-end justify-between gap-8">

          <div>
            <motion.p
              className="section-label mb-4"
              initial={{ opacity: 0, y: 14 }}
              animate={headerView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85 }}
            >
              Vellune Maison
            </motion.p>

            <motion.h2
              className="font-cormorant font-light text-ivory"
              style={{ fontSize: 'clamp(40px, 6.5vw, 88px)', letterSpacing: '0.02em' }}
              initial={{ opacity: 0, y: 24 }}
              animate={headerView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              The Collections
            </motion.h2>
          </div>

          {/* Desktop "View All" link */}
          <motion.div
            className="hidden lg:block pb-2 flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={headerView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              to="/collections"
              className="font-cormorant-sc text-[12px] tracking-[0.22em] uppercase link-line"
              style={{ color: 'rgba(196,144,48,0.52)' }}
            >
              View All Six
            </Link>
          </motion.div>
        </div>

        {/* Gold rule */}
        <motion.div
          className="mt-9 gold-rule origin-left"
          initial={{ scaleX: 0 }}
          animate={headerView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* ── 2-column editorial grid ─────────────────────────────────────── */}
      <motion.div
        ref={gridRef}
        variants={staggerContainer}
        initial="hidden"
        animate={gridView ? 'visible' : 'hidden'}
        className="container-maison grid grid-cols-1 md:grid-cols-2"
        style={{ gap: '1px', background: 'rgba(196,144,48,0.045)' }}
      >
        {collections.map((col, i) => (
          <motion.div key={col.id} variants={cardReveal}>
            <Link
              to={`/collections/${col.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden"
              style={{
                background: 'var(--c-velvet)',
                padding: 'clamp(36px, 4.5vw, 56px)',
                minHeight: 'clamp(300px, 36vw, 420px)',
                transition: 'background-color 0.55s cubic-bezier(0.22,1,0.36,1)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--c-mocha)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--c-velvet)'
              }}
            >
              {/* Ambient ribbon-colour glow — appears on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 70% 65% at 88% 8%, ${col.ribbon}1C 0%, transparent 60%)`,
                }}
              />

              {/* Ghost watermark — large index number */}
              <span
                className="absolute font-cormorant font-light select-none pointer-events-none"
                style={{
                  fontSize: 'clamp(88px, 13vw, 160px)',
                  color: col.ribbon,
                  opacity: 0.045,
                  lineHeight: 1,
                  right: 'clamp(20px, 3vw, 40px)',
                  top:   'clamp(12px, 2vw, 24px)',
                  letterSpacing: '-0.02em',
                }}
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Left ribbon accent */}
              <div
                className="ribbon-left"
                style={{ background: col.ribbon }}
              />

              {/* ── Card body ─────────────────────────────────────────── */}
              <div className="relative pl-5">

                {/* Index + origin row */}
                <div className="flex items-center gap-5 mb-7">
                  <span
                    className="font-montserrat"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.36em',
                      color: 'rgba(196,144,48,0.3)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}&nbsp;/&nbsp;06
                  </span>
                  <span
                    className="font-montserrat uppercase"
                    style={{
                      fontSize: '9.5px',
                      letterSpacing: '0.28em',
                      color: col.ribbon,
                      opacity: 0.75,
                    }}
                  >
                    {col.origin}
                  </span>
                </div>

                {/* Collection name */}
                <h3
                  className="font-cormorant font-light text-ivory leading-tight mb-2 transition-colors duration-400 group-hover:text-gold-pale"
                  style={{ fontSize: 'clamp(26px, 3.6vw, 48px)' }}
                >
                  {col.name}
                </h3>

                {/* Tagline */}
                <p
                  className="font-cormorant italic mb-6 transition-colors duration-400 group-hover:text-gold-warm"
                  style={{ fontSize: '15.5px', color: 'rgba(196,144,48,0.52)' }}
                >
                  {col.tagline}
                </p>

                {/* Short description */}
                <p
                  className="font-montserrat font-light leading-relaxed"
                  style={{
                    fontSize: '12px',
                    color: 'rgba(200,184,152,0.38)',
                    maxWidth: '380px',
                  }}
                >
                  {col.description}
                </p>
              </div>

              {/* ── Card footer row ────────────────────────────────────── */}
              <div className="relative pl-5 flex items-center justify-between mt-9">
                <span
                  className="font-cormorant font-light"
                  style={{ fontSize: '34px', color: 'var(--c-gold)' }}
                >
                  ${col.price}
                </span>

                <span
                  className="font-cormorant-sc uppercase flex items-center gap-2.5 transition-colors duration-350 group-hover:text-gold"
                  style={{ fontSize: '11.5px', letterSpacing: '0.22em', color: 'rgba(196,144,48,0.45)' }}
                >
                  Discover
                  <svg
                    className="transition-transform duration-400 group-hover:translate-x-1"
                    width="14" height="6" viewBox="0 0 14 6" fill="none"
                  >
                    <path
                      d="M0 3h12M10 1l2 2-2 2"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              {/* Inset border glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${col.ribbon}24` }}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* ── View-all CTA bar ────────────────────────────────────────────── */}
      <motion.div
        className="container-maison mt-12 flex flex-col sm:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 18 }}
        animate={gridView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.95, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Left: count note */}
        <p
          className="font-montserrat"
          style={{ fontSize: '11px', letterSpacing: '0.22em', color: 'rgba(200,184,152,0.25)' }}
        >
          Six collections &nbsp;·&nbsp; Twelve pieces each &nbsp;·&nbsp; Gift-ready
        </p>

        {/* Right: CTA */}
        <Link to="/collections" className="btn-ghost flex-shrink-0">
          Explore All Collections
        </Link>
      </motion.div>

    </section>
  )
}
