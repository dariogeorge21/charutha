'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Footer from '@/components/Footer';

const categories = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Industrial'];

const projects = [
  {
    id: 1,
    title: 'Skyline Tower',
    category: 'Commercial',
    location: 'Downtown District',
    year: '2023',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '45-story mixed-use development featuring office spaces and retail',
  },
  {
    id: 2,
    title: 'Riverside Residences',
    category: 'Residential',
    location: 'Waterfront',
    year: '2023',
    image: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxury apartment complex with 200 units and premium amenities',
  },
  {
    id: 3,
    title: 'Metro Bridge Project',
    category: 'Infrastructure',
    location: 'City Center',
    year: '2022',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Major infrastructure upgrade connecting downtown to suburbs',
  },
  {
    id: 4,
    title: 'Tech Manufacturing Hub',
    category: 'Industrial',
    location: 'Industrial Park',
    year: '2023',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'State-of-the-art manufacturing facility with automated systems',
  },
  {
    id: 5,
    title: 'Central Plaza',
    category: 'Commercial',
    location: 'Business District',
    year: '2022',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premium office complex with modern architectural design',
  },
  {
    id: 6,
    title: 'Garden Heights',
    category: 'Residential',
    location: 'Suburban Area',
    year: '2023',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Eco-friendly housing development with sustainable features',
  },
  {
    id: 7,
    title: 'Highway Expansion',
    category: 'Infrastructure',
    location: 'Regional Route',
    year: '2022',
    image: 'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '15-mile highway expansion improving regional connectivity',
  },
  {
    id: 8,
    title: 'Logistics Center',
    category: 'Industrial',
    location: 'Distribution Zone',
    year: '2023',
    image: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Large-scale warehouse and distribution facility',
  },
  {
    id: 9,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    location: 'Tech District',
    year: '2022',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern headquarters featuring sustainable design elements',
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const heroRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const filterInView = useInView(filterRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true, margin: '-50px' });

  const [heroScrollY, setHeroScrollY] = useState(0);
  const [projectsScrollY, setProjectsScrollY] = useState(0);

  // Scroll effects for hero and projects sections
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = (heroRef.current as HTMLElement).getBoundingClientRect();
        const heroProgress = Math.max(0, Math.min(1, 1 - heroRect.top / window.innerHeight));
        setHeroScrollY(heroProgress);
      }

      if (projectsRef.current) {
        const projectsRect = (projectsRef.current as HTMLElement).getBoundingClientRect();
        const projectsProgress = Math.max(0, Math.min(1, 1 - projectsRect.top / window.innerHeight));
        setProjectsScrollY(projectsProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
            src="https://images.pexels.com/photos/3680959/pexels-photo-3680959.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our projects"
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
            Our Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Showcasing our commitment to excellence through completed projects across diverse sectors
          </motion.p>
        </div>
      </section>

      <section ref={filterRef} className="py-12 bg-white relative top-16 lg:top-20 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={filterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white scale-105 shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={projectsRef} className="relative py-20 bg-gray-50 overflow-hidden">
        {/* Background with zoom effect */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            transform: `scale(${1 + projectsScrollY * 0.1})`,
            willChange: 'transform',
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-700" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                    {project.year}
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.location}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-600">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
