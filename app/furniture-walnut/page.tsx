'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter, FiSun, FiMoon, FiX, FiChevronLeft, FiChevronRight, FiHeart, FiAward, FiTrendingUp, FiStar } from 'react-icons/fi';
import { FaPinterest, FaCrown, FaTrophy, FaGem } from 'react-icons/fa';
import ProductCard from './ProductCard';

export default function FurnitureWalnut() {
  const [isDark, setIsDark] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);

  const products = [
    {
      id: 1,
      name: 'Imperial Walnut Dining Table',
      price: '$4,899',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1615066390971-03e4bd52c2bb?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop&q=80'
      ],
      description: 'Hand-selected American black walnut with dramatic live edges. Finished with 12 coats of hand-rubbed oil. Seats 10-12 guests.',
      specs: {
        'Dimensions': '108" L × 48" W × 30" H',
        'Material': 'American Black Walnut',
        'Finish': '12-Coat Hand-Rubbed Oil',
        'Seating': '10-12 Guests'
      }
    },
    {
      id: 2,
      name: 'Versailles Gold Credenza',
      price: '$3,799',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=800&h=600&fit=crop&q=80'
      ],
      description: 'Walnut burl veneer with 24k gold-plated hardware. Marble top with hand-carved details and velvet-lined drawers.',
      specs: {
        'Dimensions': '84" L × 22" W × 36" H',
        'Material': 'Walnut Burl, Marble Top',
        'Hardware': '24k Gold-Plated Brass',
        'Storage': '4 Velvet-Lined Drawers'
      }
    },
    {
      id: 3,
      name: 'Executive Walnut Desk',
      price: '$5,299',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=600&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1595428773637-62a5a8bfb9b5?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop&q=80'
      ],
      description: 'Book-matched walnut top with leather inlay. Integrated technology hub with hand-tooled brass accents.',
      specs: {
        'Dimensions': '78" L × 42" W × 31" H',
        'Material': 'Book-Matched Walnut',
        'Features': 'Wireless Charging, USB-C',
        'Storage': '5 Drawers'
      }
    },
    {
      id: 4,
      name: 'Venetian Velvet Chair',
      price: '$2,899',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&h=600&fit=crop&q=80'
      ],
      description: 'Carved walnut frame with Italian cream velvet upholstery. Hand-applied nailhead trim.',
      specs: {
        'Dimensions': '36" L × 38" W × 42" H',
        'Material': 'Hand-Carved Walnut',
        'Upholstery': 'Italian Cream Velvet',
        'Weight Capacity': '350 lbs'
      }
    },
    {
      id: 5,
      name: 'Library Bookshelf Tower',
      price: '$3,499',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&h=600&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop&q=80'
      ],
      description: 'Floor-to-ceiling with ornate crown molding. Six adjustable shelves with brass gallery rails and LED lighting.',
      specs: {
        'Dimensions': '48" L × 18" W × 96" H',
        'Material': 'Solid Walnut',
        'Shelves': '6 Adjustable',
        'Lighting': 'Integrated LED'
      }
    },
    {
      id: 6,
      name: 'Palazzo Coffee Table',
      price: '$2,799',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1615066390971-03e4bd52c2bb?w=800&h=600&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1615066390971-03e4bd52c2bb?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop&q=80'
      ],
      description: 'Live edge walnut slab on art deco brass base. Natural curves polished to perfection.',
      specs: {
        'Dimensions': '60" L × 36" W × 18" H',
        'Material': 'Live Edge Walnut',
        'Base': 'Art Deco Brass',
        'Thickness': '3" Slab'
      }
    },
    {
      id: 7,
      name: 'Royale Platform Bed',
      price: '$6,299',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop&q=80'
      ],
      description: 'Four-poster with brass canopy. Integrated nightstands with marble tops and USB charging.',
      specs: {
        'Dimensions': 'King: 98" L × 86" W × 96" H',
        'Material': 'Walnut, Brass, Marble',
        'Features': 'LED Lights, USB Ports',
        'Mattress': 'Slat Support'
      }
    },
    {
      id: 8,
      name: 'Grand Console Table',
      price: '$2,399',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80',
        'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop&q=80'
      ],
      description: 'Beveled mirror backing with gold leaf accents. Hand-carved cabriole legs and Italian marble top.',
      specs: {
        'Dimensions': '72" L × 20" W × 36" H',
        'Material': 'Walnut, Marble',
        'Backing': 'Beveled Mirror',
        'Storage': 'Two Drawers'
      }
    }
  ];

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProduct]);

  return (
    <div className={`${isDark ? 'dark' : ''} transition-colors duration-500 overflow-x-hidden`}>
      <div className="bg-amber-50 dark:bg-black min-h-screen">
        
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-amber-600 to-yellow-600 dark:from-amber-300 dark:to-yellow-400 text-white dark:text-black shadow-2xl hover:scale-110 transition-all duration-500 border-4 border-amber-900/30 dark:border-amber-800"
      >
        {isDark ? <FiSun size={28} /> : <FiMoon size={28} />}
      </button>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1618219944342-824e40a13285?w=1920&h=1080&fit=crop&q=80" alt="Luxury" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-amber-950/70 to-black/80"></div>
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto py-20">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="mb-8">
            <FaCrown className="text-amber-400 text-7xl mx-auto" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="font-serif text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-yellow-400 to-amber-600 mb-8 leading-tight">
            OPULENT WALNUT
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-2xl md:text-3xl text-amber-100 mb-12 font-serif italic">
            Imperial Craftsmanship Meets Unbridled Luxury
          </motion.p>

          <motion.button initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="px-12 py-5 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-black text-xl font-bold shadow-2xl hover:scale-110 transition-all border-4 border-amber-900">
            EXPLORE COLLECTION
          </motion.button>
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 py-32 px-4 bg-gradient-to-b from-amber-50 to-orange-50 dark:from-neutral-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="font-serif text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-yellow-600 to-amber-800 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-400 mb-6">
              Prestige Collection
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} isDark={isDark} onOpenModal={(p) => { setSelectedProduct(p); setCurrentImageIndex(0); }} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="bg-amber-50 dark:bg-neutral-900 max-w-5xl w-full max-h-[90vh] overflow-y-auto border-8 border-amber-700" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 z-10 p-3 bg-amber-600 rounded-full text-white">
                <FiX size={28} />
              </button>

              <div className="relative h-96">
                <img src={selectedProduct.images[currentImageIndex]} alt={selectedProduct.name} className="w-full h-full object-cover" />
                {selectedProduct.images.length > 1 && (
                  <>
                    <button onClick={() => setCurrentImageIndex((currentImageIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-amber-600 rounded-full text-white">
                      <FiChevronLeft size={32} />
                    </button>
                    <button onClick={() => setCurrentImageIndex((currentImageIndex + 1) % selectedProduct.images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-amber-600 rounded-full text-white">
                      <FiChevronRight size={32} />
                    </button>
                  </>
                )}
              </div>

              <div className="p-10">
                <h3 className="font-serif text-4xl font-black text-amber-900 dark:text-amber-300 mb-4">{selectedProduct.name}</h3>
                <p className="text-xl mb-6">{selectedProduct.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(selectedProduct.specs).map(([key, value]) => (
                    <div key={key} className="border-b-2 border-amber-300 py-2">
                      <span className="font-bold">{key}:</span> {value as string}
                    </div>
                  ))}
                </div>
                <button className="w-full px-10 py-5 bg-amber-600 text-white font-black text-xl">ADD TO CART</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.img initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=800&fit=crop&q=80" alt="Craftsman" className="w-full h-96 object-cover border-8 border-amber-700" />
          <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-5xl font-black text-amber-300 mb-8">Artistry Meets Dynasty</h2>
            <p className="text-xl text-amber-100 mb-6">For over three decades, our atelier has been the pinnacle of walnut craftsmanship.</p>
            <div className="grid grid-cols-2 gap-8 border-4 border-amber-600 p-8 bg-amber-900/30">
              <div className="text-center"><div className="text-6xl font-black text-yellow-300">35+</div><div className="text-amber-200">Years</div></div>
              <div className="text-center"><div className="text-6xl font-black text-yellow-300">12K+</div><div className="text-amber-200">Clients</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-amber-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-6xl font-black text-center text-amber-800 dark:text-amber-400 mb-20">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: 'Victoria Sterling', text: 'The Imperial Table is breathtaking. Museum-quality craftsmanship.', role: 'Design Curator' },
              { name: 'Alexander Beaumont', text: 'Absolute pinnacle of American furniture making. A true investment.', role: 'Architect' },
              { name: 'Isabella Chen', text: 'Transformed our home into a palatial sanctuary. Pure luxury.', role: 'Art Collector' }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }} className="bg-white dark:bg-neutral-800 p-10 border-4 border-amber-600">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <FiStar key={i} className="text-amber-600 fill-amber-600" size={20} />)}</div>
                <p className="text-lg italic mb-6">"{t.text}"</p>
                <div className="font-bold text-amber-900 dark:text-amber-300">{t.name}</div>
                <div className="text-sm text-amber-700 dark:text-amber-500">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <FaTrophy className="text-amber-400 text-6xl mx-auto mb-8" />
          <h2 className="font-serif text-7xl font-black text-amber-300 text-center mb-16">Private Consultation</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="px-8 py-5 bg-black/50 border-2 border-amber-600 text-white" />
              <input type="email" placeholder="Email" className="px-8 py-5 bg-black/50 border-2 border-amber-600 text-white" />
            </div>
            <textarea rows={6} placeholder="Message" className="w-full px-8 py-5 bg-black/50 border-2 border-amber-600 text-white resize-none" />
            <button type="submit" className="w-full px-10 py-6 bg-amber-600 text-white font-black text-xl">SUBMIT</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-amber-100 py-20 px-4 border-t-8 border-amber-600">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
          <div>
            <FaCrown className="text-amber-400 text-5xl mb-4" />
            <h3 className="font-serif text-3xl font-black text-amber-300 mb-4">WALNUT PRESTIGE</h3>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-amber-300">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-amber-400">Collection</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-400">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-amber-300">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3"><FiMapPin className="text-amber-500" /><span>Portland, OR</span></div>
              <div className="flex items-center gap-3"><FiPhone className="text-amber-500" /><span>(503) 555-LUXE</span></div>
              <div className="flex items-center gap-3"><FiMail className="text-amber-500" /><span>hello@walnut.com</span></div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 text-amber-300">Follow</h4>
            <div className="flex gap-4">
              {[FiFacebook, FiInstagram, FaPinterest, FiTwitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-amber-700 hover:bg-amber-600 transition-all"><Icon size={24} /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-16 pt-8 border-t border-amber-600">
          <p className="text-amber-300">&copy; 2026 Walnut Prestige. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}
