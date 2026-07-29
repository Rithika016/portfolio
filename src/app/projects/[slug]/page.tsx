import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MermaidDiagram } from '@/components/ui/MermaidDiagram';
import { PROJECTS } from '@/lib/constants';
import { ArrowLeft, Github, ExternalLink, Cpu, CheckCircle2, Layers, AlertCircle } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <Navbar />

      <main className="py-24 relative">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>

            <header className="mb-10 pb-8 border-b border-slate-800">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded border border-cyan-900/40">
                  {project.date}
                </span>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors p-2 bg-slate-900 rounded-lg border border-slate-800"
                    >
                      <Github className="w-4 h-4" /> Code Repository
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors p-2 bg-slate-900 rounded-lg border border-slate-800"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 mb-2">
                {project.title}
              </h1>
              <p className="text-base text-cyan-400 font-mono mb-6">{project.subtitle}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="cyan">
                    {tech}
                  </Badge>
                ))}
              </div>
            </header>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {project.metrics.map((m, idx) => (
                <Card key={idx} className="p-4 bg-slate-900/60 border-slate-800 flex flex-col justify-center">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">{m.label}</span>
                  <span className="text-lg font-bold font-mono text-cyan-300 mt-1">{m.value}</span>
                </Card>
              ))}
            </div>

            {/* Problem & System Overview */}
            <div className="space-y-8 mb-12">
              <Card className="border-cyan-900/30">
                <h2 className="text-lg font-bold font-mono text-slate-100 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  Problem Statement
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.problem}
                </p>
              </Card>

              <Card className="border-cyan-900/30">
                <h2 className="text-lg font-bold font-mono text-slate-100 mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-cyan-400" />
                  Architecture Overview
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.architecture}
                </p>

                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                  <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">System Architecture Diagram</h3>
                  <MermaidDiagram chart={project.mermaidDiagram} />
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-slate-800">
                  <h2 className="text-base font-bold font-mono text-slate-100 mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    Technical Challenges
                  </h2>
                  <ul className="space-y-2.5">
                    {project.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="border-slate-800">
                  <h2 className="text-base font-bold font-mono text-slate-100 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Key Engineering Decisions
                  </h2>
                  <ul className="space-y-2.5">
                    {project.decisions.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
