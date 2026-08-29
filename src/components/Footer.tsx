import React from 'react';
import { wedding } from '../data/wedding';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-burgundy-dark)', color: 'var(--color-ivory)', padding: '8rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>
        {wedding.couple.firstName} & {wedding.couple.secondName}
      </h2>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '2rem' }}>
        Forever starts here.
      </p>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', letterSpacing: '0.2em' }}>
        20 &middot; 09 &middot; 2026
      </div>
    </footer>
  );
};
