'use client';

import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-zinc-900 border border-zinc-800 rounded-xl p-6 ${hover ? 'hover:border-zinc-700 hover:shadow-lg hover:shadow-black/20' : ''} transition-all duration-300 ${className}`}
      whileHover={hover ? { y: -2 } : undefined}
    >
      {children}
    </motion.div>
  );
}
