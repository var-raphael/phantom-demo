'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiSun, FiMoon, FiShoppingBag, FiHeart, FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import { ProductCard } from './ice-theme-card';

export default function IceThemePage() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const products = [
    {
      id: 1,
      name: 'Alpine Summit',
      price: 14500,
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=80',
        'https://images.unsplash.com/photo-1587836374228-4c25c8bc4156?w=1200&q=80',
      ],
      description: 'Engineered for extreme altitudes. Swiss automatic movement with glacier-inspired dial.',
      collection: 'Peak Series',
    },
    {
      id: 2,
      name: 'Glacier Chronograph',
      price: 16800,
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=80',
        'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80',
        'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&q=80',
      ],
      description: 'Precision timing inspired by frozen landscapes. Ice-blue accents on matte black dial.',
      collection: 'Peak Series',
    },
    {
      id: 3,
      name: 'Frost Expedition',
      price: 12900,
      image: 'https://images.unsplash.com/photo-1587836374228-4c25c8bc4156?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1587836374228-4c25c8bc4156?w=1200&q=80',
        'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1200&q=80',
        'https://images.unsplash.com/photo-1509941943102-10c232535736?w=1200&q=80',
      ],
      description: 'Built for arctic conditions. Titanium case with exceptional cold resistance.',
      collection: 'Arctic Collection',
    },
    {
      id: 4,
      name: 'Polar Diver',
      price: 18200,
      image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80',
        'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=1200&q=80',
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80',
      ],
      description: 'Professional dive watch rated for sub-zero waters. Luminous markers for polar nights.',
      collection: 'Arctic Collection',
    },
    {
      id: 5,
      name: 'Tundra Automatic',
      price: 13700,
      image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&q=80',
        'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1200&q=80',
        'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=1200&q=80',
      ],
      description: 'Minimalist design meets maximum durability. Inspired by endless white horizons.',
      collection: 'Peak Series',
    },
    {
      id: 6,
      name: 'Ice Ridge GMT',
      price: 15400,
      image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1200&q=80',
        'https://images.unsplash.com/photo-1526045478516-99145907023c?w=1200&q=80',
        'https://images.unsplash.com/photo-1587836374228-4c25c8bc4156?w=1200&q=80',
      ],
      description: 'Track multiple time zones across frozen continents. Dual-time functionality.',
      collection: 'Arctic Collection',
    },
    {
      id: 7,
      name: 'Avalanche Elite',
      price: 19900,
      image: 'https://images.unsplash.com/photo-1509941943102-10c232535736?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1509941943102-10c232535736?w=1200&q=80',
        'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=80',
      ],
      description: 'Ultimate expedition watch with altimeter and barometer complications.',
      collection: 'Peak Series',
    },
    {
      id: 8,
      name: 'Crystal Peak',
      price: 14200,
      image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1200&q=80',
        'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80',
        'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1200&q=80',
      ],
      description: 'Sapphire crystal case with transparent exhibition back. A window to precision.',
      collection: 'Arctic Collection',
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
      name: 'Erik Andersen',
      role: 'Mountaineer',
      text: 'Conquered Everest with this on my wrist. Performed flawlessly at -40°C. Absolutely reliable.',
      rating: 5,
    },
    {
      name: 'Lars Johansen',
      role: 'Polar Explorer',
      text: 'Six months in Antarctica, never missed a beat. This watch is as tough as the ice itself.',
      rating: 5,
    },
    {
      name: 'Sofia Bergström',
      role: 'Alpine Guide',
      text: 'I trust my life to the mountains and this watch. Both have never let me down.',
      rating: 5,
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-700 overflow-x-hidden ${
      isDark ? 'bg-slate-950 text-white' : 'bg-gray-50 text-slate-900'
    }`}>
      {/* Frost Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${isDark ? '#60a5fa' : '#94a3b8'} 1px, transparent 1px), radial-gradient(circle at 80% 80%, ${isDark ? '#60a5fa' : '#94a3b8'} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Ice Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-8 right-8 z-50 w-12 h-12 backdrop-blur-xl flex items-center justify-center transition-all duration-500 ${
          isDark 
            ? 'bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/20' 
            : 'bg-slate-800/10 hover:bg-slate-800/20 border border-slate-600/20'
        }`}
        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
      >
        {isDark ? (
          <FiSun className="w-4 h-4 text-cyan-400" />
        ) : (
          <FiMoon className="w-4 h-4 text-slate-700" />
        )}
      </motion.button>

      {/* Hero Section - Alpine Landscape */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Mountain Background with Parallax */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90)',
              filter: isDark ? 'brightness(0.4) contrast(1.1)' : 'brightness(0.6) contrast(1.05)',
            }}
          />
          {/* Ice Gradient Overlay */}
          <div className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-b from-slate-950/70 via-cyan-950/30 to-slate-950' 
              : 'bg-gradient-to-b from-gray-50/70 via-cyan-50/30 to-gray-50'
          }`} />
        </motion.div>

        {/* Floating Ice Crystals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${isDark ? 'bg-cyan-400/40' : 'bg-slate-400/40'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {/* Ice Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`inline-flex items-center gap-3 px-5 py-2 mb-8 backdrop-blur-xl border ${
                isDark ? 'border-cyan-400/30 text-cyan-400' : 'border-slate-600/30 text-slate-700'
              } text-xs tracking-[0.3em] uppercase`}
              style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
            >
              <div className={`w-1.5 h-1.5 ${isDark ? 'bg-cyan-400' : 'bg-slate-700'}`} 
                   style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              Swiss Alpine Engineering
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
              className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tighter leading-none uppercase ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
              style={{ 
                textShadow: isDark ? '0 0 60px rgba(34, 211, 238, 0.3)' : '0 0 60px rgba(0, 0, 0, 0.2)'
              }}
            >
              FORGE
              <br />
              <span className={isDark ? 'text-cyan-400' : 'text-slate-700'}>THE ICE</span>
            </motion.h1>

            {/* Ice Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mb-10 text-xs tracking-[0.2em] uppercase"
            >
              <span className={isDark ? 'text-cyan-400' : 'text-slate-600'}>-40°C Rated</span>
              <div className={`w-12 md:w-16 h-px ${isDark ? 'bg-cyan-400/50' : 'bg-slate-600/50'}`} />
              <span className={isDark ? 'text-cyan-400' : 'text-slate-600'}>Titanium</span>
              <div className={`w-12 md:w-16 h-px ${isDark ? 'bg-cyan-400/50' : 'bg-slate-600/50'}`} />
              <span className={isDark ? 'text-cyan-400' : 'text-slate-600'}>300M Dive</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
              className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light ${
                isDark ? 'text-gray-300' : 'text-slate-600'
              }`}
            >
              Engineered for the world's most extreme environments
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-10 py-4 text-sm font-bold tracking-widest uppercase backdrop-blur-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20' 
                  : 'bg-slate-800/20 hover:bg-slate-800/30 text-slate-800 border-2 border-slate-600/50 shadow-lg'
              }`}
              style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className={`text-xs tracking-widest uppercase ${
              isDark ? 'text-cyan-400' : 'text-slate-600'
            }`}>
              Scroll
            </span>
            <div className={`w-px h-16 ${
              isDark ? 'bg-gradient-to-b from-cyan-400 to-transparent' : 'bg-gradient-to-b from-slate-600 to-transparent'
            }`} />
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-px ${isDark ? 'bg-cyan-400' : 'bg-slate-600'}`} />
              <span className={`text-sm tracking-[0.3em] uppercase ${
                isDark ? 'text-cyan-400' : 'text-slate-600'
              }`}>
                Timepieces
              </span>
            </div>
            
            <h2 className={`text-5xl md:text-7xl font-bold tracking-tighter uppercase ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Arctic Collection
            </h2>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96]
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
        isDark ? 'bg-slate-900/50' : 'bg-white/50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative order-last md:order-first"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=90"
                  alt="Mountain Craftsmanship"
                  className="w-full h-full object-cover"
                  style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                />
                {/* Ice Frame */}
                <div className={`absolute inset-4 border-2 ${
                  isDark ? 'border-cyan-400/40' : 'border-slate-600/40'
                } pointer-events-none`}
                style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-px ${isDark ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                <span className={`text-sm tracking-[0.3em] uppercase ${
                  isDark ? 'text-cyan-400' : 'text-slate-600'
                }`}>
                  Engineering
                </span>
              </div>

              <h3 className={`text-4xl md:text-6xl font-bold mb-8 tracking-tighter uppercase leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Born in
                <br />The Alps
              </h3>

              <div className={`space-y-6 text-base leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              }`}>
                <p>
                  Our workshop sits at 2,500 meters in the Swiss Alps. Every timepiece is 
                  tested in the same extreme conditions our customers face—sub-zero temperatures, 
                  altitude pressure, and unforgiving terrain.
                </p>
                <p>
                  We use Grade 5 titanium for lightness and strength, sapphire crystal for 
                  scratch resistance, and Swiss movements that function flawlessly at -40°C. 
                  This isn't just engineering—it's survival equipment.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-12 border-t-2 border-current/10">
                <div>
                  <div className={`text-3xl md:text-5xl font-bold mb-2 ${
                    isDark ? 'text-cyan-400' : 'text-slate-800'
                  }`}>
                    2.5K
                  </div>
                  <div className={`text-[10px] md:text-xs tracking-widest uppercase ${
                    isDark ? 'text-gray-500' : 'text-slate-500'
                  }`}>
                    Altitude (M)
                  </div>
                </div>
                <div>
                  <div className={`text-3xl md:text-5xl font-bold mb-2 ${
                    isDark ? 'text-cyan-400' : 'text-slate-800'
                  }`}>
                    -40°C
                  </div>
                  <div className={`text-[10px] md:text-xs tracking-widest uppercase ${
                    isDark ? 'text-gray-500' : 'text-slate-500'
                  }`}>
                    Tested
                  </div>
                </div>
                <div>
                  <div className={`text-3xl md:text-5xl font-bold mb-2 ${
                    isDark ? 'text-cyan-400' : 'text-slate-800'
                  }`}>
                    15K+
                  </div>
                  <div className={`text-[10px] md:text-xs tracking-widest uppercase ${
                    isDark ? 'text-gray-500' : 'text-slate-500'
                  }`}>
                    Adventurers
                  </div>
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-px ${isDark ? 'bg-cyan-400' : 'bg-slate-600'}`} />
              <span className={`text-sm tracking-[0.3em] uppercase ${
                isDark ? 'text-cyan-400' : 'text-slate-600'
              }`}>
                Testimonials
              </span>
            </div>
            
            <h2 className={`text-5xl md:text-7xl font-bold tracking-tighter uppercase ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Field Tested
            </h2>
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
                } backdrop-blur-sm border-l-4 ${isDark ? 'border-cyan-400' : 'border-slate-600'}`}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 ${isDark ? 'bg-cyan-400' : 'bg-slate-600'}`}
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
                  <div className={`text-sm tracking-wider uppercase ${
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
        isDark ? 'bg-slate-900/50' : 'bg-white/50'
      }`}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-16 h-px ${isDark ? 'bg-cyan-400' : 'bg-slate-600'}`} />
              <span className={`text-sm tracking-[0.3em] uppercase ${
                isDark ? 'text-cyan-400' : 'text-slate-600'
              }`}>
                Contact
              </span>
            </div>
            
            <h2 className={`text-5xl md:text-7xl font-bold mb-4 tracking-tighter uppercase ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Join The
              <br />Expedition
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
                    ? 'border-slate-800 focus:border-cyan-400 text-white placeholder-gray-600' 
                    : 'border-slate-300 focus:border-slate-800 text-slate-900 placeholder-slate-400'
                } outline-none transition-all text-sm tracking-wider uppercase`}
                style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
              />
              <input
                type="text"
                placeholder="LAST NAME"
                className={`w-full px-6 py-5 bg-transparent border-2 ${
                  isDark 
                    ? 'border-slate-800 focus:border-cyan-400 text-white placeholder-gray-600' 
                    : 'border-slate-300 focus:border-slate-800 text-slate-900 placeholder-slate-400'
                } outline-none transition-all text-sm tracking-wider uppercase`}
                style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
              />
            </div>

            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className={`w-full px-6 py-5 bg-transparent border-2 ${
                isDark 
                  ? 'border-slate-800 focus:border-cyan-400 text-white placeholder-gray-600' 
                  : 'border-slate-300 focus:border-slate-800 text-slate-900 placeholder-slate-400'
              } outline-none transition-all text-sm tracking-wider uppercase`}
              style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
            />

            <input
              type="tel"
              placeholder="PHONE NUMBER"
              className={`w-full px-6 py-5 bg-transparent border-2 ${
                isDark 
                  ? 'border-slate-800 focus:border-cyan-400 text-white placeholder-gray-600' 
                  : 'border-slate-300 focus:border-slate-800 text-slate-900 placeholder-slate-400'
              } outline-none transition-all text-sm tracking-wider uppercase`}
              style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
            />

            <textarea
              rows={4}
              placeholder="YOUR MESSAGE"
              className={`w-full px-6 py-5 bg-transparent border-2 ${
                isDark 
                  ? 'border-slate-800 focus:border-cyan-400 text-white placeholder-gray-600' 
                  : 'border-slate-300 focus:border-slate-800 text-slate-900 placeholder-slate-400'
              } outline-none transition-all resize-none text-sm tracking-wider uppercase`}
              style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                isDark 
                  ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border-2 border-cyan-400/50' 
                  : 'bg-slate-800/20 hover:bg-slate-800/30 text-slate-800 border-2 border-slate-600/50'
              }`}
              style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
            >
              Send Message
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
              <h3 className={`text-4xl font-bold mb-4 tracking-tighter uppercase ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                GLACIALIS
              </h3>
              <p className={`text-sm tracking-wider uppercase ${
                isDark ? 'text-gray-500' : 'text-slate-500'
              }`}>
                Swiss Alpine Timepieces
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <h4 className={`text-xs tracking-widest uppercase mb-6 ${
                isDark ? 'text-gray-500' : 'text-slate-500'
              }`}>
                Collections
              </h4>
              <ul className="space-y-3">
                {['Peak Series', 'Arctic', 'Expedition', 'Limited'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-sm transition-colors ${
                      isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-slate-600 hover:text-slate-900'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className={`text-xs tracking-widest uppercase mb-6 ${
                isDark ? 'text-gray-500' : 'text-slate-500'
              }`}>
                Support
              </h4>
              <ul className="space-y-3">
                {['Warranty', 'Service', 'Guides', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-sm transition-colors ${
                      isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-slate-600 hover:text-slate-900'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className={`text-xs tracking-widest uppercase mb-6 ${
                isDark ? 'text-gray-500' : 'text-slate-500'
              }`}>
                Workshop
              </h4>
              <div className={`space-y-3 text-sm ${
                isDark ? 'text-gray-400' : 'text-slate-600'
              }`}>
                <p className="flex items-start gap-3">
                  <FiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Jungfraujoch Station<br />Swiss Alps, 2500m</span>
                </p>
                <p className="flex items-center gap-3">
                  <FiPhone className="w-4 h-4 flex-shrink-0" />
                  <span>+41 33 828 7979</span>
                </p>
                <p className="flex items-center gap-3">
                  <FiMail className="w-4 h-4 flex-shrink-0" />
                  <span>summit@glacialis.ch</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className={`pt-8 border-t-2 ${isDark ? 'border-slate-900' : 'border-slate-300'} flex flex-col md:flex-row justify-between items-center gap-6`}>
            <p className={`text-xs tracking-wider uppercase ${
              isDark ? 'text-gray-600' : 'text-slate-400'
            }`}>
              © 2024 Glacialis Timepieces
            </p>
            
            <div className="flex gap-6">
              {[FiFacebook, FiInstagram, FaPinterest, FiTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-10 h-10 flex items-center justify-center border-2 transition-colors ${
                    isDark 
                      ? 'border-slate-800 hover:border-cyan-400 text-gray-400 hover:text-cyan-400' 
                      : 'border-slate-300 hover:border-slate-800 text-slate-400 hover:text-slate-900'
                  }`}
                  style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
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
                style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
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
                        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                      >
                        <FiChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                      >
                        <FiChevronRight className="w-6 h-6 text-white" />
                      </button>

                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProduct.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-1 transition-all ${
                              index === currentImageIndex ? 'bg-cyan-400 w-8' : 'bg-white/40 w-1'
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
                        className={`w-1.5 h-1.5 ${isDark ? 'bg-cyan-400' : 'bg-slate-800'}`}
                        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                      />
                    ))}
                  </div>

                  <div className={`text-xs tracking-widest uppercase mb-4 ${
                    isDark ? 'text-cyan-400' : 'text-slate-600'
                  }`}>
                    {selectedProduct.collection}
                  </div>

                  <h2 className={`text-4xl lg:text-5xl font-bold mb-6 tracking-tighter uppercase ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {selectedProduct.name}
                  </h2>

                  <div className={`text-3xl font-bold mb-8 ${isDark ? 'text-cyan-400' : 'text-slate-800'}`}>
                    ${selectedProduct.price.toLocaleString()}
                  </div>

                  <p className={`text-base leading-relaxed mb-10 ${
                    isDark ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    {selectedProduct.description}
                  </p>

                  <div className={`space-y-4 mb-12 pb-10 border-t-2 pt-10 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                    <h3 className={`text-sm tracking-widest uppercase mb-6 ${
                      isDark ? 'text-gray-500' : 'text-slate-500'
                    }`}>
                      Specifications
                    </h3>
                    <div className="flex justify-between text-sm">
                      <span className={isDark ? 'text-gray-500' : 'text-slate-500'}>Case Material</span>
                      <span className={`font-bold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Grade 5 Titanium</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className={isDark ? 'text-gray-500' : 'text-slate-500'}>Movement</span>
                      <span className={`font-bold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Swiss Automatic</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className={isDark ? 'text-gray-500' : 'text-slate-500'}>Water Resistance</span>
                      <span className={`font-bold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>300M</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className={isDark ? 'text-gray-500' : 'text-slate-500'}>Temperature Rating</span>
                      <span className={`font-bold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>-40°C to +60°C</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      className={`flex-1 py-5 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 ${
                        isDark 
                          ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border-2 border-cyan-400/50' 
                          : 'bg-slate-800/20 hover:bg-slate-800/30 text-slate-800 border-2 border-slate-600/50'
                      }`}
                      style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
                    >
                      <FiShoppingBag className="w-5 h-5" />
                      Add to Cart
                    </button>
                    <button 
                      className={`w-16 h-16 flex items-center justify-center border-2 transition-colors ${
                        isDark ? 'border-slate-800 hover:bg-slate-900' : 'border-slate-200 hover:bg-slate-100'
                      }`}
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
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
