'use client';

import { Leader } from '@/lib/types';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

interface LeadershipProps {
  leaders: readonly Leader[];
}

export default function Leadership({ leaders }: LeadershipProps) {
  return (
    <section 
      id="leadership" 
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 relative overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      {/* Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-br from-brand-500 via-transparent to-brand-400"
      />

      {/* Floating Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute inset-0"
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
              Meet Our Team
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 id="leadership-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
              Leadership
            </h2>
          </ScrollReveal>
        </div>
        
        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {leaders.map((leader, index) => {
            const leaderImages = [
              '/images/people/ian-dooley-d1UPkiFd04A-unsplash.jpg',
              '/images/people/aiony-haust-3TLl_97HNJo-unsplash.jpg'
            ];
            
            return (
              <ScrollReveal key={leader.id} delay={index * 0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
                <article 
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  aria-labelledby={`leader-${leader.id}`}
                >
                  {/* Image Section */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-80 bg-gradient-to-br from-brand-100 to-brand-200 overflow-hidden"
                  >
                    <motion.div
                      initial={{ scale: 1.2, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={leaderImages[index]}
                        alt={`${leader.name} - ${leader.title}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                    
                    {/* Social Links */}
                    <div className="absolute top-6 right-6 flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 id={`leader-${leader.id}`} className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
                      {leader.name}
                    </h3>
                    
                    <p className="text-lg text-brand-600 font-semibold mb-6">
                      {leader.title}
                    </p>
                    
                    {leader.quote && (
                      <blockquote className="relative">
                        <svg className="absolute -top-2 -left-2 w-8 h-8 text-brand-200" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                        </svg>
                        <p className="text-base sm:text-lg text-neutral-600 italic leading-relaxed pl-6">
                          "{leader.quote}"
                        </p>
                      </blockquote>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
