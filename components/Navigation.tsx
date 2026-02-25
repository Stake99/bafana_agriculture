'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_ITEMS } from '@/lib/constants';
import { motion } from 'framer-motion';

interface NavigationProps {
  onGetStartedClick: () => void;
}

export default function Navigation({ onGetStartedClick }: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll for background change
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer to track current section
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#hero" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Bafana Agricultural Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <span className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-neutral-900' : 'text-white'
              }`}>
                Bafana
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                  activeSection === item.id
                    ? 'text-brand-500'
                    : isScrolled
                    ? 'text-neutral-700 hover:text-brand-500'
                    : 'text-white/90 hover:text-white'
                }`}
                aria-label={`Navigate to ${item.label} section`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            
            {/* CTA Button */}
            <motion.button
              onClick={onGetStartedClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-brand-500 text-white font-semibold rounded-full hover:bg-brand-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 ${
                isScrolled
                  ? 'text-neutral-700 hover:bg-neutral-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">
                {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 pt-2"
          >
            <div className="flex flex-col space-y-2 bg-white rounded-2xl p-4 shadow-xl">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    activeSection === item.id
                      ? 'bg-brand-500 text-white'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={onGetStartedClick}
                className="px-4 py-3 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-all duration-300 text-center w-full"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
