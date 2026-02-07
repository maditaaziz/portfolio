import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="bg-bg-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column - Contact Details */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-primary leading-tight">
              Kontakt
            </h1>

            <p className="mt-6 sm:mt-8 font-body text-text-dark text-base lg:text-lg leading-relaxed max-w-lg">
              Du hast ein Projekt, eine Frage oder möchtest einfach mal
              unverbindlich ins Gespräch kommen? Ich freue mich, von dir zu
              hören.
            </p>

            <div className="mt-8 sm:mt-10 space-y-8">
              {/* Email */}
              <div>
                <h2 className="text-xl font-heading text-primary mb-3">
                  E-Mail
                </h2>
                <p className="font-body text-text-dark text-base leading-relaxed">
                  <Link
                    href="mailto:madita.lektorat@gmail.com"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    madita.lektorat@gmail.com
                  </Link>
                </p>
              </div>

              {/* Phone */}
              <div>
                <h2 className="text-xl font-heading text-primary mb-3">
                  Telefon
                </h2>
                <p className="font-body text-text-dark text-base leading-relaxed">
                  <Link
                    href="tel:+436645055561"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    +43 (0) 664 50 555 61
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image with decorative frame */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative m-5">
              {/* Corner accent — L-shape at top-left */}
              <div className="absolute -top-5 -left-5 w-4/5 h-4/5 border-t-[3px] border-l-[3px] border-primary pointer-events-none" />
              {/* Corner accent — L-shape at bottom-right */}
              <div className="absolute -bottom-5 -right-5 w-4/5 h-4/5 border-b-[3px] border-r-[3px] border-primary pointer-events-none" />

              {/* Photo */}
              <div className="relative w-[200px] h-[188px] sm:w-[260px] sm:h-[245px] md:w-[400px] md:h-[380px] lg:w-[460px] lg:h-[420px] overflow-hidden rounded">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/contact.png`}
                  alt="Madita – Kontakt"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, (max-width: 1024px) 400px, 460px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
