import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    images: string[];
    description: string;
    specs: Record<string, string>;
  };
  index: number;
  isDark: boolean;
  onOpenModal: (product: any) => void;
}

export default function ProductCard({ product, index, isDark, onOpenModal }: ProductCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="group bg-white dark:bg-neutral-900 overflow-hidden shadow-2xl hover:shadow-amber-500/40 transition-all duration-700 hover:-translate-y-3 cursor-pointer border-4 border-amber-600" onClick={() => onOpenModal(product)}>
      
      <div className="relative h-80 overflow-hidden bg-black">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
        <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-xs font-black">PRESTIGE</div>
        
        <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 items-end justify-center pb-10 gap-4">
          <button onClick={(e) => { e.stopPropagation(); }} className="px-8 py-4 bg-amber-600 text-white font-black flex items-center gap-3">
            <FiShoppingCart size={22} />ACQUIRE
          </button>
          <button onClick={(e) => { e.stopPropagation(); }} className="p-4 bg-white text-amber-900">
            <FiHeart size={22} />
          </button>
        </div>

        <div className="md:hidden absolute bottom-4 left-4 right-4 flex gap-3">
          <button onClick={(e) => { e.stopPropagation(); }} className="flex-1 px-5 py-4 bg-amber-600 text-white font-black flex items-center justify-center gap-2">
            <FiShoppingCart size={18} />ADD
          </button>
          <button onClick={(e) => { e.stopPropagation(); }} className="p-4 bg-white text-amber-900">
            <FiHeart size={18} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex gap-1 mb-3">
          {[...Array(product.rating)].map((_, i) => (
            <FiStar key={i} className="text-amber-600 fill-amber-600" size={20} />
          ))}
        </div>
        <h3 className="font-serif text-xl font-black text-amber-900 dark:text-amber-300 mb-3">{product.name}</h3>
        <div className="flex items-center justify-between border-t-2 border-amber-300 pt-3">
          <div>
            <div className="text-xs text-amber-700 mb-1">Investment</div>
            <p className="font-serif text-3xl font-black text-amber-800 dark:text-amber-400">{product.price}</p>
          </div>
          <button className="text-amber-700 hover:text-amber-900 font-bold">DETAILS →</button>
        </div>
      </div>
    </motion.div>
  );
}
