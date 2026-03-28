import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { MoonCrescent } from './MoonCrescent'

const navLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Gifting',     href: '/collections' },
  { label: 'About',       href: '/#about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openCart, itemCount }  = useCart()
  const location                 = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-600 ${
          scrolled
            ? 'bg-void/96 backdrop-blur-xl border-b border-gold/[0.07]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-maison flex h-[76px] items-center justify-between">

          {/* Left navigation */}
          <nav className="hidden lg:flex items-center gap-10" style={{ minWidth: 200 }}>
            {navLinks.slice(0, 2).map(link => (
              <Link key={link.label} to={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Centre: moon mark + wordmark */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-[5px] group"
          >
            <MoonCrescent
              size={26}
              glow={false}
              className="opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span
              className="font-cormorant text-gold transition-colors duration-400 group-hover:text-gold-warm"
              style={{
                fontSize: '20px',
                letterSpacing: '0.18em',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1,
              }}
            >
              Vellune
            </span>
          </Link>

          {/* Right: about + icons */}
          <div className="flex items-center gap-6 ml-auto" style={{ minWidth: 200, justifyContent: 'flex-end' }}>
            <Link to="/#about" className="nav-link hidden lg:block">
              About
            </Link>

            {/* Search */}
            <button aria-label="Search" className="text-dusk hover:text-gold transition-colors duration-300">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="11" cy="11" r="7" />
                <path d="m16.5 16.5 4 4" strokeLinecap="round" />
              </svg>
            </button>

            {/* Cart */}
            <button
              aria-label="Open cart"
              onClick={openCart}
              className="relative text-dusk hover:text-gold transition-colors duration-300"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -top-1.5 -right-1.5 h-[14px] w-[14px] rounded-full bg-gold text-void font-montserrat text-[8px] flex items-center justify-center font-medium"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile hamburger */}
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden text-dusk hover:text-gold transition-colors duration-300"
              onClick={() => setMenuOpen(v => !v)}
            >
              <svg width="19" height="14" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.4">
                {menuOpen ? (
                  <path d="M2 2 22 18M22 2 2 18" strokeLinecap="round" />
                ) : (
                  <>
                    <line x1="0" y1="1"  x2="24" y2="1"  strokeLinecap="round" />
                    <line x1="4" y1="9"  x2="24" y2="9"  strokeLinecap="round" />
                    <line x1="0" y1="17" x2="24" y2="17" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[76px] inset-x-0 z-40 bg-void/98 backdrop-blur-xl border-b border-gold/[0.07] py-12"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.href}
                    className="font-cormorant-sc text-[18px] tracking-[0.22em] text-ivory/70 hover:text-gold transition-colors duration-350"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
