import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          {/* Left - Brand & Contact */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-heading text-primary font-bold tracking-tight">
              Madita Anna
            </Link>
            <div className="mt-1 flex flex-col items-center md:items-start gap-1">
              <span className="text-sm font-body text-text-dark">
                madita.lektorat@gmail.com
              </span>
              <a
                href="https://www.instagram.com/maditaanna_lektorat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark hover:text-primary transition-colors duration-200 mt-1"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
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
