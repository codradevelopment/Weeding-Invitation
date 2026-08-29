import React from 'react';
import { Hero } from './components/Hero';
import { Invitation } from './components/Invitation';
import { Story } from './components/Story';
import { WeddingDetails } from './components/WeddingDetails';
import { Countdown } from './components/Countdown';
import { Gallery } from './components/Gallery';
import { Wishes } from './components/Wishes';
import { Footer } from './components/Footer';

function App() {
  return (
    <main>
      <Hero />
      <Invitation />
      <Story />
      <WeddingDetails />
      <Countdown />
      <Gallery />
      <Wishes />
      <Footer />
    </main>
  );
}

export default App;
