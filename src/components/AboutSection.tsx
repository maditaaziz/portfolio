import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-bg-warm">
      {/* Hero area - two column with photo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - H1 + Intro */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-primary leading-tight">
              Über mich
            </h1>

            <div className="mt-6 sm:mt-8 space-y-4 font-body text-text-dark leading-relaxed text-base lg:text-lg">
              <p>
                Sprache, Texte und ihre Wirkung stehen seit vielen Jahren im
                Mittelpunkt meiner Arbeit. Ich beschäftige mich  mit
                Struktur, Stil und der Frage, ob das, was geschrieben ist, auch
                wirklich so ankommt, wie es gemeint ist.
              </p>
              <p>
                Als Lektorin ist mir wichtig, Texte ernst zu nehmen und sie mit
                einem klaren, respektvollen Blick zu begleiten.
              </p>
            </div>
          </div>

          {/* Right Column - Photo with asymmetric decorative frame */}
          <div className="flex justify-center lg:justify-start lg:pl-12">
            <div className="relative m-5">
              {/* Corner accent — L-shape at top-left */}
              <div className="absolute -top-5 -left-5 w-4/5 h-4/5 border-t-[3px] border-l-[3px] border-primary pointer-events-none" />
              {/* Corner accent — L-shape at bottom-right */}
              <div className="absolute -bottom-5 -right-5 w-4/5 h-4/5 border-b-[3px] border-r-[3px] border-primary pointer-events-none" />

              {/* Photo */}
              <div className="relative w-[220px] h-[268px] sm:w-[250px] sm:h-[305px] md:w-[300px] md:h-[366px] lg:w-[340px] lg:h-[415px] overflow-hidden rounded">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about.png`}
                  alt="Madita Portrait"
                  fill
                  className="object-cover scale-110"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 460px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content sections below hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16 lg:pt-0 lg:pb-24">
        <div className="space-y-12 sm:space-y-16">
          {/* Two H2 sections side by side on desktop */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 pt-6 sm:pt-8 lg:pt-12">
            {/* Mein Weg zum Lektorat */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-primary leading-tight">
                Mein Weg zum Lektorat
              </h2>
              <div className="mt-6 space-y-4 font-body text-text-dark leading-relaxed text-base lg:text-lg">
                <p>
                  Wahrend meines Germanistikstudiums habe ich in verschiedenen
                  Verlagen gearbeitet (u.a. Allitera Verlag, Otto Müller Verlag,
                  Benevento Publishing / Red Bull Media House) und dabei gemerkt,
                  wie sehr mir die Arbeit mit Texten liegt.
                  In dieser Zeit ist nicht nur mein fachliches Verständnis
                  gewachsen, sondern auch meine Leidenschaft für das genaue
                  Hinsehen, Hinterfragen und Weiterdenken von Texten.
                </p>
                <p>
                  Später habe ich als Texterin und Redakteurin im Online-Marketing
                  gearbeitet. Hier stand vor allem die Wirkung von Texten im
                  Fokus: Wie wird ein Text gelesen? Wen spricht er an? Diese
                  Arbeit hat mein Gespür für Stil, Ton und Zielgruppen weiter
                  geschärft – ein Wissen, das heute einen zentralen Teil meiner
                  Arbeit ausmacht.
                </p>
                <p>
                  All diese Erfahrungen fließen in meine Arbeit als Lektorin ein:
                  der sichere Umgang mit Sprache, ein strukturierter Blick auf
                  Texte und ein gutes Verständnis dafür, was der Text braucht, um
                  bei den richtigen Leserinnen und Lesern zu wirken.
                </p>
              </div>
            </div>

            {/* Meine Haltung als Lektorin */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-primary leading-tight">
                Meine Haltung als Lektorin
              </h2>
              <div className="mt-6 space-y-4 font-body text-text-dark leading-relaxed text-base lg:text-lg">
                <p>
                  In meiner Arbeit als Lektorin ist mir ein respektvoller Umgang
                  besonders wichtig. Ich bewerte Texte nicht, sondern begegne
                  ihnen mit Offenheit, Interesse, Empathie und Sorgfalt. Schreiben
                  ist ein Prozess, in dem Unsicherheiten ganz selbstverständlich
                  dazugehören – und genau dafür soll ein Lektorat Raum bieten.
                  <br />
                  Ich kommentiere Texte, stelle Fragen und gebe Denkanstöße, wenn
                  etwas inhaltlich oder stilistisch noch nicht ganz rund wirkt.
                </p>
                <p>
                  Mehr Informationen zu meiner Arbeitsweise findest du{" "}
                  <Link
                    href="/services"
                    className="text-primary underline underline-offset-2 hover:text-primary-light transition-colors duration-200"
                  >
                    hier
                  </Link>
                  .
                  <br />
                  Wenn du wissen möchtest, ob dein Text so
                  ankommt, wie du es dir wünschst,{" "}
                  <Link
                    href="/contact"
                    className="text-primary underline underline-offset-2 hover:text-primary-light transition-colors duration-200"
                  >
                    schreib mir gern
                  </Link>{" "}
                  und erzähl mir von deinem Projekt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
