'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Github, GitPullRequest, GitCommit, ExternalLink, Code2 } from 'lucide-react';
import { GitHubGraph } from '@/components/GitHubGraph';

export const OpenSourceSection: React.FC = () => {
  return (
    <section id="opensource" className="py-24 relative">
      <Container>
        <SectionHeading
          title="Open Source Contributions"
          subtitle="Active community contributor focused on specification standards, JSON Schema tooling, and backend libraries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 border-cyan-900/30">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-cyan-950/40 rounded-lg border border-cyan-800/40 text-cyan-400">
                  <GitPullRequest className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 font-mono">
                    JSON Schema (json-schema-org)
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">Organization Contributor</span>
                </div>
              </div>

              <a
                href="https://github.com/Rithika016"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Analyzed and contributed to specification test suites and modular architecture utilities. Understood vocabulary validation, schema keyword parsing, and performance edge cases across distributed JSON specifications.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="cyan">JSON Schema</Badge>
              <Badge variant="slate">JavaScript</Badge>
              <Badge variant="slate">Spec Validation</Badge>
              <Badge variant="slate">Open Source</Badge>
            </div>

            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950/60 rounded-lg border border-slate-800">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-mono">Target Org</span>
                <span className="text-xs font-bold font-mono text-cyan-300">json-schema-org</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-mono">Impact</span>
                <span className="text-xs font-bold font-mono text-cyan-300">Spec Utilities</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-mono">Role</span>
                <span className="text-xs font-bold font-mono text-cyan-300">Contributor</span>
              </div>
            </div>
          </Card>

          <Card className="flex flex-col justify-between border-cyan-900/30">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-cyan-950/40 rounded-lg border border-cyan-800/40 text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 font-mono">
                  Competitive Coding
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Solved 50+ DSA problems focusing on arrays, sliding window, recursion, binary search, and dynamic programming optimization.
              </p>
            </div>

            <div className="p-4 bg-slate-950/60 rounded-lg border border-slate-800 space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Problems Solved</span>
                <span className="text-cyan-300 font-bold">50+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Focus Areas</span>
                <span className="text-cyan-300">DP & Recursion</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Primary Language</span>
                <span className="text-cyan-300">Java / C++</span>
              </div>
            </div>
          </Card>
        </div>

        {/* GitHub Activity Matrix */}
        <GitHubGraph username="Rithika016" />
      </Container>
    </section>
  );
};
