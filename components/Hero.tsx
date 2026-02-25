'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  headline: string;
  rating: {
    score: string;
    reviews: string;
  };
  subheading: string;
  onGetStartedClick: () => void;
}

export default function Hero({ headline, rating, subheading, onGetStartedClick }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/karsten-wurth-UbGYPMbMYP8-unsplash.jpg"
          alt="Sustainable agriculture landscape with wind turbines"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/70 via-neutral-900/50 to-neutral-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="text-brand-400 text-sm sm:text-base font-medium tracking-wider uppercase">
              Future of Agriculture
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            id="hero-heading" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            {headline}
          </motion.h1>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              onClick={onGetStartedClick}
              className="inline-flex items-center px-8 py-4 bg-brand-500 text-neutral-900 font-semibold rounded-full hover:bg-brand-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              Learn More
            </a>
          </motion.div>

          {/* Rating Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            {/* Avatar Group */}
            <div className="flex -space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden relative">
                <Image
                  src="/images/people/aiony-haust-3TLl_97HNJo-unsplash.jpg"
                  alt="Customer testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden relative">
                <Image
                  src="/images/people/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
                  alt="Customer testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden relative">
                <Image
                  src="/images/people/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
                  alt="Customer testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 border-2 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                +30K
              </div>
            </div>
            
            {/* Rating Text */}
            <div className="text-white/90">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm">
                Our services are rated at <span className="font-semibold">{rating.score}</span> based on over <span className="font-semibold">{rating.reviews}</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Video Card - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden lg:block absolute bottom-12 right-12 w-80 h-48 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/veronica-white-_mPYU2GLC3s-unsplash.jpg"
              alt="Watch from our Founder"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 text-neutral-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 text-white">
                <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                <span className="text-sm font-medium">Watch from our Founder</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
