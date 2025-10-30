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
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 lg:py-40">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `scale(${1 + scrollY * 0.1})`,
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-italian-navy/60 via-italian-taupe/40 to-italian-cream/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://www.pexels.com/download/video/5567711/?auto=compress&cs=tinysrgb&w=1920"
          title="Construction projects"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-wide bg-gradient-to-br from-italian-navy via-italian-taupe to-italian-terracotta bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--font-italiana)', letterSpacing: '0.02em', lineHeight: '1.3' }}
        >
          Our Portfolio of Excellence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-12 max-w-4xl mx-auto"
          style={{ lineHeight: '1.7' }}
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
            className="inline-flex items-center space-x-4 group"
          >
            <span className="text-white text-xl font-medium tracking-wide">
              View Our Projects
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
