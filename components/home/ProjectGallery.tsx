'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Downtown Commercial Complex',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Modern Residential Tower',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Highway Bridge Infrastructure',
    category: 'Infrastructure',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Urban Shopping Center',
    category: 'Retail',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Corporate Office Building',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'Luxury Waterfront Resort',
    category: 'Hospitality',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ProjectGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effect
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

  // Mouse tracking for interactive effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={ref}
      className="relative py-2 lg:py-3 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Premium Background with Gradient and Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 -z-10" />

      {/* Subtle Geometric Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Gradient Orbs */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl -z-10 transition-transform duration-1000"
        style={{
          transform: `translate(${scrollY * 50}px, ${scrollY * -30}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -z-10 transition-transform duration-1000"
        style={{
          transform: `translate(${scrollY * -50}px, ${scrollY * 30}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Enhanced Animations */}
        <div className="text-center mb-16 lg:mb-20">
          

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            A curated collection of our most prestigious projects, showcasing
            architectural excellence and innovative construction solutions
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent origin-center"
          />
        </div>

        {/* Premium Grid Layout with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const isHovered = hoveredId === project.id;
            const isFeatured = index === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: 'easeOut'
                }}
                className={`group relative ${
                  isFeatured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <Link
                  href="/projects"
                  className={`block relative overflow-hidden rounded-2xl ${
                    isFeatured
                      ? 'h-[400px] md:h-[600px] lg:h-[700px]'
                      : 'h-[350px] md:h-[400px]'
                  }`}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    // @ts-ignore - CSS custom properties
                    '--mouse-x': `${mousePosition.x}px`,
                    '--mouse-y': `${mousePosition.y}px`,
                  }}
                >
                  {/* Layered Shadow Effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    isHovered
                      ? 'shadow-2xl shadow-amber-500/20'
                      : 'shadow-lg shadow-gray-900/10'
                  }`} />

                  {/* Premium Border with Gradient */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    isHovered
                      ? 'ring-2 ring-amber-400/50 ring-offset-2 ring-offset-white'
                      : 'ring-1 ring-gray-200/50'
                  }`} />

                  {/* Image Container with Parallax */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    />

                    {/* Multi-layered Gradient Overlays */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                      isHovered ? 'opacity-90' : 'opacity-70'
                    }`} />

                    {/* Radial Gradient on Hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 bg-gradient-to-br from-amber-500/30 via-transparent to-purple-500/30"
                      animate={{
                        opacity: isHovered ? 0.3 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Content Container with Glass Morphism */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10">
                    {/* Category Badge with Backdrop Blur */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="mb-3"
                    >
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Title with Smooth Reveal */}
                    <motion.h3
                      className={`font-bold text-white mb-3 ${
                        isFeatured
                          ? 'text-3xl md:text-4xl lg:text-5xl'
                          : 'text-2xl md:text-3xl'
                      }`}
                      style={{ fontFamily: 'var(--font-playfair)' }}
                      animate={{
                        y: isHovered ? -8 : 0,
                      }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Hover Action Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10,
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="flex items-center space-x-2 text-white"
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </motion.div>

                    {/* Decorative Bottom Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      style={{ originX: 0 }}
                    />
                  </div>

                  {/* Glow Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(251, 191, 36, 0.15), transparent 50%)',
                    }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 group"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>

      {/* Accessibility: Reduced Motion Support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
