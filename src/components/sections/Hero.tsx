'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/lib/constants';

export function Hero() {
  return (
    <Container className="pt-32 pb-24 sm:pt-40 sm:pb-32 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-zinc-50 tracking-tight leading-[1.1]">
          Rithika Lakshmi
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
            Padala
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Software Engineer building{' '}
          <span className="text-zinc-200">distributed systems</span>,{' '}
          <span className="text-zinc-200">backend infrastructure</span>, and{' '}
          <span className="text-zinc-200">scalable applications</span>.
          Passionate about writing reliable, performant code.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#projects" size="lg">
            View Projects
            <ArrowDown className="w-4 h-4" />
          </Button>
          <Button href={SITE_CONFIG.resumeUrl} variant="secondary" size="lg" external>
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <span className="text-zinc-700 text-sm">|</span>
          <span className="text-zinc-500 text-sm">{SITE_CONFIG.location}</span>
        </div>
      </motion.div>
    </Container>
  );
}

export const HeroSection = Hero;
