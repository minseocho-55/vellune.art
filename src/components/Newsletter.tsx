import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MoonDivider } from './MoonCrescent'
import { fadeUp } from '../lib/motion'

export function Newsletter() {
  const ref       = useRef<HTMLDivElement>(null)
  const inView    = useInView(ref, { once: true, margin: '-10%' })
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) { setSubmitted(true); setEmail('') }
  }

  return (
    <section className="section-y bg-noir border-t" style={{ borderColor: 'rgba(196,144,48,0.07)' }}>
      <div ref={ref} className="container-maison max-w-[680px] text-center">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="section-label mb-5"
        >
          The Inner Circle
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant font-light text-ivory leading-tight mb-6"
          style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
        >
          First to Know.
          <br />
          <em style={{ color: 'rgba(196,144,48,0.62)' }}>First to Taste.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.24 }}
          className="mb-9"
        >
          <MoonDivider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-montserrat font-light text-[13px] leading-[1.9] max-w-[440px] mx-auto mb-12"
          style={{ color: 'rgba(200,184,152,0.42)' }}
        >
          Seasonal releases, private previews, and curated editorial from the Vellune atelier —
          delivered only to those who appreciate the difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.38 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-4">
              <MoonDivider className="max-w-[280px]" />
              <p className="font-cormorant italic text-[24px]" style={{ color: 'rgba(196,144,48,0.8)' }}>
                Welcome to the circle.
              </p>
              <p className="font-montserrat text-[12px]" style={{ color: 'rgba(200,184,152,0.3)' }}>
                You will hear from us soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch max-w-[460px] mx-auto"
              style={{ border: '1px solid rgba(196,144,48,0.18)' }}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent px-6 py-[15px] font-montserrat text-[13px] text-ivory placeholder:text-ivory/20 outline-none transition-colors duration-300"
                style={{ borderRight: '1px solid rgba(196,144,48,0.18)', fontSize: '13px' }}
              />
              <button
                type="submit"
                className="font-cormorant-sc text-[12px] tracking-[0.22em] uppercase px-8 py-[15px] transition-all duration-350 whitespace-nowrap"
                style={{
                  color: 'rgba(196,144,48,0.65)',
                  background: 'transparent',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(196,144,48,0.07)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(196,144,48,0.95)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(196,144,48,0.65)' }}
              >
                Enter
              </button>
            </form>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-montserrat text-[10px] mt-6"
          style={{ color: 'rgba(200,184,152,0.2)' }}
        >
          No frequency pressure. Unsubscribe at any time.
        </motion.p>

      </div>
    </section>
  )
}
