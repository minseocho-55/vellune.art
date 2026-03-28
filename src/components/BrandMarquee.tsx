/**
 * BrandMarquee — Vellune horizontal identity ticker
 *
 * An infinitely scrolling strip of brand keywords between the Hero and
 * Philosophy sections. A hallmark of luxury maison editorial design —
 * Dior, Chanel, and Bottega all use this device to build brand rhythm
 * without adding a full content section.
 *
 * The ticker uses a pure CSS animation (no JS overhead) and renders
 * two copies of the word list side-by-side, scrolling to -50% so
 * the loop is seamless and never shows a gap.
 */

const words = [
  'Elastic',
  'Luminous',
  'Eternal',
  'Handcrafted',
  'Rare',
  'Ceremonial',
  'Nocturnal',
  'Single-Origin',
  'Timeless',
  'Vellune Maison',
  'Est. MMXXIV',
  'Moonlit',
  'Six Collections',
  'Velvet',
  'Ritual',
]

export function BrandMarquee() {
  /* Double the list so the second copy fills the scroll gap */
  const items = [...words, ...words]

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className="overflow-hidden border-y"
      style={{
        background: 'var(--c-void)',
        borderColor: 'rgba(196,144,48,0.07)',
        padding: '16px 0',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: 'marqueeTicker 40s linear infinite',
        }}
      >
        {items.map((word, i) => (
          <span
            key={i}
            style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}
          >
            {/* Word — every 5th word glows slightly brighter */}
            <span
              className="font-cormorant-sc uppercase"
              style={{
                fontSize: '11px',
                letterSpacing: '0.32em',
                color: i % 5 === 2
                  ? 'rgba(196,144,48,0.68)'
                  : 'rgba(196,144,48,0.28)',
                padding: '0 22px',
              }}
            >
              {word}
            </span>

            {/* Separator dot */}
            <span
              style={{
                color: 'rgba(196,144,48,0.18)',
                fontSize: '8px',
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
