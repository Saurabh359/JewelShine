import React, { useState, useEffect } from 'react';
import { Gift, Heart, Sparkles, Copy, Check, Clock, Printer, X, Tag } from 'lucide-react';
import { VALENTINE_PAMPHLETS } from '../data/products';

export default function ValentinePamphlet({ isOpen, onClose, onApplyCoupon }) {
  const [copiedCode, setCopiedCode] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 14, minutes: 32, seconds: 45 });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    onApplyCoupon(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const handlePrintPamphlet = () => {
    window.print();
  };

  const currentPamphlet = VALENTINE_PAMPHLETS[activeTab];

  return (
    <>
      {/* Compact Focused Valentine Offer Section */}
      <section id="valentine-section" style={{ padding: '2.5rem 1.5rem', background: '#fff0f3' }}>
        <div className="container">
          <div className="glass-panel" style={{
            background: '#ffffff',
            borderColor: 'rgba(230, 57, 70, 0.25)',
            padding: '1.75rem 2rem',
            borderRadius: '20px',
            boxShadow: '0 8px 25px rgba(230, 57, 70, 0.08)'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
              
              {/* Offer Description */}
              <div style={{ flex: '1 1 350px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e63946', fontSize: '0.78rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                  <Heart size={14} fill="#e63946" /> VALENTINE SPECIAL SALE PAMPHLET
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#1a1115', fontWeight: '700', marginBottom: '0.35rem' }}>
                  Get 20% OFF Site-wide with Coupon Code
                </h3>
                <p style={{ color: '#5e4650', fontSize: '0.9rem', margin: 0 }}>
                  Preserved real flower resin jewelry. Claim discount or download our promotional brochure flyer.
                </p>
              </div>

              {/* Promo Code Box */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: '#fff0f3',
                border: '1px dashed #e63946',
                padding: '0.6rem 1rem',
                borderRadius: '12px'
              }}>
                <Tag size={18} color="#e63946" />
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#5e4650', display: 'block' }}>COUPON CODE</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#e63946', letterSpacing: '0.05em' }}>
                    VALENTINE2026
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('VALENTINE2026')}
                  style={{
                    background: copiedCode === 'VALENTINE2026' ? '#2a7b57' : '#e63946',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.45rem 0.75rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.78rem'
                  }}
                >
                  {copiedCode === 'VALENTINE2026' ? <><Check size={13} /> Applied!</> : <><Copy size={13} /> Apply Code</>}
                </button>
              </div>

              {/* View Pamphlet Button */}
              <button
                onClick={onClose ? onClose : handlePrintPamphlet}
                className="btn-secondary"
                style={{ padding: '0.65rem 1.15rem', fontSize: '0.82rem' }}
              >
                <Printer size={15} /> Print / View Pamphlet
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Pamphlet Modal */}
      {isOpen && (
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
              border: '1px solid rgba(230, 57, 70, 0.2)'
            }}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(230, 57, 70, 0.15)', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Gift size={24} color="#e63946" />
                <h2 style={{ fontSize: '1.4rem', color: '#1a1115' }}>Valentine's Sales Pamphlets & Offers</h2>
              </div>
              <button 
                onClick={onClose}
                style={{
                  background: 'rgba(230, 57, 70, 0.1)',
                  border: 'none',
                  color: '#e63946',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Pamphlet Tabs */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              {VALENTINE_PAMPHLETS.map((pamphlet, idx) => (
                <button
                  key={pamphlet.id}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: activeTab === idx ? '1px solid #e63946' : '1px solid rgba(0,0,0,0.1)',
                    background: activeTab === idx ? '#fff0f3' : '#fcf8f9',
                    color: activeTab === idx ? '#e63946' : '#5e4650',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Heart size={16} color={activeTab === idx ? '#e63946' : '#8c737d'} />
                  {pamphlet.title}
                </button>
              ))}
            </div>

            {/* Selected Pamphlet Detailed Display */}
            <div style={{
              background: '#fff0f3',
              border: '2px solid rgba(230, 57, 70, 0.2)',
              borderRadius: '20px',
              padding: '1.75rem'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '1.75rem', alignItems: 'center' }}>
                <img
                  src={currentPamphlet.image}
                  alt={currentPamphlet.title}
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                    border: '1px solid rgba(230, 57, 70, 0.2)'
                  }}
                />

                <div>
                  <span className="badge-valentine" style={{ marginBottom: '0.75rem' }}>
                    {currentPamphlet.badge}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', color: '#1a1115', marginBottom: '0.4rem' }}>
                    {currentPamphlet.title}
                  </h3>
                  <h4 style={{ fontSize: '0.95rem', color: '#e63946', marginBottom: '0.85rem', fontWeight: '600' }}>
                    {currentPamphlet.subtitle}
                  </h4>
                  <p style={{ color: '#5e4650', fontSize: '0.88rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                    {currentPamphlet.description}
                  </p>

                  <div style={{
                    background: '#ffffff',
                    border: '1px dashed #e63946',
                    borderRadius: '12px',
                    padding: '0.85rem 1rem',
                    marginBottom: '1.25rem'
                  }}>
                    <span style={{ fontSize: '0.72rem', color: '#8c737d', display: 'block' }}>COUPON CODE</span>
                    <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#e63946', letterSpacing: '0.05em' }}>
                      {currentPamphlet.code}
                    </span>
                    <p style={{ fontSize: '0.78rem', color: '#2a7b57', marginTop: '0.2rem', fontWeight: '600' }}>
                      {currentPamphlet.discount}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      onClick={() => handleCopy(currentPamphlet.code)}
                      className="btn-valentine"
                      style={{ flex: 1, padding: '0.75rem' }}
                    >
                      {copiedCode === currentPamphlet.code ? <><Check size={16} /> Code Applied!</> : <><Copy size={16} /> Apply Code</>}
                    </button>
                    <button
                      onClick={handlePrintPamphlet}
                      className="btn-secondary"
                      style={{ padding: '0.75rem 1rem' }}
                    >
                      <Printer size={16} /> Print Flyer
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
