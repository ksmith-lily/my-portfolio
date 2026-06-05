import { useEffect, useState } from "react";

export default function Typewriter({text}: {text: string}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, 40); // speed (lower = faster)

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-xl tracking-widest dark:text-white text-zinc-900 font-mono">
      {displayed}
       <span className="cursor-blink">|</span>
    </span>
  );
}