'use client';

import { Service } from '@/lib/types';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

interface ServicesProps {
  services: readonly Service[];
}

export default function Services({ services }: ServicesProps) {
  const icons = [
    // Consultation icon
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Training icon
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>,
    // Analytics icon
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
    // Technology icon
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ];

  return (
    <section 
      id="services" 
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Floating Background Images */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-20 right-10 w-64 h-64 rounded-full overflow-hidden hidden lg:block"
      >
        <Image
          src="/images/land-o-lakes-inc-wXRnVhcenjk-unsplash.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full overflow-hidden hidden lg:block"
      >
        <Image
          src="/images/sam-carter-GHOiyov2TSQ-unsplash.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <ScrollReveal>
            <span className="text-brand-500 text-sm sm:text-base font-semibold tracking-wider uppercase mb-4 block">
              What We Offer
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Our Services
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive solutions for sustainable animal agriculture
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <article 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-brand-500 hover:-translate-y-2"
                aria-labelledby={`service-${service.id}`}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {icons[index]}
                </div>

                <h3 id={`service-${service.id}`} className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 leading-tight group-hover:text-brand-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-brand-500 font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
