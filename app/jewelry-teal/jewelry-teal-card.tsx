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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Main Card Container */}
      <div className={`relative overflow-hidden ${
        isDark ? 'bg-zinc-900/50' : 'bg-white'
      } backdrop-blur-sm border ${
        isDark ? 'border-white/5' : 'border-black/5'
      }`}>
        
        {/* Image Container */}
        <div 
          className="relative aspect-[3/4] overflow-hidden cursor-pointer bg-zinc-950" 
          onClick={() => onCardClick(product)}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Desktop: Hover Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 left-6 right-6 hidden md:flex gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 py-3 backdrop-blur-xl border ${
                isDark 
                  ? 'border-teal-400/30 bg-teal-400/10 text-teal-400' 
                  : 'border-rose-500/30 bg-rose-500/10 text-rose-500'
              } text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2`}
            >
              <FiShoppingBag className="w-3.5 h-3.5" />
              Add
            </motion.button>
            <motion.button 
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 backdrop-blur-xl border ${
                isLiked
                  ? 'border-rose-400/50 bg-rose-400/20'
                  : isDark 
                    ? 'border-white/10 bg-white/5' 
                    : 'border-black/10 bg-black/5'
              } flex items-center justify-center transition-all duration-300`}
            >
              <FiHeart className={`w-4 h-4 ${
                isLiked ? 'fill-rose-400 text-rose-400' : isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`} />
            </motion.button>
          </motion.div>

          {/* Mobile: Always Visible Actions */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 md:hidden">
            <button className={`flex-1 py-3 backdrop-blur-xl border ${
              isDark 
                ? 'border-teal-400/30 bg-teal-400/10 text-teal-400' 
                : 'border-rose-500/30 bg-rose-500/10 text-rose-500'
            } text-xs tracking-widest uppercase flex items-center justify-center gap-2`}>
              <FiShoppingBag className="w-3.5 h-3.5" />
              Add
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`w-12 h-12 backdrop-blur-xl border ${
                isLiked
                  ? 'border-rose-400/50 bg-rose-400/20'
                  : isDark 
                    ? 'border-white/10 bg-white/5' 
                    : 'border-black/10 bg-black/5'
              } flex items-center justify-center`}
            >
              <FiHeart className={`w-4 h-4 ${
                isLiked ? 'fill-rose-400 text-rose-400' : isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`} />
            </button>
          </div>

          {/* Liked Indicator */}
          {isLiked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center z-10"
            >
              <FiHeart className="w-4 h-4 text-white fill-current" />
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(product.rating)].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full ${isDark ? 'bg-teal-400' : 'bg-rose-500'}`}
              />
            ))}
          </div>

          {/* Name */}
          <h3 
            className={`text-xl font-light mb-3 tracking-tight ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
            style={{ fontFamily: 'var(--font-serif), serif' }}
          >
            {product.name}
          </h3>

          {/* Price */}
          <div className={`text-2xl font-light mb-4 ${
            isDark ? 'text-teal-400' : 'text-rose-500'
          }`}>
            ${product.price.toLocaleString()}
          </div>

          {/* Divider */}
          <div className={`w-full h-px mb-4 ${
            isDark ? 'bg-zinc-800' : 'bg-zinc-200'
          }`} />

          {/* View Details */}
          <button
            onClick={() => onCardClick(product)}
            className={`text-xs tracking-[0.2em] uppercase font-light transition-colors relative group ${
              isDark ? 'text-zinc-400 hover:text-teal-400' : 'text-zinc-600 hover:text-rose-500'
            }`}
          >
            View Details
            <span className={`absolute -bottom-0.5 left-0 w-0 h-px ${
              isDark ? 'bg-teal-400' : 'bg-rose-500'
            } transition-all duration-500 group-hover:w-full`} />
          </button>
        </div>

        {/* Corner Accent - Top */}
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div className={`absolute top-0 right-0 w-12 h-px ${
            isDark ? 'bg-gradient-to-l from-teal-400/20 to-transparent' : 'bg-gradient-to-l from-rose-500/20 to-transparent'
          }`} />
          <div className={`absolute top-0 right-0 w-px h-12 ${
            isDark ? 'bg-gradient-to-b from-teal-400/20 to-transparent' : 'bg-gradient-to-b from-rose-500/20 to-transparent'
          }`} />
        </div>

        {/* Corner Accent - Bottom */}
        <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
          <div className={`absolute bottom-0 left-0 w-12 h-px ${
            isDark ? 'bg-gradient-to-r from-rose-400/20 to-transparent' : 'bg-gradient-to-r from-teal-600/20 to-transparent'
          }`} />
          <div className={`absolute bottom-0 left-0 w-px h-12 ${
            isDark ? 'bg-gradient-to-t from-rose-400/20 to-transparent' : 'bg-gradient-to-t from-teal-600/20 to-transparent'
          }`} />
        </div>
      </div>
    </motion.div>
  );
}
