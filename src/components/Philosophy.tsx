import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MoonDivider } from './MoonCrescent'
import { fadeUp } from '../lib/motion'

export function Philosophy() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-12%' })

  return (
    <section id="about" className="relative section-y bg-noir overflow-hidden">

      {/* Atmospheric background radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(100,55,12,0.07) 0%, transparent 70%)',
        }} />
        {/* Large watermark "V" */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <span
            className="font-cormorant font-light text-gold select-none"
            style={{ fontSize: 'clamp(280px, 36vw, 520px)', opacity: 0.022, letterSpacing: '-0.04em', lineHeight: 1 }}
          >
            V
          </span>
        </div>
      </div>

      <div ref={ref} className="relative container-maison text-center">

        <motion.p
          variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="section-label mb-14"
        >
          The Philosophy
        </motion.p>

        <motion.blockquote
          variants={fadeUp} custom={0.1} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-cormorant font-light italic text-ivory leading-[1.22] mb-12"
          style={{ fontSize: 'clamp(34px, 5.5vw, 68px)' }}
        >
          "Chocolate is not made.
          <br />
          <span className="text-gold/70">It is revealed."</span>
        </motion.blockquote>

        <motion.div
          variants={fadeUp} custom={0.2} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="mb-12"
        >
          <MoonDivider className="max-w-[320px]" />
        </motion.div>

        <motion.p
          variants={fadeUp} custom={0.3} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-montserrat font-light text-[14px] leading-[1.95] max-w-[580px] mx-auto"
          style={{ color: 'rgba(200,184,152,0.55)' }}
        >
          Vellune was born at the hour when darkness meets its own reflection.
          Each collection is a dialogue between rare cacao and the forces that shaped it —
          the soil, the altitude, the patient hands that harvested it.
          We do not decorate chocolate. We architect it.
        </motion.p>

        <motion.p
          variants={fadeUp} custom={0.4} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-montserrat font-light text-[13px] mt-6 max-w-[420px] mx-auto"
          style={{ color: 'rgba(200,184,152,0.28)' }}
        >
          Six expressions. Six moods. One maison.
        </motion.p>

        <motion.p
          variants={fadeUp} custom={0.5} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-cormorant-sc text-[11.5px] tracking-[0.28em] mt-14"
          style={{ color: 'rgba(196,144,48,0.45)' }}
        >
          Founded by Mohan &nbsp;·&nbsp; Est. MMXXIV
        </motion.p>

      </div>
    </section>
  )
}
