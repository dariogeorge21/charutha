'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = (ref.current as HTMLElement).getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 lg:py-40">
      <div
        className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700 ease-out"
        style={{
          transform: `scale(${1 + scrollY * 0.1})`,
          willChange: 'transform',
        }}
      >
        {/* Black fallback background for when video is loading or fails */}
        <div className="absolute inset-0 bg-black z-0" />
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://www.pexels.com/download/video/2274600/?auto=compress&cs=tinysrgb&w=1920"
          title="Construction services"
          className="w-full h-full object-cover scale-110 group-hover:scale-115 transition-transform duration-700 ease-out z-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-italian-cream/40 via-italian-taupe/30 to-italian-navy/50 z-10 group-hover:from-italian-cream/30 group-hover:to-italian-navy/40 transition-all duration-700" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-wide"
          style={{ fontFamily: 'var(--font-italiana)', letterSpacing: '0.02em', lineHeight: '1.3' }}
        >
          Comprehensive Construction Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-12 max-w-4xl mx-auto"
          style={{ lineHeight: '1.7' }}
        >
          From groundbreaking infrastructure projects to intricate architectural
          designs, we bring expertise, innovation, and dedication to every build
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <Link
            href="/services"
            className="inline-flex items-center space-x-4 group"
          >
            <span className="text-white text-xl font-medium tracking-wide">
              Explore Our Services
            </span>
            <div className="w-14 h-14 rounded-full bg-italian-terracotta/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-italian-terracotta group-hover:scale-110 group-hover:shadow-lg group-hover:-translate-y-1">
              <ArrowRight className="text-white" size={24} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
