'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  images: string[];
  description: string;
}

interface ProductCardProps {
  product: Product;
  isDark: boolean;
  onCardClick: (product: Product) => void;
}

export function ProductCard({ product, isDark, onCardClick }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`rounded-lg overflow-hidden ${
        isDark ? 'bg-zinc-900/50 border border-yellow-600/20' : 'bg-white border border-yellow-700/20'
      } transition-all duration-300 shadow-lg active:scale-95`}
      whileHover={{ 
        y: -8,
        boxShadow: isDark 
          ? '0 20px 50px rgba(212, 175, 55, 0.3), 0 0 30px rgba(212, 175, 55, 0.2)' 
          : '0 20px 50px rgba(184, 134, 11, 0.3), 0 0 30px rgba(184, 134, 11, 0.2)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group">
        <motion.div 
          className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden cursor-pointer"
          onClick={() => onCardClick(product)}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{ 
              scale: isHovered ? 1.15 : 1,
              filter: isHovered ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)'
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </motion.div>

        {/* Hover Glow Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-yellow-600/40 via-transparent to-transparent"
        />

        {/* Overlay - Always visible on mobile, hover on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 md:flex items-center justify-center gap-4 hidden"
        >
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full ${
              isDark ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-yellow-700 hover:bg-yellow-800'
            } text-white transition-colors`}
          >
            <FiShoppingCart className="w-5 h-5" />
          </motion.button>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`p-3 rounded-full ${
              isLiked
                ? isDark
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-red-600 hover:bg-red-700'
                : isDark
                ? 'bg-yellow-600 hover:bg-yellow-500'
                : 'bg-yellow-700 hover:bg-yellow-800'
            } text-white transition-colors`}
          >
            <FiHeart className={`w-5 h-5 ${isLiked ? 'fill-white' : ''}`} />
          </motion.button>
        </motion.div>

        {/* Mobile Action Buttons - Always visible */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 md:hidden">
          <button
            className={`flex-1 p-3 rounded-full ${
              isDark ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-yellow-700 hover:bg-yellow-800'
            } text-white transition-colors active:scale-95 flex items-center justify-center gap-2`}
          >
            <FiShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Add to Cart</span>
          </button>

          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-3 rounded-full ${
              isLiked
                ? isDark
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-red-600 hover:bg-red-700'
                : isDark
                ? 'bg-yellow-600 hover:bg-yellow-500'
                : 'bg-yellow-700 hover:bg-yellow-800'
            } text-white transition-colors active:scale-95`}
          >
            <FiHeart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Like Badge */}
        {isLiked && (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
          >
            <FiHeart className="w-4 h-4 fill-white" />
          </motion.div>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex gap-1 mb-2">
          {[...Array(product.rating)].map((_, i) => (
            <FiStar
              key={i}
              className={`w-3 h-3 sm:w-4 sm:h-4 ${
                isDark ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-700 text-yellow-700'
              }`}
            />
          ))}
        </div>

        <h3 className={`text-lg sm:text-xl font-medium mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {product.name}
        </h3>

        <div className="flex items-center justify-between gap-2">
          <span className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>
            ${product.price.toLocaleString()}
          </span>

          <button
            onClick={() => onCardClick(product)}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium ${
              isDark
                ? 'bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400'
                : 'bg-yellow-700/20 hover:bg-yellow-700/30 text-yellow-700'
            } transition-colors active:scale-95 whitespace-nowrap`}
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
