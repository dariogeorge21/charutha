'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, CheckCircle, Clock, Briefcase } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function AnimatedStat({ icon, value, suffix, label, delay }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    
    const animateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * value);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        setCount(value);
      }
    };
    
    // Start animation with delay
    const timer = setTimeout(() => {
      animateCounter();
    }, delay);
    
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="p-4 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 group-hover:from-amber-500/30 group-hover:to-orange-600/30 transition-all duration-300">
        <div className="text-amber-500 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div className="text-4xl sm:text-5xl font-black text-white mb-2">
        <span
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #f59e0b 5%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'white',
          }}
        >
          {count}{suffix}
        </span>
      </div>
      <div className="text-sm sm:text-base font-semibold text-gray-400 uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}

export default function TrustBar() {
  const stats = [
    {
      icon: <Award size={32} />,
      value: 30,
      suffix: '+',
      label: 'Years of Experience',
    },
    {
      icon: <Briefcase size={32} />,
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
    },
    {
      icon: <CheckCircle size={32} />,
      value: 99,
      suffix: '%',
      label: 'Client Satisfaction',
    },
    {
      icon: <Clock size={32} />,
      value: 100000,
      suffix: '+',
      label: 'Hours of Safe Work',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-amber-950/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Building Trust Since 1995
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Three decades of craftsmanship, one foundation of trust
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent origin-center"
        />
      </div>
    </section>
  );
}

