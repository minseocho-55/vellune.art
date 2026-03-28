import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Background layers ─────────────────────────────────────────────
        // Warm espresso-brown darks extracted from brand photography
        void:       '#080507',   // absolute deepest — footer, overlays
        noir:       '#0F0A09',   // primary page background
        espresso:   '#140E0B',   // section alternates
        velvet:     '#1C1410',   // card surfaces
        mocha:      '#261A14',   // raised elements, hover targets
        sienna:     '#322018',   // borders, lines on dark

        // ── Gold spectrum ─────────────────────────────────────────────────
        // Warm amber-gold matching the brand logo/moon in photography
        gold: {
          deep:    '#8A6018',    // shadow gold — depth, engravings
          DEFAULT: '#C49030',    // core brand gold — warm amber-honey
          warm:    '#D4A840',    // illuminated gold — hover accents
          pale:    '#E8CE80',    // highlight gold — pulled type, thin lines
          cream:   '#F0E4C0',    // near-ivory gold — softest readable
          muted:   '#7A6038',    // toned-down — body labels, secondary text
          ghost:   'rgba(196,144,48,0.12)', // ambient tint — backgrounds
        },

        // ── Moon accent ───────────────────────────────────────────────────
        moon: {
          bright: '#EED888',     // moon tip highlight
          DEFAULT:'#D4A840',     // moon body — matches gold.warm
          glow:   'rgba(212,168,64,0.18)', // ambient moon radiance
        },

        // ── Text spectrum ─────────────────────────────────────────────────
        ivory:    '#F0E8D8',     // primary text on dark
        parchment:'#C8B898',     // body text
        dusk:     '#887050',     // muted — captions, labels
        ember:    '#4A3020',     // very dim — barely-there text

        // ── Collection accent colors ───────────────────────────────────────
        // Muted, rich versions matching the velvet box photography
        silver:   '#8DAAB8',     // Moonlit Silver — cool silver-blue
        rose:     '#A05878',     // Champagne Rose — deep vintage rose
        copper:   '#B87838',     // Burnished Copper — warm amber-copper
        amethyst: '#7050A8',     // Royal Amethyst — deep grape purple
        emerald:  '#2E6860',     // Emerald Mint — forest teal
        onyx:     '#484848',     // Dark Onyx — neutral carbon
      },

      // ── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        cormorant:    ['"Cormorant Garant"', 'Georgia', 'serif'],
        'cormorant-sc': ['"Cormorant SC"', 'Georgia', 'serif'],
        montserrat:   ['Montserrat', 'system-ui', 'sans-serif'],
      },

      // ── Spacing extras ───────────────────────────────────────────────────
      letterSpacing: {
        'brand':   '0.12em',   // wordmark tracking
        'wide-l':  '0.2em',    // labels
        'wide-xl': '0.32em',   // section labels
        'ultra':   '0.48em',   // micro labels
      },

      // ── Shadows ───────────────────────────────────────────────────────────
      boxShadow: {
        'card':    '0 4px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(196,144,48,0.04)',
        'card-hover': '0 12px 56px rgba(0,0,0,0.55), 0 0 0 1px rgba(196,144,48,0.14)',
        'gold-glow': '0 0 40px rgba(196,144,48,0.12), 0 0 80px rgba(196,144,48,0.05)',
        'moon-glow': '0 0 30px rgba(212,168,64,0.35), 0 0 80px rgba(212,168,64,0.15)',
        'inset-border': 'inset 0 0 0 1px rgba(196,144,48,0.2)',
      },

      // ── Max widths ────────────────────────────────────────────────────────
      maxWidth: {
        'maison': '1440px',
        'prose-luxury': '680px',
      },

      // ── Transitions ───────────────────────────────────────────────────────
      transitionDuration: {
        '350':  '350ms',
        '600':  '600ms',
        '800':  '800ms',
        '1200': '1200ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-slow': 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
