'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-zinc-400 text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
