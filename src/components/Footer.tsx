import React from 'react';
import { wedding } from '../data/wedding';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: 'linear-gradient(to bottom, var(--color-burgundy), var(--color-burgundy-dark))', color: 'var(--color-ivory)', padding: '8rem 2rem 4rem', textAlign: 'center', position: 'relative' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem', color: 'var(--color-gold)', textShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
          {wedding.couple.firstName} & {wedding.couple.secondName}
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.9, marginBottom: '3rem', color: 'var(--color-gold-light)' }}>
          Forever starts here.
        </p>
        <div className="gold-divider" style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold-light), transparent)' }} />
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '0.3em', marginTop: '2rem', color: 'var(--color-ivory)' }}>
          20 &middot; 09 &middot; 2026
        </div>
      </div>
    </footer>
  );
};
