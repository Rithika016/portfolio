'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/40">
      <Container>
        <SectionHeading
          title="Get In Touch"
          subtitle="Interested in collaborating on distributed systems, open-source projects, or backend engineering opportunities?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Direct Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-100 font-mono mb-4">
                Let's Connect
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                I am actively seeking backend engineering roles, open source collaborations, and distributed systems discussions. Drop me an email or reach out on GitHub / LinkedIn!
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-4 p-4 bg-slate-900/60 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 bg-cyan-950/50 rounded-lg text-cyan-400 border border-cyan-800/40">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Direct Email</span>
                    <span className="text-sm font-mono font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {SITE_CONFIG.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                  <div className="p-3 bg-cyan-950/50 rounded-lg text-cyan-400 border border-cyan-800/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Location</span>
                    <span className="text-sm font-mono font-medium text-slate-200">
                      {SITE_CONFIG.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Interactive Form */}
          <Card className="border-cyan-900/30">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="p-4 bg-cyan-950/50 rounded-full border border-cyan-500/40 text-cyan-400 mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold font-mono text-slate-100 mb-2">Message Sent!</h4>
                <p className="text-xs text-slate-400 mb-6">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="text-xs font-mono">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Rithika, I'd love to discuss..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 font-sans resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full justify-center text-xs font-mono mt-2">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
};
