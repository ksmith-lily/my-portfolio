type NavButtonProps = {
  targetId: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavButton({
  targetId,
  children,
  className = "",
}: NavButtonProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`hover:text-black dark:hover:text-white transition ${className}`}
    >
      {children}
    </button>
  );
}