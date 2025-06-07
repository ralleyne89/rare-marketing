'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Target, Users, Award, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fresh Perspective',
    description: 'As a new agency, we bring innovative approaches and cutting-edge strategies without the baggage of outdated methods.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every campaign is designed with clear KPIs and measurable outcomes. We focus on what matters most - your bottom line.',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Work directly with experienced professionals who are passionate about your success and invested in your growth.',
  },
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Our team brings years of experience from top agencies and Fortune 500 companies to your business.',
  },
  {
    icon: Clock,
    title: 'Agile Approach',
    description: 'Quick turnarounds, rapid testing, and continuous optimization to stay ahead of the competition.',
  },
  {
    icon: Shield,
    title: 'Transparent Process',
    description: 'Full visibility into our strategies, regular reporting, and open communication every step of the way.',
  },
];

export function WhyChooseUs() {
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
            Why Choose Rare Marketing?
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We may be new, but we're not inexperienced. Our team combines fresh thinking 
            with proven expertise to deliver exceptional results for ambitious brands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
