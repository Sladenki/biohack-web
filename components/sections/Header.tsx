"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X, Waves } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "О проекте" },
  { href: "#routes", label: "Маршруты" },
  { href: "#audioguide", label: "Аудиогид" },
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-dark/95 shadow-lg backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-white">
          <Waves className="h-7 w-7 text-accent" />
          <span className="text-lg font-bold">Голос Поморья</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#routes" size="sm" className="hidden sm:inline-flex">
            Выбрать маршрут
          </Button>

          <button
            type="button"
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-bg-dark/98 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-white/80 hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#routes" size="sm" className="mt-2 w-full">
              Выбрать маршрут
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
