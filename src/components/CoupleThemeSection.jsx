import React, { useState } from 'react';
import { Heart, Sparkles, Check, Gift, Layers, Type, Plus, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function CoupleThemeSection({ onAddToCart, onQuickView }) {
  const coupleProducts = PRODUCTS.filter(p => p.category === 'couples');

  // Custom Pair Builder State
  const [selectedTint, setSelectedTint] = useState('Clear Crystal');
  const [selectedFlower, setSelectedFlower] = useState('Red Rose Petals');
  const [initials, setInitials] = useState('A & B');

  const tintOptions = [
    { name: 'Clear Crystal', color: 'rgba(255,255,255,0.9)', border: 'rgba(230,57,70,0.3)' },
    { name: 'Blush Rose Tint', color: '#fff0f3', border: '#e63946' },
    { name: 'Amber Gold Sparkle', color: '#fffdf0', border: '#d4af37' },
    { name: 'Midnight Obsidian', color: '#f5eff2', border: '#8c737d' }
  ];

  const flowerOptions = [
    { name: 'Red Rose Petals', desc: 'Symbol of passionate love & devotion' },
    { name: 'Forget-Me-Nots', desc: 'Symbol of everlasting affection & memory' },
    { name: 'Baby\'s Breath', desc: 'Symbol of pure & innocent commitment' },
    { name: 'Forest Fern Moss', desc: 'Symbol of growth & eternal life' }
  ];

  const handleAddCustomToCart = () => {
    const customItem = {
      id: `custom-couple-${Date.now()}`,
      name: `Custom Couple Set (${initials})`,
      category: 'couples',
      price: 799,
      originalPrice: 999,
      rating: 5.0,
      image: '/images/resin-6.jpg',
      flowers: [selectedFlower, `${selectedTint} Resin`],
      description: `Bespoke hand-poured couple pair with custom initials "${initials}", ${selectedFlower} in ${selectedTint} resin.`,
      isCustom: true
    };
    onAddToCart(customItem);
  };

  return (
    <section id="couples" style={{ padding: '4rem 1.5rem', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.85rem',
            background: 'var(--color-blush)',
            border: '1px solid rgba(230, 57, 70, 0.25)',
            borderRadius: '999px',
            color: '#e63946',
            fontSize: '0.78rem',
            fontWeight: '700',
            marginBottom: '0.75rem'
          }}>
            <Heart size={13} fill="#e63946" /> COUPLE PAIRINGS & THEMES
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#1a1115', marginBottom: '0.75rem' }}>
            Romantic <span className="gradient-text-rose">Couple Sets</span>
          </h2>
          <p style={{ color: '#5e4650', fontSize: '1rem', lineHeight: 1.6 }}>
            Shared memories frozen in crystal resin. Explore matching dual pendants, couple bracelets, and our custom pair workshop.
          </p>
        </div>

        {/* Featured Couple Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {coupleProducts.map(product => (
            <div 
              key={product.id}
              className="glass-panel glass-card-hover"
              style={{
                padding: '1.25rem',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#ffffff',
                border: '1px solid rgba(230, 57, 70, 0.2)',
                position: 'relative'
              }}
            >
              <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', marginBottom: '1rem' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '230px', objectFit: 'cover' }}
                />
                <span className="badge-valentine" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  COUPLE SET
                </span>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.78rem', color: '#e63946', fontWeight: '700' }}>
                    ★ {product.rating} ({product.reviewsCount} reviews)
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#5e4650' }}>{product.material}</span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: '#1a1115', marginBottom: '0.4rem', fontWeight: '700' }}>{product.name}</h3>
                <p style={{ fontSize: '0.85rem', color: '#5e4650', marginBottom: '1rem', lineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {product.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {product.flowers.map((fl, i) => (
                    <span key={i} style={{
                      fontSize: '0.7rem',
                      background: '#fff0f3',
                      border: '1px solid rgba(230, 57, 70, 0.15)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                      color: '#1a1115'
                    }}>
                      🌸 {fl}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <div>
                  <span style={{ fontSize: '1.3rem', fontWeight: '700', color: '#e63946' }}>₹{product.price}</span>
                  {product.originalPrice && (
                    <span style={{ fontSize: '0.85rem', color: '#8c737d', textDecoration: 'line-through', marginLeft: '0.5rem' }}>
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => onQuickView(product)} className="btn-secondary" style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem' }}>
                    Details
                  </button>
                  <button onClick={() => onAddToCart(product)} className="btn-primary" style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem' }}>
                    <ShoppingBag size={14} /> Add
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Couple Pair Builder Tool */}
        <div className="glass-panel" style={{
          padding: '2.5rem',
          borderRadius: '24px',
          background: '#ffffff',
          border: '1px solid rgba(230, 57, 70, 0.25)',
          boxShadow: '0 10px 35px rgba(230, 57, 70, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', color: '#e63946' }}>
            <Sparkles size={18} />
            <span className="cinzel-text" style={{ fontSize: '0.82rem', fontWeight: '700' }}>BESPOKE ARTISAN WORKSHOP</span>
          </div>

          <h3 style={{ fontSize: '1.7rem', color: '#1a1115', marginBottom: '1.5rem', fontWeight: '700' }}>
            Design Your Custom Couple Set (₹799)
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
            
            {/* Customization Options */}
            <div>
              {/* Option 1: Resin Tint */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ color: '#1a1115', fontSize: '0.88rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                  <Layers size={16} color="#e63946" /> 1. Select Resin Finish
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                  {tintOptions.map(t => (
                    <button
                      key={t.name}
                      onClick={() => setSelectedTint(t.name)}
                      style={{
                        padding: '0.7rem 0.85rem',
                        borderRadius: '12px',
                        background: t.color,
                        border: selectedTint === t.name ? `2px solid ${t.border}` : '1px solid rgba(0,0,0,0.1)',
                        color: '#1a1115',
                        fontSize: '0.82rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{t.name}</span>
                      {selectedTint === t.name && <Check size={14} color="#e63946" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Preserved Botanicals */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ color: '#1a1115', fontSize: '0.88rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                  🌸 2. Select Flower Element
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {flowerOptions.map(f => (
                    <button
                      key={f.name}
                      onClick={() => setSelectedFlower(f.name)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: '12px',
                        background: selectedFlower === f.name ? '#fff0f3' : '#fdfbfc',
                        border: selectedFlower === f.name ? '1px solid #e63946' : '1px solid rgba(0,0,0,0.08)',
                        color: '#1a1115',
                        fontSize: '0.82rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <strong style={{ display: 'block' }}>{f.name}</strong>
                        <span style={{ fontSize: '0.72rem', color: '#5e4650' }}>{f.desc}</span>
                      </div>
                      {selectedFlower === f.name && <Check size={16} color="#e63946" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Initials */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ color: '#1a1115', fontSize: '0.88rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                  <Type size={16} color="#e63946" /> 3. Initials or Engraving
                </label>
                <input
                  type="text"
                  value={initials}
                  onChange={e => setInitials(e.target.value)}
                  maxLength={15}
                  placeholder="e.g. S & L"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    background: '#ffffff',
                    border: '1px solid rgba(230, 57, 70, 0.3)',
                    color: '#1a1115',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

            </div>

            {/* Live Custom Preview Card */}
            <div style={{
              background: '#fff0f3',
              border: '2px solid rgba(230, 57, 70, 0.25)',
              borderRadius: '20px',
              padding: '1.75rem',
              textAlign: 'center'
            }}>
              <span className="cinzel-text" style={{ fontSize: '0.75rem', color: '#e63946', display: 'block', marginBottom: '0.4rem', fontWeight: '700' }}>
                LIVE PREVIEW
              </span>
              
              <div style={{
                width: '150px',
                height: '150px',
                margin: '1rem auto 1.25rem',
                borderRadius: '50%',
                background: selectedTint === 'Blush Rose Tint' ? 'radial-gradient(circle, #ff4d6d, #fff0f3)' :
                            selectedTint === 'Amber Gold Sparkle' ? 'radial-gradient(circle, #f4e090, #ffffff)' :
                            'radial-gradient(circle, #ffffff, #fff0f3)',
                border: '3px solid #e63946',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(230, 57, 70, 0.2)'
              }}>
                <Heart size={36} color="#e63946" fill="rgba(230,57,70,0.2)" />
                <span style={{ fontSize: '0.95rem', fontWeight: '800', color: '#1a1115', marginTop: '0.3rem' }}>
                  {initials || 'A & B'}
                </span>
                <span style={{ fontSize: '0.65rem', color: '#e63946', fontWeight: '600' }}>
                  {selectedFlower.split(' ')[0]}
                </span>
              </div>

              <h4 style={{ color: '#1a1115', fontSize: '1.05rem', marginBottom: '0.2rem', fontWeight: '700' }}>
                Custom Couple Pair ({initials})
              </h4>
              <p style={{ color: '#5e4650', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
                {selectedFlower} in {selectedTint}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: '700', color: '#e63946' }}>₹799</span>
                <span className="badge-valentine">FREE GIFT BOX</span>
              </div>

              <button
                onClick={handleAddCustomToCart}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                <ShoppingBag size={16} /> Add Custom Set - ₹799
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
