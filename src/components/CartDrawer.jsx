import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Tag, ArrowRight, Heart } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedToCheckout, couponCode, setCouponCode }) {
  const [promoInput, setPromoInput] = useState(couponCode || '');
  const [appliedDiscount, setAppliedDiscount] = useState(couponCode === 'VALENTINE2026' ? 0.20 : 0);
  const [couponMsg, setCouponMsg] = useState(couponCode ? 'VALENTINE2026 Applied (20% OFF)' : '');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const shippingThreshold = 499;
  const freeShipping = subtotal >= shippingThreshold;
  const shippingCost = (subtotal === 0 || freeShipping) ? 0 : 50;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const cleanCode = promoInput.trim().toUpperCase();
    if (cleanCode === 'VALENTINE2026') {
      setAppliedDiscount(0.20);
      setCouponCode('VALENTINE2026');
      setCouponMsg('20% Valentine Discount Applied!');
    } else if (cleanCode === 'COUPLELOVE') {
      setAppliedDiscount(0.15);
      setCouponCode('COUPLELOVE');
      setCouponMsg('15% Couple Special Applied!');
    } else {
      setCouponMsg('Invalid Promo Code');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ justifyContent: 'flex-end', padding: 0 }}>
      <div
        className="modal-content-anim"
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100vh',
          background: '#ffffff',
          borderLeft: '1px solid rgba(230, 57, 70, 0.25)',
          boxShadow: '-10px 0 35px rgba(230, 57, 70, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1.5rem'
        }}
      >
        {/* Header */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(230, 57, 70, 0.15)', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShoppingBag size={22} color="#e63946" />
              <h2 style={{ fontSize: '1.25rem', color: '#1a1115', fontWeight: '700' }}>Shopping Bag ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</h2>
            </div>
            <button 
              onClick={onClose}
              style={{
                background: 'rgba(230, 57, 70, 0.1)',
                border: 'none',
                color: '#e63946',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Shipping Progress */}
          <div style={{
            background: '#fff0f3',
            border: '1px solid rgba(230, 57, 70, 0.2)',
            borderRadius: '12px',
            padding: '0.85rem',
            marginBottom: '1.25rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#5e4650', marginBottom: '0.4rem', fontWeight: '600' }}>
              <span>{freeShipping ? '🎉 You unlocked FREE Express Shipping!' : `Add ₹${shippingThreshold - subtotal} more for FREE Express Shipping`}</span>
              <span style={{ fontWeight: '700', color: '#e63946' }}>{Math.min(100, Math.round((subtotal / shippingThreshold) * 100))}%</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(0,0,0,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{
                width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #e63946, #ff758f)',
                borderRadius: '3px',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>
        </div>

        {/* Item List */}
        <div style={{ flex: 1, overflowY: 'auto', margin: '0 -0.5rem', padding: '0 0.5rem 1rem' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#5e4650' }}>
              <ShoppingBag size={48} color="#8c737d" style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <h3 style={{ fontSize: '1.1rem', color: '#1a1115', marginBottom: '0.5rem', fontWeight: '700' }}>Your bag is empty</h3>
              <p style={{ fontSize: '0.85rem' }}>Add botanical resin jewels from our catalog to get started!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cartItems.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '0.85rem',
                  background: '#fff0f3',
                  border: '1px solid rgba(230, 57, 70, 0.15)',
                  padding: '0.85rem',
                  borderRadius: '14px',
                  alignItems: 'center'
                }}>
                  <img src={item.image} alt={item.name} style={{ width: '65px', height: '65px', borderRadius: '10px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.9rem', color: '#1a1115', marginBottom: '0.2rem', fontWeight: '700' }}>{item.name}</h4>
                    <span style={{ fontSize: '0.88rem', color: '#e63946', fontWeight: '700', display: 'block', marginBottom: '0.4rem' }}>
                      ₹{item.price}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.15)', color: '#1a1115', borderRadius: '4px', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#1a1115' }}>{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.15)', color: '#1a1115', borderRadius: '4px', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    style={{ background: 'none', border: 'none', color: '#8c737d', cursor: 'pointer', padding: '0.4rem' }}
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pricing Footer & Checkout */}
        {cartItems.length > 0 && (
          <div style={{ borderTop: '1px solid rgba(230, 57, 70, 0.15)', paddingTop: '1rem' }}>
            
            {/* Promo Form */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <input
                type="text"
                placeholder="Coupon e.g. VALENTINE2026"
                value={promoInput}
                onChange={e => setPromoInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.6rem 0.85rem',
                  borderRadius: '10px',
                  background: '#fff0f3',
                  border: '1px solid rgba(230, 57, 70, 0.25)',
                  color: '#1a1115',
                  fontSize: '0.82rem',
                  outline: 'none',
                  fontWeight: '600'
                }}
              />
              <button type="submit" className="btn-secondary" style={{ padding: '0.6rem 1rem', fontSize: '0.8rem' }}>
                Apply
              </button>
            </form>

            {couponMsg && (
              <p style={{ fontSize: '0.78rem', color: appliedDiscount > 0 ? '#2a7b57' : '#e63946', marginBottom: '0.75rem', textAlign: 'center', fontWeight: '600' }}>
                {couponMsg}
              </p>
            )}

            {/* Price Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#5e4650', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e63946', fontWeight: '600' }}>
                  <span>Valentine Discount ({(appliedDiscount * 100)}%):</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Estimated Shipping:</span>
                <span>{freeShipping ? 'FREE' : `₹${shippingCost}`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: '800', color: '#1a1115', pt: '0.4rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                <span>Total:</span>
                <span style={{ color: '#e63946' }}>₹{finalTotal}</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <Heart size={16} fill="#fff" /> Proceed to Checkout <ArrowRight size={16} />
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
