import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Gift, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenPamphlet, activeCategory, setActiveCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setMobileMenuOpen(false);
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
      {/* Top Ticker Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #111111 0%, #e63946 50%, #111111 100%)',
        color: '#ffffff',
        fontSize: '0.78rem',
        fontWeight: '600',
        padding: '0.45rem 1rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        letterSpacing: '0.03em',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
      }}>
        <Sparkles size={14} color="#f4e090" />
        <span>FREE EXPRESS DELIVERY ON ORDERS OVER ₹499 | Handcrafted Botanical Resin Jewels</span>
        <button 
          onClick={onOpenPamphlet}
          style={{
            background: '#ffffff',
            color: '#e63946',
            border: 'none',
            borderRadius: '999px',
            padding: '0.18rem 0.65rem',
            fontSize: '0.7rem',
            fontWeight: '800',
            cursor: 'pointer',
            marginLeft: '0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          <Gift size={11} /> Valentine Offer
        </button>
      </div>

      {/* Main Frosted Glass Header */}
      <nav style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 245, 247, 0.94) 50%, rgba(255, 255, 255, 0.94) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(230, 57, 70, 0.18)',
        boxShadow: '0 4px 25px rgba(230, 57, 70, 0.06)',
        padding: '0.85rem 1.5rem',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Jewel Shine Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #e63946 0%, #ff758f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(230, 57, 70, 0.3)'
            }}>
              <Sparkles size={19} color="#ffffff" />
            </div>
            <div>
              <span className="brand-font" style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111111', display: 'block', lineHeight: 1.1 }}>
                JEWEL <span style={{ color: 'var(--color-red)' }}>SHINE</span>
              </span>
              <span style={{ fontSize: '0.62rem', color: '#666666', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: '700' }}>
                Artisan Botanicals
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }}>
            <a href="#hero" style={{ color: '#111111', textDecoration: 'none', fontSize: '0.88rem', fontWeight: '600' }}>
              Home
            </a>
            <button 
              onClick={() => handleCategoryClick('earrings')}
              style={{ background: 'none', border: 'none', color: activeCategory === 'earrings' ? 'var(--color-red)' : '#111111', cursor: 'pointer', fontSize: '0.88rem', fontWeight: '600' }}
            >
              Earrings
            </button>
            <button 
              onClick={() => handleCategoryClick('pendants')}
              style={{ background: 'none', border: 'none', color: activeCategory === 'pendants' ? 'var(--color-red)' : '#111111', cursor: 'pointer', fontSize: '0.88rem', fontWeight: '600' }}
            >
              Pendants
            </button>
            <button 
              onClick={() => handleCategoryClick('bracelets')}
              style={{ background: 'none', border: 'none', color: activeCategory === 'bracelets' ? 'var(--color-red)' : '#111111', cursor: 'pointer', fontSize: '0.88rem', fontWeight: '600' }}
            >
              Bracelets
            </button>
            <a href="#couples" style={{ color: '#111111', textDecoration: 'none', fontSize: '0.88rem', fontWeight: '600' }}>
              Couple Sets
            </a>
            <button 
              onClick={onOpenPamphlet}
              style={{
                background: 'rgba(255, 240, 243, 0.9)',
                border: '1px solid rgba(230, 57, 70, 0.25)',
                borderRadius: '999px',
                padding: '0.3rem 0.8rem',
                color: 'var(--color-red)',
                fontSize: '0.8rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <Gift size={13} /> Valentine Offer
            </button>
          </div>

          {/* Action Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={onOpenCart}
              style={{
                position: 'relative',
                background: '#ffffff',
                border: '1px solid rgba(230, 57, 70, 0.25)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#111111',
                boxShadow: '0 2px 10px rgba(230, 57, 70, 0.08)',
                transition: 'all 0.2s ease'
              }}
              title="Shopping Bag"
            >
              <ShoppingBag size={19} color="#e63946" />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: 'var(--color-red)',
                  color: '#ffffff',
                  fontSize: '0.68rem',
                  fontWeight: '800',
                  borderRadius: '999px',
                  minWidth: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 4px',
                  boxShadow: '0 2px 8px rgba(230, 57, 70, 0.4)'
                }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}
