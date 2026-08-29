import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Wishes: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [wishes, setWishes] = useState([
    { name: 'Sarah & James', text: 'Wishing you a lifetime filled with love and laughter.' },
    { name: 'Aunt Eleanor', text: 'May every chapter of your story be more beautiful than the last.' },
    { name: 'The Williams Family', text: "Here's to a lifetime of beautiful memories together." }
  ]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      setWishes([{ name, text }, ...wishes]);
      setSubmitted(true);
      setName('');
      setText('');
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)', position: 'relative' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <div className="uppercase-label" style={{ marginBottom: '1.5rem' }}>Guestbook</div>
          <h2 className="title-secondary">Leave a Wish</h2>
          <p className="subtitle" style={{ fontSize: '1.25rem' }}>Your words will become part of their story.</p>
        </div>

        <div style={{ maxWidth: '700px', margin: '0 auto', marginBottom: '6rem' }}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="thanks"
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-panel text-center" 
                style={{ padding: '4rem', borderColor: 'var(--color-gold)' }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-burgundy)' }}>Thank You</h3>
                <p style={{ fontStyle: 'italic', opacity: 0.8, color: 'var(--color-charcoal)' }}>Your beautiful words have been added to our guestbook.</p>
                <button onClick={() => setSubmitted(false)} className="btn-outline" style={{ marginTop: '2.5rem' }}>Leave Another Wish</button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit} 
                className="glass-panel"
                style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
              >
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.8rem', color: 'var(--color-burgundy)', fontWeight: 500 }}>Your Name</label>
                  <input 
                    type="text" 
                    value={name} onChange={(e) => setName(e.target.value)} required
                    style={{ width: '100%', padding: '1.2rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.5)', fontFamily: 'inherit', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.8rem', color: 'var(--color-burgundy)', fontWeight: 500 }}>Your Wish</label>
                  <textarea 
                    rows={4} value={text} onChange={(e) => setText(e.target.value)} required
                    style={{ width: '100%', padding: '1.2rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.5)', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', outline: 'none', transition: 'border-color 0.3s' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf: 'center', width: '100%', padding: '1.2rem' }}>Send Your Wish</button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {wishes.map((w, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }}
              style={{ backgroundColor: 'var(--color-ivory)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.6, color: 'var(--color-charcoal)' }}>"{w.text}"</p>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 600 }}>&mdash; {w.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
