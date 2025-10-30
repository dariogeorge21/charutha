'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ArrowUpRight,
  Heart,
} from 'lucide-react';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { href: '/services', label: 'All Services' },
      { href: '/services', label: 'Commercial Construction' },
      { href: '/services', label: 'Residential Projects' },
      { href: '/services', label: 'Infrastructure Development' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/projects', label: 'Our Projects' },
      { href: '/careers', label: 'Careers' },
      { href: '/news', label: 'News & Insights' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/contact', label: 'Contact Us' },
      { href: '/contact', label: 'Get a Quote' },
      { href: '/about', label: 'Safety Standards' },
      { href: '/about', label: 'Sustainability' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-italian-terracotta' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-italian-ochre' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-italian-navy' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-italian-cobalt' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <footer ref={ref} className="relative bg-gradient-to-br from-italian-warm-gray via-italian-taupe to-italian-warm-gray text-italian-cream overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-48 w-96 h-96 bg-gradient-to-br from-italian-terracotta/10 to-italian-ochre/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-gradient-to-br from-italian-terracotta/10 to-italian-ochre/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5F5DC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-italian-terracotta to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-italian-cream/20"
        >
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="mb-6">
              <Link href="/" className="inline-block group">
                <div className="flex flex-col items-start">
                  <h3
                    className="text-4xl sm:text-5xl font-bold tracking-tighter text-italian-cream group-hover:text-italian-terracotta transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-italiana)',
                      fontWeight: 900,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    CHARUTHA
                  </h3>
                  <span
                    className="text-xs font-light tracking-[0.2em] text-italian-cream/60 self-end mt-1"
                    style={{ fontFamily: 'var(--font-italiana)' }}
                  >
                    ESTD 1995
                  </span>
                </div>
              </Link>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="h-1 w-24 bg-gradient-to-r from-italian-terracotta to-italian-ochre origin-left mb-6"
            />

            <p className="text-italian-cream/80 leading-relaxed mb-6 text-base" style={{ lineHeight: '1.7' }}>
              Building Tomorrow's Infrastructure Today. Excellence in construction,
              innovation in design, and commitment to quality that stands the test of time.
            </p>

            <div className="space-y-3">
              <motion.a
                href="tel:+1234567890"
                className="flex items-center space-x-3 text-italian-cream/90 hover:text-italian-terracotta transition-colors duration-300 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-sm bg-italian-cream/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-italian-terracotta/10 transition-colors duration-300">
                  <Phone size={18} className="text-italian-terracotta" />
                </div>
                <span className="text-sm">(123) 456-7890</span>
              </motion.a>

              <motion.a
                href="mailto:info@charutha.com"
                className="flex items-center space-x-3 text-italian-cream/90 hover:text-italian-terracotta transition-colors duration-300 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-sm bg-italian-cream/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-italian-terracotta/10 transition-colors duration-300">
                  <Mail size={18} className="text-italian-terracotta" />
                </div>
                <span className="text-sm">info@charutha.com</span>
              </motion.a>

              <motion.div
                className="flex items-start space-x-3 text-italian-cream/80 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-sm bg-italian-cream/5 backdrop-blur-sm flex items-center justify-center mt-0.5">
                  <MapPin size={18} className="text-italian-terracotta" />
                </div>
                <span className="text-sm leading-relaxed">
                  Fort Kochi, Kerala, India
                </span>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                custom={sectionIndex}
              >
                <h4 className="text-lg font-bold text-italian-cream mb-6 relative inline-block tracking-wide">
                  {section.title}
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-italian-terracotta to-transparent" />
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.href + link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05,
                        ease: 'easeOut'
                      }}
                    >
                      <Link
                        href={link.href}
                        className="text-italian-cream/80 hover:text-italian-terracotta transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="pt-12 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0"
        >
          <div className="text-center lg:text-left">
            <p className="text-italian-cream/70 text-sm flex items-center justify-center lg:justify-start flex-wrap gap-1">
              <span>&copy; 1995 - {new Date().getFullYear()} Charutha Constructions</span>
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-4 mt-2">
              <Link
                href="/privacy"
                className="text-italian-cream/60 hover:text-italian-terracotta text-xs transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-italian-cream/40">•</span>
              <Link
                href="/terms"
                className="text-italian-cream/60 hover:text-italian-terracotta text-xs transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-italian-cream/60 text-xs uppercase tracking-wider mr-2 hidden sm:block">
              Follow Us
            </span>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.7 + index * 0.1,
                  ease: 'easeOut'
                }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-sm bg-italian-cream/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${social.color} group`}
                aria-label={social.label}
              >
                <social.icon
                  size={18}
                  className="text-italian-cream/70 group-hover:text-white transition-colors duration-300"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 text-center"
        >
          <p className="text-italian-cream/50 text-sm italic tracking-wide" style={{ fontFamily: 'var(--font-italiana)' }}>
            Building Dreams. Delivering Excellence. Creating Legacy.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </footer>
  );
}
