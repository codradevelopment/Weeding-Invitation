import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export const Invitation: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            Together with their families
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--color-burgundy)' }}>
            {wedding.couple.firstName} & {wedding.couple.secondName}
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', letterSpacing: '0.05em', marginBottom: '1.5rem', opacity: 0.8 }}>
            invite you to celebrate
          </p>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontStyle: 'italic' }}>
            the beginning of their forever.
          </h3>
          <div className="gold-divider" />
        </motion.div>
      </div>
    </section>
  );
};
