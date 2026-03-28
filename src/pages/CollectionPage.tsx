import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { collections } from '../data/products'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'
import { MoonDivider } from '../components/MoonCrescent'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
}

export function CollectionPage() {
  const gridRef    = useRef<HTMLDivElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const gridInView = useInView(gridRef,   { once: true, margin: '-80px' })
  const hdrInView  = useInView(headerRef, { once: true })

  return (
    <main className="page-enter pt-[72px]">

      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <div
        ref={headerRef}
        className="relative overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(120,65,15,0.13) 0%, transparent 65%), var(--c-void)',
          paddingTop: 'clamp(80px, 14vw, 160px)',
          paddingBottom: 'clamp(64px, 10vw, 120px)',
        }}
      >
        {/* Ghost watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="font-cormorant font-light"
            style={{
              fontSize: 'clamp(200px, 30vw, 420px)',
              color: 'var(--c-gold)',
              opacity: 0.022,
              letterSpacing: '0.08em',
              lineHeight: 1,
            }}
          >
            C
          </span>
        </div>

        <div className="container-maison relative">
          {/* Label */}
          <motion.p
            className="section-label mb-5"
            initial={{ opacity: 0, y: 14 }}
            animate={hdrInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            Vellune Maison
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-cormorant font-light text-glow-gold"
            style={{
              fontSize: 'clamp(52px, 8.5vw, 116px)',
              letterSpacing: '0.04em',
              color: 'var(--c-ivory)',
              lineHeight: 1.02,
            }}
            initial={{ opacity: 0, y: 28 }}
            animate={hdrInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            The Collections
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="font-montserrat mt-6 max-w-[480px] leading-relaxed"
            style={{ fontSize: '13px', color: 'rgba(240,232,216,0.38)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 16 }}
            animate={hdrInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.18 }}
          >
            Six expressions of rare cacao. Each collection a distinct mood,
            a distinct ritual, a distinct universe.
          </motion.p>

          {/* Gold rule */}
          <motion.div
            className="gold-rule mt-12 origin-left"
            initial={{ scaleX: 0 }}
            animate={hdrInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* ── Collection Grid ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--c-espresso)' }} className="section-y">
        <motion.div
          ref={gridRef}
          variants={container}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="container-maison grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-gold-gap"
        >
          {collections.map((col, i) => (
            <motion.div key={col.id} variants={item} className="bg-noir">
              <Link
                to={`/collections/${col.slug}`}
                className="group relative block h-full overflow-hidden surface-card"
                style={{ padding: 'clamp(28px, 4vw, 48px)' }}
              >
                {/* Left ribbon accent */}
                <div
                  className="ribbon-left"
                  style={{ background: col.ribbon }}
                />

                {/* Index counter */}
                <p
                  className="font-cormorant font-light mb-8"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.32em',
                    color: 'var(--c-gold)',
                    opacity: 0.38,
                  }}
                >
                  0{i + 1}&nbsp;/&nbsp;06
                </p>

                {/* Collection name */}
                <h2
                  className="font-cormorant font-light leading-tight mb-2 transition-colors duration-500 group-hover:text-gold-pale"
                  style={{
                    fontSize: 'clamp(22px, 2.6vw, 34px)',
                    color: 'var(--c-ivory)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {col.name}
                </h2>

                {/* Tagline */}
                <p
                  className="font-cormorant italic mb-6 transition-colors duration-400"
                  style={{
                    fontSize: '15px',
                    color: 'var(--c-gold-muted)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--c-gold)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--c-gold-muted)'
                  }}
                >
                  {col.tagline}
                </p>

                {/* Description */}
                <p
                  className="font-montserrat leading-relaxed mb-8"
                  style={{
                    fontSize: '12px',
                    color: 'rgba(240,232,216,0.32)',
                    fontWeight: 300,
                  }}
                >
                  {col.description}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span
                      className="font-cormorant"
                      style={{ fontSize: '26px', color: 'var(--c-gold)' }}
                    >
                      ${col.price}
                    </span>
                    <span
                      className="font-montserrat ml-2"
                      style={{ fontSize: '11px', color: 'rgba(240,232,216,0.28)' }}
                    >
                      {col.pieces}&nbsp;pcs
                    </span>
                  </div>

                  <span
                    className="font-label text-[11px] tracking-[0.22em] uppercase flex items-center gap-2 transition-colors duration-300"
                    style={{ color: 'var(--c-gold-muted)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--c-gold)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--c-gold-muted)'
                    }}
                  >
                    Explore
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

                {/* Hover border glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${col.ribbon}28` }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <MoonDivider />
      <Newsletter />
      <Footer />
    </main>
  )
}
