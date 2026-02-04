'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  images: string[];
  description: string;
  collection: string;
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
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Main Card */}
      <div 
        className={`relative overflow-hidden ${
          isDark ? 'bg-neutral-900/50' : 'bg-white'
        } backdrop-blur-sm transition-all duration-700`}
      >
        
        {/* Art Deco Corner Ornaments */}
        <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none z-10">
          <div className={`absolute top-0 left-0 w-12 h-px ${
            isDark ? 'bg-amber-600/40' : 'bg-amber-900/40'
          }`} />
          <div className={`absolute top-0 left-0 w-px h-12 ${
            isDark ? 'bg-amber-600/40' : 'bg-amber-900/40'
          }`} />
          <div className={`absolute top-3 left-3 w-1 h-1 rotate-45 ${
            isDark ? 'bg-amber-600' : 'bg-amber-900'
          }`} />
        </div>
        
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-10">
          <div className={`absolute top-0 right-0 w-12 h-px ${
            isDark ? 'bg-amber-600/40' : 'bg-amber-900/40'
          }`} />
          <div className={`absolute top-0 right-0 w-px h-12 ${
            isDark ? 'bg-amber-600/40' : 'bg-amber-900/40'
          }`} />
          <div className={`absolute top-3 right-3 w-1 h-1 rotate-45 ${
            isDark ? 'bg-amber-600' : 'bg-amber-900'
          }`} />
        </div>
        
        {/* Image Container */}
        <div 
          className="relative aspect-[3/4] overflow-hidden cursor-pointer bg-black" 
          onClick={() => onCardClick(product)}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
          
          {/* Elegant gradient overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className={`absolute inset-0 ${
              isDark 
                ? 'bg-gradient-to-t from-neutral-950/90 via-neutral-900/40 to-transparent' 
                : 'bg-gradient-to-t from-neutral-900/80 via-neutral-800/30 to-transparent'
            }`}
          />

          {/* Collection Badge - Top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute top-6 left-6 right-6 hidden md:block"
          >
            <div className={`inline-block px-4 py-2 backdrop-blur-xl border ${
              isDark ? 'border-amber-600/30 bg-amber-600/5' : 'border-amber-900/30 bg-neutral-900/80'
            }`}>
              <span className={`text-xs tracking-[0.2em] uppercase font-light ${
                isDark ? 'text-amber-600' : 'text-amber-200'
              }`}>
                {product.collection}
              </span>
            </div>
          </motion.div>

          {/* Desktop: Hover Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 30 
            }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute bottom-8 left-8 right-8 hidden md:flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex-1 py-4 backdrop-blur-xl border font-light tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-2 ${
                isDark 
                  ? 'border-amber-600/40 bg-amber-600/10 text-amber-600 hover:bg-amber-600/20' 
                  : 'border-amber-200/40 bg-white/90 text-amber-900 hover:bg-white'
              } transition-all duration-500`}
            >
              <FiShoppingBag className="w-4 h-4" />
              Acquire
            </motion.button>
            <motion.button 
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-14 backdrop-blur-xl border flex items-center justify-center transition-all duration-500 ${
                isLiked
                  ? 'border-amber-600/50 bg-amber-600/20'
                  : isDark 
                    ? 'border-white/10 bg-white/5 hover:border-amber-600/30' 
                    : 'border-white/20 bg-white/10 hover:border-amber-900/30'
              }`}
            >
              <FiHeart className={`w-5 h-5 ${
                isLiked ? 'fill-amber-600 text-amber-600' : isDark ? 'text-neutral-300' : 'text-white'
              }`} />
            </motion.button>
          </motion.div>

          {/* Mobile: Always Visible Actions */}
          <div className="absolute bottom-5 left-5 right-5 flex gap-3 md:hidden">
            <button 
              className={`flex-1 py-3 backdrop-blur-xl border font-light tracking-wider uppercase text-xs flex items-center justify-center gap-2 ${
                isDark 
                  ? 'border-amber-600/40 bg-amber-600/10 text-amber-600' 
                  : 'border-amber-200/40 bg-white/90 text-amber-900'
              }`}
            >
              <FiShoppingBag className="w-4 h-4" />
              Add
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`w-12 h-12 backdrop-blur-xl border flex items-center justify-center ${
                isLiked
                  ? 'border-amber-600/50 bg-amber-600/20'
                  : isDark 
                    ? 'border-white/10 bg-white/5' 
                    : 'border-white/20 bg-white/10'
              }`}
            >
              <FiHeart className={`w-4 h-4 ${
                isLiked ? 'fill-amber-600 text-amber-600' : isDark ? 'text-neutral-300' : 'text-white'
              }`} />
            </button>
          </div>

          {/* Liked Indicator */}
          {isLiked && (
            <motion.div
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 45 }}
              transition={{ type: "spring" }}
              className="absolute top-6 right-6 w-10 h-10 bg-amber-600 flex items-center justify-center z-10 shadow-lg shadow-amber-600/50"
            >
              <FiHeart className="w-5 h-5 text-white fill-current -rotate-45" />
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Rating */}
          <div className="flex gap-1.5 mb-5">
            {[...Array(product.rating)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rotate-45 ${isDark ? 'bg-amber-600' : 'bg-amber-900'}`}
              />
            ))}
          </div>

          {/* Name */}
          <h3 
            className={`text-2xl mb-4 tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
            style={{ fontFamily: 'serif', fontWeight: 300 }}
          >
            {product.name}
          </h3>

          {/* Price */}
          <div className={`text-3xl font-light mb-6 ${
            isDark ? 'text-amber-600' : 'text-amber-900'
          }`}>
            ${product.price.toLocaleString()}
          </div>

          {/* Ornamental Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`flex-1 h-px ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
            <div className={`w-1 h-1 rotate-45 ${isDark ? 'bg-amber-600/50' : 'bg-amber-900/50'}`} />
            <div className={`flex-1 h-px ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
          </div>

          {/* View Details */}
          <button
            onClick={() => onCardClick(product)}
            className={`text-xs tracking-[0.2em] uppercase font-light transition-colors relative group/link ${
              isDark ? 'text-neutral-400 hover:text-amber-600' : 'text-neutral-600 hover:text-amber-900'
            }`}
          >
            View Details
            <span className={`absolute -bottom-0.5 left-0 w-0 h-px ${
              isDark ? 'bg-amber-600' : 'bg-amber-900'
            } transition-all duration-700 group-hover/link:w-full`} />
          </button>
        </div>

        {/* Bottom Art Deco Corners */}
        <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
          <div className={`absolute bottom-0 left-0 w-12 h-px ${
            isDark ? 'bg-amber-600/40' : 'bg-amber-900/40'
          }`} />
          <div className={`absolute bottom-0 left-0 w-px h-12 ${
            isDark ? 'bg-amber-600/40' : 'bg-amber-900/40'
          }`} />
          <div className={`absolute bottom-3 left-3 w-1 h-1 rotate-45 ${
            isDark ? 'bg-amber-600' : 'bg-amber-900'
          }`} />
        </div>
        
        <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
          <div className={`absolute bottom-0 right-0 w-12 h-px ${
            isDark ? 'bg-amber-600/40' : 'bg-amber-900/40'
          }`} />
          <div className={`absolute bottom-0 right-0 w-px h-12 ${
            isDark ? 'bg-amber-600/40' : 'bg-amber-900/40'
          }`} />
          <div className={`absolute bottom-3 right-3 w-1 h-1 rotate-45 ${
            isDark ? 'bg-amber-600' : 'bg-amber-900'
          }`} />
        </div>
      </div>

      {/* Subtle Hover Glow */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.6 }}
          className={`absolute -inset-px -z-10 blur-2xl ${
            isDark ? 'bg-amber-600/10' : 'bg-amber-900/10'
          }`}
        />
      )}
    </motion.div>
  );
}
