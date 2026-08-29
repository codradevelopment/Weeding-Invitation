import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { MapPin, Clock, Navigation } from 'lucide-react';

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
          <div className="uppercase-label" style={{ marginBottom: '1.5rem' }}>Join Us</div>
          <h2 className="title-secondary">The Celebration</h2>
          <div className="subtitle" style={{ marginBottom: '4rem', opacity: 0.9 }}>
            20 September 2026
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div className="glass-panel" whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Clock size={32} color="var(--color-gold)" style={{ margin: '0 auto 1.5rem' }} />
              <h4 className="uppercase-label" style={{ marginBottom: '1rem', color: 'var(--color-burgundy)' }}>Ceremony</h4>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-charcoal)' }}>{wedding.ceremony}</p>
            </motion.div>
            
            <motion.div className="glass-panel" whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }} style={{ backgroundColor: 'var(--color-burgundy)', color: 'var(--color-ivory)' }}>
              <MapPin size={32} color="var(--color-gold)" style={{ margin: '0 auto 1.5rem' }} />
              <h4 className="uppercase-label" style={{ marginBottom: '1rem', color: 'var(--color-gold-light)' }}>Venue</h4>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--color-ivory)' }}>{wedding.venue.name}</p>
              <p style={{ opacity: 0.8, marginBottom: '2rem', fontSize: '0.9rem' }}>{wedding.venue.address}</p>
              
              <a 
                href={wedding.venue.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(wedding.venue.name + ' ' + wedding.venue.address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ borderColor: 'var(--color-gold-light)', color: 'var(--color-gold-light)', fontSize: '0.8rem', padding: '0.8rem 1.5rem', display: 'inline-flex', gap: '0.5rem' }}
              >
                <Navigation size={16} /> Get Directions
              </a>
            </motion.div>

            <motion.div className="glass-panel" whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Clock size={32} color="var(--color-gold)" style={{ margin: '0 auto 1.5rem' }} />
              <h4 className="uppercase-label" style={{ marginBottom: '1rem', color: 'var(--color-burgundy)' }}>Reception</h4>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-charcoal)' }}>{wedding.reception}</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ marginTop: '5rem', padding: '3rem', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', maxWidth: '600px', margin: '5rem auto 0' }}
          >
             <h4 className="uppercase-label" style={{ marginBottom: '1rem' }}>Dress Code</h4>
             <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-burgundy)' }}>{wedding.dressCode}</h3>
             <p className="subtitle" style={{ fontSize: '1.2rem', color: 'var(--color-charcoal)' }}>Come dressed to celebrate.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
