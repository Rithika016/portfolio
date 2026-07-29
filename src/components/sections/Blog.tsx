'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getAllPosts } from '@/lib/blog';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const posts = getAllPosts().slice(0, 3); // Take top 3 for landing page

  return (
    <section id="blog" className="py-24 relative">
      <Container>
        <SectionHeading
          title="Technical Writing & Engineering Insights"
          subtitle="Articles on distributed systems, WebSockets, vector search architectures, and algorithms."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors font-mono mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
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
                  <Button variant="ghost" className="p-0 text-cyan-400 hover:text-cyan-300 text-xs font-mono group/btn">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button variant="outline" className="font-mono text-xs">
              Explore All Engineering Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
