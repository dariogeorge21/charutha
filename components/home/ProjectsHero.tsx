'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsHero() {
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
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-100">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 100}px)`,
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60 z-10 -mt-100" />
        <img
          src="https://images.pexels.com/photos/51325/industry-sunset-port-facility-mood-51325.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Construction projects"
          className="w-full h-full object-cover"
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
          Our Portfolio of Excellence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Discover the landmarks we've built, the communities we've shaped, and
          the futures we've constructed across diverse sectors
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-3 group"
          >
            <span className="text-white text-lg font-medium">
              View Our Projects
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
