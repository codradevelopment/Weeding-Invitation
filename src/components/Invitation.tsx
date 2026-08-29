import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export const Invitation: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel"
          style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--color-cream)', border: '1px solid rgba(212, 175, 55, 0.1)', boxShadow: '0 20px 50px rgba(92, 24, 39, 0.05)' }}
        >
          <p className="uppercase-label" style={{ marginBottom: '2rem' }}>
            Together with their families
          </p>
          <h2 className="title-secondary">
            {wedding.couple.firstName} & {wedding.couple.secondName}
          </h2>
          <p style={{ fontSize: '1.1rem', letterSpacing: '0.05em', marginBottom: '1.5rem', color: 'var(--color-charcoal)', opacity: 0.8 }}>
            invite you to celebrate
          </p>
          <h3 className="subtitle" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            the beginning of their forever.
          </h3>
          <div className="gold-divider" style={{ marginTop: '3rem', marginBottom: '0' }} />
        </motion.div>
      </div>
    </section>
  );
};
