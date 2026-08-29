import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export const Hero: React.FC = () => {
  return (
    <section className="hero" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div 
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.7) contrast(1.1)',
          zIndex: -1
        }}
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center" style={{ color: 'var(--color-ivory)' }}
      >
        <div className="uppercase-label" style={{ color: 'var(--color-ivory)', marginBottom: '2rem' }}>
          A BEAUTIFUL BEGINNING
        </div>
        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', margin: 0, letterSpacing: '-0.02em' }}>
          {wedding.couple.firstName}
        </h1>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontStyle: 'italic', margin: '-1rem 0', fontWeight: 300, color: 'var(--color-gold)' }}>
          &
        </h2>
        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', margin: 0, letterSpacing: '-0.02em' }}>
          {wedding.couple.secondName}
        </h1>
        <div style={{ marginTop: '3rem', fontSize: '1.25rem', letterSpacing: '0.2em', fontFamily: 'var(--font-serif)' }}>
          20 &middot; 09 &middot; 2026
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        style={{ position: 'absolute', bottom: '2rem', color: 'var(--color-ivory)', opacity: 0.8, fontSize: '0.875rem', letterSpacing: '0.1em' }}
      >
        Scroll to discover &darr;
      </motion.div>
    </section>
  );
};
