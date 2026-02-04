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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Main Card */}
      <div 
        className={`relative overflow-hidden ${
          isDark ? 'bg-slate-900/60' : 'bg-white'
        } backdrop-blur-sm border-2 ${
          isDark ? 'border-slate-800 group-hover:border-cyan-400/50' : 'border-slate-200 group-hover:border-slate-400'
        } transition-all duration-500`}
        style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
      >
        
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
            transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
          
          {/* Ice gradient overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${
              isDark 
                ? 'bg-gradient-to-t from-cyan-950/90 via-slate-900/50 to-transparent' 
                : 'bg-gradient-to-t from-slate-900/80 via-slate-800/40 to-transparent'
            }`}
          />

          {/* Collection Badge - Top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
            transition={{ duration: 0.4 }}
            className="absolute top-4 left-4 right-4 hidden md:block"
          >
            <div 
              className={`inline-block px-3 py-2 backdrop-blur-xl border ${
                isDark ? 'border-cyan-400/40 bg-cyan-400/10' : 'border-slate-600/40 bg-slate-900/80'
              }`}
              style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
            >
              <span className={`text-xs tracking-[0.2em] uppercase ${
                isDark ? 'text-cyan-400' : 'text-slate-200'
              }`}>
                {product.collection}
              </span>
            </div>
          </motion.div>

          {/* Desktop: Hover Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute bottom-6 left-6 right-6 hidden md:flex gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex-1 py-3 backdrop-blur-xl border-2 font-bold tracking-wider uppercase text-xs flex items-center justify-center gap-2 ${
                isDark 
                  ? 'border-cyan-400/50 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30' 
                  : 'border-slate-600/50 bg-slate-800/90 text-white hover:bg-slate-700'
              } transition-all duration-300`}
              style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
            >
              <FiShoppingBag className="w-4 h-4" />
              Add
            </motion.button>
            <motion.button 
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 backdrop-blur-xl border-2 flex items-center justify-center transition-all duration-300 ${
                isLiked
                  ? 'border-cyan-400/50 bg-cyan-500/30'
                  : isDark 
                    ? 'border-white/20 bg-white/5 hover:border-cyan-400/30' 
                    : 'border-white/30 bg-white/10 hover:border-slate-600/30'
              }`}
              style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
            >
              <FiHeart className={`w-4 h-4 ${
                isLiked ? 'fill-cyan-400 text-cyan-400' : isDark ? 'text-gray-300' : 'text-white'
              }`} />
            </motion.button>
          </motion.div>

          {/* Mobile: Always Visible Actions */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 md:hidden">
            <button 
              className={`flex-1 py-3 backdrop-blur-xl border-2 font-bold tracking-wider uppercase text-xs flex items-center justify-center gap-2 ${
                isDark 
                  ? 'border-cyan-400/50 bg-cyan-500/20 text-cyan-400' 
                  : 'border-slate-600/50 bg-slate-800/90 text-white'
              }`}
              style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
            >
              <FiShoppingBag className="w-4 h-4" />
              Add
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`w-12 h-12 backdrop-blur-xl border-2 flex items-center justify-center ${
                isLiked
                  ? 'border-cyan-400/50 bg-cyan-500/30'
                  : isDark 
                    ? 'border-white/20 bg-white/5' 
                    : 'border-white/30 bg-white/10'
              }`}
              style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
            >
              <FiHeart className={`w-4 h-4 ${
                isLiked ? 'fill-cyan-400 text-cyan-400' : isDark ? 'text-gray-300' : 'text-white'
              }`} />
            </button>
          </div>

          {/* Liked Indicator */}
          {isLiked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="absolute top-4 right-4 w-8 h-8 bg-cyan-500 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/50"
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
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
                className={`w-1.5 h-1.5 ${isDark ? 'bg-cyan-400' : 'bg-slate-800'}`}
                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
              />
            ))}
          </div>

          {/* Name */}
          <h3 
            className={`text-xl font-bold mb-3 tracking-tight uppercase ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {product.name}
          </h3>

          {/* Price */}
          <div className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-cyan-400' : 'text-slate-800'
          }`}>
            ${product.price.toLocaleString()}
          </div>

          {/* Divider */}
          <div className={`w-full h-px mb-4 ${
            isDark ? 'bg-slate-800' : 'bg-slate-200'
          }`} />

          {/* View Details */}
          <button
            onClick={() => onCardClick(product)}
            className={`text-xs tracking-widest uppercase transition-colors relative group/link ${
              isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            View Details
            <span className={`absolute -bottom-0.5 left-0 w-0 h-px ${
              isDark ? 'bg-cyan-400' : 'bg-slate-800'
            } transition-all duration-500 group-hover/link:w-full`} />
          </button>
        </div>

        {/* Ice Crystal Accent Corners */}
        <div className="absolute top-2 left-2 w-8 h-8 pointer-events-none">
          <div className={`absolute top-0 left-0 w-6 h-px ${
            isDark ? 'bg-cyan-400/30' : 'bg-slate-400/30'
          }`} />
          <div className={`absolute top-0 left-0 w-px h-6 ${
            isDark ? 'bg-cyan-400/30' : 'bg-slate-400/30'
          }`} />
        </div>

        <div className="absolute bottom-2 right-2 w-8 h-8 pointer-events-none">
          <div className={`absolute bottom-0 right-0 w-6 h-px ${
            isDark ? 'bg-cyan-400/30' : 'bg-slate-400/30'
          }`} />
          <div className={`absolute bottom-0 right-0 w-px h-6 ${
            isDark ? 'bg-cyan-400/30' : 'bg-slate-400/30'
          }`} />
        </div>
      </div>

      {/* Ice Glow Effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.5 }}
          className={`absolute -inset-px -z-10 blur-xl ${
            isDark ? 'bg-cyan-500/20' : 'bg-slate-400/20'
          }`}
        />
      )}
    </motion.div>
  );
}
