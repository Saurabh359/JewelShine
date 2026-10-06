import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Sun, Heart } from 'lucide-react';

export default function Hero({ onOpenPamphlet, onScrollToCatalog, onScrollToCouples }) {
  return (
    <section id="hero" style={{
      padding: '4.5rem 1.5rem 4rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #fff5f7 0%, #ffffff 100%)'
    }}>
      
      {/* Beautiful Ambient Background Glows */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 117, 143, 0.22) 0%, rgba(255, 240, 243, 0.5) 45%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(244, 224, 144, 0.25) 0%, transparent 65%)',
        filter: 'blur(70px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Text */}
          <div>
            <div className="badge-tag pulse-glow" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={13} color="var(--color-red)" /> HANDCRAFTED RESIN JEWELRY
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              lineHeight: 1.1,
              marginBottom: '1.2rem',
              color: '#111111'
            }}>
              Jewel Shine. <br />
              <span style={{ color: 'var(--color-red)' }}>Real Flowers Preserved in Resin.</span>
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--color-muted)',
              marginBottom: '2.2rem',
              maxWidth: '520px',
              lineHeight: 1.7
            }}>
              Exquisite hand-poured botanical resin earrings, pendants, and couple sets embedded with genuine pressed blossoms. Priced between ₹299 and ₹899.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <button onClick={onScrollToCatalog} className="btn-primary">
                Explore Catalog (From ₹299) <ArrowRight size={16} />
              </button>
              <button onClick={onScrollToCouples} className="btn-secondary">
                <Heart size={15} color="var(--color-red)" /> Couple Sets
              </button>
            </div>

            {/* Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              borderTop: '1px solid rgba(230, 57, 70, 0.15)',
              paddingTop: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Sun size={18} color="var(--color-red)" />
                <div>
                  <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#111', display: 'block' }}>Real Flowers</span>
                  <span style={{ fontSize: '0.72rem', color: '#666' }}>100% Organic Flora</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldCheck size={18} color="var(--color-red)" />
                <div>
                  <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#111', display: 'block' }}>Crystal Clear</span>
                  <span style={{ fontSize: '0.72rem', color: '#666' }}>UV Non-Yellowing</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Sparkles size={18} color="#d4af37" />
                <div>
                  <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#111', display: 'block' }}>Gift Box</span>
                  <span style={{ fontSize: '0.72rem', color: '#666' }}>Free Delivery ₹499+</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div style={{ position: 'relative' }}>
            <div className="floating" style={{
              padding: '0.85rem',
              borderRadius: '24px',
              background: '#ffffff',
              border: '1px solid rgba(230, 57, 70, 0.2)',
              boxShadow: '0 15px 40px rgba(230, 57, 70, 0.12)',
              position: 'relative',
              maxWidth: '400px',
              margin: '0 auto'
            }}>
              <img 
                src="/images/resin-4.jpg" 
                alt="Jewel Shine Rosewood Romance Heart Pendant" 
                style={{
                  width: '100%',
                  height: '360px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '0.85rem 1rem',
                borderRadius: '14px',
                border: '1px solid rgba(230, 57, 70, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--color-red)', fontWeight: '700', textTransform: 'uppercase' }}>
                    Jewel Shine Collection
                  </span>
                  <h3 style={{ fontSize: '0.95rem', color: '#111', fontWeight: '700' }}>Rosewood Romance Heart</h3>
                </div>
                <span style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--color-red)' }}>₹599</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
