import { useRef, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { collections } from '../data/products'
import { useCart } from '../context/CartContext'
import { Footer } from '../components/Footer'
import { fadeUp, EASE_LUXURY } from '../lib/motion'
import velluneBox from '../assets/vellune-box.png'
import chocolates from '../assets/chocolates.png'

const ACCORDION_PANELS = [
  'The Composition',
  'The Ritual',
  'Packaging & Details',
  'Gifting',
] as const

type PanelName = typeof ACCORDION_PANELS[number]

export function ProductPage() {
  const { slug }    = useParams<{ slug: string }>()
  const collection  = collections.find(c => c.slug === slug)
  const { addItem } = useCart()
  const relatedRef  = useRef<HTMLDivElement>(null)
  const relatedInView = useInView(relatedRef, { once: true, margin: '-10%' })

  const [qty, setQty]       = useState(1)
  const [open, setOpen]     = useState<PanelName | null>(null)

  if (!collection) return <Navigate to="/collections" replace />

  const others = collections.filter(c => c.slug !== slug).slice(0, 3)
  const isFirst = collection.slug === collections[0].slug

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addItem(collection)
  }

  const toggle = (panel: PanelName) =>
    setOpen(prev => (prev === panel ? null : panel))

  return (
    <main className="page-enter" style={{ paddingTop: '76px' }}>

      {/* ── Hero: sticky image left + scrollable details right ──────────── */}
      <div className="lg:grid lg:grid-cols-2" style={{ minHeight: 'calc(100vh - 76px)' }}>

        {/* Left: sticky image panel */}
        <div className="product-image-panel overflow-hidden" style={{ background: '#080507' }}>
          <div className="relative w-full h-full" style={{ minHeight: '55vh' }}>
            <img
              src={isFirst ? velluneBox : chocolates}
              alt={`Vellune ${collection.name}`}
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
              style={{
                minHeight: '55vh',
                objectPosition: isFirst ? '50% 18%' : 'center',
              }}
            />

            {/* Cinematic overlays */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(180deg, rgba(8,5,7,0.4) 0%, transparent 25%, transparent 70%, rgba(8,5,7,0.65) 100%)',
            }} />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(90deg, transparent 70%, rgba(8,5,7,0.25) 100%)',
            }} />

            {/* Collection ribbon — vertical left edge */}
            <div
              className="absolute top-0 left-0 bottom-0 w-[4px]"
              style={{ background: `linear-gradient(180deg, ${collection.ribbon}70, ${collection.ribbon})` }}
            />

            {/* Origin badge */}
            <div className="absolute bottom-8 left-8">
              <div className="surface-glass inline-flex items-center gap-3 px-5 py-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: collection.ribbon }} />
                <p className="font-montserrat text-[10px] tracking-[0.28em] uppercase" style={{ color: 'rgba(240,232,216,0.6)' }}>
                  Origin: {collection.origin}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: product details */}
        <div
          className="flex flex-col justify-start px-10 lg:px-16 xl:px-20 py-16 overflow-y-auto"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 100% 0%, rgba(${collection.glowRgb}, 0.06) 0%, transparent 60%), #0F0A09`,
          }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2.5 mb-10">
            <Link
              to="/collections"
              className="font-montserrat text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: 'rgba(196,144,48,0.52)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(196,144,48,0.9)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(196,144,48,0.52)')}
            >
              Collections
            </Link>
            <span className="font-montserrat text-[11px]" style={{ color: 'rgba(196,144,48,0.2)' }}>/</span>
            <span className="font-montserrat text-[11px]" style={{ color: 'rgba(200,184,152,0.28)' }}>
              {collection.name}
            </span>
          </div>

          {/* Origin label */}
          <motion.p
            variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="font-montserrat text-[10px] tracking-[0.38em] uppercase mb-2"
            style={{ color: collection.ribbon }}
          >
            {collection.origin} · {collection.weight} · {collection.pieces} pieces
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp} custom={0.08} initial="hidden" animate="visible"
            className="font-cormorant font-light text-ivory leading-tight mb-3"
            style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
          >
            {collection.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp} custom={0.16} initial="hidden" animate="visible"
            className="font-cormorant italic mb-6"
            style={{ fontSize: '17px', color: 'rgba(196,144,48,0.58)' }}
          >
            {collection.tagline}
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.22, ease: EASE_LUXURY }}
            className="w-14 h-px mb-7 origin-left"
            style={{ background: 'linear-gradient(90deg, rgba(196,144,48,0.5), transparent)' }}
          />

          {/* Description */}
          <motion.p
            variants={fadeUp} custom={0.28} initial="hidden" animate="visible"
            className="font-montserrat font-light text-[13px] leading-[1.95] mb-8 max-w-[480px]"
            style={{ color: 'rgba(200,184,152,0.52)' }}
          >
            {collection.longDescription}
          </motion.p>

          {/* Tasting notes */}
          <motion.div variants={fadeUp} custom={0.36} initial="hidden" animate="visible" className="mb-9">
            <p className="text-micro mb-3" style={{ color: 'rgba(196,144,48,0.48)' }}>
              Tasting Notes
            </p>
            <div className="flex flex-wrap gap-2">
              {collection.tastingNotes.map(note => (
                <span key={note} className="note-pill">{note}</span>
              ))}
            </div>
          </motion.div>

          {/* Price */}
          <motion.div
            variants={fadeUp} custom={0.44} initial="hidden" animate="visible"
            className="flex items-baseline gap-3 mb-6"
          >
            <span className="font-cormorant font-light text-gold" style={{ fontSize: '44px' }}>
              ${collection.price}
            </span>
            <span className="font-montserrat text-[12px]" style={{ color: 'rgba(200,184,152,0.3)' }}>
              Box of {collection.pieces}
            </span>
          </motion.div>

          {/* Quantity selector */}
          <motion.div variants={fadeUp} custom={0.5} initial="hidden" animate="visible" className="mb-7">
            <p className="text-micro mb-3" style={{ color: 'rgba(196,144,48,0.48)' }}>Quantity</p>
            <div
              className="inline-flex items-center"
              style={{ border: '1px solid rgba(196,144,48,0.18)' }}
            >
              <button
                aria-label="Decrease quantity"
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="w-11 h-11 flex items-center justify-center font-montserrat text-[18px] font-light transition-colors duration-300"
                style={{ color: 'rgba(196,144,48,0.55)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(196,144,48,0.95)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(196,144,48,0.55)')}
              >
                −
              </button>
              <span
                className="w-11 h-11 flex items-center justify-center font-cormorant font-light text-ivory"
                style={{ fontSize: '20px', borderLeft: '1px solid rgba(196,144,48,0.12)', borderRight: '1px solid rgba(196,144,48,0.12)' }}
              >
                {qty}
              </span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQty(q => Math.min(12, q + 1))}
                className="w-11 h-11 flex items-center justify-center font-montserrat text-[18px] font-light transition-colors duration-300"
                style={{ color: 'rgba(196,144,48,0.55)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(196,144,48,0.95)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(196,144,48,0.55)')}
              >
                +
              </button>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} custom={0.56} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-4 mb-5"
          >
            <button onClick={handleAddToCart} className="btn-luxury">
              Add to Selection
            </button>
            <button className="btn-ghost">
              Gift This Collection
            </button>
          </motion.div>

          <motion.p
            variants={fadeUp} custom={0.62} initial="hidden" animate="visible"
            className="font-montserrat text-[11px] mb-10"
            style={{ color: 'rgba(200,184,152,0.2)' }}
          >
            Complimentary gift wrapping · Ships within 2–3 business days
          </motion.p>

          {/* ── Accordion ─────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp} custom={0.68} initial="hidden" animate="visible"
            style={{ borderTop: '1px solid rgba(196,144,48,0.08)' }}
          >
            {ACCORDION_PANELS.map((panel) => (
              <div key={panel} style={{ borderBottom: '1px solid rgba(196,144,48,0.08)' }}>
                <button
                  onClick={() => toggle(panel)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span
                    className="font-cormorant-sc text-[12px] tracking-[0.26em] transition-colors duration-350"
                    style={{ color: open === panel ? 'rgba(196,144,48,0.9)' : 'rgba(196,144,48,0.52)' }}
                  >
                    {panel}
                  </span>
                  <svg
                    width="10" height="6" viewBox="0 0 10 6" fill="none"
                    className="flex-shrink-0 transition-transform duration-350"
                    style={{
                      transform: open === panel ? 'rotate(180deg)' : 'rotate(0deg)',
                      stroke: 'rgba(196,144,48,0.45)',
                    }}
                  >
                    <path d="M1 1l4 4 4-4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {open === panel && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pr-4">
                        {panel === 'The Composition' && (
                          <ul className="space-y-3">
                            {collection.ingredients.map(ing => (
                              <li key={ing} className="flex items-start gap-3">
                                <span className="mt-2 w-1 h-1 flex-shrink-0 rounded-full" style={{ background: 'rgba(196,144,48,0.4)' }} />
                                <span className="font-montserrat font-light text-[12.5px] leading-relaxed" style={{ color: 'rgba(200,184,152,0.55)' }}>
                                  {ing}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {panel === 'The Ritual' && (
                          <div>
                            <p className="font-cormorant italic leading-relaxed mb-4" style={{ fontSize: '19px', color: 'rgba(240,232,216,0.65)' }}>
                              "Begin at the surface. Let the chocolate speak."
                            </p>
                            <p className="font-montserrat font-light text-[12px] leading-relaxed" style={{ color: 'rgba(200,184,152,0.38)' }}>
                              Vellune recommends tasting at room temperature, on a clean palate.
                              Allow each piece to rest on the tongue before applying pressure.
                              The full flavour profile reveals itself in three stages.
                            </p>
                          </div>
                        )}

                        {panel === 'Packaging & Details' && (
                          <dl className="space-y-3.5">
                            {[
                              ['Pieces',     `${collection.pieces} per box`],
                              ['Weight',     collection.weight],
                              ['Origin',     collection.origin],
                              ['Shelf Life', '45 days from dispatch'],
                              ['Storage',    'Below 18°C, away from light'],
                              ['Allergens',  'Contains: milk, soy, tree nuts'],
                            ].map(([label, value]) => (
                              <div
                                key={label}
                                className="flex justify-between pb-3"
                                style={{ borderBottom: '1px solid rgba(196,144,48,0.06)' }}
                              >
                                <dt className="font-montserrat text-[11px] tracking-[0.16em] uppercase" style={{ color: 'rgba(200,184,152,0.3)' }}>
                                  {label}
                                </dt>
                                <dd className="font-montserrat text-[12px]" style={{ color: 'rgba(200,184,152,0.58)' }}>
                                  {value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        )}

                        {panel === 'Gifting' && (
                          <div>
                            <p className="font-montserrat font-light text-[13px] leading-[1.95] mb-5" style={{ color: 'rgba(200,184,152,0.5)' }}>
                              {collection.occasion}
                            </p>
                            <p className="font-montserrat font-light text-[12px]" style={{ color: 'rgba(200,184,152,0.28)' }}>
                              Every Vellune order arrives in a matte black gift box with a satin ribbon in the collection's signature hue. Complimentary on every order.
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── You May Also Favor ──────────────────────────────────────────────── */}
      <section ref={relatedRef} className="section-y bg-noir">
        <div className="container-maison">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={relatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <p className="text-micro mb-3" style={{ color: 'rgba(196,144,48,0.5)' }}>
              Explore Further
            </p>
            <h3
              className="font-cormorant font-light text-ivory"
              style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
            >
              You May Also Favor
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={relatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ gap: '1px', background: 'rgba(196,144,48,0.05)' }}
          >
            {others.map(col => (
              <Link
                key={col.id}
                to={`/collections/${col.slug}`}
                className="group block bg-velvet p-8 transition-colors duration-500 hover:bg-mocha relative overflow-hidden"
              >
                <div className="ribbon-left" style={{ background: col.ribbon }} />
                <div className="pl-4">
                  <h4
                    className="font-cormorant font-light text-ivory mb-2 transition-colors duration-350 group-hover:text-gold-pale"
                    style={{ fontSize: '28px' }}
                  >
                    {col.name}
                  </h4>
                  <p
                    className="font-cormorant italic mb-4 transition-colors duration-350"
                    style={{ fontSize: '14px', color: 'rgba(196,144,48,0.55)' }}
                  >
                    {col.tagline}
                  </p>
                  <span className="font-cormorant font-light text-gold" style={{ fontSize: '22px' }}>
                    ${col.price}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
