import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Navbar } from './components/Navbar'
import { CartDrawer } from './components/CartDrawer'
import { Home } from './pages/Home'
import { CollectionPage } from './pages/CollectionPage'
import { ProductPage } from './pages/ProductPage'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/collections/:slug" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
