import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

function Navbar() {

  return (
    <nav className="border-t border-b border-gray-200 dark:border-zinc-800 sticky top-0 bg-gray-100 dark:bg-zinc-950 z-10">
      <Container>
        <div className="flex justify-between items-center py-3 text-black dark:text-gray-400">
          <div className="text-xl font-semibold text-black dark:text-white">Lorem Ipsum</div>
          <ul className="flex gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <ThemeToggle />
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;