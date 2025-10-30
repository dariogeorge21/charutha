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
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700 ease-out"
        style={{
          transform: `scale(${1 + scrollY * 0.1})`,
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10 group-hover:from-black/50 group-hover:to-black/30 transition-all duration-700" />
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://www.pexels.com/download/video/2274600/?auto=compress&cs=tinysrgb&w=1920"
          title="Construction services"
          className="w-full h-full object-cover scale-110 group-hover:scale-115 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Comprehensive Construction Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
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
            className="inline-flex items-center space-x-3 group"
          >
            <span className="text-white text-lg font-medium">
              Explore Our Services
            </span>
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
              <ArrowRight className="text-white" size={24} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
