import React from 'react';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'transparent' }}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="uppercase-label" style={{ marginBottom: '2rem' }}>Their Story</div>
          <h2 className="title-secondary" style={{ maxWidth: '800px', margin: '0 auto 4rem', lineHeight: 1.3 }}>
            "A moment became a memory. <br/> A memory became a story. <br/> And a story became forever."
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '15px', top: '10px', bottom: '10px', width: '1px', background: 'linear-gradient(to bottom, var(--color-gold), rgba(212, 175, 55, 0.2))' }} />
            
            {[
              { title: 'THE BEGINNING', desc: 'Where it all started.', year: '2019' },
              { title: 'THE JOURNEY', desc: 'A thousand memories together.', year: '2023' },
              { title: 'THE PROMISE', desc: 'A lifetime to come.', year: '2025' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative', paddingLeft: '4rem', textAlign: 'left' }}
              >
                <div style={{ 
                  position: 'absolute', left: '10px', top: '8px', width: '11px', height: '11px', 
                  borderRadius: '50%', backgroundColor: 'var(--color-ivory)', border: '2px solid var(--color-gold)',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
                }} />
                <span className="subtitle" style={{ display: 'block', fontSize: '1.2rem', color: 'var(--color-burgundy-light)', marginBottom: '0.2rem' }}>{item.year}</span>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '0.5rem', color: 'var(--color-charcoal)' }}>{item.title}</h4>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontStyle: 'italic', opacity: 0.8, color: 'var(--color-charcoal)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
