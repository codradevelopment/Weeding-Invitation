import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export const Gallery: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div className="uppercase-label" style={{ marginBottom: '1.5rem' }}>Gallery</div>
          <h2 className="title-secondary">Moments Along The Way</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '0 1rem' }}>
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', aspectRatio: idx % 3 === 0 ? '4/5' : '1/1', marginTop: idx % 2 === 1 ? '3rem' : '0' }}
            >
              <motion.img 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
