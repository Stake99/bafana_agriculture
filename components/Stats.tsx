'use client';

import { Stat } from '@/lib/types';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

interface StatsProps {
  stats: readonly Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section 
      id="stats" 
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-900 relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src="/images/stijn-te-strake-UdhpcfImQ9Y-unsplash.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/20" />
      </motion.div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div 
                className="text-center group"
                role="group"
                aria-label={`${stat.value} ${stat.label}`}
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-400 mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {stat.value}
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl text-white/80 font-medium">
                  {stat.label}
                </div>
                {/* Decorative line */}
                <div className="mt-6 h-1 w-16 bg-brand-500 mx-auto rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
