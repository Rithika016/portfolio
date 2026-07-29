'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PROJECTS, Project } from '@/lib/constants';
import { Github, ExternalLink, ArrowRight, Layers, Cpu, Database, Network } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const allTech = Array.from(new Set(PROJECTS.flatMap((p) => p.techStack)));

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.techStack.includes(filter));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Production-grade systems, distributed job queues, real-time collaboration platforms, and AI search engines."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
              filter === 'All'
                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            All Systems
          </button>
          {allTech.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                filter === tech
                  ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <Card key={project.slug} className="flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400/80 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-900/40">
                    {project.date}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-1 font-mono">
                  {project.title}
                </h3>
                <p className="text-xs text-cyan-400/70 font-mono mb-4">{project.subtitle}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-6 bg-slate-950/50 p-3 rounded-lg border border-slate-800/80">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</span>
                      <span className="text-xs font-mono font-bold text-cyan-300">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="cyan">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Link href={`/projects/${project.slug}`} className="block">
                  <Button variant="outline" className="w-full justify-center group/btn text-xs font-mono">
                    View Architecture & Details
                    <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
