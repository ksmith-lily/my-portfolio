export default function Footer() {
    return (
      <footer className="bg-white dark:bg-[rgb(9,8,12)] text-gray-900 dark:text-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="font-bold lg:text-8xl text-4xl tracking-tightest text-balance">
          Karen Angelica Smith
        </div>
        <div className="flex justify-between gap-4 text-sm">
          <div>KS</div>
          <div>&copy; {new Date().getFullYear()} All rights reserved.</div>
        </div>

      </footer>
    );
}
