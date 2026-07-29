import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CommandPalette } from '@/components/CommandPalette';

import { HeroSection } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { SkillsSection } from '@/components/sections/Skills';
import { ProjectsSection } from '@/components/sections/Projects';
import { ExperienceSection } from '@/components/sections/Experience';
import { OpenSourceSection } from '@/components/sections/OpenSource';
import { AchievementsSection } from '@/components/sections/Achievements';
import { BlogSection } from '@/components/sections/Blog';
import { ContactSection } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <ScrollProgress />
      <Navbar />
      <CommandPalette />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <OpenSourceSection />
        <AchievementsSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
