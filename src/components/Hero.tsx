import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MoonCrescent } from './MoonCrescent'
import velluneBox from '../assets/vellune-box.png'

/* ── Animation variants ──────────────────────────────────────────────────── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0,  transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] } },
}

const growX = {
  hidden:  { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.9,  ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  /* Subtle parallax on background + foreground text */
  const bgY   = useTransform(scrollYProgress, [0, 1], ['0%',  '14%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%',  '28%'])
  const fade  = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-void">

      {/* ── Background: brand photography with parallax ──────────────────── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <img
          src={velluneBox}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '50% 22%' }}
        />

        {/* Cinematic overlays — build up opacity in layers for depth */}
        {/* Primary: top-heavy vignette (makes navbar area read on image) */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(8,5,7,0.78) 0%, rgba(8,5,7,0.25) 35%, rgba(8,5,7,0.18) 55%, rgba(8,5,7,0.72) 100%)',
        }} />
        {/* Sides vignette — creates focus on center */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 75% 85% at 50% 40%, transparent 50%, rgba(8,5,7,0.6) 100%)',
        }} />
        {/* Warm ambient centre glow — matches the brand photography mood */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 50% 45% at 50% 28%, rgba(100,55,12,0.1) 0%, transparent 65%)',
        }} />
      </motion.div>

      {/* ── Hero content: moon + wordmark + tagline + CTA ────────────────── */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Moon crescent — brand soul mark */}
          <motion.div
            variants={{
              hidden:  { opacity: 0, y: -16, scale: 0.85 },
              visible: { opacity: 1, y: 0,   scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="mb-5"
          >
            <MoonCrescent size={80} glow animate className="moon-breathe" />
          </motion.div>

          {/* Pre-label */}
          <motion.p
            variants={fadeUp}
            className="section-label text-dusk mb-6"
          >
            Luxury Chocolate Maison
          </motion.p>

          {/* Wordmark */}
          <motion.h1
            variants={fadeUp}
            className="font-cormorant leading-none text-gold-shimmer-animated"
            style={{
              fontSize:    'clamp(72px, 11vw, 148px)',
              fontStyle:   'italic',
              fontWeight:  300,
              letterSpacing: '0.08em',
            }}
          >
            Vellune
          </motion.h1>

          {/* Expanding divider */}
          <motion.div
            variants={growX}
            className="mt-7 mb-5 w-20 origin-center"
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(196,144,48,0.7), transparent)',
            }}
          />

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="font-montserrat tracking-ultra text-[10.5px] uppercase"
            style={{ color: 'rgba(196,144,48,0.52)', letterSpacing: '0.44em' }}
          >
            Elastic &nbsp;·&nbsp; Luminous &nbsp;·&nbsp; Eternal
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-14">
            <Link
              to="/collections"
              className="inline-flex items-center gap-4 group"
            >
              <span
                className="font-cormorant-sc uppercase text-ivory/80 transition-colors duration-400 group-hover:text-gold-cream border-b pb-1 transition-all duration-400 group-hover:border-gold"
                style={{ fontSize: '13px', letterSpacing: '0.22em', borderColor: 'rgba(196,144,48,0.28)' }}
              >
                Explore the Collection
              </span>
              <svg
                className="text-gold/35 transition-all duration-400 group-hover:text-gold group-hover:translate-x-1.5"
                width="18" height="8" viewBox="0 0 18 8" fill="none"
              >
                <path d="M0 4h16M13 1.5l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.4 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-10"
      >
        <span className="font-montserrat text-[8.5px] tracking-[0.52em] uppercase" style={{ color: 'rgba(196,144,48,0.3)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-7 origin-top"
          style={{ background: 'linear-gradient(180deg, rgba(196,144,48,0.5), transparent)' }}
        />
      </motion.div>

      {/* ── Edition tag ── bottom right ───────────────────────────────────── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-9 right-6 lg:right-10 z-10 font-montserrat text-[9px] tracking-[0.38em] uppercase"
        style={{ color: 'rgba(240,232,216,0.18)' }}
      >
        Collection 2025
      </motion.p>
    </section>
  )
}
