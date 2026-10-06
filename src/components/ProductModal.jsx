import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, ShieldCheck, Truck, Plus, Minus } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content-anim glass-panel"
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          borderRadius: '24px',
          background: '#ffffff',
          border: '1px solid rgba(230, 57, 70, 0.2)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(230, 57, 70, 0.1)',
            border: 'none',
            color: '#e63946',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '2rem', alignItems: 'flex-start' }}>
          
          {/* Left Column: Image */}
          <div>
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(230, 57, 70, 0.2)',
              marginBottom: '1rem',
              aspectRatio: '1/1'
            }}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            {/* Guarantees */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
              background: '#fff0f3',
              padding: '0.85rem',
              borderRadius: '12px',
              border: '1px solid rgba(230, 57, 70, 0.15)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#5e4650', fontWeight: '600' }}>
                <Truck size={16} color="#e63946" /> Free Delivery Over ₹499
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#5e4650', fontWeight: '600' }}>
                <ShieldCheck size={16} color="#2a7b57" /> Lifetime Clarity
              </div>
            </div>
          </div>

          {/* Right Column: Info */}
          <div>
            {product.isValentineSpecial && (
              <span className="badge-valentine" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
                <Heart size={11} fill="#fff" /> Valentine Special Collection
              </span>
            )}

            <h2 style={{ fontSize: '1.6rem', color: '#1a1115', fontWeight: '700', marginBottom: '0.4rem' }}>
              {product.name}
            </h2>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', color: '#d4af37' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < Math.floor(product.rating) ? '#d4af37' : 'none'} color="#d4af37" />
                ))}
              </div>
              <span style={{ fontSize: '0.85rem', color: '#e63946', fontWeight: '700' }}>{product.rating}</span>
              <span style={{ fontSize: '0.85rem', color: '#8c737d' }}>({product.reviewsCount} reviews)</span>
            </div>

            {/* Pricing */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#e63946' }}>
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: '1rem', color: '#8c737d', textDecoration: 'line-through' }}>
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.9rem', color: '#5e4650', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {product.description}
            </p>

            {/* Specifications */}
            <div style={{
              background: '#fff0f3',
              border: '1px solid rgba(230, 57, 70, 0.2)',
              borderRadius: '14px',
              padding: '1rem',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: '#5e4650' }}>Botanical Elements:</span>
                <span style={{ color: '#1a1115', fontWeight: '700' }}>{product.flowers.join(', ')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: '#5e4650' }}>Materials & Chain:</span>
                <span style={{ color: '#1a1115', fontWeight: '700' }}>{product.material || 'UV Crystal Resin'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: '#5e4650' }}>Dimensions:</span>
                <span style={{ color: '#1a1115', fontWeight: '700' }}>{product.dimensions || 'Handcrafted Standard'}</span>
              </div>
            </div>

            {/* Quantity Selector & Add Button */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: '#fff0f3',
                border: '1px solid rgba(230, 57, 70, 0.25)',
                borderRadius: '999px',
                padding: '0.25rem 0.5rem'
              }}>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ background: 'none', border: 'none', color: '#1a1115', cursor: 'pointer', padding: '0.3rem 0.6rem' }}
                >
                  <Minus size={14} />
                </button>
                <span style={{ padding: '0 0.5rem', fontWeight: '700', color: '#1a1115', fontSize: '0.9rem' }}>{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ background: 'none', border: 'none', color: '#1a1115', cursor: 'pointer', padding: '0.3rem 0.6rem' }}
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="btn-primary"
                style={{ flex: 1, padding: '0.85rem 1.25rem' }}
              >
                <ShoppingBag size={18} /> Add {quantity} to Bag - ₹{product.price * quantity}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
