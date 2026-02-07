"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";

const navLinks = [
  { href: "/services", label: "Leistungen" },
  { href: "/about-me", label: "Über mich" },
  { href: "/contact", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bg-warm/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Name */}
          <Link href="/" className="font-heading text-primary font-bold tracking-tight leading-tight">
            <span className="text-xl lg:text-2xl block">Madita Anna</span>
            <span className="block font-normal tracking-wider uppercase -mt-1" style={{ fontSize: "14px" }}>Lektorat</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm lg:text-base font-body transition-colors duration-200 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-text-dark hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;

    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  // Close when navigating to a new page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 cursor-pointer"
        aria-label="Menü öffnen"
        aria-expanded={open}
      >
        <svg
          className="w-6 h-6 text-text-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {open && (
        <nav className="absolute right-0 top-full mt-2 bg-[#F2E8DA] rounded-2xl shadow-lg py-3 w-48">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={`block px-4 py-2.5 mx-2 text-sm font-body rounded-xl transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-text-dark hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}
