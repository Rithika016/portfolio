'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MapPin, GraduationCap, Calendar } from 'lucide-react';

export function About() {
  return (
    <Container id="about" className="py-24">
      <SectionHeading title="About" subtitle="Engineer, builder, problem solver." />

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="md:col-span-2 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-zinc-300 text-lg leading-relaxed">
            I&apos;m a software engineer focused on <span className="text-zinc-50 font-medium">distributed systems</span>, <span className="text-zinc-50 font-medium">backend infrastructure</span>, and <span className="text-zinc-50 font-medium">systems programming</span>. I care deeply about writing code that is reliable, performant, and maintainable.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            My work spans building distributed job queue systems with fault tolerance, real-time collaborative editing systems with conflict resolution, and AI-powered code search engines deployed on cloud infrastructure. I approach every project as an engineering challenge — focusing on architecture, scalability, and correctness.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Currently pursuing my B.Tech in Information Technology with a 9.5/10 CGPA, I invest my time building production-grade systems, contributing to open source, and solving algorithmic problems. I&apos;m actively seeking opportunities to work on impactful infrastructure at scale.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-zinc-50 text-sm font-medium">B.Tech in Information Technology</p>
                <p className="text-zinc-500 text-sm">DVR & Dr. HS MIC College of Technology</p>
                <p className="text-indigo-400 text-sm font-medium mt-1">CGPA: 9.5 / 10.0</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-zinc-50 text-sm font-medium">Expected May 2028</p>
                <p className="text-zinc-500 text-sm">3rd Year Student</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-zinc-50 text-sm font-medium">Vijayawada, India</p>
                <p className="text-zinc-500 text-sm">Andhra Pradesh</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

export const AboutSection = About;
