'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import SubHeader from '../SubHeader';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-italian-taupe/30 to-italian-navy/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://www.pexels.com/download/video/1197802/?auto=compress&cs=tinysrgb&w=1920"
          title="Construction site"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
        <SubHeader />
      </div>

      <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-32 items-center pt-24 sm:pt-0">
        <div className="lg:col-span-2">
          <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight tracking-wide text-left"
        style={{ fontFamily: 'var(--font-italiana)', letterSpacing: '0.02em' }}
          >
        Building Tomorrow's Infrastructure Today
          </motion.h2>

          <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed text-left"
        style={{ lineHeight: '1.7' }}
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
            <div className="relative inline-block group">
              {/* Decorative corner accents */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-italian-terracotta/40"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-italian-terracotta/40"
              />

              {/* Main counter display */}
              <div className="relative bg-italian-cream/5 backdrop-blur-sm rounded-lg p-8 sm:p-10 lg:p-12 border border-italian-cream/10 shadow-2xl">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5 rounded-lg" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(224, 120, 86, 0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }} 
                />
                
                {/* Counter number with glow effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative text-9xl sm:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-black leading-none tracking-tight"
                  style={{ 
                    fontFamily: 'var(--font-italiana)',
                    background: 'linear-gradient(135deg, #E07856 0%, #D4A574 50%, #E07856 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 30px rgba(224, 120, 86, 0.3))',
                    letterSpacing: '0.02em'
                  }}
                >
                  <span className="relative inline-block animate-pulse-slow">
                    {count}
                  </span>
                  {/* Subtle glow behind number */}
                  <div className="absolute inset-0 blur-3xl opacity-20 bg-italian-terracotta -z-10" />
                </motion.div>

                {/* Plus symbol */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="absolute -top-2 -right-2 text-5xl sm:text-6xl font-bold text-italian-ochre"
                  style={{ fontFamily: 'var(--font-italiana)' }}
                >
                  +
                </motion.div>

                {/* Years of Evolution text */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mt-6 space-y-2 relative"
                >
                  <div 
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-italian-cream/90"
                    style={{ 
                      fontFamily: 'var(--font-italiana)',
                      letterSpacing: '0.15em',
                      textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}
                  >
                    YEARS OF
                  </div>
                  <div 
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-italian-cream/90"
                    style={{ 
                      fontFamily: 'var(--font-italiana)',
                      letterSpacing: '0.12em',
                      textShadow: '0 2px 15px rgba(0,0,0,0.4)'
                    }}
                  >
                    EVOLUTION
                  </div>
                </motion.div>

                {/* Enhanced decorative line with geometric elements */}
                <div className="relative mt-8">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="h-[3px] bg-gradient-to-r from-italian-terracotta via-italian-ochre to-italian-terracotta origin-left rounded-full shadow-lg"
                    style={{ boxShadow: '0 0 20px rgba(224, 120, 86, 0.5)' }}
                  />
                  {/* Decorative dots */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="absolute -left-1 -top-1.5 w-3 h-3 rounded-full bg-italian-terracotta shadow-lg"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                    className="absolute -right-1 -top-1.5 w-3 h-3 rounded-full bg-italian-ochre shadow-lg"
                  />
                </div>

                {/* Subtle Italian-inspired pattern accent */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-italian-terracotta/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-italian-ochre/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-italian-terracotta/60" />
                </motion.div>
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
          className="absolute bottom-8 right-8 z-20 text-white/90 text-sm hidden lg:flex items-center space-x-2"
        >
            <a href="#services" className="hover:text-italian-cream cursor-pointer transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToNext(); }}>Scroll</a>
          <ChevronDown size={20} className="animate-bounce-slow" />
        </motion.div>
      )}
    </section>
  );
}
