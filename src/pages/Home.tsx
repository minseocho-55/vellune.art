/**
 * Home — Vellune homepage
 *
 * Section order follows the luxury narrative arc:
 *
 *  1. Hero          — Cinematic full-screen entry. Brand identity first.
 *  2. BrandMarquee  — Thin editorial ticker. Rhythm between Hero and brand story.
 *  3. Philosophy    — Brand manifesto. Establish the world before the products.
 *  4. Collections   — The six collections. Editorial 2-column grid with direct
 *                     click-through to each collection's product page.
 *  5. FeaturedProduct — Editorial spotlight on one signature piece with
 *                       direct "Add to Selection" action.
 *  6. GiftingSection — Gifting / occasion moment. Lifestyle positioning.
 *  7. Newsletter    — Compact community capture.
 *  8. Footer        — Brand close.
 *
 * Each section transitions through the design system's background palette:
 *   void → espresso → noir → espresso → noir → velvet → noir → void
 * This alternation creates rhythm without repeating the same surface.
 */

import { Hero }            from '../components/Hero'
import { BrandMarquee }    from '../components/BrandMarquee'
import { Philosophy }      from '../components/Philosophy'
import { Collections }     from '../components/Collections'
import { FeaturedProduct } from '../components/FeaturedProduct'
import { GiftingSection }  from '../components/GiftingSection'
import { Newsletter }      from '../components/Newsletter'
import { Footer }          from '../components/Footer'

export function Home() {
  return (
    <main className="page-enter">
      <Hero />
      <BrandMarquee />
      <Philosophy />
      <Collections />
      <FeaturedProduct />
      <GiftingSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
