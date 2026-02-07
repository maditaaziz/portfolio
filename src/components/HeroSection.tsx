import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Colored panel behind text side — only visible on desktop */}
      <div className="absolute inset-y-0 right-0 hidden lg:block lg:w-[65%] bg-[#F2E8DA] rounded-l" />

      {/* Warm coral accent blob — only visible on desktop */}
      <div className="absolute bottom-0 right-[10%] hidden lg:block lg:w-[26rem] lg:h-[26rem] rounded-full bg-[#D4654E]/12 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-12">
        {/* Left Column - Image */}
        <div className="flex items-start justify-center lg:col-span-5 px-6 pt-10 pb-8 md:px-8 lg:pt-12 lg:pb-12 lg:pl-12">
          <div className="relative m-5">
            {/* Corner accent — L-shape at top-left */}
            <div className="absolute -top-5 -left-5 w-4/5 h-4/5 border-t-[3px] border-l-[3px] border-primary pointer-events-none" />
            {/* Corner accent — L-shape at bottom-right */}
            <div className="absolute -bottom-5 -right-5 w-4/5 h-4/5 border-b-[3px] border-r-[3px] border-primary pointer-events-none" />

            {/* Photo */}
            <div className="relative w-[260px] h-[347px] sm:w-[280px] sm:h-[373px] md:w-[340px] md:h-[453px] lg:w-[400px] lg:h-[533px] overflow-hidden rounded">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/hero.png`}
                alt="Madita – Freiberufliche Lektorin"
                fill
                className="object-cover scale-110 -translate-y-[5%]"
                priority
                sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 400px"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col px-6 pt-0 pb-16 md:px-8 lg:pt-[25%] lg:px-16 xl:px-20 lg:col-span-7">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-primary leading-tight">
            Lektorat &amp; Korrektorat
          </h1>

          <p className="mt-6 sm:mt-8 text-base lg:text-lg text-text-dark font-body max-w-lg leading-relaxed">
            Ich bin Madita, freiberufliche Lektorin. Ich arbeite vor allem mit
            Selfpublishern und begleite Autorinnen und Autoren bei der
            Überarbeitung ihrer Texte und unterstütze mit klarem Feedback und
            neuen Perspektiven.
          </p>

          <p className="mt-4 sm:mt-6 text-base lg:text-lg text-text-dark font-body max-w-lg leading-relaxed">
            Du brauchst eine erste Einschätzung zu einer Idee oder einem Text?
            Detailliertes Feedback zu einem ganzen Roman-Manuskript? Oder eine
            letzte Korrektur vor Veröffentlichung? Egal, an welchem Punkt du
            gerade stehst, ich unterstütze dich in deinem Schreibprozess und
            nehme deinen Text genauso ernst wie du.
          </p>

          <div className="mt-8 sm:mt-10">
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-primary text-text-light font-body font-semibold text-sm lg:text-base rounded-full hover:bg-primary-light hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Zu meinen Leistungen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
