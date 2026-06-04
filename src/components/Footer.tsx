import Container from "./Container";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 py-6 px-4 sm:px-6 lg:px-8">

            <div className="relative inline-block text-center font-bold text-9xl tracking-widest">
              Lorem Ipsum
              <div className="absolute left-0 right-0 bottom-3 h-10 bg-gradient-to-t from-black/30 via-black/10 to-transparent dark:from-white/10 dark:via-white/5" />
            </div>
            <div className="flex justify-between gap-4 text-sm">
                <div>Lorem ipsum</div>
                <div>&copy; {new Date().getFullYear()} All rights reserved.</div>
            </div>
  
        </footer>
    );
}
