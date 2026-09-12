"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The hero behind the navbar is a dark, full-bleed video, so before the
  // user scrolls we render light text directly over it; once a light,
  // blurred bar appears behind the nav we switch back to dark text.
  const lightMode = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        scrolled || open
          ? "border-b border-surface-container bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.02)]"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className={cn(
            "font-display text-headline-sm transition-colors",
            lightMode ? "text-white" : "text-on-surface"
          )}
        >
          CKR TECH
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-label-md text-label-md transition-colors",
                lightMode
                  ? "text-white/75 hover:text-white"
                  : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          {lightMode ? (
            <a
              href="#iletisim"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-white px-6 font-label-md text-label-md font-medium text-on-surface transition-colors hover:bg-primary-fixed-dim"
            >
              İletişime Geç
            </a>
          ) : (
            <Button href="#iletisim" variant="primary" className="h-10 px-6 py-0 shadow-none">
              İletişime Geç
            </Button>
          )}
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden",
            lightMode ? "text-white" : "text-on-surface"
          )}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-surface-container bg-surface-container-lowest md:hidden">
          <nav
            className="container-page flex flex-col gap-1 py-4"
            aria-label="Mobil menü"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#iletisim"
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              İletişime Geç
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
