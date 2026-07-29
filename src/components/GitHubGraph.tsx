'use client';

import { useMemo } from 'react';

export function GitHubGraph() {
  const weeks = 52;
  const days = 7;

  const contributions = useMemo(() => {
    const data: number[][] = [];
    let seed = 42;
    const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < days; d++) {
        const r = random();
        const isWeekday = d >= 1 && d <= 5;
        const baseChance = isWeekday ? 0.6 : 0.3;
        const recency = w / weeks;
        const chance = baseChance * (0.5 + recency * 0.5);
        if (r < chance) {
          const level = r < chance * 0.3 ? 1 : r < chance * 0.6 ? 2 : r < chance * 0.85 ? 3 : 4;
          week.push(level);
        } else {
          week.push(0);
        }
      }
      data.push(week);
    }
    return data;
  }, []);

  const colors = ['#18181b', '#312e81', '#4338ca', '#6366f1', '#818cf8'];
  const cellSize = 11;
  const cellGap = 3;

  return (
    <div className="overflow-x-auto">
      <svg width={weeks * (cellSize + cellGap)} height={days * (cellSize + cellGap)} className="block" role="img" aria-label="GitHub contribution graph">
        {contributions.map((week, wi) => week.map((level, di) => (
          <rect key={`${wi}-${di}`} x={wi * (cellSize + cellGap)} y={di * (cellSize + cellGap)} width={cellSize} height={cellSize} rx={2} fill={colors[level]} className="transition-colors hover:brightness-125" />
        )))}
      </svg>
      <div className="flex items-center gap-1 mt-3 justify-end">
        <span className="text-xs text-zinc-500 mr-1">Less</span>
        {colors.map((color, i) => (<div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: color }} />))}
        <span className="text-xs text-zinc-500 ml-1">More</span>
      </div>
    </div>
  );
}
