import React, { useState } from 'react';
import { Sparkles, Send, Shield, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer({ onOpenPamphlet, setActiveCategory }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer style={{
      background: '#ffffff',
      borderTop: '1px solid #eeeeee',
      padding: '4rem 1.5rem 2rem',
      color: '#555555'
    }}>
      <div className="container">
        
        {/* Newsletter Banner */}
        <div style={{
          padding: '2rem',
          borderRadius: '16px',
          marginBottom: '3rem',
          background: '#f9f9fb',
          border: '1px solid #eeeeee',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <span className="badge-tag" style={{ marginBottom: '0.4rem' }}>
              JEWEL SHINE VIP
            </span>
            <h3 style={{ fontSize: '1.3rem', color: '#111111', marginBottom: '0.2rem', fontWeight: '700' }}>
              Get 10% Off Your First Order
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#666666' }}>
              Subscribe for flower restock alerts, new designs, and care guides.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', flex: '1 1 280px', maxWidth: '420px' }}>
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: '0.7rem 1rem',
                borderRadius: '999px',
                background: '#ffffff',
                border: '1px solid #dddddd',
                color: '#111111',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '0.7rem 1.25rem', fontSize: '0.85rem' }}>
              {subscribed ? 'Subscribed! 🌸' : <><Send size={14} /> Join</>}
            </button>
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'var(--color-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                <Sparkles size={16} />
              </div>
              <span className="brand-font" style={{ fontSize: '1.1rem', fontWeight: '800', color: '#111' }}>
                JEWEL <span style={{ color: 'var(--color-red)' }}>SHINE</span>
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1rem', color: '#666' }}>
              Handcrafted resin jewelry preserving organic pressed wildflowers, gold leafing, and botanical leaves in crystal clarity.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <a href="#" style={{ color: 'var(--color-red)', background: '#f5f5f7', padding: '0.45rem', borderRadius: '50%', display: 'flex' }}><Instagram size={16} /></a>
              <a href="#" style={{ color: 'var(--color-red)', background: '#f5f5f7', padding: '0.45rem', borderRadius: '50%', display: 'flex' }}><Facebook size={16} /></a>
              <a href="#" style={{ color: 'var(--color-red)', background: '#f5f5f7', padding: '0.45rem', borderRadius: '50%', display: 'flex' }}><Twitter size={16} /></a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 style={{ color: '#111111', fontSize: '0.95rem', marginBottom: '0.85rem', fontWeight: '700' }}>Collections</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem' }}>
              <li><button onClick={() => setActiveCategory('earrings')} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>Botanical Earrings (From ₹299)</button></li>
              <li><button onClick={() => setActiveCategory('pendants')} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>Flower Pendants (From ₹399)</button></li>
              <li><button onClick={() => setActiveCategory('bracelets')} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>Charm Bracelets (From ₹549)</button></li>
              <li><button onClick={() => setActiveCategory('couples')} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>Couple Sets (From ₹599)</button></li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div>
            <h4 style={{ color: '#111111', fontSize: '0.95rem', marginBottom: '0.85rem', fontWeight: '700' }}>Customer Care</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem' }}>
              <li><button onClick={onOpenPamphlet} style={{ background: 'none', border: 'none', color: 'var(--color-red)', cursor: 'pointer', fontWeight: '600' }}>Valentine Sale Pamphlet</button></li>
              <li><a href="#care-guide" style={{ color: '#666', textDecoration: 'none' }}>Resin Care & Cleaning</a></li>
              <li><a href="#couples" style={{ color: '#666', textDecoration: 'none' }}>Custom Engraving Workshop</a></li>
              <li><a href="#" style={{ color: '#666', textDecoration: 'none' }}>Free Express Delivery Over ₹499</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #eeeeee',
          paddingTop: '1.25rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          color: '#888'
        }}>
          <span>© {new Date().getFullYear()} Jewel Shine. All rights reserved. Handcrafted in India.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#2a7b57', fontWeight: '600' }}>
            <Shield size={14} /> 256-Bit SSL Encrypted Checkout
          </div>
        </div>

      </div>
    </footer>
  );
}
