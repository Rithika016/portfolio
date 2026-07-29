'use client';

import { useEffect, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const renderChart = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#6366f1',
            primaryTextColor: '#fafafa',
            primaryBorderColor: '#3f3f46',
            lineColor: '#6366f1',
            secondaryColor: '#18181b',
            tertiaryColor: '#27272a',
            fontSize: '14px',
          },
        });
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        setSvg(renderedSvg);
      } catch {
        setError(true);
      }
    };
    renderChart();
  }, [chart]);

  if (error) {
    return (
      <div className={`bg-zinc-900 border border-zinc-800 rounded-lg p-6 ${className}`}>
        <pre className="text-sm text-zinc-400 font-mono overflow-x-auto">{chart}</pre>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex items-center justify-center overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    />
  );
}
