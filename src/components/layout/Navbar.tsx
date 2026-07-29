'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="max-w-5xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-zinc-50 font-semibold text-lg tracking-tight hover:text-indigo-400 transition-colors">
            <Terminal className="w-5 h-5 text-indigo-500" />
            <span>rlp</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-1 text-xs text-zinc-500 bg-zinc-800/50 border border-zinc-700/50 rounded-md">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-zinc-50 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl md:hidden pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col items-center gap-8 py-12">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl text-zinc-300 hover:text-zinc-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
