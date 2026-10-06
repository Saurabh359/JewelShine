import React from 'react';
import { Sun, Droplets, Sparkles, Shield } from 'lucide-react';

export default function ResinCareGuide() {
  const tips = [
    {
      icon: <Sun size={24} color="#e63946" />,
      title: 'Sunlight Protection',
      description: 'Our UV-stabilized resin is non-yellowing. Storing your jewels out of direct harsh sunlight when not wearing preserves vivid flower colors for years.'
    },
    {
      icon: <Droplets size={24} color="#e63946" />,
      title: 'Perfumes & Lotions',
      description: 'Apply your perfumes, lotions, and sprays BEFORE putting on resin jewelry to maintain a crystal clear glossy surface.'
    },
    {
      icon: <Sparkles size={24} color="#d4af37" />,
      title: 'Gentle Polishing',
      description: 'Clean gently with the provided ultra-soft microfiber cloth. Avoid harsh chemical cleaners or abrasive pads on optical resin.'
    },
    {
      icon: <Shield size={24} color="#2a7b57" />,
      title: 'Safe Storage',
      description: 'Store each piece separated in its soft velvet gift pouch to prevent fine scratches from metal keys or chains.'
    }
  ];

  return (
    <section id="care-guide" style={{ padding: '4rem 1.5rem', background: '#fff0f3' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem' }}>
          <span className="cinzel-text" style={{ fontSize: '0.8rem', color: '#e63946', letterSpacing: '0.15em', display: 'block', marginBottom: '0.4rem', fontWeight: '700' }}>
            ARTISAN CRAFT & CARE
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', color: '#1a1115', marginBottom: '0.75rem' }}>
            Preserving Your <span className="gradient-text-rose">Resin Jewels</span>
          </h2>
          <p style={{ color: '#5e4650', fontSize: '1rem', lineHeight: 1.6 }}>
            Handcrafted with organic botanical specimens suspended in crystal UV resin. Follow these simple guidelines for endless brilliance.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem'
        }}>
          {tips.map((tip, idx) => (
            <div 
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
                textAlign: 'left',
                background: '#ffffff',
                border: '1px solid rgba(230, 57, 70, 0.18)'
              }}
            >
              <div style={{
                background: '#fff0f3',
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {tip.icon}
              </div>

              <h3 style={{ fontSize: '1.15rem', color: '#1a1115', marginBottom: '0.4rem', fontWeight: '700' }}>
                {tip.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#5e4650', lineHeight: 1.6 }}>
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
