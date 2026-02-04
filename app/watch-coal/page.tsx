'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiSun, FiMoon, FiShoppingBag, FiHeart, FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import { ProductCard } from './watches-charcoal-card';

export default function WatchesCharcoalPage() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const products = [
    {
      id: 1,
      name: 'Heritage Royale',
      price: 18500,
      image: '/images/images/wristwatche4.jpg',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1587836374228-4c25c8bc4156?w=1200&q=80',
        'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&q=80',
        'https://images.unsplash.com/photo-1509941943102-10c232535736?w=1200&q=80',
      ],
      description: 'An exquisite dress watch featuring a champagne dial with Roman numerals and a hand-stitched alligator strap.',
      collection: 'Prestige',
    },
    {
      id: 2,
      name: 'Grand Elegance',
      price: 24900,
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=80',
        'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80',
        'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=1200&q=80',
      ],
      description: 'Sophisticated moon phase complication with guilloche detailing and 18k gold accents throughout.',
      collection: 'Haute Collection',
    },
    {
      id: 3,
      name: 'Sophistiqué',
      price: 15800,
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80',
        'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1200&q=80',
        'https://images.unsplash.com/photo-1526045478516-99145907023c?w=1200&q=80',
      ],
      description: 'Classic elegance redefined with a charcoal sunburst dial and champagne gold indices.',
      collection: 'Prestige',
    },
    {
      id: 4,
      name: 'Ambassador',
      price: 21500,
      image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1200&q=80',
        'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=1200&q=80',
        'https://images.unsplash.com/photo-1587836374228-4c25c8bc4156?w=1200&q=80',
      ],
      description: 'Perpetual calendar with date, day, month, and year indications. A masterpiece of horology.',
      collection: 'Haute Collection',
    },
    {
      id: 5,
      name: 'Virtuoso',
      price: 19200,
      image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80',
        'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=80',
      ],
      description: 'Ultra-thin automatic movement in an 18k rose gold case with champagne leather.',
      collection: 'Prestige',
    },
    {
      id: 6,
      name: 'Classique Noir',
      price: 16700,
      image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&q=80',
        'https://images.unsplash.com/photo-1509941943102-10c232535736?w=1200&q=80',
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80',
      ],
      description: 'Timeless design with small seconds subdial and hand-applied champagne hour markers.',
      collection: 'Prestige',
    },
    {
      id: 7,
      name: 'Majestic',
      price: 28900,
      image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=1200&q=80',
        'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1200&q=80',
        'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1200&q=80',
      ],
      description: 'Tourbillon escapement visible through the dial. The pinnacle of mechanical artistry.',
      collection: 'Haute Collection',
    },
    {
      id: 8,
      name: 'Distinction',
      price: 17400,
      image: 'https://images.unsplash.com/photo-1509941943102-10c232535736?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1509941943102-10c232535736?w=1200&q=80',
        'https://images.unsplash.com/photo-1526045478516-99145907023c?w=1200&q=80',
        'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80',
      ],
      description: 'Power reserve indicator with exhibition caseback revealing the beautifully finished movement.',
      collection: 'Prestige',
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
      name: 'Alexandre Beaumont',
      role: 'Connoisseur',
      text: 'A timepiece that transcends generations. The craftsmanship rivals the finest Swiss houses, with a refinement that speaks volumes.',
      rating: 5,
    },
    {
      name: 'Catherine Sinclair',
      role: 'Collector',
      text: 'I have acquired pieces from every major maison. This collection stands among the most distinguished in my vault.',
      rating: 5,
    },
    {
      name: 'Julian Rothschild',
      role: 'Horologist',
      text: 'The finishing is extraordinary. Each detail reveals the hand of a master. This is haute horlogerie at its finest.',
      rating: 5,
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-700 overflow-x-hidden ${
      isDark ? 'bg-neutral-950 text-white' : 'bg-stone-50 text-neutral-900'
    }`}>
      {/* Art Deco Pattern */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect x="50" y="50" width="20" height="20" fill={isDark ? '#D4AF37' : '#8B7355'} transform="rotate(45 60 60)" />
              <circle cx="60" cy="10" r="2" fill={isDark ? '#D4AF37' : '#8B7355'} />
              <circle cx="60" cy="110" r="2" fill={isDark ? '#D4AF37' : '#8B7355'} />
              <circle cx="10" cy="60" r="2" fill={isDark ? '#D4AF37' : '#8B7355'} />
              <circle cx="110" cy="60" r="2" fill={isDark ? '#D4AF37' : '#8B7355'} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deco-pattern)" />
        </svg>
      </div>

      {/* Elegant Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-10 right-10 z-50 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-500 ${
          isDark 
            ? 'bg-amber-600/10 hover:bg-amber-600/20 border border-amber-600/30' 
            : 'bg-amber-900/10 hover:bg-amber-900/20 border border-amber-900/30'
        }`}
      >
        {isDark ? (
          <FiSun className="w-4 h-4 text-amber-600" />
        ) : (
          <FiMoon className="w-4 h-4 text-amber-900" />
        )}
      </motion.button>

      {/* Hero Section - Classic Elegance */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Elegant Gradient Background */}
        <div className="absolute inset-0">
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1587836374228-4c25c8bc4156?w=1920&q=90)',
                filter: isDark ? 'brightness(0.2) contrast(1.1)' : 'brightness(0.4) contrast(1.05)',
              }}
            />
          </motion.div>
          
          {/* Radial Gradient Overlay */}
          <div className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950' 
              : 'bg-gradient-to-b from-stone-50/80 via-stone-50/60 to-stone-50'
          }`} />

          {/* Art Deco Frame Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              className={`absolute top-1/4 left-0 right-0 h-px ${
                isDark ? 'bg-gradient-to-r from-transparent via-amber-600/30 to-transparent' : 'bg-gradient-to-r from-transparent via-amber-900/30 to-transparent'
              }`}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              className={`absolute top-3/4 left-0 right-0 h-px ${
                isDark ? 'bg-gradient-to-r from-transparent via-amber-600/30 to-transparent' : 'bg-gradient-to-r from-transparent via-amber-900/30 to-transparent'
              }`}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Ornamental Line Top */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className={`w-16 h-px ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
            <div className={`w-2 h-2 rotate-45 ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
            <div className={`w-16 h-px ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
          </motion.div>

          {/* Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className={`inline-block mb-8 ${isDark ? 'text-amber-600' : 'text-amber-900'}`}
          >
            <div className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'serif' }}>
              Est. 1875
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className={`text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight leading-none ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{ 
              fontFamily: 'serif',
              fontWeight: 300,
              letterSpacing: '0.02em'
            }}
          >
            Timeless
            <br />
            <span className={isDark ? 'text-amber-600' : 'text-amber-900'} style={{ fontStyle: 'italic' }}>
              Distinction
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light ${
              isDark ? 'text-neutral-300' : 'text-neutral-600'
            }`}
            style={{ letterSpacing: '0.05em' }}
          >
            Handcrafted masterpieces for the discerning collector
          </motion.p>

          {/* Ornamental Line Bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.3, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className={`w-16 h-px ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
            <div className={`w-2 h-2 rotate-45 ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
            <div className={`w-16 h-px ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-12 py-4 border ${
              isDark 
                ? 'border-amber-600/40 hover:bg-amber-600/5 text-amber-600' 
                : 'border-amber-900/40 hover:bg-amber-900/5 text-amber-900'
            } text-sm tracking-[0.3em] uppercase transition-all duration-500 backdrop-blur-sm font-light`}
          >
            View Collection
          </motion.button>
        </div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <div className={`w-px h-16 ${
              isDark ? 'bg-gradient-to-b from-amber-600/50 to-transparent' : 'bg-gradient-to-b from-amber-900/50 to-transparent'
            }`} />
            <div className={`w-1.5 h-1.5 rotate-45 ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
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
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-20 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`w-12 h-px ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
              <div className={`w-1.5 h-1.5 rotate-45 ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
              <div className={`w-12 h-px ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
            </div>
            
            <h2 className={`text-5xl md:text-7xl mb-4 tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{ fontFamily: 'serif', fontWeight: 300 }}
            >
              The Prestige Collection
            </h2>
            
            <p className={`text-base font-light tracking-wide ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Heirloom pieces crafted to perfection
            </p>
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
                  duration: 1, 
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
      <section className={`py-32 px-6 md:px-12 ${
        isDark ? 'bg-neutral-900/30' : 'bg-white/50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-px ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
                <div className={`w-1.5 h-1.5 rotate-45 ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
              </div>

              <h3 className={`text-4xl md:text-6xl mb-8 tracking-tight leading-tight ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
              style={{ fontFamily: 'serif', fontWeight: 300 }}
              >
                A Legacy of
                <br />
                <span className={isDark ? 'text-amber-600' : 'text-amber-900'} style={{ fontStyle: 'italic' }}>
                  Excellence
                </span>
              </h3>

              <div className={`space-y-6 text-base md:text-lg font-light leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
              style={{ letterSpacing: '0.03em' }}
              >
                <p>
                  Since 1875, our atelier has been crafting timepieces that embody the pinnacle 
                  of horological artistry. Each watch is assembled by master watchmakers whose 
                  expertise has been passed down through generations.
                </p>
                <p>
                  We use only the finest materials—18-karat gold, hand-selected alligator leather, 
                  and complications that represent hundreds of hours of meticulous craftsmanship. 
                  Every piece is a testament to our unwavering commitment to perfection.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-current/10">
                <div>
                  <div className={`text-5xl mb-2 ${
                    isDark ? 'text-amber-600' : 'text-amber-900'
                  }`}
                  style={{ fontFamily: 'serif', fontWeight: 300 }}
                  >
                    149
                  </div>
                  <div className={`text-xs tracking-widest uppercase font-light ${
                    isDark ? 'text-neutral-500' : 'text-neutral-400'
                  }`}>
                    Years
                  </div>
                </div>
                <div>
                  <div className={`text-5xl mb-2 ${
                    isDark ? 'text-amber-600' : 'text-amber-900'
                  }`}
                  style={{ fontFamily: 'serif', fontWeight: 300 }}
                  >
                    3.5K
                  </div>
                  <div className={`text-xs tracking-widest uppercase font-light ${
                    isDark ? 'text-neutral-500' : 'text-neutral-400'
                  }`}>
                    Pieces
                  </div>
                </div>
                <div>
                  <div className={`text-5xl mb-2 ${
                    isDark ? 'text-amber-600' : 'text-amber-900'
                  }`}
                  style={{ fontFamily: 'serif', fontWeight: 300 }}
                  >
                    12
                  </div>
                  <div className={`text-xs tracking-widest uppercase font-light ${
                    isDark ? 'text-neutral-500' : 'text-neutral-400'
                  }`}>
                    Masters
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=90"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
                {/* Art Deco Frame */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute inset-6 border ${
                    isDark ? 'border-amber-600/40' : 'border-amber-900/40'
                  }`} />
                  <div className={`absolute top-6 left-6 w-8 h-8 border-t border-l ${
                    isDark ? 'border-amber-600' : 'border-amber-900'
                  }`} />
                  <div className={`absolute top-6 right-6 w-8 h-8 border-t border-r ${
                    isDark ? 'border-amber-600' : 'border-amber-900'
                  }`} />
                  <div className={`absolute bottom-6 left-6 w-8 h-8 border-b border-l ${
                    isDark ? 'border-amber-600' : 'border-amber-900'
                  }`} />
                  <div className={`absolute bottom-6 right-6 w-8 h-8 border-b border-r ${
                    isDark ? 'border-amber-600' : 'border-amber-900'
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`w-12 h-px ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
              <div className={`w-1.5 h-1.5 rotate-45 ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
              <div className={`w-12 h-px ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
            </div>
            
            <h2 className={`text-5xl md:text-7xl tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{ fontFamily: 'serif', fontWeight: 300 }}
            >
              Esteemed Collectors
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                className={`p-10 relative ${
                  isDark ? 'bg-neutral-900/50' : 'bg-white'
                } backdrop-blur-sm`}
              >
                {/* Art Deco Corner */}
                <div className={`absolute top-0 left-0 w-12 h-12 border-t border-l ${
                  isDark ? 'border-amber-600/30' : 'border-amber-900/30'
                }`} />
                <div className={`absolute bottom-0 right-0 w-12 h-12 border-b border-r ${
                  isDark ? 'border-amber-600/30' : 'border-amber-900/30'
                }`} />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rotate-45 ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`}
                    />
                  ))}
                </div>

                <p className={`text-base font-light leading-relaxed mb-8 ${
                  isDark ? 'text-neutral-300' : 'text-neutral-700'
                }`}
                style={{ 
                  fontStyle: 'italic',
                  letterSpacing: '0.02em'
                }}
                >
                  "{testimonial.text}"
                </p>

                <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  <div className={`font-light mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}
                  style={{ fontFamily: 'serif' }}
                  >
                    {testimonial.name}
                  </div>
                  <div className={`text-sm tracking-wide font-light ${
                    isDark ? 'text-neutral-500' : 'text-neutral-500'
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
        isDark ? 'bg-neutral-900/30' : 'bg-white/50'
      }`}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`w-12 h-px ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
              <div className={`w-1.5 h-1.5 rotate-45 ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
              <div className={`w-12 h-px ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
            </div>
            
            <h2 className={`text-5xl md:text-7xl mb-4 tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{ fontFamily: 'serif', fontWeight: 300 }}
            >
              Private Appointment
            </h2>
            
            <p className={`text-base font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
            style={{ letterSpacing: '0.05em' }}
            >
              Schedule an exclusive viewing
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
                    ? 'border-neutral-800 focus:border-amber-600 text-white placeholder-neutral-600' 
                    : 'border-neutral-200 focus:border-amber-900 text-neutral-900 placeholder-neutral-400'
                } outline-none transition-all duration-500 font-light tracking-wide`}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={`w-full px-0 py-4 bg-transparent border-b ${
                  isDark 
                    ? 'border-neutral-800 focus:border-amber-600 text-white placeholder-neutral-600' 
                    : 'border-neutral-200 focus:border-amber-900 text-neutral-900 placeholder-neutral-400'
                } outline-none transition-all duration-500 font-light tracking-wide`}
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className={`w-full px-0 py-4 bg-transparent border-b ${
                isDark 
                  ? 'border-neutral-800 focus:border-amber-600 text-white placeholder-neutral-600' 
                  : 'border-neutral-200 focus:border-amber-900 text-neutral-900 placeholder-neutral-400'
              } outline-none transition-all duration-500 font-light tracking-wide`}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className={`w-full px-0 py-4 bg-transparent border-b ${
                isDark 
                  ? 'border-neutral-800 focus:border-amber-600 text-white placeholder-neutral-600' 
                  : 'border-neutral-200 focus:border-amber-900 text-neutral-900 placeholder-neutral-400'
              } outline-none transition-all duration-500 font-light tracking-wide`}
            />

            <input
              type="date"
              className={`w-full px-0 py-4 bg-transparent border-b ${
                isDark 
                  ? 'border-neutral-800 focus:border-amber-600 text-white' 
                  : 'border-neutral-200 focus:border-amber-900 text-neutral-900'
              } outline-none transition-all duration-500 font-light tracking-wide`}
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className={`w-full px-0 py-4 bg-transparent border-b ${
                isDark 
                  ? 'border-neutral-800 focus:border-amber-600 text-white placeholder-neutral-600' 
                  : 'border-neutral-200 focus:border-amber-900 text-neutral-900 placeholder-neutral-400'
              } outline-none transition-all duration-500 resize-none font-light tracking-wide`}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-5 border ${
                isDark 
                  ? 'border-amber-600/40 hover:bg-amber-600/5 text-amber-600' 
                  : 'border-amber-900/40 hover:bg-amber-900/5 text-amber-900'
              } text-sm tracking-[0.3em] uppercase transition-all duration-500 font-light`}
            >
              Request Appointment
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-20 px-6 md:px-12 border-t ${
        isDark ? 'border-neutral-900' : 'border-neutral-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-4">
              <h3 className={`text-4xl mb-4 tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
              style={{ fontFamily: 'serif', fontWeight: 300 }}
              >
                Beaumont & Fils
              </h3>
              <p className={`text-sm font-light tracking-widest ${
                isDark ? 'text-neutral-500' : 'text-neutral-500'
              }`}>
                Horlogers depuis 1875
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <h4 className={`text-xs font-light tracking-widest uppercase mb-6 ${
                isDark ? 'text-neutral-500' : 'text-neutral-500'
              }`}>
                Collections
              </h4>
              <ul className="space-y-3">
                {['Prestige', 'Haute Collection', 'Vintage', 'Bespoke'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-sm font-light transition-colors ${
                      isDark ? 'text-neutral-400 hover:text-amber-600' : 'text-neutral-600 hover:text-amber-900'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className={`text-xs font-light tracking-widest uppercase mb-6 ${
                isDark ? 'text-neutral-500' : 'text-neutral-500'
              }`}>
                Services
              </h4>
              <ul className="space-y-3">
                {['Atelier', 'Restoration', 'Certification', 'Concierge'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-sm font-light transition-colors ${
                      isDark ? 'text-neutral-400 hover:text-amber-600' : 'text-neutral-600 hover:text-amber-900'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className={`text-xs font-light tracking-widest uppercase mb-6 ${
                isDark ? 'text-neutral-500' : 'text-neutral-500'
              }`}>
                Maison
              </h4>
              <div className={`space-y-3 text-sm font-light ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                <p className="flex items-start gap-3">
                  <FiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Place Vendôme 18<br />75001 Paris, France</span>
                </p>
                <p className="flex items-center gap-3">
                  <FiPhone className="w-4 h-4 flex-shrink-0" />
                  <span>+33 1 42 60 33 78</span>
                </p>
                <p className="flex items-center gap-3">
                  <FiMail className="w-4 h-4 flex-shrink-0" />
                  <span>maison@beaumont-fils.fr</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className={`pt-8 border-t ${isDark ? 'border-neutral-900' : 'border-neutral-200'} flex flex-col md:flex-row justify-between items-center gap-6`}>
            <p className={`text-xs font-light tracking-wide ${
              isDark ? 'text-neutral-600' : 'text-neutral-400'
            }`}>
              © 2024 Beaumont & Fils. Tous droits réservés.
            </p>
            
            <div className="flex gap-6">
              {[FiFacebook, FiInstagram, FaPinterest, FiTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`transition-colors ${
                    isDark ? 'text-neutral-600 hover:text-amber-600' : 'text-neutral-400 hover:text-amber-900'
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
                isDark ? 'bg-neutral-950' : 'bg-white'
              } overflow-hidden`}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className={`absolute top-8 right-8 z-10 w-10 h-10 flex items-center justify-center transition-colors ${
                  isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
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
                            className={`w-1.5 h-1.5 rotate-45 transition-all ${
                              index === currentImageIndex ? 'bg-amber-600 w-2 h-2' : 'bg-white/40'
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
                      <div key={i} className={`w-1.5 h-1.5 rotate-45 ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`} />
                    ))}
                  </div>

                  <div className={`text-xs tracking-widest uppercase mb-4 font-light ${
                    isDark ? 'text-amber-600' : 'text-amber-900'
                  }`}>
                    {selectedProduct.collection}
                  </div>

                  <h2 className={`text-4xl lg:text-5xl mb-6 tracking-tight ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                  style={{ fontFamily: 'serif', fontWeight: 300 }}
                  >
                    {selectedProduct.name}
                  </h2>

                  <div className={`text-3xl mb-8 font-light ${isDark ? 'text-amber-600' : 'text-amber-900'}`}>
                    ${selectedProduct.price.toLocaleString()}
                  </div>

                  <p className={`text-base font-light mb-10 leading-relaxed ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                  style={{ letterSpacing: '0.02em' }}
                  >
                    {selectedProduct.description}
                  </p>

                  <div className={`mb-12 pb-10 border-t ${isDark ? 'border-neutral-800' : 'border-neutral-200'} pt-8`}>
                    <h3 className={`text-xs font-light tracking-widest uppercase mb-6 ${
                      isDark ? 'text-neutral-500' : 'text-neutral-500'
                    }`}>
                      Specifications
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm font-light">
                        <span className={isDark ? 'text-neutral-500' : 'text-neutral-500'}>Case</span>
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>40mm 18K Gold</span>
                      </div>
                      <div className="flex justify-between text-sm font-light">
                        <span className={isDark ? 'text-neutral-500' : 'text-neutral-500'}>Movement</span>
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>Automatic Caliber</span>
                      </div>
                      <div className="flex justify-between text-sm font-light">
                        <span className={isDark ? 'text-neutral-500' : 'text-neutral-500'}>Strap</span>
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>Alligator Leather</span>
                      </div>
                      <div className="flex justify-between text-sm font-light">
                        <span className={isDark ? 'text-neutral-500' : 'text-neutral-500'}>Warranty</span>
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>5 Years</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className={`flex-1 py-5 border ${
                      isDark 
                        ? 'border-amber-600/40 hover:bg-amber-600/5 text-amber-600' 
                        : 'border-amber-900/40 hover:bg-amber-900/5 text-amber-900'
                    } text-sm tracking-[0.2em] uppercase transition-all duration-500 flex items-center justify-center gap-3 font-light`}>
                      <FiShoppingBag className="w-4 h-4" />
                      Acquire
                    </button>
                    <button className={`w-16 h-16 border ${
                      isDark ? 'border-neutral-800 hover:bg-neutral-900' : 'border-neutral-200 hover:bg-neutral-100'
                    } flex items-center justify-center transition-colors`}>
                      <FiHeart className={`w-5 h-5 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`} />
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
