'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, FileText, FolderOpen, User, Code, Mail, X } from 'lucide-react';

interface CommandItem {
  id: string;
  label: string;
  section: string;
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const navigateTo = useCallback((hash: string) => {
    setIsOpen(false);
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const commands: CommandItem[] = [
    { id: 'about', label: 'Go to About', section: 'Navigation', icon: <User className="w-4 h-4" />, action: () => navigateTo('#about') },
    { id: 'projects', label: 'Go to Projects', section: 'Navigation', icon: <FolderOpen className="w-4 h-4" />, action: () => navigateTo('#projects') },
    { id: 'blog', label: 'Go to Blog', section: 'Navigation', icon: <FileText className="w-4 h-4" />, action: () => navigateTo('#blog') },
    { id: 'skills', label: 'Go to Skills', section: 'Navigation', icon: <Code className="w-4 h-4" />, action: () => navigateTo('#skills') },
    { id: 'contact', label: 'Go to Contact', section: 'Navigation', icon: <Mail className="w-4 h-4" />, action: () => navigateTo('#contact') },
    { id: 'resume', label: 'Download Resume', section: 'Actions', icon: <ArrowRight className="w-4 h-4" />, action: () => window.open('/resume.pdf', '_blank') },
    { id: 'github', label: 'Open GitHub', section: 'Actions', icon: <ArrowRight className="w-4 h-4" />, action: () => window.open('https://github.com/Rithika016', '_blank') },
    { id: 'linkedin', label: 'Open LinkedIn', section: 'Actions', icon: <ArrowRight className="w-4 h-4" />, action: () => window.open('https://linkedin.com/in/rithika-lakshmi-padala', '_blank') },
  ];

  const filtered = commands.filter((cmd) => cmd.label.toLowerCase().includes(query.toLowerCase()));

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setIsOpen((prev) => !prev); }
    if (e.key === 'Escape') setIsOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => { if (!isOpen) setQuery(''); }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} />
          <motion.div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-[201] px-4" initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} transition={{ duration: 0.15 }}>
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
              <div className="flex items-center gap-3 px-4 border-b border-zinc-800">
                <Search className="w-4 h-4 text-zinc-500 shrink-0" />
                <input type="text" placeholder="Type a command or search..." className="w-full py-3.5 bg-transparent text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none" value={query} onChange={(e) => setQuery(e.target.value)} autoFocus />
                <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-zinc-300"><X className="w-4 h-4" /></button>
              </div>
              <div className="max-h-72 overflow-y-auto py-2">
                {filtered.length === 0 && <p className="px-4 py-8 text-center text-sm text-zinc-500">No results found.</p>}
                {['Navigation', 'Actions'].map((section) => {
                  const items = filtered.filter((cmd) => cmd.section === section);
                  if (items.length === 0) return null;
                  return (
                    <div key={section}>
                      <p className="px-4 py-1.5 text-xs font-medium text-zinc-500 uppercase tracking-wider">{section}</p>
                      {items.map((cmd) => (
                        <button key={cmd.id} onClick={cmd.action} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 transition-colors text-left">
                          <span className="text-zinc-500">{cmd.icon}</span>
                          {cmd.label}
                        </button>
                      ))}
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-zinc-800 px-4 py-2 flex items-center justify-between text-xs text-zinc-500">
                <span>Navigate with ↑↓</span>
                <span>ESC to close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
