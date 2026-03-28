/**
 * MoonCrescent — Vellune's central brand motif
 *
 * A thin, elegant crescent crown: the curved outer arc reaches high,
 * the inner concave arc creates the hollow, both meeting at the two tips.
 * The orientation mirrors the Vellune brand photography.
 *
 * Usage:
 *   <MoonCrescent size={60} />              — standard (with ambient glow)
 *   <MoonCrescent size={28} glow={false} /> — small divider version
 *   <MoonCrescent size={120} animate />     — hero version, breathing glow
 */

interface MoonCrescentProps {
  size?: number
  glow?: boolean
  animate?: boolean
  className?: string
}

let _uid = 0

export function MoonCrescent({
  size = 60,
  glow = true,
  animate = false,
  className = '',
}: MoonCrescentProps) {
  const id = `moon-${++_uid}`
  const height = Math.round(size * 0.42)

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 80 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        {/* Gold radial gradient — bright centre fading to deep amber */}
        <linearGradient id={`${id}-grad`} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%"   stopColor="#F2E4A0" />
          <stop offset="35%"  stopColor="#D4A840" />
          <stop offset="72%"  stopColor="#C49030" />
          <stop offset="100%" stopColor="#8A6018" />
        </linearGradient>

        {/* Ambient glow filter — soft luminance around the crescent */}
        {glow && (
          <filter id={`${id}-glow`} x="-30%" y="-60%" width="160%" height="220%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="blur" />
            <feFlood floodColor="#D4A840" floodOpacity="0.38" result="glowColor" />
            <feComposite in="glowColor" in2="blur" operator="in" result="coloredGlow" />
            <feMerge>
              <feMergeNode in="coloredGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {/*
        Crescent crown path:
        — Tips rest at y=30 on the left (x=4) and right (x=76)
        — Outer arc (Q control at y=−8) curves high above → illuminated outer rim
        — Inner arc (Q control at y=15) is shallower → hollow inner edge
        Together they form the thin crescent crown visible in the Vellune brand mark.
      */}
      <path
        d="M 4 30  Q 40 -8 76 30  Q 40 15 4 30  Z"
        fill={`url(#${id}-grad)`}
        filter={glow ? `url(#${id}-glow)` : undefined}
        className={animate ? 'moon-breathe' : undefined}
      />
    </svg>
  )
}

/* ── Moon Divider ────────────────────────────────────────────────────────────
   A horizontal gold hairline bisected by the crescent moon.
   Used between major sections as a brand-identity spacer.
   ─────────────────────────────────────────────────────────────────────────── */
export function MoonDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 w-full max-w-[400px] mx-auto ${className}`}>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(196,144,48,0.3))' }} />
      <MoonCrescent size={32} glow={false} />
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(270deg, transparent, rgba(196,144,48,0.3))' }} />
    </div>
  )
}
