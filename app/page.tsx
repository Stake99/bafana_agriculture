'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Values from '@/components/Values';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { HERO_CONTENT, STATS, ABOUT_CONTENT, SERVICES, VALUES, LEADERS } from '@/lib/constants';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navigation onGetStartedClick={() => setIsModalOpen(true)} />
      <main className="min-h-screen">
        <Hero {...HERO_CONTENT} onGetStartedClick={() => setIsModalOpen(true)} />
        <Stats stats={STATS} />
        <About {...ABOUT_CONTENT} />
        <Services services={SERVICES} />
        <Values values={VALUES} />
        <Leadership leaders={LEADERS} />
        <Contact />
      </main>
      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
