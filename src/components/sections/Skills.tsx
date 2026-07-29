'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SKILLS } from '@/lib/constants';

const categories = [
  { key: 'languages' as const, label: 'Languages' },
  { key: 'frameworks' as const, label: 'Frameworks & Libraries' },
  { key: 'databases' as const, label: 'Databases & Caching' },
  { key: 'tools' as const, label: 'Developer Tools' },
];

export function Skills() {
  return (
    <Container id="skills" className="py-24">
      <SectionHeading title="Engineering Skills" subtitle="Technologies I work with daily." />
      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.key}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
          >
            <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS[cat.key].map((skill) => (
                <span key={skill} className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-indigo-500/30 hover:text-zinc-100 transition-all duration-200 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
