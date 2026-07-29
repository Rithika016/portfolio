'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { ACHIEVEMENTS } from '@/lib/constants';
import { Trophy, Award, Code, GitBranch, Star } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6 text-amber-400" />,
  Award: <Award className="w-6 h-6 text-cyan-400" />,
  Code: <Code className="w-6 h-6 text-emerald-400" />,
  GitBranch: <GitBranch className="w-6 h-6 text-indigo-400" />,
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative bg-slate-950/30">
      <Container>
        <SectionHeading
          title="Achievements & Recognition"
          subtitle="Hackathons, Google certifications, and open source milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <Card key={idx} className="flex flex-col justify-between hover:border-cyan-500/40 transition-all">
              <div>
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl w-fit mb-5">
                  {iconMap[item.icon] || <Star className="w-6 h-6 text-cyan-400" />}
                </div>

                <h3 className="text-lg font-bold text-slate-100 font-mono mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
