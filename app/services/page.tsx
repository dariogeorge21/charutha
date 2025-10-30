'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Building2,
  Home,
  Landmark,
  Factory,
  Store,
  Hospital,
  HardHat,
  Wrench,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'State-of-the-art office buildings, retail spaces, and mixed-use developments designed for modern business needs.',
    features: ['Office Buildings', 'Retail Centers', 'Mixed-Use Developments'],
  },
  {
    icon: Home,
    title: 'Residential Projects',
    description:
      'Quality housing solutions from luxury apartments to affordable housing complexes that create vibrant communities.',
    features: ['Luxury Apartments', 'Housing Complexes', 'Condominiums'],
  },
  {
    icon: Landmark,
    title: 'Infrastructure Development',
    description:
      'Critical infrastructure projects including roads, bridges, and utilities that connect and empower communities.',
    features: ['Roads & Highways', 'Bridges', 'Utilities Infrastructure'],
  },
  {
    icon: Factory,
    title: 'Industrial Facilities',
    description:
      'Purpose-built industrial and manufacturing facilities optimized for efficiency and productivity.',
    features: ['Manufacturing Plants', 'Warehouses', 'Distribution Centers'],
  },
  {
    icon: Store,
    title: 'Retail Spaces',
    description:
      'Modern retail environments designed to enhance customer experience and drive business success.',
    features: ['Shopping Centers', 'Standalone Stores', 'Food & Beverage'],
  },
  {
    icon: Hospital,
    title: 'Healthcare Facilities',
    description:
      'Specialized healthcare construction meeting stringent medical standards and patient care requirements.',
    features: ['Hospitals', 'Clinics', 'Medical Centers'],
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description:
      'Comprehensive project oversight ensuring timely delivery, quality control, and budget adherence.',
    features: ['Planning & Scheduling', 'Quality Control', 'Budget Management'],
  },
  {
    icon: Wrench,
    title: 'Renovation & Remodeling',
    description:
      'Expert renovation services breathing new life into existing structures with modern upgrades.',
    features: ['Interior Renovations', 'Structural Upgrades', 'Modernization'],
  },
];

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Understanding your vision and project requirements',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Detailed design and comprehensive project planning',
  },
  {
    step: '03',
    title: 'Execution',
    description: 'Professional construction with quality oversight',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Final inspection and handover of completed project',
  },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const processInView = useInView(processRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const [heroScrollY, setHeroScrollY] = useState(0);
  const [processScrollY, setProcessScrollY] = useState(0);

  // Scroll effects for hero and process sections
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = (heroRef.current as HTMLElement).getBoundingClientRect();
        const heroProgress = Math.max(0, Math.min(1, 1 - heroRect.top / window.innerHeight));
        setHeroScrollY(heroProgress);
      }

      if (processRef.current) {
        const processRect = (processRef.current as HTMLElement).getBoundingClientRect();
        const processProgress = Math.max(0, Math.min(1, 1 - processRect.top / window.innerHeight));
        setProcessScrollY(processProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `scale(${1 + heroScrollY * 0.1})`,
            willChange: 'transform',
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our services"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-italiana)' }}
          >
            Comprehensive Construction Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            From concept to completion, we deliver excellence across all construction disciplines
          </motion.p>
        </div>
      </section>

      <section ref={servicesRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-italiana)' }}
            >
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored construction solutions for every need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={processRef} className="relative py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
        {/* Background with subtle zoom effect */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            transform: `scale(${1 + processScrollY * 0.1})`,
            willChange: 'transform',
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-600" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-italiana)' }}
            >
              Our Process
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              A streamlined approach to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-white/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-italiana)' }}
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Let's discuss how our services can bring your construction project to life
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
