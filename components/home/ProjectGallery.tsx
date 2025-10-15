'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

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
];

export default function ProjectGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of our recent completed projects that demonstrate our
            commitment to quality and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:row-span-2"
          >
            <Link
              href={`/projects`}
              className="group relative block h-full min-h-[400px] md:min-h-[600px] overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredId(projects[0].id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10 transition-opacity duration-300 ${
                  hoveredId === projects[0].id ? 'opacity-80' : 'opacity-60'
                }`}
              />
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredId === projects[0].id ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="text-sm text-white/80 mb-2 block">
                  {projects[0].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {projects[0].title}
                </h3>
              </div>
            </Link>
          </motion.div>

          <div className="space-y-4">
            {projects.slice(1, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={`/projects`}
                  className="group relative block h-[250px] md:h-[290px] overflow-hidden rounded-lg"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10 transition-opacity duration-300 ${
                      hoveredId === project.id ? 'opacity-80' : 'opacity-60'
                    }`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredId === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <span className="text-xs text-white/80 mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.slice(3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Link
                  href={`/projects`}
                  className="group relative block h-[300px] overflow-hidden rounded-lg"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10 transition-opacity duration-300 ${
                      hoveredId === project.id ? 'opacity-80' : 'opacity-60'
                    }`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredId === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <span className="text-xs text-white/80 mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
