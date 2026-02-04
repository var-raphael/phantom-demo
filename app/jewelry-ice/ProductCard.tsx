'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

interface ProductCardProps {
  product: {
    id: number;
    category: string;
    name: string;
    price: number;
    originalPrice: number | null;
    rating: number;
    sale: boolean;
    images: string[];
  };
  onCardClick: (product: any) => void;
  isDarkMode?: boolean;
}

export default function ProductCard({ product, onCardClick, isDarkMode = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick(product)}
    >
      {/* Sale Badge */}
      {product.sale && (
        <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-medium tracking-wider ${
          isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
        }`}>
          SALE
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform ${
          isDarkMode ? 'bg-gray-700/90' : 'bg-white/90'
        }`}
      >
        <FiHeart className={`w-5 h-5 ${isFavorite ? (isDarkMode ? 'fill-white' : 'fill-black') : ''}`} />
      </button>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Desktop Hover Actions */}
        <div className={`hidden md:flex absolute inset-0 items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert('Added to cart!');
            }}
            className={`px-6 py-3 text-sm font-medium tracking-wider transition-colors ${
              isDarkMode 
                ? 'bg-white text-black hover:bg-gray-100' 
                : 'bg-white text-black hover:bg-black hover:text-white'
            }`}
          >
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className={`text-xs tracking-widest mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{product.category}</div>
        <h3 className={`font-serif text-xl mb-3 transition-colors ${
          isDarkMode 
            ? 'text-white group-hover:text-gray-300' 
            : 'text-gray-900 group-hover:text-gray-600'
        }`}>
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-2xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>${product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(product.rating)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${isDarkMode ? 'fill-white' : 'fill-black'}`} viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>

        {/* Mobile Add to Cart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert('Added to cart!');
          }}
          className={`md:hidden w-full py-3 text-sm font-medium tracking-wider transition-colors ${
            isDarkMode 
              ? 'bg-white text-black hover:bg-gray-100' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          ADD TO CART
        </button>
      </div>
    </motion.div>
  );
}
