'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  Heart,
  TrendingUp,
  Users,
  GraduationCap,
  Coffee,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';

const positions = [
  {
    id: 1,
    title: 'Senior Project Manager',
    department: 'Construction',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '8+ years',
  },
  {
    id: 2,
    title: 'Structural Engineer',
    department: 'Engineering',
    location: 'Chicago, IL',
    type: 'Full-time',
    experience: '5+ years',
  },
  {
    id: 3,
    title: 'Construction Supervisor',
    department: 'Operations',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    experience: '6+ years',
  },
  {
    id: 4,
    title: 'Architecture Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '4+ years',
  },
  {
    id: 5,
    title: 'Safety Coordinator',
    department: 'Safety',
    location: 'Houston, TX',
    type: 'Full-time',
    experience: '3+ years',
  },
  {
    id: 6,
    title: 'Estimator',
    department: 'Finance',
    location: 'Boston, MA',
    type: 'Full-time',
    experience: '5+ years',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Professional development programs and advancement opportunities',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible schedules and generous paid time off',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Continuing education support and training programs',
  },
];

export default function CareersPage() {
  const heroRef = useRef(null);
  const cultureRef = useRef(null);
  const benefitsRef = useRef(null);
  const positionsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const cultureInView = useInView(cultureRef, { once: true, margin: '-100px' });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const positionsInView = useInView(positionsRef, { once: true, margin: '-100px' });

  return (
    <main>
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Careers at Charutha"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Build Your Career With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Join our team of passionate professionals shaping the future of construction
          </motion.p>
        </div>
      </section>

      <section ref={cultureRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Charutha, we foster an environment where innovation thrives,
                collaboration is celebrated, and every team member contributes to
                our shared success. We believe in empowering our people to do their
                best work while maintaining a healthy work-life balance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're a seasoned professional or just starting your career,
                we offer opportunities for growth, learning, and making a meaningful
                impact on the communities we serve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={benefitsRef} className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Benefits & Perks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our team's well-being and success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={positionsRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to grow with us
            </p>
          </motion.div>

          <div className="space-y-4">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={positionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Briefcase size={16} />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users size={16} />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">
              Don't see a position that fits? We're always looking for talented individuals.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-200 hover:scale-105"
            >
              Send General Application
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
