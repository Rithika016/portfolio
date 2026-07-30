'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle, Loader2, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'f85424b3-fc13-4298-8a88-a951a9487e2b';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Enquiry from ${formState.name}`,
          from_name: formState.name,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        setErrorMsg(data.message || 'Error sending message. Please try emailing directly.');
      }
    } catch (err) {
      console.error('Contact form submit error:', err);
      setErrorMsg('Network error. Please use the direct email link on the left to send your message.');
    } finally {
      setIsSubmitting(false);
    }
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
                I am actively seeking backend engineering roles, open source collaborations, and distributed systems discussions. Drop me an email directly or send a message!
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Portfolio Enquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-900/60 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-950/50 rounded-lg text-cyan-400 border border-cyan-800/40">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-mono block">Direct Email</span>
                      <span className="text-sm font-mono font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                        {SITE_CONFIG.email}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors mr-2" />
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
                <p className="text-xs text-slate-400 mb-6 max-w-xs">
                  Your message has been sent successfully! I'll get back to you shortly.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="text-xs font-mono">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-950/40 border border-red-800/50 rounded-lg text-xs font-mono text-red-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

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

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full justify-center text-xs font-mono mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
};
