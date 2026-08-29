import React from 'react';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="uppercase-label" style={{ marginBottom: '2rem' }}>Their Story</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: 1.4 }}>
            "A moment became a memory. <br/> A memory became a story. <br/> And a story became forever."
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '600px', margin: '0 auto' }}>
            {[
              { title: 'THE BEGINNING', desc: 'Where it all started.' },
              { title: 'THE JOURNEY', desc: 'A thousand memories together.' },
              { title: 'THE PROMISE', desc: 'A lifetime to come.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ position: 'relative', paddingLeft: '2rem', textAlign: 'left', borderLeft: '1px solid var(--color-gold)' }}
              >
                <div style={{ 
                  position: 'absolute', left: '-5px', top: '5px', width: '9px', height: '9px', 
                  borderRadius: '50%', backgroundColor: 'var(--color-gold)' 
                }} />
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', opacity: 0.8 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
