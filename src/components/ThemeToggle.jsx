import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { getStoredTheme, applyTheme } from "@/lib/storage";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(getStoredTheme());
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  if (!mounted) return <div className="h-9 w-9" />;
  return (
    <button
      onClick={toggle}
      aria-label="Mavzuni o‘zgartirish"
      title="Mavzuni o‘zgartirish"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 transition-colors"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}