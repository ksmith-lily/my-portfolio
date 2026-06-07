import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import NavButton from "./NavButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-[rgb(9,8,12)]/80 backdrop-blur-md px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex flex-row gap-3 items-center">
          <div className="lg:text-lg text-base font-extrabold tracking-tightest text-balance text-sky-500 bg-white px-2 py-0.5 rounded-lg">
            KS
          </div>
          <div className="lg:text-lg text-base font-normal text-black dark:text-zinc-400 tracking-tightest text-balance">
            Karen Smith
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-black dark:text-gray-400">
          <li>
            <NavButton targetId="home">Home</NavButton>
          </li>
          <li>
            <NavButton targetId="tech-stack">Tech Stack</NavButton>
          </li>
          <li>
            <NavButton targetId="work">Work</NavButton>
          </li>
          <li>
            <NavButton targetId="projects">Projects</NavButton>
          </li>
          <li>
            <NavButton targetId="education">Education</NavButton>
          </li>
          <ThemeToggle />
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-6 h-6"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-0 top-1/2 h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${
              isOpen
                ? "rotate-45 -translate-y-1/2"
                : "-translate-y-1"
            }`}
          />

          <span
            className={`absolute left-0 top-1/2 h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${
              isOpen
                ? "-rotate-45 -translate-y-1/2"
                : "translate-y-1"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 pb-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-black dark:text-gray-400">
          <li>
            <NavButton targetId="home">Home</NavButton>
          </li>
          <li>
            <NavButton targetId="tech-stack">Tech Stack</NavButton>
          </li>
          <li>
            <NavButton targetId="work">Work</NavButton>
          </li>
          <li>
            <NavButton targetId="projects">Projects</NavButton>
          </li>
          <li>
            <NavButton targetId="education">Education</NavButton>
          </li>
          <ThemeToggle />
        </ul>
      </div>
    </nav>
  );
}