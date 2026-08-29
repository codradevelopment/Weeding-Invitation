import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export const WeddingDetails: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>The Celebration</h2>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '0.1em', marginBottom: '4rem', opacity: 0.8 }}>
            20 September 2026
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-gold)' }}>Ceremony</h4>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>{wedding.ceremony}</p>
            </div>
            
            <div>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-gold)' }}>Venue</h4>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{wedding.venue.name}</p>
              <p style={{ opacity: 0.7, marginBottom: '1.5rem' }}>{wedding.venue.address}</p>
              
              <a 
                href={wedding.venue.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(wedding.venue.name + ' ' + wedding.venue.address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: '0.75rem', padding: '0.75rem 1.5rem' }}
              >
                Get Directions
              </a>
            </div>

            <div>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-gold)' }}>Reception</h4>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>{wedding.reception}</p>
            </div>
          </div>

          <div style={{ marginTop: '5rem' }}>
             <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.7 }}>Dress Code</h4>
             <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem' }}>{wedding.dressCode}</h3>
             <p style={{ fontStyle: 'italic', opacity: 0.8 }}>Come dressed to celebrate.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
