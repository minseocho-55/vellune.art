import { Link } from 'react-router-dom'
import { MoonCrescent } from './MoonCrescent'

const footerNav = {
  Maison: [
    { label: 'About Vellune',   href: '/#about' },
    { label: 'The Craft',       href: '/#ritual' },
    { label: 'Sourcing',        href: '/#about' },
    { label: 'Press',           href: '/' },
  ],
  Collections: [
    { label: 'Platinum Silver', href: '/collections/platinum-silver' },
    { label: 'Champagne Rose',  href: '/collections/champagne-rose' },
    { label: 'Burnished Copper',href: '/collections/burnished-copper' },
    { label: 'Royal Amethyst',  href: '/collections/royal-amethyst' },
    { label: 'Emerald Mint',    href: '/collections/emerald-mint' },
    { label: 'Dark Onyx',       href: '/collections/dark-onyx' },
  ],
  Gifting: [
    { label: 'Gift Boxes',         href: '/collections' },
    { label: 'Corporate Orders',   href: '/collections' },
    { label: 'Bespoke Service',    href: '/collections' },
    { label: 'Seasonal Editions',  href: '/collections' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-void border-t" style={{ borderColor: 'rgba(196,144,48,0.07)' }}>
      <div className="container-maison">

        {/* Top columns */}
        <div className="pt-20 pb-16 grid grid-cols-1 lg:grid-cols-4 gap-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex flex-col items-start gap-[6px] group mb-5">
              <MoonCrescent size={24} glow={false} className="opacity-60 transition-opacity duration-400 group-hover:opacity-90" />
              <span
                className="font-cormorant text-gold transition-colors duration-400 group-hover:text-gold-warm"
                style={{ fontSize: '22px', fontStyle: 'italic', fontWeight: 300, letterSpacing: '0.16em', lineHeight: 1 }}
              >
                Vellune
              </span>
            </Link>

            <p
              className="font-montserrat text-[10px] tracking-[0.22em] uppercase mb-6"
              style={{ color: 'rgba(196,144,48,0.4)' }}
            >
              Elastic. Luminous. Eternal.
            </p>

            <p
              className="font-montserrat font-light text-[12.5px] leading-relaxed mb-8"
              style={{ color: 'rgba(200,184,152,0.36)' }}
            >
              A luxury chocolate maison crafted for those who understand the difference between taste and experience.
            </p>

            <div className="flex gap-5">
              {['Instagram', 'Pinterest'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="font-montserrat text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
                  style={{ color: 'rgba(196,144,48,0.42)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(196,144,48,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(196,144,48,0.42)')}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title}>
              <h4
                className="font-cormorant-sc text-[12.5px] tracking-[0.3em] mb-6"
                style={{ color: 'rgba(196,144,48,0.7)' }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-montserrat font-light text-[12px] transition-colors duration-300"
                      style={{ color: 'rgba(200,184,152,0.38)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'rgba(200,184,152,0.75)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,184,152,0.38)')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold rule */}
        <div className="gold-rule" />

        {/* Bottom */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-montserrat text-[11px] tracking-wide" style={{ color: 'rgba(200,184,152,0.22)' }}>
            &copy; {new Date().getFullYear()} Vellune. All rights reserved.
          </p>
          <div className="flex gap-7">
            {['Privacy Policy', 'Terms of Service', 'Shipping'].map(label => (
              <a
                key={label}
                href="#"
                className="font-montserrat text-[11px] transition-colors duration-300"
                style={{ color: 'rgba(200,184,152,0.22)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(200,184,152,0.5)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,184,152,0.22)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
