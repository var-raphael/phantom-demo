'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingBag, FiZap } from 'react-icons/fi';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  images: string[];
  description: string;
  specs: {
    movement: string;
    waterResistance: string;
    caseDiameter: string;
    material: string;
  };
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
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Main Card */}
      <div 
        className={`relative overflow-hidden ${
          isDark ? 'bg-slate-900/80' : 'bg-white'
        } border-2 ${
          isDark ? 'border-slate-800 group-hover:border-blue-500' : 'border-slate-200 group-hover:border-slate-800'
        } transition-all duration-500`}
        style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
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
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          />
          
          {/* Aggressive overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 ${
              isDark 
                ? 'bg-gradient-to-t from-blue-900/90 via-slate-900/60 to-transparent' 
                : 'bg-gradient-to-t from-slate-900/80 via-slate-800/40 to-transparent'
            }`}
          />

          {/* Spec Badge - Top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 left-4 right-4 hidden md:block"
          >
            <div 
              className={`px-3 py-2 backdrop-blur-xl border ${
                isDark ? 'border-blue-500/50 bg-blue-500/10' : 'border-slate-700/50 bg-slate-900/80'
              } inline-flex items-center gap-2`}
              style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
            >
              <FiZap className={`w-3 h-3 ${isDark ? 'text-blue-400' : 'text-slate-300'}`} />
              <span className={`text-xs font-mono tracking-widest uppercase ${
                isDark ? 'text-blue-400' : 'text-slate-300'
              }`}>
                {product.specs.movement}
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
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-6 left-6 right-6 hidden md:flex gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 py-4 backdrop-blur-xl font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 ${
                isDark 
                  ? 'bg-blue-600/90 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/50' 
                  : 'bg-slate-800/90 hover:bg-slate-700 text-white shadow-lg shadow-slate-800/50'
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
              className={`w-14 h-14 backdrop-blur-xl flex items-center justify-center transition-all duration-300 border-2 ${
                isLiked
                  ? 'bg-blue-500/90 border-blue-400'
                  : isDark 
                    ? 'bg-slate-900/90 border-slate-700 hover:border-blue-500' 
                    : 'bg-white/90 border-slate-300 hover:border-slate-700'
              }`}
              style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
            >
              <FiHeart className={`w-5 h-5 ${
                isLiked ? 'fill-white text-white' : isDark ? 'text-gray-400' : 'text-slate-600'
              }`} />
            </motion.button>
          </motion.div>

          {/* Mobile: Always Visible Actions */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 md:hidden">
            <button 
              className={`flex-1 py-3 backdrop-blur-xl font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 border-2 ${
                isDark 
                  ? 'bg-blue-600/90 border-blue-500 text-white' 
                  : 'bg-slate-800/90 border-slate-700 text-white'
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
              className={`w-12 h-12 backdrop-blur-xl flex items-center justify-center border-2 ${
                isLiked
                  ? 'bg-blue-500/90 border-blue-400'
                  : isDark 
                    ? 'bg-slate-900/90 border-slate-700' 
                    : 'bg-white/90 border-slate-300'
              }`}
              style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
            >
              <FiHeart className={`w-4 h-4 ${
                isLiked ? 'fill-white text-white' : isDark ? 'text-gray-400' : 'text-slate-600'
              }`} />
            </button>
          </div>

          {/* Liked Indicator */}
          {isLiked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 w-10 h-10 bg-blue-500 flex items-center justify-center z-10 shadow-lg shadow-blue-500/50"
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            >
              <FiHeart className="w-5 h-5 text-white fill-current" />
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
                className={`w-2 h-2 ${isDark ? 'bg-blue-500' : 'bg-slate-800'}`}
                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
              />
            ))}
          </div>

          {/* Name */}
          <h3 
            className={`text-xl font-black mb-3 tracking-tighter uppercase ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {product.name}
          </h3>

          {/* Specs */}
          <div className={`flex items-center gap-2 mb-4 text-xs font-mono tracking-wider uppercase ${
            isDark ? 'text-gray-500' : 'text-slate-500'
          }`}>
            <span>{product.specs.waterResistance}</span>
            <div className={`w-1 h-1 ${isDark ? 'bg-gray-600' : 'bg-slate-400'}`} />
            <span>{product.specs.caseDiameter}</span>
          </div>

          {/* Price */}
          <div className={`text-2xl font-black mb-4 ${
            isDark ? 'text-blue-500' : 'text-slate-800'
          }`}>
            ${product.price.toLocaleString()}
          </div>

          {/* Divider */}
          <div className={`w-full h-0.5 mb-4 ${
            isDark ? 'bg-slate-800' : 'bg-slate-200'
          }`} />

          {/* View Details */}
          <button
            onClick={() => onCardClick(product)}
            className={`text-xs tracking-widest uppercase font-bold transition-colors relative group/link ${
              isDark ? 'text-gray-400 hover:text-blue-400' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            View Specs
            <span className={`absolute -bottom-0.5 left-0 w-0 h-0.5 ${
              isDark ? 'bg-blue-500' : 'bg-slate-800'
            } transition-all duration-500 group-hover/link:w-full`} />
          </button>
        </div>

        {/* Corner Tech Accents */}
        <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none">
          <div className={`absolute top-0 right-0 w-8 h-0.5 ${
            isDark ? 'bg-blue-500/30' : 'bg-slate-800/30'
          }`} />
          <div className={`absolute top-0 right-0 w-0.5 h-8 ${
            isDark ? 'bg-blue-500/30' : 'bg-slate-800/30'
          }`} />
        </div>

        <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none">
          <div className={`absolute bottom-0 left-0 w-8 h-0.5 ${
            isDark ? 'bg-blue-500/30' : 'bg-slate-800/30'
          }`} />
          <div className={`absolute bottom-0 left-0 w-0.5 h-8 ${
            isDark ? 'bg-blue-500/30' : 'bg-slate-800/30'
          }`} />
        </div>
      </div>

      {/* Hover Glow Effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`absolute -inset-1 -z-10 blur-xl ${
            isDark ? 'bg-blue-500/20' : 'bg-slate-800/20'
          }`}
          style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
        />
      )}
    </motion.div>
  );
}
