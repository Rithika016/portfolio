'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, external, children, className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

    const variants = {
      primary: 'bg-indigo-500 text-white hover:bg-indigo-400 active:bg-indigo-600 shadow-lg shadow-indigo-500/20',
      secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600',
      ghost: 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-7 py-3 text-base',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={classes}
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        whileHover={{ y: -1 }}
        whileTap={{ y: 0 }}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
