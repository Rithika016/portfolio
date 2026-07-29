import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-zinc-500">
            <Terminal className="w-4 h-4" />
            <span className="text-sm">© {new Date().getFullYear()} Rithika Lakshmi Padala</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-50 transition-colors" aria-label="GitHub"><Github className="w-5 h-5" /></a>
            <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-50 transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-zinc-500 hover:text-zinc-50 transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
