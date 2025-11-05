'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/news', label: 'News' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHasScrolled(currentScrollY > 960);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? 'bg-italian-cream/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end h-16 lg:h-20">
            <div></div>
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-m font-medium transition-colors duration-300 group ${
                    hasScrolled ? 'text-italian-taupe hover:text-italian-terracotta' : 'text-white hover:text-italian-cream'
                  } ${pathname === link.href ? 'font-semibold' : ''}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      pathname === link.href
                        ? 'w-full bg-italian-terracotta'
                        : 'w-0 group-hover:w-full bg-italian-terracotta'
                    }`}
                  />
                </Link>
              ))}
            </div>


            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 relative z-50 ${
                hasScrolled ? 'text-italian-taupe' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {isOpen ? (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop with glassmorphism effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-italian-cream/95 via-italian-beige/90 to-italian-cream/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu container sliding from left */}
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1], // Custom easing for smooth slide
                opacity: { duration: 0.3 }
              }}
              className="relative h-full flex flex-col justify-between py-20 px-8 bg-gradient-to-r from-italian-cream/40 via-transparent to-transparent backdrop-blur-sm overflow-y-auto"
            >
              {/* Decorative background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-1/4 -left-20 w-96 h-96 bg-italian-terracotta rounded-full blur-3xl"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute bottom-1/4 -right-20 w-96 h-96 bg-italian-ochre rounded-full blur-3xl"
                />
              </div>

              {/* Top Section: Company Branding */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative z-10"
              >
                <div className="flex flex-col items-start mb-12">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="text-4xl sm:text-5xl font-bold tracking-tighter text-italian-navy hover:text-italian-terracotta transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-italiana)',
                      fontWeight: 900,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    CHARUTHA
                  </Link>
                  <span
                    className="text-xs font-light tracking-[0.2em] text-italian-taupe/80 self-end mt-1"
                    style={{ fontFamily: 'var(--font-italiana)' }}
                  >
                    ESTD 1995
                  </span>
                </div>
                
                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="h-0.5 w-32 bg-gradient-to-r from-italian-terracotta to-transparent origin-left mb-8"
                />
              </motion.div>

              {/* Middle Section: Navigation Links */}
              <nav className="flex flex-col space-y-6 relative z-10 flex-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-4 transition-all duration-300"
                    >
                      {/* Visual Indicator - Chevron */}
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight
                          size={24}
                          className={`transition-colors duration-300 ${
                            pathname === link.href ? 'text-italian-terracotta' : 'text-italian-taupe/50 group-hover:text-italian-terracotta'
                          }`}
                        />
                      </motion.div>

                      {/* Link Text */}
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className={`text-3xl sm:text-4xl font-bold transition-all duration-300 relative ${
                          pathname === link.href ? 'text-italian-terracotta' : 'text-italian-navy group-hover:text-italian-terracotta'
                        }`}
                      >
                        {link.label}

                        {/* Active indicator line */}
                        {pathname === link.href && (
                          <motion.span
                            layoutId="activeLink"
                            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-italian-terracotta to-italian-ochre"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Section: Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative z-10 mt-8"
              >
                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="h-0.5 w-32 bg-gradient-to-r from-italian-terracotta to-transparent origin-left mb-6"
                />

                <p className="text-sm text-italian-taupe/60 uppercase tracking-widest mb-4 font-semibold">
                  Connect With Us
                </p>

                <div className="flex items-center space-x-6">
                  {[
                    { icon: Facebook, href: '#', label: 'Facebook' },
                    { icon: Instagram, href: '#', label: 'Instagram' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.9 + index * 0.1,
                        type: 'spring',
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-italian-taupe/10 backdrop-blur-sm hover:bg-italian-terracotta/20 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon
                        size={20}
                        className="text-italian-taupe/70 group-hover:text-italian-terracotta transition-colors duration-300"
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
