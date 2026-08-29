import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { wedding } from '../data/wedding';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="hero" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', zIndex: 0 }}>
      <motion.div 
        style={{
          position: 'absolute', top: '-10%', left: 0, width: '100%', height: '120%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.6) contrast(1.1)',
          zIndex: -1,
          y: y1
        }}
      />
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center" 
        style={{ color: 'var(--color-ivory)', opacity: textOpacity }}
      >
        <div className="uppercase-label" style={{ color: 'var(--color-ivory)', marginBottom: '2rem', letterSpacing: '0.4em' }}>
          A BEAUTIFUL BEGINNING
        </div>
        <h1 className="title-primary" style={{ color: 'var(--color-ivory)', textShadow: '0 10px 30px rgba(0,0,0,0.5)', fontSize: 'clamp(4rem, 10vw, 8rem)', margin: 0, letterSpacing: '-0.02em' }}>
          {wedding.couple.firstName}
        </h1>
        <h2 className="subtitle" style={{ margin: '0', color: 'var(--color-gold-light)', textShadow: '0 5px 15px rgba(0,0,0,0.5)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontStyle: 'italic', fontWeight: 300 }}>
          &
        </h2>
        <h1 className="title-primary" style={{ color: 'var(--color-ivory)', textShadow: '0 10px 30px rgba(0,0,0,0.5)', fontSize: 'clamp(4rem, 10vw, 8rem)', margin: 0, letterSpacing: '-0.02em' }}>
          {wedding.couple.secondName}
        </h1>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{ position: 'absolute', bottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--color-ivory)', opacity: textOpacity }}
      >
        <span className="uppercase-label" style={{ color: 'var(--color-ivory)', fontSize: '0.7rem', opacity: 0.8 }}>Scroll to Discover</span>
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--color-gold-light), transparent)' }}
        />
      </motion.div>
    </section>
  );
};
