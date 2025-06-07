'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Star } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto container-padding pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-secondary-700">
                Trusted by 100+ businesses
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-900 mb-6 leading-tight"
            >
              <span className="gradient-text">Exceptional</span> Digital Marketing for{' '}
              <span className="gradient-text">Ambitious</span> Brands
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-secondary-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We're a fresh digital marketing agency with big ambitions. Our team of experts 
              combines proven strategies with innovative approaches to help your business 
              stand out, grow faster, and achieve remarkable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact" className="btn-primary group">
                Start Your Growth Journey
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <button className="btn-secondary group">
                <Play className="w-4 h-4 mr-2" />
                Watch Our Story
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-900">300%</div>
                <div className="text-sm text-secondary-600">Average Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-900">100+</div>
                <div className="text-sm text-secondary-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-900">24/7</div>
                <div className="text-sm text-secondary-600">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-large p-8 mb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Growth Dashboard</h3>
                    <p className="text-sm text-secondary-600">Real-time analytics</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Website Traffic</span>
                    <span className="text-sm font-semibold text-green-600">+245%</span>
                  </div>
                  <div className="w-full bg-secondary-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Lead Generation</span>
                    <span className="text-sm font-semibold text-green-600">+180%</span>
                  </div>
                  <div className="w-full bg-secondary-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full w-2/3"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Conversion Rate</span>
                    <span className="text-sm font-semibold text-green-600">+95%</span>
                  </div>
                  <div className="w-full bg-secondary-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-medium p-4 w-48"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">↗</span>
                  </div>
                  <div>
                    <p className="text-xs text-secondary-600">Revenue Growth</p>
                    <p className="text-lg font-bold text-secondary-900">+320%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-medium p-4 w-44"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">★</span>
                  </div>
                  <div>
                    <p className="text-xs text-secondary-600">Client Satisfaction</p>
                    <p className="text-lg font-bold text-secondary-900">98%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
