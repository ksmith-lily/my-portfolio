type SectionLabelProps = {
  children: React.ReactNode;
  marginClass?: string;
  border?: boolean;
};

export default function SectionLabel({
  children,
  marginClass = "-mb-1",
  border = false,
}: SectionLabelProps) {
  return (
    <div
      className={`text-lg w-full text-left font-bold tracking-widest text-balance text-sky-500 ${marginClass} ${
        border
          ? "border-b border-dashed border-gray-200 dark:border-zinc-800"
          : ""
      }`}
    >
      {children}
    </div>
  );
}