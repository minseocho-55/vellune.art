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
  Service: [
    { label: 'Shipping & Care',    href: '#' },
    { label: 'Returns',            href: '#' },
    { label: 'FAQ',                href: '#' },
    { label: 'Contact Atelier',    href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-void border-t" style={{ borderColor: 'rgba(196,144,48,0.07)' }}>

      {/* Epigraph strip */}
      <div
        className="border-b py-12 text-center"
        style={{ borderColor: 'rgba(196,144,48,0.07)' }}
      >
        <p
          className="font-cormorant italic"
          style={{
            fontSize: 'clamp(16px, 2.2vw, 26px)',
            color: 'rgba(240,232,216,0.22)',
            letterSpacing: '0.02em',
          }}
        >
          "Made for those who understand the difference."
        </p>
      </div>

      <div className="container-maison">

        {/* Top columns */}
        <div className="pt-16 pb-14 grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
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
              Élastique. Lumineux. Éternel.
            </p>

            <p
              className="font-montserrat font-light text-[12px] leading-relaxed mb-8"
              style={{ color: 'rgba(200,184,152,0.32)' }}
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
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(196,144,48,0.85)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(196,144,48,0.42)')}
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
                className="font-cormorant-sc text-[12px] tracking-[0.3em] mb-6"
                style={{ color: 'rgba(196,144,48,0.65)' }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-montserrat font-light text-[11.5px] transition-colors duration-300"
                      style={{ color: 'rgba(200,184,152,0.35)' }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(200,184,152,0.72)')}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(200,184,152,0.35)')}
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
          <p className="font-montserrat text-[10.5px] tracking-wide" style={{ color: 'rgba(200,184,152,0.2)' }}>
            &copy; {new Date().getFullYear()} Vellune. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Shipping'].map(label => (
              <a
                key={label}
                href="#"
                className="font-montserrat text-[10.5px] transition-colors duration-300"
                style={{ color: 'rgba(200,184,152,0.2)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(200,184,152,0.48)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(200,184,152,0.2)')}
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
