'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiX, FiChevronLeft, FiChevronRight, FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter, FiMenu } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import ProductCard from './ProductCard';

// Product data with initial static images (will be randomized on client)
const products = [
  {
    id: 1,
    category: 'Rings',
    name: 'Diamond Eternity Ring',
    price: 2499,
    originalPrice: 2999,
    rating: 5,
    sale: true,
    images: ['/images/images/jewelry1.jpg', '/images/images/jewelry2.jpg', '/images/images/jewelry3.jpg'],
    description: 'Exquisite diamond eternity ring featuring brilliant-cut diamonds set in 18K white gold.',
    specs: {
      Material: '18K White Gold',
      Diamonds: '2.5 Carats Total',
      Setting: 'Prong Setting',
      Width: '3mm',
    },
  },
  {
    id: 2,
    category: 'Earrings',
    name: 'Ruby Drop Earrings',
    price: 1899,
    originalPrice: 2299,
    rating: 5,
    sale: true,
    images: ['/images/images/jewelry1.jpg', '/images/images/jewelry2.jpg', '/images/images/jewelry3.jpg'],
    description: 'Stunning ruby drop earrings surrounded by diamond halos in yellow gold.',
    specs: {
      Material: '18K Yellow Gold',
      Gemstone: 'Natural Ruby',
      Diamonds: '0.8 Carats Total',
      Length: '25mm',
    },
  },
  {
    id: 3,
    category: 'Necklaces',
    name: 'Pearl Pendant Necklace',
    price: 1599,
    originalPrice: null,
    rating: 5,
    sale: false,
    images: ['/images/images/jewelry1.jpg', '/images/images/jewelry2.jpg', '/images/images/jewelry3.jpg'],
    description: 'Classic Tahitian pearl pendant on a delicate white gold chain.',
    specs: {
      Material: '18K White Gold',
      Pearl: 'Tahitian Pearl 12mm',
      Chain: 'Cable Chain',
      Length: '18 inches',
    },
  },
  {
    id: 4,
    category: 'Bracelets',
    name: 'Tennis Bracelet',
    price: 3299,
    originalPrice: null,
    rating: 5,
    sale: false,
    images: ['/images/images/jewelry1.jpg', '/images/images/jewelry2.jpg', '/images/images/jewelry3.jpg'],
    description: 'Classic diamond tennis bracelet with exceptional brilliance and sparkle.',
    specs: {
      Material: '18K White Gold',
      Diamonds: '5.0 Carats Total',
      Setting: 'Four-Prong',
      Length: '7 inches',
    },
  },
  {
    id: 5,
    category: 'Couple Rings',
    name: 'Wedding Band Set',
    price: 1799,
    originalPrice: 2199,
    rating: 5,
    sale: true,
    images: ['/images/images/jewelry1.jpg', '/images/images/jewelry2.jpg', '/images/images/jewelry3.jpg'],
    description: 'Matching wedding bands crafted in platinum with elegant brushed finish.',
    specs: {
      Material: 'Platinum 950',
      Width: '4mm & 3mm',
      Finish: 'Brushed & Polished',
      Style: 'Classic Comfort Fit',
    },
  },
  {
    id: 6,
    category: 'Rings',
    name: 'Sapphire Engagement Ring',
    price: 4299,
    originalPrice: null,
    rating: 5,
    sale: false,
    images: ['/images/images/jewelry1.jpg', '/images/images/jewelry2.jpg', '/images/images/jewelry3.jpg'],
    description: 'Stunning blue sapphire center stone with diamond halo and shoulders.',
    specs: {
      Material: '18K White Gold',
      Center: '2.5ct Blue Sapphire',
      Diamonds: '0.6 Carats',
      Setting: 'Halo & Pave',
    },
  },
  {
    id: 7,
    category: 'Earrings',
    name: 'Diamond Studs',
    price: 2799,
    originalPrice: null,
    rating: 5,
    sale: false,
    images: ['/images/images/jewelry1.jpg', '/images/images/jewelry2.jpg', '/images/images/jewelry3.jpg'],
    description: 'Classic round brilliant diamond stud earrings in platinum settings.',
    specs: {
      Material: 'Platinum 950',
      Diamonds: '2.0 Carats Total',
      Cut: 'Excellent',
      Clarity: 'VVS1',
    },
  },
  {
    id: 8,
    category: 'Necklaces',
    name: 'Diamond Riviera Necklace',
    price: 6999,
    originalPrice: 8499,
    rating: 5,
    sale: true,
    images: ['/images/images/jewelry1.jpg', '/images/images/jewelry2.jpg', '/images/images/jewelry3.jpg'],
    description: 'Luxurious diamond riviera necklace with graduating stones.',
    specs: {
      Material: '18K White Gold',
      Diamonds: '10.0 Carats Total',
      Setting: 'Individual Prong',
      Length: '16 inches',
    },
  },
];

