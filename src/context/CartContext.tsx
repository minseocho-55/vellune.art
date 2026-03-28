import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Collection } from '../data/products'

interface CartItem {
  collection: Collection
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (collection: Collection) => void
  removeItem: (slug: string) => void
  updateQuantity: (slug: string, quantity: number) => void
  total: number
  itemCount: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (collection: Collection) => {
    setItems(prev => {
      const existing = prev.find(i => i.collection.slug === collection.slug)
      if (existing) {
        return prev.map(i =>
          i.collection.slug === collection.slug
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        )
      }
      return [...prev, { collection, quantity: 1 }]
    })
    setIsOpen(true)
  }

  const removeItem = (slug: string) => {
    setItems(prev => prev.filter(i => i.collection.slug !== slug))
  }

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(slug)
      return
    }
    setItems(prev =>
      prev.map(i => (i.collection.slug === slug ? { ...i, quantity } : i)),
    )
  }

  const total = items.reduce((sum, i) => sum + i.collection.price * i.quantity, 0)
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        updateQuantity,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
