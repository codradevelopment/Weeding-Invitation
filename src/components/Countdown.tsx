import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(`${wedding.date}T18:00:00`).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-burgundy)', color: 'var(--color-ivory)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(212,175,55,0.1) 0%, transparent 70%)', zIndex: 0 }} />
      <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <h2 className="title-secondary" style={{ color: 'var(--color-gold-light)' }}>Counting Down to Forever</h2>
          <div className="gold-divider" style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold-light), transparent)', marginBottom: '4rem' }} />
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((unit, idx) => (
              <motion.div 
                key={idx} 
                className="glass-panel"
                whileHover={{ y: -5 }}
                style={{ textAlign: 'center', minWidth: '140px', backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(212,175,55,0.3)', padding: '2rem 1rem' }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', lineHeight: 1, color: 'var(--color-ivory)', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '1rem', color: 'var(--color-gold-light)' }}>
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
