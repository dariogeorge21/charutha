'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import Footer from '@/components/Footer';

const articles = [
  {
    id: 1,
    title: 'Charutha Breaks Ground on New Sustainable Office Complex',
    excerpt:
      'We are excited to announce the commencement of our latest project, a 30-story eco-friendly office building in the heart of downtown.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Projects',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Winning the Excellence in Construction Award 2024',
    excerpt:
      'Our Riverside Residences project has been recognized with the prestigious Excellence in Construction Award for innovative design.',
    date: 'March 10, 2024',
    readTime: '3 min read',
    category: 'Awards',
    image: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Implementing AI-Powered Safety Monitoring Systems',
    excerpt:
      'Charutha adopts cutting-edge AI technology to enhance workplace safety and reduce construction site incidents by 40%.',
    date: 'February 28, 2024',
    readTime: '4 min read',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Partnership with Green Building Council',
    excerpt:
      'We are proud to announce our new partnership focused on advancing sustainable construction practices across the industry.',
    date: 'February 20, 2024',
    readTime: '6 min read',
    category: 'Partnerships',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'New Highway Infrastructure Project Completed Ahead of Schedule',
    excerpt:
      'The Metro Bridge Project wraps up three months early, showcasing our commitment to efficient project delivery.',
    date: 'February 15, 2024',
    readTime: '5 min read',
    category: 'Projects',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'Charutha Expands Operations to Three New Cities',
    excerpt:
      'As part of our growth strategy, we are opening new offices in Portland, Austin, and Denver to better serve our clients.',
    date: 'January 30, 2024',
    readTime: '4 min read',
    category: 'Company News',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function NewsPage() {
  const heroRef = useRef(null);
  const articlesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const articlesInView = useInView(articlesRef, { once: true, margin: '-100px' });

  const [heroScrollY, setHeroScrollY] = useState(0);

  // Hero section parallax effect (like landing page HeroSection)
  useEffect(() => {
    const handleScroll = () => {
      setHeroScrollY(window.scrollY);
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
            transform: `translateY(${heroScrollY * 0.5}px)`,
            willChange: 'transform',
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="News and updates"
            className="w-full h-full object-cover scale-110"
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
            News & Updates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Stay informed about our latest projects, achievements, and industry insights
          </motion.p>
        </div>
      </section>

      <section ref={articlesRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={articlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>

                  <div className="mt-4 inline-flex items-center text-gray-900 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Read More
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
