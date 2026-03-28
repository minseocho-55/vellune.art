import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { MoonDivider } from './MoonCrescent'

const pillars = [
  { title: 'Handcrafted',      body: 'Each piece finished by hand in small batches.' },
  { title: 'Globally Sourced', body: 'Single-origin cacao from five continents.' },
  { title: 'Gift-Ready',       body: 'Black velvet box and ribbon on every order.' },
]

export function GiftingSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-13%' })

  return (
    <section className="relative section-y bg-velvet overflow-hidden">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.013]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 72px, rgba(196,144,48,1) 72px, rgba(196,144,48,1) 73px),' +
            'repeating-linear-gradient(90deg, transparent, transparent 72px, rgba(196,144,48,1) 72px, rgba(196,144,48,1) 73px)',
        }}
      />

      <div ref={ref} className="relative container-maison text-center">

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="section-label mb-6"
        >
          The Art of Gifting
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.15, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant font-light text-ivory leading-tight mb-9"
          style={{ fontSize: 'clamp(38px, 5.8vw, 80px)' }}
        >
          A Gift is a Memory
          <br />
          <em style={{ color: 'rgba(196,144,48,0.68)' }}>Before It Exists.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mb-9"
        >
          <MoonDivider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.05, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="font-montserrat font-light text-[14px] leading-[1.95] max-w-[540px] mx-auto mb-12"
          style={{ color: 'rgba(200,184,152,0.5)' }}
        >
          Every Vellune box is a ceremony. Sealed in matte black with a satin ribbon in
          the collection's signature hue, it arrives as a ritual object — not merely a gift,
          but a considered statement. Complimentary gift wrapping on every order.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.95, delay: 0.46 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link to="/collections" className="btn-luxury">
            Shop All Collections
          </Link>
          <Link
            to="/collections"
            className="font-cormorant-sc text-[12px] tracking-[0.24em] uppercase link-line pb-0.5"
            style={{ color: 'rgba(196,144,48,0.52)' }}
          >
            Corporate Gifting
          </Link>
        </motion.div>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.05, delay: 0.58 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10"
        >
          {pillars.map(p => (
            <div key={p.title} className="flex flex-col items-center gap-3.5">
              <div className="gold-rule-short" />
              <h4 className="font-cormorant-sc text-[13px] tracking-[0.26em] text-gold">{p.title}</h4>
              <p className="font-montserrat font-light text-[12px] leading-relaxed" style={{ color: 'rgba(200,184,152,0.38)' }}>
                {p.body}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
