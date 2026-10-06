import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValentinePamphlet from './components/ValentinePamphlet';
import CoupleThemeSection from './components/CoupleThemeSection';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import ResinCareGuide from './components/ResinCareGuide';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'res-04',
      name: 'Rosewood Romance Heart Pendant',
      price: 49.99,
      quantity: 1,
      image: '/images/resin-4.jpg'
    }
  ]);
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPamphletOpen, setIsPamphletOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('VALENTINE2026');

  // Cart Handlers
  const handleAddToCart = (product, quantityToAdd = 1) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: quantityToAdd }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleApplyCoupon = (code) => {
    setCouponCode(code);
    setIsCartOpen(true);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToCatalog = () => {
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) catalogElem.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCouples = () => {
    const couplesElem = document.getElementById('couples');
    if (couplesElem) couplesElem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Sticky Header / Navbar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPamphlet={() => setIsPamphletOpen(true)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Main Page Sections */}
      <main style={{ flex: 1 }}>
        <Hero
          onOpenPamphlet={() => setIsPamphletOpen(true)}
          onScrollToCatalog={scrollToCatalog}
          onScrollToCouples={scrollToCouples}
        />

        <ValentinePamphlet
          isOpen={isPamphletOpen}
          onClose={() => setIsPamphletOpen(false)}
          onApplyCoupon={handleApplyCoupon}
        />

        <CoupleThemeSection
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setSelectedProduct(prod)}
        />

        <ProductCatalog
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setSelectedProduct(prod)}
        />

        <ResinCareGuide />

        <CustomerReviews />
      </main>

      {/* Footer */}
      <Footer
        onOpenPamphlet={() => setIsPamphletOpen(true)}
        setActiveCategory={setActiveCategory}
      />

      {/* Modals & Slide-over Drawers */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        couponCode={couponCode}
        setCouponCode={setCouponCode}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={handleClearCart}
        couponCode={couponCode}
      />

    </div>
  );
}