// Product Modal Component
function ProductModal({ product, onClose, isDarkMode }: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className={`rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-10 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
        >
          <FiX className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image Carousel */}
          <div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2">
              {product.images.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-black w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className={`text-xs tracking-widest mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{product.category}</div>
            <h2 className={`font-serif text-4xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{product.name}</h2>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(product.rating)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${isDarkMode ? 'fill-white' : 'fill-black'}`} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>(128 reviews)</span>
            </div>

            {/* Price */}
            <div className={`flex items-center gap-3 mb-6 pb-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <span className={`text-4xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>${product.price}</span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Description */}
            <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{product.description}</p>

            {/* Specifications */}
            <div className="mb-8">
              <h3 className={`font-medium text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className={`flex justify-between py-2 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{key}</span>
                    <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{value as string}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className={`flex-1 py-4 text-sm font-medium tracking-wider transition-colors ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}>
                ADD TO CART
              </button>
              <button className={`w-14 h-14 border-2 rounded-full flex items-center justify-center transition-colors ${
                isDarkMode 
                  ? 'border-white hover:bg-white hover:text-black' 
                  : 'border-black hover:bg-black hover:text-white'
              }`}>
                <FiHeart className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function JewelryElegantPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clientProducts, setClientProducts] = useState(products);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  // Randomize images on client side only
  useEffect(() => {
    const getRandomJewelryImages = () => {
      const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
      const shuffled = imageNumbers.sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 3).map(num => `/images/images/jewelry${num}.jpg`);
    };

    const randomizedProducts = products.map(product => ({
      ...product,
      images: getRandomJewelryImages()
    }));

    setClientProducts(randomizedProducts);
  }, []);

  return (
    <div className={`min-w-screen overflow-x-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation - IMPROVED SPACING */}
      <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b ${
        isDarkMode 
          ? 'bg-gray-900/90 border-gray-800' 
          : 'bg-white/90 border-gray-200'
      }`}>
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="font-serif text-2xl flex-shrink-0">Noir Diamant</div>
            
            {/* Desktop Navigation - Better Spacing */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a href="#home" className={`text-sm tracking-wider transition-colors whitespace-nowrap ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Home</a>
              <a href="#about" className={`text-sm tracking-wider transition-colors whitespace-nowrap ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>About Us</a>
              <a href="#collection" className={`text-sm tracking-wider transition-colors whitespace-nowrap ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Collection</a>
              <a href="#customization" className={`text-sm tracking-wider transition-colors whitespace-nowrap ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Customization</a>
              <a href="#metals" className={`text-sm tracking-wider transition-colors whitespace-nowrap ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Metals</a>
              <a href="#contact" className={`text-sm tracking-wider transition-colors whitespace-nowrap ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Contact Us</a>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Dark/Light Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* Cart Button */}
              <button className={`hidden sm:flex items-center gap-2 px-4 lg:px-6 py-2 rounded-full text-sm tracking-wider transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <FiShoppingCart className="w-4 h-4" />
                <span className="hidden md:inline">My Cart</span>
              </button>

              {/* Mobile Cart Icon */}
              <button className={`sm:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <FiShoppingCart className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <FiMenu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pt-4 pb-2 space-y-3"
            >
              <a href="#home" className={`block py-2 text-sm tracking-wider transition-colors ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Home</a>
              <a href="#about" className={`block py-2 text-sm tracking-wider transition-colors ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>About Us</a>
              <a href="#collection" className={`block py-2 text-sm tracking-wider transition-colors ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Collection</a>
              <a href="#customization" className={`block py-2 text-sm tracking-wider transition-colors ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Customization</a>
              <a href="#metals" className={`block py-2 text-sm tracking-wider transition-colors ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Metals</a>
              <a href="#contact" className={`block py-2 text-sm tracking-wider transition-colors ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Contact Us</a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section - BLACK DIAMOND IMAGE */}
      <motion.section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: heroScale }}
        >
          {/* Black Diamond Background Image */}
          <img
            src="/images/images/black-diamond1.jpg"
            alt="Black Diamond Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl md:text-8xl mb-6"
          >
            Discover Your Sparkle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Welcoming In The Spring Season With An Enchanting Emerald, Diamond & Gold Déco With Luminous Luster.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-white text-black px-8 py-3 text-sm font-medium tracking-wider hover:bg-gray-100 transition-colors">
              Buy Now
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-colors">
              Explore
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Category Cards Section */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {['Rings', 'Couple Rings', 'Earrings'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${
                    category === 'Rings' ? '1605100804763-247f67b3557e' :
                    category === 'Couple Rings' ? '1515562141207-7a88fb7ce338' :
                    '1535632066927-ab7c9ab60908'
                  }?w=800&q=80`}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-xs tracking-widest text-white/80 mb-2">Categories</div>
                  <h3 className="font-serif text-3xl text-white mb-4">{category}</h3>
                  {category === 'Rings' && (
                    <div className="inline-block bg-black text-white px-3 py-1 text-xs font-medium tracking-wider mb-4 w-fit">
                      SALE
                    </div>
                  )}
                  <button className="bg-white text-black px-6 py-2 text-sm font-medium tracking-wider hover:bg-gray-100 transition-colors inline-flex items-center gap-2 w-fit">
                    Check More Product
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section id="collection" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6">
              Diamonds & Engagement Ring
            </h2>
            <p className={`max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Experience the beauty of diamond jewellery and find your perfect piece for a special occasion. Find the perfect diamond for any special occasion, from beautiful diamond rings at wedding bands to anniversary and Christmas gifts.
            </p>
            <button className={`mt-8 px-8 py-3 text-sm font-medium tracking-wider transition-colors ${
              isDarkMode 
                ? 'bg-white text-black hover:bg-gray-100' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}>
              More Product
            </button>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {clientProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCardClick={setSelectedProduct}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Find The Perfect Diamond Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-8">
              Find The Perfect Diamond For
            </h2>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientProducts.slice(4, 7).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCardClick={setSelectedProduct}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
                alt="About"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl mb-6">Crafted With Passion</h2>
              <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                For over three decades, we've been creating exquisite jewelry pieces that tell stories of love, commitment, and celebration. Our master craftsmen combine traditional techniques with modern design to bring you timeless elegance.
              </p>
              <p className={`mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Every piece is carefully handcrafted using only the finest materials, ensuring that your jewelry becomes a cherished heirloom for generations to come.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-serif mb-2"
                  >
                    30+
                  </motion.div>
                  <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Years of Excellence</div>
                </div>
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl font-serif mb-2"
                  >
                    50K+
                  </motion.div>
                  <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Happy Clients</div>
                </div>
              </div>

              <button className={`px-8 py-3 text-sm font-medium tracking-wider transition-colors ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}>
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl mb-4">What Our Clients Say</h2>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Testimonials from our cherished customers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                text: 'The engagement ring I purchased exceeded all expectations. The craftsmanship is absolutely stunning, and the service was impeccable.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                text: 'I found the perfect anniversary gift for my wife. The diamond necklace is breathtaking, and she hasn\'t stopped wearing it since.',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                text: 'Outstanding quality and attention to detail. The custom design process was seamless, and the final piece is a true work of art.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${isDarkMode ? 'fill-white' : 'fill-black'}`} viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{testimonial.text}</p>
                <div className="font-medium">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl sm:text-5xl mb-4">Book a Consultation</h2>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Let us help you find or create your perfect piece</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className={`px-6 py-4 border-2 outline-none transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 focus:border-white' 
                    : 'bg-gray-50 border-gray-200 focus:border-black'
                }`}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`px-6 py-4 border-2 outline-none transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 focus:border-white' 
                    : 'bg-gray-50 border-gray-200 focus:border-black'
                }`}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className={`px-6 py-4 border-2 outline-none transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 focus:border-white' 
                    : 'bg-gray-50 border-gray-200 focus:border-black'
                }`}
              />
              <input
                type="date"
                placeholder="Preferred Date"
                className={`px-6 py-4 border-2 outline-none transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 focus:border-white' 
                    : 'bg-gray-50 border-gray-200 focus:border-black'
                }`}
              />
            </div>
            <textarea
              placeholder="Tell us about your dream piece..."
              rows={6}
              className={`w-full px-6 py-4 border-2 outline-none transition-colors resize-none ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 focus:border-white' 
                  : 'bg-gray-50 border-gray-200 focus:border-black'
              }`}
            />
            <button
              type="submit"
              className={`w-full py-4 text-sm font-medium tracking-wider transition-colors ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              SCHEDULE CONSULTATION
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="font-serif text-3xl mb-4">Noir Diamant</div>
              <p className="text-gray-400 leading-relaxed">
                Crafting timeless elegance since 1995. Your trusted partner for luxury jewelry.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4 tracking-wider">QUICK LINKS</h3>
              <ul className="space-y-3">
                {['About Us', 'Collections', 'Custom Design', 'Care Guide'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 tracking-wider">CONTACT</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <FiMapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>123 Jewelry Lane, New York, NY 10001</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <FiPhone className="w-5 h-5 flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <FiMail className="w-5 h-5 flex-shrink-0" />
                  <span>info@noirdiamant.com</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <FiClock className="w-5 h-5 flex-shrink-0" />
                  <span>Mon-Sat: 10AM-8PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 tracking-wider">FOLLOW US</h3>
              <div className="flex gap-4">
                {[
                  { Icon: FiFacebook, href: '#' },
                  { Icon: FiInstagram, href: '#' },
                  { Icon: FaPinterest, href: '#' },
                  { Icon: FiTwitter, href: '#' },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-white hover:scale-110 hover:rotate-12 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Noir Diamant Jewelry. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} isDarkMode={isDarkMode} />
      )}
    </div>
  );
}
