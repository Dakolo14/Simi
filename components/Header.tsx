"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Header() {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
    {
      name: "Resume",
      href: "/Ajose Damilare Official Resume.pdf",
      download: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-white pointer-events-none">
      {/* Logo */}
      <div className="pointer-events-auto">
        <Link
          href="/"
          className="font-serif text-4xl font-bold tracking-widest hover:opacity-80 transition-opacity"
        >
          Simeon
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 pointer-events-auto drop-shadow-md">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            {...(item.download
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="text-sm font-medium hover:opacity-50 transition-opacity uppercase tracking-widest"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden pointer-events-auto">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="group relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label="Open menu"
            >
              {/* Animated Icon Lines */}
              <span className="h-[2px] w-6 bg-current transition-all duration-500 ease-in-out animate-[pulse_3s_ease-in-out_infinite]" />
              <span className="h-[2px] w-4 bg-current transition-all duration-500 ease-in-out group-hover:w-6 animate-[pulse_3s_ease-in-out_infinite_0.5s]" />
              <span className="h-[2px] w-6 bg-current transition-all duration-500 ease-in-out animate-[pulse_3s_ease-in-out_infinite_1s]" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-l-0 bg-background/95 backdrop-blur-xl p-0 z-[100]"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  {...(item.download
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={cn(
                    "font-serif text-5xl italic text-foreground hover:text-muted-foreground transition-colors",
                    "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
