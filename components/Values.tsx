'use client';

import { Value } from '@/lib/types';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

interface ValuesProps {
  values: readonly Value[];
}

export default function Values({ values }: ValuesProps) {
  return (
    <section 
      id="values" 
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      aria-labelledby="values-heading"
    >
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/stijn-te-strake-UdhpcfImQ9Y-unsplash.jpg"
          alt="Agricultural landscape"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Floating Decorative Images */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-20 right-0 w-72 h-72 rounded-l-full overflow-hidden hidden xl:block"
      >
        <Image
          src="/images/land-o-lakes-inc-wXRnVhcenjk-unsplash.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 0.55, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute bottom-20 left-0 w-64 h-64 rounded-r-full overflow-hidden hidden xl:block"
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
              Our Principles
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 id="values-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Our Values
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              The principles that guide our approach to sustainable animal agriculture
            </p>
          </ScrollReveal>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={value.id} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
              <article 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:border-brand-500"
                aria-labelledby={`value-${value.id}`}
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 text-brand-600 font-bold text-lg mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  {index + 1}
                </div>

                <h3 id={`value-${value.id}`} className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 leading-tight group-hover:text-brand-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative element */}
                <div className="mt-6 h-1 w-12 bg-brand-500 rounded-full group-hover:w-24 transition-all duration-500" />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
