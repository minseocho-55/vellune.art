// ─────────────────────────────────────────────────────────────────────────────
// Vellune Motion System — single source of truth for all Framer Motion values
// Principle: weight without drama, elegance without performance
// ─────────────────────────────────────────────────────────────────────────────

// Easing curves (Framer Motion array format)
export const EASE_LUXURY = [0.22, 1, 0.36, 1]   // strong decel, primary
export const EASE_REVEAL = [0.16, 1, 0.3,  1]   // deeper decel, scroll entries
export const EASE_GENTLE = [0.4,  0, 0.6,  1]   // symmetric, micro-interactions

// Duration palette (seconds)
export const DUR = {
  fast:   0.35,  // icon/colour hover micro-interactions
  mid:    0.65,  // UI transitions, drawers
  slow:   1.05,  // content reveals, section entries
  slower: 1.2,   // hero display type, dramatic moments
} as const

// Scroll-reveal: fade up — standard for all non-hero sections
export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: DUR.slow, delay, ease: EASE_LUXURY },
  }),
}

// Scroll-reveal: fade in (opacity only)
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: DUR.slow, delay, ease: EASE_GENTLE },
  }),
}

// Scroll-reveal: scale + fade — for imagery and featured elements
export const scaleReveal = {
  hidden:  { opacity: 0, scale: 0.97 },
  visible: (delay = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: DUR.slow, delay, ease: EASE_REVEAL },
  }),
}

// Grid stagger wrapper — parent container for staggered child items
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// Card entry — used by every product card variant
export const cardReveal = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: DUR.slow, ease: EASE_LUXURY } },
}

// Gold rule / divider — horizontal grow from left
export const growX = {
  hidden:  { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1,
    transition: { duration: 0.9, ease: EASE_LUXURY } },
}
