import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Leave a Wish</h2>
          <p style={{ fontStyle: 'italic', opacity: 0.8, fontSize: '1.25rem' }}>Your words will become part of their story.</p>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '5rem' }}>
          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center" style={{ padding: '3rem', border: '1px solid var(--color-gold)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem' }}>Thank you</h3>
              <p style={{ fontStyle: 'italic', opacity: 0.8 }}>Thank you for being part of their special day.</p>
              <button onClick={() => setSubmitted(false)} style={{ marginTop: '2rem', textDecoration: 'underline', color: 'var(--color-burgundy)' }}>Leave another wish</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Your Name</label>
                <input 
                  type="text" 
                  value={name} onChange={(e) => setName(e.target.value)} required
                  style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', backgroundColor: 'transparent', fontFamily: 'inherit', fontSize: '1rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Your Wish</label>
                <textarea 
                  rows={4} value={text} onChange={(e) => setText(e.target.value)} required
                  style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', backgroundColor: 'transparent', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Send Your Wish</button>
            </form>
          )}
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {wishes.map((w, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.6 }}>"{w.text}"</p>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>&mdash; {w.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
