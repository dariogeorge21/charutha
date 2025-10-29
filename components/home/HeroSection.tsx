'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollIndicator(window.scrollY < 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev < 30) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return 30;
          }
        });
      }, 50); // Increment every 50ms for smooth continuous animation

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timer);
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
          src="https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
        <div className="lg:col-span-1 flex items-center justify-center">
          <motion.div
            ref={counterRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-right"
          >
            <div className="relative inline-block">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-3xl rounded-full" />

              {/* Main counter display */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-8xl sm:text-9xl lg:text-[10rem] font-black leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 40px rgba(245, 158, 11, 0.3)',
                  }}
                >
                  {count}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="mt-4 space-y-1"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wider">
                    YEARS OF
                  </div>
                  <div
                    className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #f59e0b 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    EVOLUTION
                  </div>
                </motion.div>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="mt-6 h-1 bg-gradient-to-r from-amber-500 to-orange-600 origin-left"
                />
              </div>
            </div>
          </motion.div>
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
