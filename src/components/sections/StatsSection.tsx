'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '300%',
    label: 'Average ROI Increase',
    description: 'Our clients see significant returns on their marketing investment',
  },
  {
    icon: Users,
    value: '100+',
    label: 'Satisfied Clients',
    description: 'Businesses trust us to drive their digital growth',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Client Retention',
    description: 'Long-term partnerships built on consistent results',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support Available',
    description: 'Always here when you need us most',
  },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            While we're new to the scene, our team brings years of experience and a track record 
            of delivering exceptional results for businesses of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              
              <motion.div
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: 'spring', bounce: 0.4 }}
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                {stat.label}
              </h3>
              
              <p className="text-sm text-secondary-600 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
