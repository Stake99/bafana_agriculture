'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

interface AboutProps {
  heading: string;
  content: string;
}

export default function About({ heading, content }: AboutProps) {
  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-500 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-400 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/tim-mossholder-xDwEa2kaeJA-unsplash.jpg"
                  alt="Sustainable agriculture practices"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-900">2015</div>
                      <div className="text-sm text-neutral-600">Established</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Small Floating Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="hidden lg:block absolute -bottom-12 -right-12 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
              >
                <Image
                  src="/images/veronica-white-_mPYU2GLC3s-unsplash.jpg"
                  alt="Agricultural innovation"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div>
            <ScrollReveal direction="right">
              <div className="inline-block mb-4">
                <span className="text-brand-500 text-sm sm:text-base font-semibold tracking-wider uppercase">
                  Our Story
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                {heading}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8">
                {content}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="flex flex-wrap gap-8 pt-6 border-t border-neutral-200">
                <div>
                  <div className="text-3xl font-bold text-brand-500 mb-1">500+</div>
                  <div className="text-sm text-neutral-600">Farms Supported</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-500 mb-1">50+</div>
                  <div className="text-sm text-neutral-600">Expert Team</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-500 mb-1">15+</div>
                  <div className="text-sm text-neutral-600">Countries</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
