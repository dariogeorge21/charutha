'use client';

import Link from 'next/link';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
      { href: '/services/commercial', label: 'Commercial Construction' },
      { href: '/services/residential', label: 'Residential Projects' },
      { href: '/services/infrastructure', label: 'Infrastructure' },
      { href: '/services/renovation', label: 'Renovation & Remodeling' },
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
      { href: '/faq', label: 'FAQ' },
      { href: '/sustainability', label: 'Sustainability' },
      { href: '/safety', label: 'Safety Standards' },
    ],
  },
];

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookies', label: 'Cookie Policy' },
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer ref={ref} className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Blueprint-style decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12"
        >
          {/* Company Info Section - Takes 4 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg shadow-lg group-hover:shadow-amber-500/50 transition-shadow duration-300">
                <Building2 size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Charutha
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Building tomorrow's infrastructure with unparalleled excellence, innovation, and commitment to quality. Your vision, our expertise.
            </p>
            
            {/* Social Media Links */}
            <div className="space-y-3">
              <h5 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Connect With Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group p-2.5 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={18} className="text-gray-400 group-hover:text-amber-500 transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
          

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <h4 className="text-base font-bold mb-5 text-white relative inline-block">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-amber-500 transition-all duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact / CTA Column - Takes 4 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h4 className="text-base font-bold mb-5 text-white relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></span>
            </h4>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              For bespoke projects, consultations, or partnership inquiries, reach out to our team. We deliver precision, luxury, and reliability in every project.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="flex-shrink-0 text-amber-500" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  aria-label="Call Charutha Construction"
                >
                  (123) 456-7890
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={16} className="flex-shrink-0 text-amber-500" />
                <a
                  href="mailto:info@charutha.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  aria-label="Email Charutha Construction"
                >
                  info@charutha.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-amber-500" />
                <span className="text-gray-400 text-xs leading-relaxed">
                  Fort Kochi, Kerala, India
                </span>
              </div>

              <div className="pt-4 border-t border-gray-800/50">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-md hover:bg-amber-500/20 hover:shadow-md transition-all duration-250 text-sm"
                  aria-label="Request a Quote"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 1995 - 2025 Charutha Construction. Crafting Excellence Since Day One.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Building Dreams. Delivering Excellence. Creating Legacy.
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {legalLinks.map((link, index) => (
                <span key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="ml-6 text-gray-700">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          
          {/* Certifications/Trust Badges (Optional) */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Licensed • Insured • Certified
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
