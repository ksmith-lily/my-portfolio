import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 text-sm dark:text-white text-gray-900 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}