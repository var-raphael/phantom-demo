'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiSun, FiMoon, FiShoppingBag, FiHeart, FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter, FiX, FiChevronLeft, FiChevronRight, FiZap } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import { ProductCard } from './watches-navy-card';

export default function WatchesNavyPage() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const products = [
    {
      id: 1,
      name: 'Chronos Elite',
      price: 8499,
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80',
        'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&q=80',
        'https://images.unsplash.com/photo-1509941943102-10c232535736?w=1200&q=80',
      ],
      description: 'Precision-engineered automatic movement with navy blue dial and brushed steel case. Built for those who demand excellence.',
      specs: {
        movement: 'Automatic',
        waterResistance: '200m',
        caseDiameter: '42mm',
        material: 'Stainless Steel',
      },
    },
    {
      id: 2,
      name: 'Apex Diver',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=80',
        'https://images.unsplash.com/photo-1587836374228-4c25c8bc4156?w=1200&q=80',
        'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80',
      ],
      description: 'Professional dive watch with unidirectional bezel and luminous markers. Engineered for extreme conditions.',
      specs: {
        movement: 'Automatic',
        waterResistance: '500m',
        caseDiameter: '44mm',
        material: 'Titanium',
      },
    },
    {
      id: 3,
      name: 'Midnight Reserve',
      price: 6799,
      image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=1200&q=80',
        'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=1200&q=80',
        'https://images.unsplash.com/photo-1639006570490-79c0c53f1080?w=1200&q=80',
      ],
      description: 'Elegant dress watch with deep navy face and silver accents. The perfect companion for formal occasions.',
      specs: {
        movement: 'Quartz',
        waterResistance: '50m',
        caseDiameter: '40mm',
        material: 'Stainless Steel',
      },
    },
    {
      id: 4,
      name: 'Vanguard Sport',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1200&q=80',
        'https://images.unsplash.com/photo-1526045478516-99145907023c?w=1200&q=80',
        'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&q=80',
      ],
      description: 'Sporty chronograph with tachymeter scale and navy ceramic bezel. Performance meets sophistication.',
      specs: {
        movement: 'Automatic',
        waterResistance: '300m',
        caseDiameter: '43mm',
        material: 'Ceramic/Steel',
      },
    },
    {
      id: 5,
      name: 'Nebula GMT',
      price: 11499,
      image: '/images/images/wristwatche5.jpg',
      rating: 5,
      images: [
        '/images/images/wristwatche5.jpg',
        '/images/images/wristwatche1.jpg',
        '/images/images/wristwatche7.jpg',
      ],
      description: 'Dual timezone GMT with navy sunburst dial. Essential for the global traveler.',
      specs: {
        movement: 'Automatic',
        waterResistance: '150m',
        caseDiameter: '41mm',
        material: 'Stainless Steel',
      },
    },
    {
      id: 6,
      name: 'Stealth Tactical',
      price: 7299,
      image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80',
        'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=1200&q=80',
        'https://images.unsplash.com/photo-1509941943102-10c232535736?w=1200&q=80',
      ],
      description: 'Military-inspired field watch with navy canvas strap and tactical design. Built tough.',
      specs: {
        movement: 'Automatic',
        waterResistance: '200m',
        caseDiameter: '42mm',
        material: 'Matte Steel',
      },
    },
    {
      id: 7,
      name: 'Horizon Moon Phase',
      price: 14999,
      image: 'https://images.unsplash.com/photo-1639006570490-79c0c53f1080?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1639006570490-79c0c53f1080?w=1200&q=80',
        'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=80',
      ],
      description: 'Sophisticated moon phase complication on navy guilloché dial. Horological artistry.',
      specs: {
        movement: 'Automatic',
        waterResistance: '100m',
        caseDiameter: '40mm',
        material: 'Stainless Steel',
      },
    },
    {
      id: 8,
      name: 'Velocity Racer',
      price: 10499,
      image: '/images/images/wristwatche6.jpg',
      rating: 5,
      images: [
        '/images/images/wristwatche1.jpg',
        '/images/images/wristwatche2.jpg',
        '/images/images/wristwatche3.jpg',
      ],
      description: 'Racing-inspired chronograph with navy racing stripes. Speed, precision, style.',
      specs: {
        movement: 'Automatic',
        waterResistance: '200m',
        caseDiameter: '44mm',
        material: 'Carbon Fiber',
      },
    },
  ];

  const openModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  const testimonials = [
    {
      name: 'Marcus Chen',
      role: 'Tech Executive',
      text: 'The precision and craftsmanship are unmatched. This isn\'t just a watch—it\'s a statement of who you are.',
      rating: 5,
    },
    {
      name: 'David Morrison',
      role: 'Entrepreneur',
      text: 'I\'ve owned luxury watches from every major brand. This collection rivals them all at half the price.',
      rating: 5,
    },
    {
      name: 'James Foster',
      role: 'Pilot',
      text: 'As a pilot, I need precision I can trust. These watches deliver performance when it matters most.',
      rating: 5,
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-700 overflow-x-hidden ${
      isDark ? 'bg-slate-950 text-white' : 'bg-gray-50 text-slate-900'
    }`}>
      {/* Sharp Grid Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(${isDark ? '#1e40af' : '#334155'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#1e40af' : '#334155'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Aggressive Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-8 right-8 z-50 w-14 h-14 flex items-center justify-center transition-all duration-300 ${
          isDark 
            ? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/50' 
            : 'bg-slate-800 hover:bg-slate-700 shadow-lg shadow-slate-800/50'
        }`}
        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
      >
        {isDark ? <FiSun className="w-5 h-5 text-white" /> : <FiMoon className="w-5 h-5 text-white" />}
      </motion.button>

      {/* Hero Section - Bold & Angular */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Diagonal Split Background */}
        <div className="absolute inset-0">
          {/* Left Side - Navy */}
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-950 to-slate-950' : 'bg-gradient-to-br from-slate-800 to-gray-900'}`}
            style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)' }}
          />
          
          {/* Right Side - Image */}
          <motion.div 
            style={{ y }}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920&q=90)',
                clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 60% 100%)',
                filter: 'brightness(0.6) contrast(1.2) grayscale(20%)',
              }}
            />
          </motion.div>

          {/* Accent Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className={`absolute top-1/3 left-0 right-0 h-px ${isDark ? 'bg-blue-500/30' : 'bg-slate-400/30'}`}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className={`absolute top-2/3 left-0 right-0 h-px ${isDark ? 'bg-blue-500/30' : 'bg-slate-400/30'}`}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Tech Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className={`inline-flex items-center gap-2 px-4 py-2 mb-8 border-2 ${
                isDark ? 'border-blue-500 text-blue-400' : 'border-slate-600 text-slate-300'
              } font-mono text-xs uppercase tracking-wider backdrop-blur-xl bg-black/20`}
              style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
            >
              <FiZap className="w-3 h-3" />
              Swiss Precision
            </motion.div>

            {/* Main Title */}
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none ${
              isDark ? 'text-white' : 'text-white'
            }`}
            style={{ 
              textTransform: 'uppercase',
              textShadow: isDark ? '0 0 80px rgba(59, 130, 246, 0.5)' : '0 0 80px rgba(0, 0, 0, 0.8)'
            }}
            >
              PRECISION
              <br />
              <span className={isDark ? 'text-blue-500' : 'text-slate-400'}>ENGINEERED</span>
            </h1>

            {/* Spec Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-10 font-mono text-xs tracking-widest"
            >
              <span className={isDark ? 'text-blue-400' : 'text-slate-300'}>AUTOMATIC</span>
              <div className={`w-8 md:w-12 h-px ${isDark ? 'bg-blue-500' : 'bg-slate-400'}`} />
              <span className={isDark ? 'text-blue-400' : 'text-slate-300'}>300M WR</span>
              <div className={`w-8 md:w-12 h-px ${isDark ? 'bg-blue-500' : 'bg-slate-400'}`} />
              <span className={isDark ? 'text-blue-400' : 'text-slate-300'}>SAPPHIRE</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-200'
              }`}
            >
              Master-crafted timepieces engineered for those who demand perfection in every detail
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-10 py-4 text-sm font-bold tracking-widest uppercase ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/50' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white shadow-lg shadow-slate-800/50'
              } transition-all duration-300`}
              style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </div>

        {/* Tech Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className={`text-xs tracking-widest uppercase font-mono ${
              isDark ? 'text-blue-400' : 'text-slate-400'
            }`}>
              SCROLL
            </span>
            <div className={`w-px h-16 ${
              isDark ? 'bg-gradient-to-b from-blue-500 to-transparent' : 'bg-gradient-to-b from-slate-400 to-transparent'
            }`} />
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Section */}
      <section className="py-32 px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-6 mb-6"
          >
            <div className={`w-20 h-1 ${isDark ? 'bg-blue-500' : 'bg-slate-800'}`} />
            <span className={`text-sm font-mono tracking-widest uppercase ${
              isDark ? 'text-blue-400' : 'text-slate-600'
            }`}>
              01 — COLLECTION
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`text-5xl md:text-7xl font-black tracking-tighter uppercase ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Master Collection
          </motion.h2>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.76, 0, 0.24, 1]
                }}
              >
                <ProductCard product={product} isDark={isDark} onCardClick={openModal} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-32 px-6 md:px-12 relative overflow-hidden ${
        isDark ? 'bg-slate-900/50' : 'bg-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-1 ${isDark ? 'bg-blue-500' : 'bg-slate-800'}`} />
                <span className={`text-sm font-mono tracking-widest uppercase ${
                  isDark ? 'text-blue-400' : 'text-slate-600'
                }`}>
                  02 — CRAFTSMANSHIP
                </span>
              </div>

              <h3 className={`text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Swiss
                <br />Engineering
                <br />Excellence
              </h3>

              <div className={`space-y-6 text-base leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              }`}>
                <p>
                  Every timepiece is assembled by master watchmakers with decades of experience. 
                  We use only the finest materials—sapphire crystal, surgical-grade steel, 
                  and precision Swiss movements.
                </p>
                <p>
                  Our watches undergo rigorous testing including pressure resistance up to 500 meters, 
                  shock resistance, and chronometer certification to ensure they meet our exacting standards.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-12 border-t-2 border-current/10">
                <div>
                  <div className={`text-3xl md:text-5xl font-black mb-2 ${
                    isDark ? 'text-blue-500' : 'text-slate-800'
                  }`}>
                    45
                  </div>
                  <div className={`text-[10px] md:text-xs font-mono tracking-widest uppercase ${
                    isDark ? 'text-gray-500' : 'text-slate-500'
                  }`}>
                    Years
                  </div>
                </div>
                <div>
                  <div className={`text-3xl md:text-5xl font-black mb-2 ${
                    isDark ? 'text-blue-500' : 'text-slate-800'
                  }`}>
                    500M
                  </div>
                  <div className={`text-[10px] md:text-xs font-mono tracking-widest uppercase ${
                    isDark ? 'text-gray-500' : 'text-slate-500'
                  }`}>
                    Water Resist
                  </div>
                </div>
                <div>
                  <div className={`text-3xl md:text-5xl font-black mb-2 ${
                    isDark ? 'text-blue-500' : 'text-slate-800'
                  }`}>
                    80K+
                  </div>
                  <div className={`text-[10px] md:text-xs font-mono tracking-widest uppercase ${
                    isDark ? 'text-gray-500' : 'text-slate-500'
                  }`}>
                    Owners
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=90"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                  style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                />
                {/* Tech Corner Frame */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 ${
                    isDark ? 'border-blue-500' : 'border-slate-800'
                  }`} />
                  <div className={`absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 ${
                    isDark ? 'border-blue-500' : 'border-slate-800'
                  }`} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className={`w-20 h-1 ${isDark ? 'bg-blue-500' : 'bg-slate-800'}`} />
            <span className={`text-sm font-mono tracking-widest uppercase ${
              isDark ? 'text-blue-400' : 'text-slate-600'
            }`}>
              03 — TESTIMONIALS
            </span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className={`p-8 relative ${
                  isDark ? 'bg-slate-900/80' : 'bg-white'
                } border-l-4 ${isDark ? 'border-blue-500' : 'border-slate-800'}`}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 ${isDark ? 'bg-blue-500' : 'bg-slate-800'}`}
                      style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                    />
                  ))}
                </div>

                <p className={`text-base leading-relaxed mb-8 ${
                  isDark ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  {testimonial.text}
                </p>

                <div className={`pt-6 border-t-2 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm font-mono tracking-wider uppercase ${
                    isDark ? 'text-gray-500' : 'text-slate-500'
                  }`}>
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={`py-32 px-6 md:px-12 ${
        isDark ? 'bg-slate-900/50' : 'bg-slate-100'
      }`}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className={`w-20 h-1 ${isDark ? 'bg-blue-500' : 'bg-slate-800'}`} />
              <span className={`text-sm font-mono tracking-widest uppercase ${
                isDark ? 'text-blue-400' : 'text-slate-600'
              }`}>
                04 — CONTACT
              </span>
            </div>
            
            <h2 className={`text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Reserve Your
              <br />Timepiece
            </h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="FIRST NAME"
                className={`w-full px-6 py-5 bg-transparent border-2 ${
                  isDark 
                    ? 'border-slate-800 focus:border-blue-500 text-white placeholder-gray-600' 
                    : 'border-slate-300 focus:border-slate-800 text-slate-900 placeholder-slate-400'
                } outline-none transition-all font-mono text-sm tracking-wider`}
                style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
              />
              <input
                type="text"
                placeholder="LAST NAME"
                className={`w-full px-6 py-5 bg-transparent border-2 ${
                  isDark 
                    ? 'border-slate-800 focus:border-blue-500 text-white placeholder-gray-600' 
                    : 'border-slate-300 focus:border-slate-800 text-slate-900 placeholder-slate-400'
                } outline-none transition-all font-mono text-sm tracking-wider`}
                style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
              />
            </div>

            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className={`w-full px-6 py-5 bg-transparent border-2 ${
                isDark 
                  ? 'border-slate-800 focus:border-blue-500 text-white placeholder-gray-600' 
                  : 'border-slate-300 focus:border-slate-800 text-slate-900 placeholder-slate-400'
              } outline-none transition-all font-mono text-sm tracking-wider`}
              style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
            />

            <input
              type="tel"
              placeholder="PHONE NUMBER"
              className={`w-full px-6 py-5 bg-transparent border-2 ${
                isDark 
                  ? 'border-slate-800 focus:border-blue-500 text-white placeholder-gray-600' 
                  : 'border-slate-300 focus:border-slate-800 text-slate-900 placeholder-slate-400'
              } outline-none transition-all font-mono text-sm tracking-wider`}
              style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
            />

            <textarea
              rows={4}
              placeholder="YOUR MESSAGE"
              className={`w-full px-6 py-5 bg-transparent border-2 ${
                isDark 
                  ? 'border-slate-800 focus:border-blue-500 text-white placeholder-gray-600' 
                  : 'border-slate-300 focus:border-slate-800 text-slate-900 placeholder-slate-400'
              } outline-none transition-all resize-none font-mono text-sm tracking-wider`}
              style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-5 text-sm font-bold tracking-widest uppercase ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/50' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white shadow-lg shadow-slate-800/50'
              } transition-all duration-300`}
              style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
            >
              Submit Request
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-20 px-6 md:px-12 border-t-2 ${
        isDark ? 'border-slate-900' : 'border-slate-300'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-4">
              <h3 className={`text-4xl font-black mb-4 tracking-tighter uppercase ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                CHRONOS
              </h3>
              <p className={`text-sm font-mono tracking-wider uppercase ${
                isDark ? 'text-gray-500' : 'text-slate-500'
              }`}>
                Swiss Timepieces
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <h4 className={`text-xs font-mono tracking-widest uppercase mb-6 ${
                isDark ? 'text-gray-500' : 'text-slate-500'
              }`}>
                Collections
              </h4>
              <ul className="space-y-3">
                {['Automatic', 'Chronograph', 'Diver', 'GMT'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-sm font-medium transition-colors ${
                      isDark ? 'text-gray-400 hover:text-blue-400' : 'text-slate-600 hover:text-slate-900'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className={`text-xs font-mono tracking-widest uppercase mb-6 ${
                isDark ? 'text-gray-500' : 'text-slate-500'
              }`}>
                Support
              </h4>
              <ul className="space-y-3">
                {['Warranty', 'Service', 'Returns', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-sm font-medium transition-colors ${
                      isDark ? 'text-gray-400 hover:text-blue-400' : 'text-slate-600 hover:text-slate-900'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className={`text-xs font-mono tracking-widest uppercase mb-6 ${
                isDark ? 'text-gray-500' : 'text-slate-500'
              }`}>
                Boutique
              </h4>
              <div className={`space-y-3 text-sm ${
                isDark ? 'text-gray-400' : 'text-slate-600'
              }`}>
                <p className="flex items-start gap-3">
                  <FiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Madison Avenue 500<br />New York, NY 10022</span>
                </p>
                <p className="flex items-center gap-3">
                  <FiPhone className="w-4 h-4 flex-shrink-0" />
                  <span>+1 212 555 8899</span>
                </p>
                <p className="flex items-center gap-3">
                  <FiMail className="w-4 h-4 flex-shrink-0" />
                  <span>concierge@chronos.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className={`pt-8 border-t-2 ${isDark ? 'border-slate-900' : 'border-slate-300'} flex flex-col md:flex-row justify-between items-center gap-6`}>
            <p className={`text-xs font-mono tracking-wider uppercase ${
              isDark ? 'text-gray-600' : 'text-slate-400'
            }`}>
              © 2024 Chronos Timepieces
            </p>
            
            <div className="flex gap-6">
              {[FiFacebook, FiInstagram, FaPinterest, FiTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-10 h-10 flex items-center justify-center border-2 ${
                    isDark 
                      ? 'border-slate-800 hover:border-blue-500 text-gray-400 hover:text-blue-400' 
                      : 'border-slate-300 hover:border-slate-800 text-slate-400 hover:text-slate-900'
                  } transition-colors`}
                  style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto"
        >
          <div className="min-h-full flex items-center justify-center p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-6xl ${
                isDark ? 'bg-slate-950' : 'bg-white'
              } overflow-hidden`}
              style={{ clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)' }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className={`absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white bg-slate-900' : 'text-slate-600 hover:text-slate-900 bg-slate-100'
                }`}
                style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image Carousel */}
                <div className="relative bg-black aspect-square">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />

                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                        style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
                      >
                        <FiChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                        style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
                      >
                        <FiChevronRight className="w-6 h-6 text-white" />
                      </button>

                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProduct.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-1 transition-all ${
                              index === currentImageIndex ? 'bg-white w-8' : 'bg-white/40 w-1'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-12 lg:p-16 overflow-y-auto max-h-[80vh]">
                  <div className="flex gap-1 mb-6">
                    {[...Array(selectedProduct.rating)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 ${isDark ? 'bg-blue-500' : 'bg-slate-800'}`}
                        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                      />
                    ))}
                  </div>

                  <h2 className={`text-4xl lg:text-5xl font-black mb-6 tracking-tighter uppercase ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {selectedProduct.name}
                  </h2>

                  <div className={`text-3xl font-black mb-8 ${isDark ? 'text-blue-500' : 'text-slate-800'}`}>
                    ${selectedProduct.price.toLocaleString()}
                  </div>

                  <p className={`text-base leading-relaxed mb-10 ${
                    isDark ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    {selectedProduct.description}
                  </p>

                  <div className={`space-y-4 mb-12 pb-10 border-t-2 pt-10 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                    <h3 className={`text-sm font-mono tracking-widest uppercase mb-6 ${
                      isDark ? 'text-gray-500' : 'text-slate-500'
                    }`}>
                      Specifications
                    </h3>
                    {Object.entries(selectedProduct.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className={`font-mono tracking-wider uppercase ${
                          isDark ? 'text-gray-500' : 'text-slate-500'
                        }`}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className={`font-bold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button 
                      className={`flex-1 py-5 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 ${
                        isDark 
                          ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/50' 
                          : 'bg-slate-800 hover:bg-slate-700 text-white shadow-lg shadow-slate-800/50'
                      } transition-all duration-300`}
                      style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
                    >
                      <FiShoppingBag className="w-5 h-5" />
                      Reserve
                    </button>
                    <button 
                      className={`w-16 h-16 flex items-center justify-center border-2 ${
                        isDark ? 'border-slate-800 hover:bg-slate-900' : 'border-slate-200 hover:bg-slate-100'
                      } transition-colors`}
                      style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
                    >
                      <FiHeart className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-slate-600'}`} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
