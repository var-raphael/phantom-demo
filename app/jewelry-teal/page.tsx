'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiSun, FiMoon, FiShoppingBag, FiHeart, FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import { ProductCard } from './jewelry-teal-card';

export default function JewelryTealPage() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const products = [
    {
      id: 1,
      name: 'Oceanic Dream',
      price: 3299,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
      ],
      description: 'A stunning aquamarine centerpiece surrounded by rose gold filigree, evoking the depths of the ocean.',
    },
    {
      id: 2,
      name: 'Tidal Elegance',
      price: 4599,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=80',
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1200&q=80',
        'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1200&q=80',
      ],
      description: 'Cascading teal gemstones set in rose gold create a mesmerizing flow of elegance.',
    },
    {
      id: 3,
      name: 'Coral Reef',
      price: 2899,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80',
        'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80',
        'https://images.unsplash.com/photo-1629216407191-caf6d86c1c6a?w=1200&q=80',
      ],
      description: 'Intricate rose gold details with teal accents inspired by vibrant coral formations.',
    },
    {
      id: 4,
      name: 'Lagoon Cascade',
      price: 3899,
      image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=1200&q=80',
        'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=1200&q=80',
        'https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=1200&q=80',
      ],
      description: 'Delicate drops of turquoise stones framed in warm rose gold, capturing tropical beauty.',
    },
    {
      id: 5,
      name: 'Marina Pearl',
      price: 5299,
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1200&q=80',
        'https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=1200&q=80',
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=1200&q=80',
      ],
      description: 'Lustrous pearls meet deep teal gemstones in an exquisite rose gold setting.',
    },
    {
      id: 6,
      name: 'Aquatic Band',
      price: 2199,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80',
        'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=1200&q=80',
        'https://images.unsplash.com/photo-1611622537422-327ca9614e40?w=1200&q=80',
      ],
      description: 'A sleek rose gold band with teal inlay, inspired by flowing water.',
    },
    {
      id: 7,
      name: 'Turquoise Wave',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80',
        'https://images.unsplash.com/photo-1611622537422-327ca9614e40?w=1200&q=80',
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1200&q=80',
      ],
      description: 'A captivating turquoise stone embraced by flowing rose gold waves.',
    },
    {
      id: 8,
      name: 'Seabreeze Cocktail',
      price: 4299,
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1200&q=80',
        'https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=1200&q=80',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=80',
      ],
      description: 'Bold and sophisticated with a large teal centerpiece set in artisan rose gold.',
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
      name: 'Isabella Chen',
      role: 'Art Curator',
      text: 'Each piece is a masterwork. The teal and rose gold combination transcends trends—it\'s timeless luxury.',
      rating: 5,
    },
    {
      name: 'Victoria Laurent',
      role: 'Jewelry Collector',
      text: 'I\'ve worn pieces from houses across the world. This craftsmanship rivals the finest European ateliers.',
      rating: 5,
    },
    {
      name: 'Olivia Sterling',
      role: 'Fashion Editor',
      text: 'Museum-quality artistry meets contemporary elegance. These aren\'t accessories—they\'re heirlooms.',
      rating: 5,
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-700 overflow-x-hidden ${
      isDark ? 'bg-zinc-950 text-white' : 'bg-neutral-50 text-zinc-900'
    }`}>
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="elegant-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill={isDark ? '#14b8a6' : '#0d9488'} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#elegant-grid)" />
        </svg>
      </div>

      {/* Elegant Toggle */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-8 right-8 z-50 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-500 ${
          isDark 
            ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
            : 'bg-black/5 hover:bg-black/10 border border-black/10'
        }`}
      >
        {isDark ? (
          <FiSun className="w-4 h-4 text-teal-400" />
        ) : (
          <FiMoon className="w-4 h-4 text-rose-500" />
        )}
      </motion.button>

      {/* Hero Section - Luxury Minimal */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y, opacity }} 
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center scale-105"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=90)',
              filter: isDark ? 'brightness(0.25) contrast(1.1)' : 'brightness(0.5) contrast(1.05)',
            }}
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950' 
              : 'bg-gradient-to-b from-neutral-50/60 via-neutral-50/40 to-neutral-50'
          }`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            {/* Luxury Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`inline-flex items-center gap-3 px-6 py-2 mb-8 border ${
                isDark ? 'border-teal-400/20 text-teal-400' : 'border-teal-600/20 text-teal-600'
              } rounded-full text-xs tracking-[0.3em] uppercase backdrop-blur-sm`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-teal-400' : 'bg-teal-600'}`} />
              Fine Jewelry
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`text-6xl md:text-8xl lg:text-9xl font-light mb-6 tracking-tight leading-none ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
              style={{ fontFamily: 'var(--font-serif), serif' }}
            >
              Aquamarine
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`w-24 h-px mx-auto mb-6 ${
                isDark 
                  ? 'bg-gradient-to-r from-transparent via-teal-400/50 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-rose-500/50 to-transparent'
              }`}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className={`text-lg md:text-xl font-light tracking-wide mb-12 ${
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Where Ocean Depth Meets Rose Gold Radiance
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-12 py-4 border ${
                isDark 
                  ? 'border-white/20 hover:border-teal-400/50 hover:bg-teal-400/5' 
                  : 'border-black/20 hover:border-rose-500/50 hover:bg-rose-500/5'
              } text-sm tracking-[0.3em] uppercase transition-all duration-500 backdrop-blur-sm`}
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
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className={`text-xs tracking-widest uppercase ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Scroll
            </span>
            <div className={`w-px h-12 ${
              isDark ? 'bg-gradient-to-b from-teal-400/50 to-transparent' : 'bg-gradient-to-b from-rose-500/50 to-transparent'
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 text-center"
          >
            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-light mb-4 tracking-tight ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
            style={{ fontFamily: 'var(--font-serif), serif' }}
            >
              The Collection
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`w-16 h-px mx-auto ${
                isDark 
                  ? 'bg-gradient-to-r from-transparent via-teal-400 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-rose-500 to-transparent'
              }`}
            />
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <ProductCard product={product} isDark={isDark} onCardClick={openModal} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-32 px-6 md:px-12 ${
        isDark ? 'bg-zinc-900/30' : 'bg-white/50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=90"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
                {/* Elegant border frame */}
                <div className={`absolute inset-4 border ${
                  isDark ? 'border-teal-400/30' : 'border-rose-500/30'
                } pointer-events-none`} />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className={`text-4xl md:text-5xl font-light mb-8 tracking-tight leading-tight ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
              style={{ fontFamily: 'var(--font-serif), serif' }}
              >
                Timeless Elegance,<br />Modern Artistry
              </h3>

              <div className={`space-y-6 text-base md:text-lg font-light leading-relaxed ${
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                <p>
                  Our atelier draws inspiration from the ocean's mesmerizing depths, 
                  where teal waters meet the warmth of precious rose gold. Each piece 
                  is a testament to centuries-old craftsmanship reimagined for the modern connoisseur.
                </p>
                <p>
                  From the initial sketch to the final polish, our master jewelers invest 
                  hundreds of hours ensuring every detail reflects our uncompromising 
                  commitment to excellence.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-current/10">
                <div>
                  <div className={`text-5xl font-light mb-2 ${
                    isDark ? 'text-teal-400' : 'text-rose-500'
                  }`}>
                    25<span className="text-2xl">+</span>
                  </div>
                  <div className={`text-sm tracking-widest uppercase ${
                    isDark ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    Years Heritage
                  </div>
                </div>
                <div>
                  <div className={`text-5xl font-light mb-2 ${
                    isDark ? 'text-teal-400' : 'text-rose-500'
                  }`}>
                    10<span className="text-2xl">K+</span>
                  </div>
                  <div className={`text-sm tracking-widest uppercase ${
                    isDark ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    Collectors
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
            className="mb-20 text-center"
          >
            <h2 className={`text-4xl md:text-6xl font-light mb-4 tracking-tight ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
            style={{ fontFamily: 'var(--font-serif), serif' }}
            >
              Distinguished Voices
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`w-16 h-px mx-auto ${
                isDark 
                  ? 'bg-gradient-to-r from-transparent via-rose-400 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-teal-600 to-transparent'
              }`}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`p-10 relative ${
                  isDark ? 'bg-zinc-900/50' : 'bg-white'
                } backdrop-blur-sm border ${
                  isDark ? 'border-white/5' : 'border-black/5'
                }`}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 rounded-full ${isDark ? 'bg-teal-400' : 'bg-rose-500'}`}
                    />
                  ))}
                </div>

                <p className={`text-base font-light leading-relaxed mb-8 ${
                  isDark ? 'text-zinc-300' : 'text-zinc-700'
                }`}>
                  {testimonial.text}
                </p>

                <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  <div className={`font-light mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm tracking-wide ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
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
        isDark ? 'bg-zinc-900/30' : 'bg-white/50'
      }`}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className={`text-4xl md:text-6xl font-light mb-4 tracking-tight ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
            style={{ fontFamily: 'var(--font-serif), serif' }}
            >
              Private Consultation
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`w-16 h-px mx-auto mb-6 ${
                isDark 
                  ? 'bg-gradient-to-r from-transparent via-teal-400 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-rose-500 to-transparent'
              }`}
            />
            <p className={`text-base font-light ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Reserve your personalized viewing experience
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="First Name"
                className={`w-full px-0 py-4 bg-transparent border-b ${
                  isDark 
                    ? 'border-zinc-800 focus:border-teal-400 text-white placeholder-zinc-600' 
                    : 'border-zinc-200 focus:border-rose-500 text-zinc-900 placeholder-zinc-400'
                } outline-none transition-all duration-300 font-light tracking-wide`}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={`w-full px-0 py-4 bg-transparent border-b ${
                  isDark 
                    ? 'border-zinc-800 focus:border-teal-400 text-white placeholder-zinc-600' 
                    : 'border-zinc-200 focus:border-rose-500 text-zinc-900 placeholder-zinc-400'
                } outline-none transition-all duration-300 font-light tracking-wide`}
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className={`w-full px-0 py-4 bg-transparent border-b ${
                isDark 
                  ? 'border-zinc-800 focus:border-teal-400 text-white placeholder-zinc-600' 
                  : 'border-zinc-200 focus:border-rose-500 text-zinc-900 placeholder-zinc-400'
              } outline-none transition-all duration-300 font-light tracking-wide`}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className={`w-full px-0 py-4 bg-transparent border-b ${
                isDark 
                  ? 'border-zinc-800 focus:border-teal-400 text-white placeholder-zinc-600' 
                  : 'border-zinc-200 focus:border-rose-500 text-zinc-900 placeholder-zinc-400'
              } outline-none transition-all duration-300 font-light tracking-wide`}
            />

            <input
              type="date"
              className={`w-full px-0 py-4 bg-transparent border-b ${
                isDark 
                  ? 'border-zinc-800 focus:border-teal-400 text-white' 
                  : 'border-zinc-200 focus:border-rose-500 text-zinc-900'
              } outline-none transition-all duration-300 font-light tracking-wide`}
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className={`w-full px-0 py-4 bg-transparent border-b ${
                isDark 
                  ? 'border-zinc-800 focus:border-teal-400 text-white placeholder-zinc-600' 
                  : 'border-zinc-200 focus:border-rose-500 text-zinc-900 placeholder-zinc-400'
              } outline-none transition-all duration-300 resize-none font-light tracking-wide`}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-5 border ${
                isDark 
                  ? 'border-teal-400/30 hover:bg-teal-400/5 text-teal-400' 
                  : 'border-rose-500/30 hover:bg-rose-500/5 text-rose-500'
              } text-sm tracking-[0.3em] uppercase transition-all duration-500`}
            >
              Submit Request
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-20 px-6 md:px-12 border-t ${
        isDark ? 'border-zinc-900' : 'border-zinc-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-4">
              <h3 className={`text-3xl font-light mb-4 tracking-tight ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
              style={{ fontFamily: 'var(--font-serif), serif' }}
              >
                Aquamarine
              </h3>
              <p className={`text-sm font-light tracking-wide ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                Fine Jewelry Atelier
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <h4 className={`text-xs font-light tracking-[0.2em] uppercase mb-6 ${
                isDark ? 'text-zinc-500' : 'text-zinc-500'
              }`}>
                Collections
              </h4>
              <ul className="space-y-3">
                {['Rings', 'Necklaces', 'Bracelets', 'Earrings'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-sm font-light transition-colors ${
                      isDark ? 'text-zinc-400 hover:text-teal-400' : 'text-zinc-600 hover:text-rose-500'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className={`text-xs font-light tracking-[0.2em] uppercase mb-6 ${
                isDark ? 'text-zinc-500' : 'text-zinc-500'
              }`}>
                Services
              </h4>
              <ul className="space-y-3">
                {['Bespoke', 'Restoration', 'Appraisal', 'Concierge'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-sm font-light transition-colors ${
                      isDark ? 'text-zinc-400 hover:text-teal-400' : 'text-zinc-600 hover:text-rose-500'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className={`text-xs font-light tracking-[0.2em] uppercase mb-6 ${
                isDark ? 'text-zinc-500' : 'text-zinc-500'
              }`}>
                Atelier
              </h4>
              <div className={`space-y-3 text-sm font-light ${
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                <p className="flex items-start gap-3">
                  <FiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Ocean Boulevard 300<br />Miami Beach, FL 33139</span>
                </p>
                <p className="flex items-center gap-3">
                  <FiPhone className="w-4 h-4 flex-shrink-0" />
                  <span>+1 305 555 9876</span>
                </p>
                <p className="flex items-center gap-3">
                  <FiMail className="w-4 h-4 flex-shrink-0" />
                  <span>atelier@aquamarine.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className={`pt-8 border-t ${isDark ? 'border-zinc-900' : 'border-zinc-200'} flex flex-col md:flex-row justify-between items-center gap-6`}>
            <p className={`text-xs font-light tracking-wide ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
              © 2024 Aquamarine Fine Jewelry. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              {[FiFacebook, FiInstagram, FaPinterest, FiTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`transition-colors ${
                    isDark ? 'text-zinc-600 hover:text-teal-400' : 'text-zinc-400 hover:text-rose-500'
                  }`}
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-6xl ${
                isDark ? 'bg-zinc-950' : 'bg-white'
              } overflow-hidden`}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className={`absolute top-8 right-8 z-10 w-10 h-10 flex items-center justify-center transition-colors ${
                  isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <FiX className="w-5 h-5" />
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
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                      >
                        <FiChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                      >
                        <FiChevronRight className="w-5 h-5 text-white" />
                      </button>

                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProduct.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              index === currentImageIndex ? 'bg-white w-6' : 'bg-white/40'
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
                      <div key={i} className={`w-1 h-1 rounded-full ${isDark ? 'bg-teal-400' : 'bg-rose-500'}`} />
                    ))}
                  </div>

                  <h2 className={`text-4xl lg:text-5xl font-light mb-6 tracking-tight ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}
                  style={{ fontFamily: 'var(--font-serif), serif' }}
                  >
                    {selectedProduct.name}
                  </h2>

                  <div className={`text-3xl font-light mb-8 ${isDark ? 'text-teal-400' : 'text-rose-500'}`}>
                    ${selectedProduct.price.toLocaleString()}
                  </div>

                  <p className={`text-base font-light mb-10 leading-relaxed ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {selectedProduct.description}
                  </p>

                  <div className={`space-y-4 mb-12 pb-10 border-b ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
                    <div className="flex justify-between text-sm font-light">
                      <span className={isDark ? 'text-zinc-500' : 'text-zinc-500'}>Material</span>
                      <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>18K Rose Gold</span>
                    </div>
                    <div className="flex justify-between text-sm font-light">
                      <span className={isDark ? 'text-zinc-500' : 'text-zinc-500'}>Gemstone</span>
                      <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>Natural Aquamarine</span>
                    </div>
                    <div className="flex justify-between text-sm font-light">
                      <span className={isDark ? 'text-zinc-500' : 'text-zinc-500'}>Warranty</span>
                      <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>Lifetime Guarantee</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className={`flex-1 py-4 border ${
                      isDark 
                        ? 'border-teal-400/30 hover:bg-teal-400/5 text-teal-400' 
                        : 'border-rose-500/30 hover:bg-rose-500/5 text-rose-500'
                    } text-sm tracking-[0.2em] uppercase transition-all duration-500 flex items-center justify-center gap-3`}>
                      <FiShoppingBag className="w-4 h-4" />
                      Reserve
                    </button>
                    <button className={`w-16 h-16 border ${
                      isDark ? 'border-zinc-800 hover:bg-zinc-900' : 'border-zinc-200 hover:bg-zinc-100'
                    } flex items-center justify-center transition-colors`}>
                      <FiHeart className={`w-5 h-5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`} />
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
