import React, { useState } from 'react';
import { X, CheckCircle, Heart, CreditCard, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, cartItems, onClearCart, couponCode }) {
  const [step, setStep] = useState('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    giftNote: '',
    paymentMethod: 'upi'
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountRate = couponCode === 'VALENTINE2026' ? 0.20 : couponCode === 'COUPLELOVE' ? 0.15 : 0;
  const discount = Math.round(subtotal * discountRate);
  const total = Math.max(0, subtotal - discount);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setStep('success');

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e63946', '#ff4d6d', '#d4af37', '#ffffff']
    });

    onClearCart();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content-anim glass-panel"
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '650px',
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
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {step === 'form' ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(230, 57, 70, 0.15)', paddingBottom: '1rem' }}>
              <Heart size={22} color="#e63946" fill="#e63946" />
              <h2 style={{ fontSize: '1.4rem', color: '#1a1115', fontWeight: '700' }}>Checkout & Gift Delivery</h2>
            </div>

            <form onSubmit={handleSubmitOrder}>
              
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', color: '#1a1115', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: '600' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ananya Sharma"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: '#fff0f3',
                    border: '1px solid rgba(230, 57, 70, 0.25)',
                    color: '#1a1115',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', color: '#1a1115', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: '600' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ananya@example.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: '#fff0f3',
                    border: '1px solid rgba(230, 57, 70, 0.25)',
                    color: '#1a1115',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', color: '#1a1115', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: '600' }}>
                  Shipping Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  placeholder="House No, Street, City, Pincode, State"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: '#fff0f3',
                    border: '1px solid rgba(230, 57, 70, 0.25)',
                    color: '#1a1115',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: '#e63946', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: '700' }}>
                  💌 Romantic Message (Optional note inside box)
                </label>
                <textarea
                  rows={3}
                  value={formData.giftNote}
                  onChange={e => setFormData({ ...formData, giftNote: e.target.value })}
                  placeholder="Write a message for your special someone..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    background: '#fff0f3',
                    border: '1px solid rgba(230, 57, 70, 0.3)',
                    color: '#1a1115',
                    outline: 'none',
                    resize: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              {/* Order Total Preview */}
              <div style={{
                background: '#fff0f3',
                border: '1px solid rgba(230, 57, 70, 0.2)',
                borderRadius: '14px',
                padding: '1rem',
                marginBottom: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#5e4650', display: 'block', fontWeight: '600' }}>Total Payable Amount</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#e63946' }}>₹{total}</span>
                </div>
                <span className="badge-valentine">FREE GIFT BOX INCLUDED</span>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}
              >
                <Sparkles size={18} /> Place Order - ₹{total}
              </button>
            </form>
          </div>
        ) : (
          /* Order Confirmation */
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #e63946, #2a7b57)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 20px rgba(42, 123, 87, 0.3)'
            }}>
              <CheckCircle size={40} color="#fff" />
            </div>

            <h2 style={{ fontSize: '1.8rem', color: '#1a1115', marginBottom: '0.5rem', fontWeight: '700' }}>
              Order Placed Successfully! 🌸
            </h2>

            <p style={{ color: '#5e4650', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#1a1115' }}>{formData.name}</strong>! Your handcrafted botanical resin jewels are being hand-packaged. A tracking email has been sent to <strong style={{ color: '#e63946' }}>{formData.email}</strong>.
            </p>

            {formData.giftNote && (
              <div style={{
                background: '#fff0f3',
                border: '1px dashed #e63946',
                borderRadius: '14px',
                padding: '1rem',
                marginBottom: '1.5rem',
                fontStyle: 'italic',
                color: '#e63946'
              }}>
                " {formData.giftNote} "
              </div>
            )}

            <button onClick={onClose} className="btn-primary">
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
