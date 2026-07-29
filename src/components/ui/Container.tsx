interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className = '', id }: ContainerProps) {
  return (
    <section id={id} className={`max-w-5xl mx-auto px-6 sm:px-8 ${className}`}>
      {children}
    </section>
  );
}
