import React from 'react';
import { Star, Heart, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function CustomerReviews() {
  return (
    <section style={{ padding: '4.5rem 1.5rem', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem' }}>
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
            <Heart size={12} fill="#e63946" /> CUSTOMER REVIEWS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', color: '#1a1115', marginBottom: '0.75rem' }}>
            Loved by <span className="gradient-text-rose">Jewelry Enthusiasts</span>
          </h2>
          <p style={{ color: '#5e4650', fontSize: '1rem', lineHeight: 1.6 }}>
            Real reviews from customers who purchased our handcrafted botanical resin earrings, pendants, and couple sets.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {TESTIMONIALS.map(item => (
            <div 
              key={item.id}
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#ffffff',
                border: '1px solid rgba(230, 57, 70, 0.18)',
                position: 'relative'
              }}
            >
              <Quote size={32} color="rgba(230, 57, 70, 0.2)" style={{ position: 'absolute', top: '20px', right: '20px' }} />

              <div>
                <div style={{ display: 'flex', gap: '0.2rem', color: '#d4af37', marginBottom: '1rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#d4af37" color="#d4af37" />
                  ))}
                </div>

                <p style={{ color: '#1a1115', fontSize: '0.95rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{item.comment}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', pt: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <img src={item.avatar} alt={item.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #e63946' }} />
                <div>
                  <h4 style={{ color: '#1a1115', fontSize: '0.95rem', fontWeight: '700' }}>{item.name}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#e63946', display: 'block', fontWeight: '600' }}>Verified Buyer • {item.product}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
