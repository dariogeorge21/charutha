'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [scrollY, setScrollY] = useState(0);

  // Parallax and zoom scroll effect
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
    <section ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Image with Parallax and Zoom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `scale(${1 + scrollY * 0.1})`,
          willChange: 'transform',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://www.pexels.com/download/video/6474149/?auto=compress&cs=tinysrgb&w=1920"
          title="Contact background"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-italian-navy/85 via-italian-taupe/75 to-italian-navy/85" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-italian-navy via-italian-taupe to-italian-terracotta bg-clip-text text-transparent mb-8 tracking-wide"
          style={{ fontFamily: 'var(--font-italiana)', letterSpacing: '0.02em', lineHeight: '1.3' }}
        >
          Start Your Project Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-italian-taupe mb-16 max-w-4xl mx-auto"
          style={{ lineHeight: '1.7' }}
        >
          Ready to bring your construction vision to life? Our team of experts
          is here to help you every step of the way. Let's build something
          extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center space-x-4 bg-italian-terracotta hover:bg-italian-ochre text-white px-10 py-4 rounded-lg text-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
          >
            <span className="tracking-wide">Get In Touch</span>
            <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={24}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
