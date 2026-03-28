import { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { collections } from '../data/products'
import { useCart } from '../context/CartContext'
import { Footer } from '../components/Footer'
import { MoonDivider } from '../components/MoonCrescent'
import velluneBox from '../assets/vellune-box.png'
import chocolates from '../assets/chocolates.png'

const revealUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 1.05, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function ProductPage() {
  const { slug }       = useParams<{ slug: string }>()
  const collection     = collections.find(c => c.slug === slug)
  const { addItem }    = useCart()
  const detailsRef     = useRef<HTMLDivElement>(null)
  const relatedRef     = useRef<HTMLDivElement>(null)
  const detailsInView  = useInView(detailsRef, { once: true, margin: '-10%' })
  const relatedInView  = useInView(relatedRef, { once: true, margin: '-10%' })

  if (!collection) return <Navigate to="/collections" replace />

  const others = collections.filter(c => c.slug !== slug).slice(0, 3)
  const isFirst = collection.slug === collections[0].slug

  return (
    <main className="page-enter" style={{ paddingTop: '76px' }}>

      {/* ── Hero: two-column ───────────────────────────────────────────────── */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-noir">

        {/* Left: photography */}
        <div className="relative overflow-hidden" style={{ minHeight: '55vh' }}>
          <img
            src={isFirst ? velluneBox : chocolates}
            alt={`Vellune ${collection.name}`}
            className="w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
            style={{ minHeight: '55vh', objectPosition: isFirst ? '50% 18%' : 'center' }}
          />

          {/* Overlays */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(15,10,9,0.35) 0%, transparent 25%, transparent 70%, rgba(15,10,9,0.6) 100%)',
          }} />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(90deg, transparent, rgba(15,10,9,0.2) 100%)',
          }} />

          {/* Collection ribbon — vertical left edge */}
          <div
            className="absolute top-0 left-0 bottom-0 w-[4px]"
            style={{ background: `linear-gradient(180deg, ${collection.ribbon}80, ${collection.ribbon})` }}
          />

          {/* Origin badge */}
          <div className="absolute bottom-8 left-8">
            <div
              className="surface-glass inline-flex items-center gap-3 px-5 py-3"
            >
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: collection.ribbon }} />
              <p className="font-montserrat text-[10px] tracking-[0.28em] uppercase" style={{ color: 'rgba(240,232,216,0.6)' }}>
                Origin: {collection.origin}
              </p>
            </div>
          </div>
        </div>

        {/* Right: product details */}
        <div
          className="flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-20 lg:py-0"
          style={{ background: '#0F0A09' }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2.5 mb-10">
            <Link
              to="/collections"
              className="font-montserrat text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: 'rgba(196,144,48,0.52)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(196,144,48,0.9)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(196,144,48,0.52)')}
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
            custom={0} variants={revealUp} initial="hidden" animate="visible"
            className="font-montserrat text-[10px] tracking-[0.38em] uppercase mb-2"
            style={{ color: collection.ribbon }}
          >
            {collection.origin} · {collection.weight} · {collection.pieces} pieces
          </motion.p>

          {/* Name */}
          <motion.h1
            custom={1} variants={revealUp} initial="hidden" animate="visible"
            className="font-cormorant font-light text-ivory leading-tight mb-3"
            style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}
          >
            {collection.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={2} variants={revealUp} initial="hidden" animate="visible"
            className="font-cormorant italic mb-6"
            style={{ fontSize: '17px', color: 'rgba(196,144,48,0.58)' }}
          >
            {collection.tagline}
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-14 h-px mb-7 origin-left"
            style={{ background: 'linear-gradient(90deg, rgba(196,144,48,0.5), transparent)' }}
          />

          {/* Description */}
          <motion.p
            custom={3} variants={revealUp} initial="hidden" animate="visible"
            className="font-montserrat font-light text-[13px] leading-[1.98] mb-9 max-w-[480px]"
            style={{ color: 'rgba(200,184,152,0.52)' }}
          >
            {collection.longDescription}
          </motion.p>

          {/* Tasting notes */}
          <motion.div custom={4} variants={revealUp} initial="hidden" animate="visible" className="mb-8">
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
            custom={5} variants={revealUp} initial="hidden" animate="visible"
            className="flex items-baseline gap-3 mb-8"
          >
            <span className="font-cormorant font-light text-gold" style={{ fontSize: '44px' }}>
              ${collection.price}
            </span>
            <span className="font-montserrat text-[12px]" style={{ color: 'rgba(200,184,152,0.3)' }}>
              Box of {collection.pieces}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={6} variants={revealUp} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <button onClick={() => addItem(collection)} className="btn-luxury">
              Add to Selection
            </button>
            <button className="btn-ghost">
              Gift This Collection
            </button>
          </motion.div>

          <motion.p
            custom={7} variants={revealUp} initial="hidden" animate="visible"
            className="font-montserrat text-[11px] mt-5"
            style={{ color: 'rgba(200,184,152,0.2)' }}
          >
            Complimentary gift wrapping · Ships within 2–3 business days
          </motion.p>
        </div>
      </section>

      {/* ── The Composition ────────────────────────────────────────────────── */}
      <section ref={detailsRef} className="section-y bg-espresso">
        <div className="container-maison">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={detailsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1 }}
          >
            {/* Moon divider at top of section */}
            <div className="mb-16 text-center">
              <MoonDivider />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

              {/* Composition / ingredients */}
              <div>
                <p className="text-micro mb-4" style={{ color: 'rgba(196,144,48,0.5)' }}>
                  The Composition
                </p>
                <div className="w-10 h-px mb-6" style={{ background: collection.ribbon }} />
                <ul className="space-y-3.5">
                  {collection.ingredients.map(ing => (
                    <li key={ing} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 flex-shrink-0 rounded-full" style={{ background: 'rgba(196,144,48,0.4)' }} />
                      <span className="font-montserrat font-light text-[13px] leading-relaxed" style={{ color: 'rgba(200,184,152,0.55)' }}>
                        {ing}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The ritual */}
              <div>
                <p className="text-micro mb-4" style={{ color: 'rgba(196,144,48,0.5)' }}>
                  The Experience
                </p>
                <div className="w-10 h-px mb-6" style={{ background: 'rgba(196,144,48,0.3)' }} />
                <p className="font-cormorant italic leading-relaxed mb-4" style={{ fontSize: '20px', color: 'rgba(240,232,216,0.68)' }}>
                  "Begin at the surface.
                  <br />Let the chocolate speak."
                </p>
                <p className="font-montserrat font-light text-[12px] leading-relaxed" style={{ color: 'rgba(200,184,152,0.35)' }}>
                  Vellune recommends tasting at room temperature, on a clean palate.
                  Allow each piece to rest on the tongue before applying pressure.
                  The full flavour profile reveals itself in three stages.
                </p>
              </div>

              {/* Product details */}
              <div>
                <p className="text-micro mb-4" style={{ color: 'rgba(196,144,48,0.5)' }}>
                  Details
                </p>
                <div className="w-10 h-px mb-6" style={{ background: 'rgba(196,144,48,0.3)' }} />
                <dl className="space-y-4">
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
                      style={{ borderBottom: '1px solid rgba(196,144,48,0.07)' }}
                    >
                      <dt className="font-montserrat text-[11px] tracking-[0.16em] uppercase" style={{ color: 'rgba(200,184,152,0.3)' }}>
                        {label}
                      </dt>
                      <dd className="font-montserrat text-[12px] text-right" style={{ color: 'rgba(200,184,152,0.6)' }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── You may also favor ─────────────────────────────────────────────── */}
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
                <div
                  className="ribbon-left"
                  style={{ background: col.ribbon }}
                />
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
