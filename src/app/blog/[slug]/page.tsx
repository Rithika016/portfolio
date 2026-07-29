import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { getPostBySlug, BLOG_POSTS } from '@/lib/blog';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <Navbar />

      <main className="py-24 relative">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Articles
            </Link>

            <header className="mb-10 pb-8 border-b border-slate-800">
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 mb-4 leading-tight">
                {post.title}
              </h1>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="cyan">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            <article className="prose prose-invert prose-cyan max-w-none text-slate-300 leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-xl font-bold font-mono text-slate-100 mt-8 mb-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const lines = paragraph.split('\n');
                  const code = lines.slice(1, -1).join('\n');
                  return (
                    <pre key={idx} className="p-4 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto font-mono text-xs text-cyan-300">
                      <code>{code}</code>
                    </pre>
                  );
                }
                return (
                  <p key={idx} className="text-slate-300 text-sm leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </article>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
