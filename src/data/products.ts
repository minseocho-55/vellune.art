export interface Collection {
  id: string
  slug: string
  name: string
  ribbon: string
  accent: string
  tagline: string
  description: string
  longDescription: string
  price: number
  pieces: number
  weight: string
  ingredients: string[]
  tastingNotes: string[]
  origin: string
  featured: boolean
}

export const collections: Collection[] = [
  {
    id: 'platinum-silver',
    slug: 'platinum-silver',
    name: 'Platinum Silver',
    ribbon: '#B8C4CC',
    accent: '#D4DDE4',
    tagline: 'Crisp. Refined. Crystalline.',
    description:
      'Cold-pressed Madagascan dark chocolate adorned with edible silver leaf and Himalayan fleur de sel.',
    longDescription:
      'The Platinum Silver collection embodies the clarity of moonlit water. Each piece is hand-crafted from single-origin Madagascan cacao, cold-pressed to preserve its delicate floral notes, then finished with a veil of edible silver leaf and the faintest whisper of Himalayan fleur de sel. The result is a chocolate of uncommon elegance — crisp on the surface, yielding within.',
    price: 98,
    pieces: 12,
    weight: '180g',
    ingredients: [
      'Single-origin Madagascan 72% dark chocolate',
      'Edible silver leaf',
      'Himalayan fleur de sel',
      'Pure cocoa butter',
    ],
    tastingNotes: ['Dark cherry', 'Jasmine', 'Sea mineral', 'Roasted cacao'],
    origin: 'Madagascar',
    featured: true,
  },
  {
    id: 'champagne-rose',
    slug: 'champagne-rose',
    name: 'Champagne Rose',
    ribbon: '#C4839A',
    accent: '#D4A0B8',
    tagline: 'Soft. Floral. Effervescent.',
    description:
      'Rose-infused Belgian milk chocolate with Champagne ganache and crystallized petals.',
    longDescription:
      'Inspired by the quiet luxury of a Champagne garden at dusk. Vellune\'s Champagne Rose collection layers a slow-reduced Champagne ganache between veils of Belgian milk chocolate, each piece finished with a single crystallized rose petal. Light, luminous, and deeply feminine in character.',
    price: 88,
    pieces: 12,
    weight: '180g',
    ingredients: [
      'Belgian 38% milk chocolate',
      'Champagne reduction ganache',
      'Organic rose petals',
      'Crystallized violet sugar',
      'Fresh cream',
    ],
    tastingNotes: ['Fresh rose', 'Champagne brioche', 'Honeyed cream', 'Vanilla'],
    origin: 'Belgium',
    featured: false,
  },
  {
    id: 'burnished-copper',
    slug: 'burnished-copper',
    name: 'Burnished Copper',
    ribbon: '#B87333',
    accent: '#CC8844',
    tagline: 'Warm. Earthy. Ancient.',
    description:
      'Colombian dark chocolate aged in whisky barrels, with slow-cooked smoked caramel and raw highland honey.',
    longDescription:
      'Burnished Copper draws from the earth itself. Colombian cacao aged for twelve months in single-malt whisky barrels forms the foundation — layered with a slow-rendered smoked caramel and finished with unfiltered Andean highland honey. Each piece carries the warmth of ancient soil and open fire.',
    price: 108,
    pieces: 12,
    weight: '190g',
    ingredients: [
      'Colombian whisky-barrel-aged 68% dark chocolate',
      'Slow-rendered smoked caramel',
      'Raw Andean honey',
      'Maldon sea salt flakes',
    ],
    tastingNotes: ['Smoked oak', 'Dark caramel', 'Highland honey', 'Dried fig'],
    origin: 'Colombia',
    featured: false,
  },
  {
    id: 'royal-amethyst',
    slug: 'royal-amethyst',
    name: 'Royal Amethyst',
    ribbon: '#7B5EA7',
    accent: '#9B7EC7',
    tagline: 'Deep. Ceremonial. Rare.',
    description:
      'Ecuadorian Nacional cacao — one of the world\'s rarest varieties — with wild lavender honey and crushed violet sugar.',
    longDescription:
      'The rarest expression in the Vellune universe. Royal Amethyst is built upon Ecuadorian Nacional cacao, one of the world\'s oldest and most endangered cacao varieties, paired with wild mountain lavender honey and crowned with hand-crushed violet sugar. Intended to be experienced slowly, in ceremony.',
    price: 128,
    pieces: 12,
    weight: '185g',
    ingredients: [
      'Ecuadorian Nacional 75% dark chocolate',
      'Wild mountain lavender honey',
      'Hand-crushed violet sugar',
      'Organic lavender essential oil',
    ],
    tastingNotes: ['Wild lavender', 'Dark fruit', 'Beeswax', 'Red wine reduction'],
    origin: 'Ecuador',
    featured: false,
  },
  {
    id: 'emerald-mint',
    slug: 'emerald-mint',
    name: 'Emerald Mint',
    ribbon: '#2D7A7A',
    accent: '#4D9A9A',
    tagline: 'Cool. Luminous. Awakening.',
    description:
      'Venezuelan Criollo dark chocolate with altitude-extracted peppermint oil and crystallized mint.',
    longDescription:
      'Vellune\'s most striking creation. Venezuelan Criollo cacao — prized among connoisseurs for its extraordinary depth and rarity — is paired with pure cold-pressed peppermint oil extracted at altitude in the Andes. Each piece is finished with a single crystallized mint crystal, catching light like a frozen drop of water.',
    price: 118,
    pieces: 12,
    weight: '180g',
    ingredients: [
      'Venezuelan Criollo 70% dark chocolate',
      'Cold-pressed altitude peppermint oil',
      'Crystallized mint crystal',
      'Pure cocoa butter',
    ],
    tastingNotes: ['Arctic mint', 'Dark berry', 'Eucalyptus', 'Bitter cacao nib'],
    origin: 'Venezuela',
    featured: false,
  },
  {
    id: 'dark-onyx',
    slug: 'dark-onyx',
    name: 'Dark Onyx',
    ribbon: '#5D5D5D',
    accent: '#8D8D8D',
    tagline: 'Absolute. Pure. Eternal.',
    description:
      'Single-origin Peruvian 85% dark chocolate. Pure. Unadorned. The definitive expression of Vellune.',
    longDescription:
      'Dark Onyx is Vellune at its most absolute. A single-origin Peruvian 85% dark chocolate, pure and unadorned. No inclusions. No garnishes. Only the raw, unflinching truth of exceptional cacao. This is chocolate as sculpture — as philosophy. The final piece of the Vellune collection.',
    price: 148,
    pieces: 12,
    weight: '175g',
    ingredients: [
      'Single-origin Peruvian 85% dark chocolate',
      'Pure unrefined cocoa butter',
      'Unrefined cane sugar',
    ],
    tastingNotes: ['Pure cacao', 'Dried earth', 'Dark espresso', 'Bitter orange zest'],
    origin: 'Peru',
    featured: false,
  },
]
