import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Brand & Contact */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-heading text-primary font-bold tracking-tight">
              Madita Anna
            </Link>
            <div className="mt-1 flex flex-col gap-1">
              <Link
                href="mailto:madita.lektorat@gmail.com"
                className="text-sm font-body text-text-dark hover:text-primary transition-colors duration-200"
              >
                madita.lektorat@gmail.com
              </Link>
              <Link
                href="tel:+436645055561"
                className="text-sm font-body text-text-dark hover:text-primary transition-colors duration-200"
              >
                +43 (0) 664 50 555 61
              </Link>
            </div>
          </div>

          {/* Right - Copyright & Impressum */}
          <div className="text-center md:text-right">
            <Link
              href="/impressum"
              className="text-sm font-body text-text-dark hover:text-primary transition-colors duration-200"
            >
              Impressum
            </Link>
            <p className="mt-1 text-xs text-text-muted font-body">
              &copy; {currentYear} Madita Anna. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
