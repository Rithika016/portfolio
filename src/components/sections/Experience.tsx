'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { EXPERIENCE } from '@/lib/constants';
import { GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { education } = EXPERIENCE;

  return (
    <section id="experience" className="py-24 relative bg-slate-950/20">
      <Container>
        <SectionHeading
          title="Education & Engineering Focus"
          subtitle="Strong foundation in computer science core principles, algorithmic efficiency, and distributed backend systems."
        />

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-cyan-900/30 p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-6 border-b border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-950/50 border border-cyan-500/30 rounded-xl text-cyan-400">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 font-mono">
                    {education.institution}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium mt-1">
                    {education.degree}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {education.expected}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:items-end">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Academic Performance</span>
                <span className="text-2xl font-bold font-mono text-cyan-300 mt-1">
                  CGPA: {education.cgpa}
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-mono font-semibold text-slate-300 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                Core Computer Science Coursework
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {education.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800/60 text-slate-300 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
