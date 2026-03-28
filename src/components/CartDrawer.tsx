import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { MoonCrescent } from './MoonCrescent'

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(8,5,7,0.75)', backdropFilter: 'blur(6px)' }}
            onClick={closeCart}
          />

          {/* Drawer panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full z-50 w-full max-w-[400px] flex flex-col"
            style={{ background: '#1C1410', borderLeft: '1px solid rgba(196,144,48,0.08)' }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-8 py-7"
              style={{ borderBottom: '1px solid rgba(196,144,48,0.08)' }}
            >
              <div>
                <h2
                  className="font-cormorant-sc tracking-[0.26em]"
                  style={{ fontSize: '14px', color: 'rgba(196,144,48,0.85)' }}
                >
                  Your Selection
                </h2>
                {itemCount > 0 && (
                  <p className="font-montserrat text-[11px] mt-0.5" style={{ color: 'rgba(200,184,152,0.35)' }}>
                    {itemCount} {itemCount === 1 ? 'piece' : 'pieces'}
                  </p>
                )}
              </div>
              <button
                onClick={closeCart}
                aria-label="Close"
                className="transition-colors duration-300"
                style={{ color: 'rgba(200,184,152,0.35)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(196,144,48,0.85)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,184,152,0.35)')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-5 text-center">
                  <MoonCrescent size={40} glow={false} className="opacity-30" />
                  <p className="font-cormorant italic" style={{ fontSize: '20px', color: 'rgba(200,184,152,0.35)' }}>
                    Your selection is empty
                  </p>
                  <p className="font-montserrat text-[11px]" style={{ color: 'rgba(200,184,152,0.22)' }}>
                    Add a collection to begin
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map(({ collection, quantity }) => (
                    <motion.div
                      key={collection.slug}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-5 pb-6"
                      style={{ borderBottom: '1px solid rgba(196,144,48,0.06)' }}
                    >
                      {/* Ribbon swatch */}
                      <div
                        className="w-12 h-14 flex-shrink-0"
                        style={{
                          background: `linear-gradient(160deg, ${collection.ribbon}14, ${collection.ribbon}28)`,
                          borderLeft: `3px solid ${collection.ribbon}`,
                        }}
                      />

                      <div className="flex-1 min-w-0">
                        <p className="font-cormorant text-ivory" style={{ fontSize: '16px' }}>
                          {collection.name}
                        </p>
                        <p className="font-montserrat text-[11px] mt-0.5" style={{ color: 'rgba(200,184,152,0.38)' }}>
                          {collection.pieces} pcs · {collection.weight}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          {/* Qty controls */}
                          <div className="flex items-center gap-2.5">
                            {[
                              { label: '−', fn: () => updateQuantity(collection.slug, quantity - 1) },
                              { label: '+', fn: () => updateQuantity(collection.slug, quantity + 1) },
                            ].map((btn, bi) => (
                              bi === 0 ? (
                                <button
                                  key={btn.label}
                                  onClick={btn.fn}
                                  className="w-6 h-6 flex items-center justify-center text-xs transition-colors duration-300"
                                  style={{ border: '1px solid rgba(196,144,48,0.18)', color: 'rgba(196,144,48,0.55)' }}
                                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(196,144,48,0.55)')}
                                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(196,144,48,0.18)')}
                                >
                                  {btn.label}
                                </button>
                              ) : (
                                <>
                                  <span className="font-montserrat text-[13px] w-4 text-center" style={{ color: 'rgba(200,184,152,0.6)' }}>
                                    {quantity}
                                  </span>
                                  <button
                                    key={btn.label}
                                    onClick={btn.fn}
                                    className="w-6 h-6 flex items-center justify-center text-xs transition-colors duration-300"
                                    style={{ border: '1px solid rgba(196,144,48,0.18)', color: 'rgba(196,144,48,0.55)' }}
                                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(196,144,48,0.55)')}
                                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(196,144,48,0.18)')}
                                  >
                                    {btn.label}
                                  </button>
                                </>
                              )
                            ))}
                          </div>

                          {/* Price + remove */}
                          <div className="flex items-center gap-4">
                            <span className="font-cormorant font-light text-gold" style={{ fontSize: '18px' }}>
                              ${collection.price * quantity}
                            </span>
                            <button
                              onClick={() => removeItem(collection.slug)}
                              className="transition-colors duration-300"
                              style={{ color: 'rgba(200,184,152,0.22)' }}
                              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(200,184,152,0.6)')}
                              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,184,152,0.22)')}
                            >
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-8 py-7" style={{ borderTop: '1px solid rgba(196,144,48,0.08)' }}>
                <div className="flex justify-between items-baseline mb-6">
                  <span className="font-montserrat text-[11px] tracking-[0.18em] uppercase" style={{ color: 'rgba(200,184,152,0.45)' }}>
                    Order Total
                  </span>
                  <span className="font-cormorant font-light text-gold" style={{ fontSize: '28px' }}>
                    ${total}
                  </span>
                </div>
                <button className="btn-luxury w-full">
                  Proceed to Checkout
                </button>
                <p className="font-montserrat text-[10px] text-center mt-4" style={{ color: 'rgba(200,184,152,0.22)' }}>
                  Complimentary gift wrapping on all orders
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
