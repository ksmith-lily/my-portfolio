type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`font-medium tracking-tighter text-balance text-zinc-950 dark:text-white ${className}`}
    >
      {children}
    </h2>
  );
}