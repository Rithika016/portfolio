interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-zinc-800 text-zinc-300 border-zinc-700',
    accent: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
