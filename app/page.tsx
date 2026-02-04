'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiSun, FiMoon, FiShoppingBag, FiHeart, FiStar, FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import { ProductCard } from './jewelry-gold-product-card';

export default function JewelryGoldPage() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const products = [
    {
      id: 1,
      name: 'Eternal Elegance Ring',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80',
      ],
      description: 'A timeless piece crafted with precision, featuring ethically sourced diamonds set in 18K gold.',
    },
    {
      id: 2,
      name: 'Golden Aurora Necklace',
      price: 3299,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80',
      ],
      description: 'An exquisite necklace that captures the essence of elegance with hand-selected gemstones.',
    },
    {
      id: 3,
      name: 'Celestial Bracelet',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
      ],
      description: 'Delicate yet bold, this bracelet features intricate metalwork inspired by celestial patterns.',
    },
    {
      id: 4,
      name: 'Diamond Cascade Earrings',
      price: 4199,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80',
      ],
      description: 'Stunning cascading diamonds that capture light beautifully from every angle.',
    },
    {
      id: 5,
      name: 'Radiant Pearl Set',
      price: 2899,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80',
      ],
      description: 'Lustrous pearls paired with diamond accents create a sophisticated and classic look.',
    },
    {
      id: 6,
      name: 'Timeless Gold Band',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
      ],
      description: 'A classic gold band with modern detailing, perfect for any occasion.',
    },
    {
      id: 7,
      name: 'Vintage Ruby Pendant',
      price: 3799,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80',
      ],
      description: 'Vintage-inspired design featuring a deep red ruby surrounded by intricate gold filigree.',
    },
    {
      id: 8,
      name: 'Elegant Sapphire Ring',
      price: 4599,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      rating: 5,
      images: [
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
      ],
      description: 'A breathtaking sapphire center stone complemented by a halo of brilliant diamonds.',
    },
  ];

  const openModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
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
      name: 'Sophia Laurent',
      text: 'The craftsmanship is absolutely stunning. Every piece tells a story of elegance.',
      rating: 5,
    },
    {
      name: 'Isabella Chen',
      text: 'Unmatched quality and beauty. These pieces have become my treasured heirlooms.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      text: 'Pure luxury. The attention to detail is extraordinary in every single piece.',
      rating: 5,
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${isDark ? 'bg-black text-white' : 'bg-stone-50 text-stone-900'}`}>
      {/* Wavy Background Pattern */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50 Q 25 30, 50 50 T 100 50"
                fill="none"
                stroke={isDark ? '#D4AF37' : '#B8860B'}
                strokeWidth="0.5"
              />
              <path
                d="M0 70 Q 25 50, 50 70 T 100 70"
                fill="none"
                stroke={isDark ? '#D4AF37' : '#B8860B'}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      {/* Dark/Light Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full ${
          isDark ? 'bg-yellow-600/20 hover:bg-yellow-600/30' : 'bg-yellow-700/20 hover:bg-yellow-700/30'
        } backdrop-blur-sm transition-all`}
      >
        {isDark ? <FiSun className="w-6 h-6 text-yellow-400" /> : <FiMoon className="w-6 h-6 text-yellow-700" />}
      </motion.button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(/images/images/jewelry8.jpg)',
              filter: isDark ? 'brightness(0.4)' : 'brightness(0.7)',
            }}
          />
        </motion.div>

        <div className="relative z-10 text-center w-full max-w-5xl mx-auto py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 sm:mb-6 leading-tight ${
              isDark ? 'text-yellow-400' : 'text-yellow-700'
            }`}
          >
            Luxe Éternelle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 font-light ${
              isDark ? 'text-gray-300' : 'text-stone-700'
            }`}
          >
            Where timeless elegance meets modern artistry
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: isDark 
                ? '0 0 40px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.3)' 
                : '0 0 40px rgba(184, 134, 11, 0.6), 0 0 80px rgba(184, 134, 11, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full ${
              isDark
                ? 'bg-yellow-600 hover:bg-yellow-500 text-black'
                : 'bg-yellow-700 hover:bg-yellow-800 text-white'
            } transition-all shadow-lg inline-flex items-center gap-2`}
          >
            <FiShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="whitespace-nowrap">Explore Collection</span>
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-6 h-10 border-2 ${
              isDark ? 'border-yellow-400' : 'border-yellow-700'
            } rounded-full flex justify-center pt-2`}
          >
            <motion.div
              className={`w-1.5 h-1.5 ${isDark ? 'bg-yellow-400' : 'bg-yellow-700'} rounded-full`}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-5xl font-serif mb-4 ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>
              Signature Collection
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-stone-600'}`}>
              Handcrafted masterpieces for the discerning connoisseur
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              >
                <ProductCard product={product} isDark={isDark} onCardClick={openModal} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-16 sm:py-24 px-4 sm:px-6 overflow-hidden ${isDark ? 'bg-zinc-900/50' : 'bg-stone-100/50'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Jewelry craftsmanship"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className={`text-3xl sm:text-4xl font-serif mb-4 sm:mb-6 ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>
              Crafted to Perfection
            </h2>
            <p className={`text-base sm:text-lg mb-4 sm:mb-6 ${isDark ? 'text-gray-300' : 'text-stone-700'}`}>
              For over three decades, we have been creating jewelry that transcends time. Each piece is
              meticulously crafted by master artisans using only the finest materials.
            </p>
            <p className={`text-base sm:text-lg mb-6 sm:mb-8 ${isDark ? 'text-gray-300' : 'text-stone-700'}`}>
              Our commitment to excellence and innovation has made us a trusted name among collectors and
              connoisseurs worldwide.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>
                  30+
                </div>
                <div className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-stone-600'}`}>Years of Excellence</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>
                  50K+
                </div>
                <div className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-stone-600'}`}>Satisfied Clients</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-5xl font-serif mb-4 ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>
              Client Stories
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-stone-600'}`}>
              What our clients say about their experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                className={`p-6 sm:p-8 rounded-lg ${
                  isDark ? 'bg-zinc-900/50 border border-yellow-600/20' : 'bg-white border border-yellow-700/20'
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className={`w-5 h-5 ${isDark ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-700 text-yellow-700'}`} />
                  ))}
                </div>
                <p className={`mb-4 italic ${isDark ? 'text-gray-300' : 'text-stone-700'}`}>
                  "{testimonial.text}"
                </p>
                <p className={`font-medium ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>
              Begin Your Journey
            </h2>
            <p className={`text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-stone-600'} px-4`}>
              Schedule a private consultation with our jewelry experts
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl ${
              isDark ? 'bg-zinc-900/50 border border-yellow-600/20' : 'bg-white border border-yellow-700/20'
            }`}
          >
            <form className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="group">
                  <label className={`block mb-2 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-stone-700'}`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDark
                        ? 'bg-black/30 border border-yellow-600/30 text-white focus:border-yellow-500'
                        : 'bg-stone-50 border border-yellow-700/30 text-stone-900 focus:border-yellow-700'
                    } outline-none transition-all md:group-hover:scale-[1.02]`}
                    placeholder="John"
                  />
                </div>

                <div className="group">
                  <label className={`block mb-2 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-stone-700'}`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDark
                        ? 'bg-black/30 border border-yellow-600/30 text-white focus:border-yellow-500'
                        : 'bg-stone-50 border border-yellow-700/30 text-stone-900 focus:border-yellow-700'
                    } outline-none transition-all md:group-hover:scale-[1.02]`}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="group">
                <label className={`block mb-2 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-stone-700'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark
                      ? 'bg-black/30 border border-yellow-600/30 text-white focus:border-yellow-500'
                      : 'bg-stone-50 border border-yellow-700/30 text-stone-900 focus:border-yellow-700'
                  } outline-none transition-all md:group-hover:scale-[1.02]`}
                  placeholder="john@example.com"
                />
              </div>

              <div className="group">
                <label className={`block mb-2 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-stone-700'}`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark
                      ? 'bg-black/30 border border-yellow-600/30 text-white focus:border-yellow-500'
                      : 'bg-stone-50 border border-yellow-700/30 text-stone-900 focus:border-yellow-700'
                  } outline-none transition-all md:group-hover:scale-[1.02]`}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="group">
                <label className={`block mb-2 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-stone-700'}`}>
                  Preferred Appointment Date
                </label>
                <input
                  type="date"
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark
                      ? 'bg-black/30 border border-yellow-600/30 text-white focus:border-yellow-500'
                      : 'bg-stone-50 border border-yellow-700/30 text-stone-900 focus:border-yellow-700'
                  } outline-none transition-all md:group-hover:scale-[1.02]`}
                />
              </div>

              <div className="group">
                <label className={`block mb-2 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-stone-700'}`}>
                  Message
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark
                      ? 'bg-black/30 border border-yellow-600/30 text-white focus:border-yellow-500'
                      : 'bg-stone-50 border border-yellow-700/30 text-stone-900 focus:border-yellow-700'
                  } outline-none transition-all resize-none md:group-hover:scale-[1.02]`}
                  placeholder="Tell us about your jewelry preferences..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-12 py-4 text-lg font-medium rounded-full ${
                  isDark
                    ? 'bg-yellow-600 hover:bg-yellow-500 text-black'
                    : 'bg-yellow-700 hover:bg-yellow-800 text-white'
                } transition-all shadow-lg`}
              >
                Book Consultation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 sm:py-16 px-4 sm:px-6 border-t ${isDark ? 'border-yellow-600/20 bg-zinc-900/30' : 'border-yellow-700/20 bg-stone-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className={`text-3xl font-serif mb-4 ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}
              >
                Luxe Éternelle
              </motion.h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-stone-600'}`}>
                Crafting timeless beauty and elegance since 1994.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['Collections', 'About Us', 'Custom Design', 'Care Guide'].map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a
                      href="#"
                      className={`${
                        isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-700'
                      } transition-colors`}
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                Customer Service
              </h4>
              <ul className="space-y-2">
                {['Contact Us', 'Shipping Info', 'Returns', 'FAQ'].map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a
                      href="#"
                      className={`${
                        isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-stone-600 hover:text-yellow-700'
                      } transition-colors`}
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                Contact Us
              </h4>
              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-start gap-3 ${isDark ? 'text-gray-400' : 'text-stone-600'}`}
                >
                  <FiMapPin className={`mt-1 w-5 h-5 flex-shrink-0 ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`} />
                  <span className="text-sm">
                    5th Avenue, Suite 1200<br />New York, NY 10018
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 ${isDark ? 'text-gray-400' : 'text-stone-600'}`}
                >
                  <FiPhone className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`} />
                  <a href="tel:+12125551234" className="text-sm hover:underline">
                    +1 (212) 555-1234
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 ${isDark ? 'text-gray-400' : 'text-stone-600'}`}
                >
                  <FiMail className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`} />
                  <a href="mailto:contact@luxeeternelle.com" className="text-sm hover:underline">
                    contact@luxeeternelle.com
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 ${isDark ? 'text-gray-400' : 'text-stone-600'}`}
                >
                  <FiClock className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`} />
                  <span className="text-sm">Mon-Sat: 10AM - 7PM</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className={`pt-8 border-t ${isDark ? 'border-yellow-600/20' : 'border-yellow-700/20'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-stone-600'}`}>
                © 2024 Luxe Éternelle. All rights reserved.
              </p>
              
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark
                      ? 'bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400'
                      : 'bg-yellow-700/20 hover:bg-yellow-700/30 text-yellow-700'
                  } transition-colors`}
                >
                  <FiFacebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark
                      ? 'bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400'
                      : 'bg-yellow-700/20 hover:bg-yellow-700/30 text-yellow-700'
                  } transition-colors`}
                >
                  <FiInstagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark
                      ? 'bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400'
                      : 'bg-yellow-700/20 hover:bg-yellow-700/30 text-yellow-700'
                  } transition-colors`}
                >
                  <FaPinterest className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark
                      ? 'bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400'
                      : 'bg-yellow-700/20 hover:bg-yellow-700/30 text-yellow-700'
                  } transition-colors`}
                >
                  <FiTwitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Product Modal with Carousel - FIXED FOR MOBILE SCROLLING */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
          style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="min-h-full flex items-center justify-center p-4 py-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-5xl rounded-2xl overflow-hidden ${
                isDark ? 'bg-zinc-900' : 'bg-white'
              } shadow-2xl`}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                  isDark ? 'bg-black/50 hover:bg-black/70' : 'bg-white/50 hover:bg-white/70'
                } backdrop-blur-sm transition-colors`}
              >
                <FiX className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Carousel */}
                <div className="relative bg-black aspect-square md:aspect-auto">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Carousel Controls */}
                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors"
                      >
                        <FiChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors"
                      >
                        <FiChevronRight className="w-6 h-6 text-white" />
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProduct.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? 'bg-yellow-400 w-8'
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Product Details - SCROLLABLE */}
                <div className="p-6 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-none">
                  <div className="flex gap-1 mb-3">
                    {[...Array(selectedProduct.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-5 h-5 ${
                          isDark ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-700 text-yellow-700'
                        }`}
                      />
                    ))}
                  </div>

                  <h2 className={`text-2xl md:text-3xl lg:text-4xl font-serif mb-4 ${
                    isDark ? 'text-yellow-400' : 'text-yellow-700'
                  }`}>
                    {selectedProduct.name}
                  </h2>

                  <p className={`text-3xl md:text-4xl font-bold mb-6 ${
                    isDark ? 'text-yellow-400' : 'text-yellow-700'
                  }`}>
                    ${selectedProduct.price.toLocaleString()}
                  </p>

                  <p className={`text-base md:text-lg mb-8 leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-stone-700'
                  }`}>
                    {selectedProduct.description}
                  </p>

                  <div className={`space-y-4 mb-8 p-4 rounded-lg ${
                    isDark ? 'bg-black/30' : 'bg-stone-100'
                  }`}>
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-400' : 'text-stone-600'}>Material:</span>
                      <span className={isDark ? 'text-white' : 'text-stone-900'}>18K Gold</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-400' : 'text-stone-600'}>Gemstones:</span>
                      <span className={isDark ? 'text-white' : 'text-stone-900'}>Ethically Sourced</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-400' : 'text-stone-600'}>Warranty:</span>
                      <span className={isDark ? 'text-white' : 'text-stone-900'}>Lifetime</span>
                    </div>
                  </div>

                  <div className="flex gap-4 sticky bottom-0 bg-inherit pt-4 pb-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 px-6 md:px-8 py-3 md:py-4 rounded-full font-medium ${
                        isDark
                          ? 'bg-yellow-600 hover:bg-yellow-500 text-black'
                          : 'bg-yellow-700 hover:bg-yellow-800 text-white'
                      } transition-colors flex items-center justify-center gap-2`}
                    >
                      <FiShoppingBag className="w-5 h-5" />
                      Add to Cart
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 md:p-4 rounded-full ${
                        isDark
                          ? 'bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400'
                          : 'bg-yellow-700/20 hover:bg-yellow-700/30 text-yellow-700'
                      } transition-colors`}
                    >
                      <FiHeart className="w-6 h-6" />
                    </motion.button>
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