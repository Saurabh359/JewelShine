import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductCatalog({ activeCategory, setActiveCategory, onAddToCart, onQuickView }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', label: 'All Jewels' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'pendants', label: 'Pendants' },
    { id: 'bracelets', label: 'Bracelets' },
    { id: 'couples', label: 'Couple Sets' },
    { id: 'valentine', label: '💕 Valentine Specials' }
  ];

  let filtered = PRODUCTS.filter(p => {
    if (activeCategory === 'valentine') {
      if (!p.isValentineSpecial) return false;
    } else if (activeCategory !== 'all') {
      if (p.category !== activeCategory) return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchFlowers = p.flowers.some(f => f.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchFlowers) return false;
    }

    if (priceFilter === 'under400') {
      if (p.price >= 400) return false;
    } else if (priceFilter === '400to600') {
      if (p.price < 400 || p.price > 600) return false;
    } else if (priceFilter === 'over600') {
      if (p.price <= 600) return false;
    }

    return true;
  });

  filtered.sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.isFeatured ? 1 : -1;
  });

  return (
    <section id="catalog" style={{ padding: '4rem 1.5rem', background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          <span className="badge-tag" style={{ marginBottom: '0.6rem' }}>
            JEWEL SHINE CATALOG
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#111111', marginBottom: '0.5rem' }}>
            Handcrafted Resin Jewels <span style={{ color: 'var(--color-red)' }}>(₹299 - ₹899)</span>
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Every piece is hand-poured with UV optical clarity resin, encasing real preserved flowers.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div style={{
          padding: '1rem 1.25rem',
          borderRadius: '16px',
          marginBottom: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#f9f9fb',
          border: '1px solid #eeeeee'
        }}>
          
          {/* Search Box */}
          <div style={{
            position: 'relative',
            flex: '1 1 240px',
            maxWidth: '380px'
          }}>
            <Search size={16} color="#888888" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search flowers, pendants, earrings..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 1rem 0.6rem 2.5rem',
                borderRadius: '999px',
                background: '#ffffff',
                border: '1px solid #e0e0e0',
                color: '#111111',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Price Range Filter & Sort Controls */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: '600' }}>Price:</span>
              <select
                value={priceFilter}
                onChange={e => setPriceFilter(e.target.value)}
                style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  background: '#ffffff',
                  border: '1px solid #e0e0e0',
                  color: '#111111',
                  fontSize: '0.8rem',
                  outline: 'none',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                <option value="all">All Prices (₹299 - ₹899)</option>
                <option value="under400">Under ₹400</option>
                <option value="400to600">₹400 - ₹600</option>
                <option value="over600">Over ₹600</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: '600' }}>Sort:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  background: '#ffffff',
                  border: '1px solid #e0e0e0',
                  color: '#111111',
                  fontSize: '0.8rem',
                  outline: 'none',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

          </div>

        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.6rem',
          justifyContent: 'center',
          marginBottom: '2.5rem'
        }}>
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '999px',
                  border: isActive ? '1px solid var(--color-red)' : '1px solid #eeeeee',
                  background: isActive ? 'var(--color-red)' : '#ffffff',
                  color: isActive ? '#ffffff' : '#444444',
                  fontWeight: isActive ? '700' : '600',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: '#f9f9fb',
            borderRadius: '16px',
            border: '1px dashed #dddddd'
          }}>
            <Sparkles size={36} color="var(--color-red)" style={{ marginBottom: '0.85rem' }} />
            <h3 style={{ fontSize: '1.3rem', color: '#111', marginBottom: '0.4rem' }}>No resin jewels found</h3>
            <p style={{ color: '#666', fontSize: '0.88rem', marginBottom: '1.25rem' }}>Try resetting your filter selection.</p>
            <button onClick={() => { setActiveCategory('all'); setSearchQuery(''); setPriceFilter('all'); }} className="btn-primary">
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.75rem'
          }}>
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
