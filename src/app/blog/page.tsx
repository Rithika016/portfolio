import React from 'react';
import Metadata from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { getAllPosts } from '@/lib/blog';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata = {
  title: 'Blog & Engineering Insights | Rithika Lakshmi Padala',
  description: 'Technical articles on distributed systems, WebSockets, vector database RAG architectures, and dynamic programming.',
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <Navbar />

      <main className="py-24 relative">
        <Container>
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </div>

          <SectionHeading
            title="Engineering Articles & Notes"
            subtitle="In-depth write-ups on backend architecture, system design patterns, open source engineering, and data structures."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col justify-between group hover:border-cyan-500/40 transition-all">
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors font-mono mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {post.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="cyan">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <span className="inline-flex items-center text-xs font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors font-semibold">
                      Read Full Article
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
