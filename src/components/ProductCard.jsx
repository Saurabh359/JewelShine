import React from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  return (
    <div className="glass-panel glass-card-hover" style={{
      padding: '1rem',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: '#ffffff',
      border: '1px solid #eeeeee',
      position: 'relative',
      height: '100%'
    }}>
      
      {/* Product Image & Badges */}
      <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '0.85rem', aspectRatio: '1/1' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          className="product-img"
        />

        {/* Badges */}
        <div style={{ position: 'absolute', top: '8px', left: '8px', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          {product.isValentineSpecial && (
            <span className="badge-valentine" style={{ fontSize: '0.62rem' }}>
              <Heart size={9} fill="#fff" /> Special
            </span>
          )}
          {product.isBestSeller && (
            <span className="badge-gold" style={{ fontSize: '0.62rem' }}>
              ★ Top Pick
            </span>
          )}
        </div>

        {/* Quick View Floating Button */}
        <button
          onClick={() => onQuickView(product)}
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            background: 'rgba(255, 255, 255, 0.92)',
            border: '1px solid #eeeeee',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-red)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
          title="Quick View"
        >
          <Eye size={16} />
        </button>
      </div>

      {/* Card Info */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
          <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-red)', fontWeight: '700' }}>
            {product.category}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#111111', fontSize: '0.75rem' }}>
            <Star size={11} fill="#f4e090" color="#d4af37" />
            <span style={{ fontWeight: '700' }}>{product.rating}</span>
          </div>
        </div>

        <h3 style={{ fontSize: '0.98rem', color: '#111111', fontWeight: '700', marginBottom: '0.35rem', lineHeight: 1.3 }}>
          {product.name}
        </h3>

        <p style={{
          fontSize: '0.78rem',
          color: 'var(--color-muted)',
          lineHeight: 1.5,
          marginBottom: '0.75rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {product.description}
        </p>

        {/* Botanical Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '1rem', marginTop: 'auto' }}>
          {product.flowers.map((flower, i) => (
            <span key={i} style={{
              fontSize: '0.65rem',
              background: '#f5f5f7',
              border: '1px solid #eeeeee',
              borderRadius: '999px',
              padding: '0.15rem 0.45rem',
              color: '#333333'
            }}>
              🌸 {flower}
            </span>
          ))}
        </div>

      </div>

      {/* Price & Add Button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.75rem',
        borderTop: '1px solid #f0f0f0'
      }}>
        <div>
          <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--color-red)' }}>
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span style={{ fontSize: '0.78rem', color: 'var(--color-light-muted)', textDecoration: 'line-through', marginLeft: '0.4rem' }}>
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="btn-primary"
          style={{ padding: '0.45rem 0.8rem', fontSize: '0.78rem', gap: '0.3rem' }}
        >
          <ShoppingBag size={13} /> Add
        </button>
      </div>

    </div>
  );
}
