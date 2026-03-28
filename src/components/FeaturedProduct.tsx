import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { collections } from '../data/products'
import { useCart } from '../context/CartContext'
import velluneBox from '../assets/vellune-box.png'
import { fadeUp } from '../lib/motion'

export function FeaturedProduct() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-12%' })
  const { addItem } = useCart()
  const featured = collections[0]

  return (
    <section id="ritual" className="section-y bg-noir overflow-hidden">
      <div ref={ref} className="container-maison">

        {/* Section label */}
        <motion.p
          custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="section-label text-center mb-20"
        >
          Featured Collection
        </motion.p>

        {/* Two-column: image left, editorial content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ?? Left: brand photography ???????????????????????????????????? */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
              <img
                src={velluneBox}
                alt="Vellune collection overview"
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                style={{ objectPosition: '50% 15%' }}
              />
              {/* Cinematic overlay ??darker edges */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, rgba(15,10,9,0.4) 0%, transparent 30%, transparent 65%, rgba(15,10,9,0.7) 100%)',
              }} />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(90deg, rgba(15,10,9,0.3) 0%, transparent 30%, transparent 70%, rgba(15,10,9,0.3) 100%)',
              }} />
            </div>

            {/* Floating collection badge */}
            <div
              className="surface-glass absolute bottom-8 left-8 px-5 py-3 flex items-center gap-3"
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: featured.ribbon }}
              />
              <p className="font-montserrat text-[10px] tracking-[0.28em] uppercase" style={{ color: 'rgba(240,232,216,0.6)' }}>
                {featured.pieces} pcs Â· {featured.weight} Â· {featured.origin}
              </p>
            </div>
          </motion.div>

          {/* ?? Right: editorial content ???????????????????????????????????? */}
          <div className="lg:pl-8 xl:pl-14 relative">
            {/* Ghost index number */}
            <span
              className="absolute -top-8 -left-2 font-cormorant font-light text-gold select-none pointer-events-none"
              style={{ fontSize: 'clamp(90px, 14vw, 180px)', opacity: 0.04, lineHeight: 1 }}
              aria-hidden
            >
              01
            </span>

            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="relative"
            >
              {/* Origin */}
              <motion.p
                custom={0} variants={fadeUp}
                className="font-montserrat text-[10px] tracking-[0.38em] uppercase mb-2"
                style={{ color: featured.ribbon }}
              >
                {featured.origin}
              </motion.p>

              {/* Collection name */}
              <motion.h2
                custom={0.1} variants={fadeUp}
                className="font-cormorant font-light text-ivory leading-tight mb-3"
                style={{ fontSize: 'clamp(36px, 5.2vw, 64px)' }}
              >
                {featured.name}
              </motion.h2>

              {/* Tagline */}
              <motion.p
                custom={0.2} variants={fadeUp}
                className="font-cormorant italic mb-8"
                style={{ fontSize: '18px', color: 'rgba(196,144,48,0.6)' }}
              >
                {featured.tagline}
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="w-14 h-px mb-8 origin-left"
                style={{ background: 'linear-gradient(90deg, rgba(196,144,48,0.55), transparent)' }}
              />

              {/* Description */}
              <motion.p
                custom={0.3} variants={fadeUp}
                className="font-montserrat font-light text-[13px] leading-[1.95] mb-9 max-w-[440px]"
                style={{ color: 'rgba(200,184,152,0.52)' }}
              >
                {featured.longDescription}
              </motion.p>

              {/* Tasting notes */}
              <motion.div custom={0.4} variants={fadeUp} className="mb-10">
                <p className="text-micro mb-3" style={{ color: 'rgba(196,144,48,0.5)' }}>
                  Tasting Notes
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tastingNotes.map(note => (
                    <span key={note} className="note-pill">{note}</span>
                  ))}
                </div>
              </motion.div>

              {/* Price + CTA */}
              <motion.div custom={0.5} variants={fadeUp} className="flex items-center gap-8 flex-wrap">
                <span className="font-cormorant font-light text-gold" style={{ fontSize: '40px' }}>
                  ${featured.price}
                </span>
                <div className="flex items-center gap-5">
                  <button onClick={() => addItem(featured)} className="btn-luxury">
                    Add to Selection
                  </button>
                  <Link
                    to={`/collections/${featured.slug}`}
                    className="font-cormorant-sc text-[12px] tracking-[0.2em] uppercase link-line pb-0.5"
                    style={{ color: 'rgba(196,144,48,0.55)' }}
                  >
                    Discover
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
