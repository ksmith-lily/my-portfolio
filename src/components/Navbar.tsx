import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-[rgb(9,8,12)]/80 backdrop-blur-md px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex flex-row gap-3 items-center">
          <div className="text-lg font-extrabold tracking-tightest text-balance text-rose-500 bg-white px-2 py-0.5 rounded-lg">
            KS
          </div>
          <div className="text-lg font-normal text-black dark:text-zinc-400 tracking-tightest text-balance">
            Karen Smith
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-black dark:text-gray-400">
          <li>
            <a href="/" className="hover:text-black dark:hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-black dark:hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-black dark:hover:text-white transition">
              Tech Stack
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-black dark:hover:text-white transition">
              Work
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-black dark:hover:text-white transition">
              Projects
            </a>
          </li>
          <ThemeToggle />
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-black dark:bg-white transition ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black dark:bg-white transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black dark:bg-white transition ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
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
            <a href="/" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}