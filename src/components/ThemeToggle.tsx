import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className="relative p-2 transition-transform duration-300 hover:scale-110"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-7 w-7 transition-all duration-500 ${
          dark
            ? "text-zinc-500"
            : "text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]"
        }`}
        fill={dark ? "none" : "currentColor"}
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {/* Bulb */}
        <path d="M12 2a7 7 0 0 0-4.5 12.4c.8.7 1.5 1.8 1.5 2.8V18h6v-.8c0-1 .7-2.1 1.5-2.8A7 7 0 0 0 12 2Z" />

        {/* Base */}
        <path d="M9 18h6" />
        <path d="M10 21h4" />

        {/* Light rays (only when lit) */}
        {!dark && (
          <>
            <path d="M12 0.5v2" />
            <path d="M4.5 4.5l1.4 1.4" />
            <path d="M19.5 4.5l-1.4 1.4" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
          </>
        )}
      </svg>

      {!dark && (
        <span className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl animate-pulse" />
      )}
    </button>
  );
}