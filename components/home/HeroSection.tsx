'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollIndicator(window.scrollY < 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Construction site"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-left"
        style={{ fontFamily: 'var(--font-playfair)' }}
          >
        Building Tomorrow's Infrastructure Today
          </motion.h1>

          <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 leading-relaxed text-left"
          >
        Excellence in construction, innovation in design, and commitment to
        quality that stands the test of time
          </motion.p>
        </div>
        <div className="lg:col-span-1">
          {/* Add content for the right column here */}
        </div>
      </div>

      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-8 right-8 z-20 text-white/80 text-sm hidden lg:flex items-center space-x-2"
        >
            <a href="#services" className="hover:text-white cursor-pointer" onClick={(e) => { e.preventDefault(); scrollToNext(); }}>Scroll</a>
          <ChevronDown size={20} className="animate-bounce-slow" />
        </motion.div>
      )}
    </section>
  );
}
