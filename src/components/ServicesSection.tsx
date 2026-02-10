import Link from "next/link";

const tocItems = [
  { id: "orientierung", label: "Orientierungshilfe" },
  { id: "preise", label: "Preise" },
];

/* ── CTA Button (pill) ── */
function CtaLink({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/contact"
      className="inline-block mt-6 px-8 py-3 bg-primary text-text-light font-body font-semibold text-sm lg:text-base rounded-full hover:bg-primary-light hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      {children}
    </Link>
  );
}

/* ── Service card ── */
function ServiceCard({
  id,
  title,
  children,
  accent = "top-right",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  accent?: "top-right" | "top-left" | "bottom-right";
}) {
  const blobPosition = {
    "top-right": "-top-6 -right-6",
    "top-left": "-top-6 -left-6",
    "bottom-right": "-bottom-6 -right-6",
  }[accent];

  return (
    <div
      id={id}
      className="scroll-mt-24 relative bg-bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      {/* decorative blob */}
      <div
        className={`absolute ${blobPosition} w-24 h-24 rounded-full bg-primary/10 blur-2xl pointer-events-none`}
      />
      <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-heading text-primary leading-tight">
        {title}
      </h2>
      <div className="relative mt-6 space-y-4 font-body text-text-dark leading-relaxed text-base lg:text-lg">
        {children}
      </div>
    </div>
  );
}

/* ── Orientation item ── */
function OrientationCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative pl-8 py-5">
      {/* soft vertical accent */}
      <div className="absolute left-0 top-4 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-[#D4654E99] via-[#D4654E44] to-transparent" />
      <h3 className="text-xl lg:text-2xl font-heading text-primary">{title}</h3>
      <p className="mt-1.5 font-body text-text-dark text-base lg:text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-bg-warm">
      {/* Hero - H1 + Intro */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-10 lg:pb-14">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-primary leading-tight">
            Meine Angebote
          </h1>
          <p className="mt-6 sm:mt-8 font-body text-text-dark leading-relaxed text-base lg:text-lg">
            Ich biete Lektorat und Korrektorat für Selfpublisher an und begleite
            Autorinnen und Autoren bei der Überarbeitung ihrer Texte – vom ersten
            Entwurf bis zur Veröffentlichung. Mir ist dabei wichtig, ehrliches
            Feedback zu geben und den Text in dem Stadium zu unterstützen, in dem
            er gerade steht.
          </p>
        </div>

        {/* Table of Contents - pill nav */}
        <nav className="mt-10 flex flex-wrap gap-3">
          {tocItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-5 py-2.5 border-2 border-primary rounded-full font-body text-sm text-primary hover:bg-primary hover:text-text-light hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2.5 border-2 border-primary rounded-full font-body text-sm text-primary hover:bg-primary hover:text-text-light hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
          >
            Kontakt
          </Link>
        </nav>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-8 lg:pb-12">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <ServiceCard id="lektorat" title="Lektorat" accent="top-right">
            <p>
              Im Lektorat kommentiere ich das Manuskript und gebe inhaltliches
              und stilistisches Feedback. Ich prüfe Struktur, Logik, Sprache und
              Wirkung des Textes und mache sichtbar, wo etwas noch nicht ganz
              rund ist.
            </p>
            <p>
              Ein Charakter ändert plötzlich seine Augenfarbe, verhält sich
              anders als zuvor oder die Timeline ist unstimmig? Genau solche
              Unstimmigkeiten zu finden, ist mein Job.
            </p>
            <p>
              Ich arbeite vor allem mit belletristischen Texten im
              Selfpublishing (z.B. Romance, Dark Romance, New Adult, Fantasy,
              Krimi, Thriller).
            </p>
          </ServiceCard>

          <ServiceCard
            id="probelektorat"
            title="Probelektorat"
            accent="top-left"
          >
            <p>
              Im Probelektorat schaue ich mir ausgewählte Kapitel des Manuskripts
              an (etwa 10–20 Normseiten) und gebe eine erste stilistische und
              inhaltliche Einschätzung. Der Fokus liegt darauf, wie der Text
              wirkt, ob Stil und Ton stimmig sind und ob das ankommt, was
              erzählt werden will – immer mit Blick auf die Zielgruppe.
            </p>
            <p>
              Ein Probelektorat eignet sich besonders für Einsteigerinnen und
              Einsteiger sowie für Autorinnen und Autoren, die ihren ersten
              Roman planen oder gerade mitten im Schreiben stecken.
            </p>
          </ServiceCard>

          <ServiceCard
            id="korrektorat"
            title="Korrektorat"
            accent="bottom-right"
          >
            <p>
              Das Korrektorat ist die letzte Durchsicht vor Veröffentlichung und
              sorgt für einen fehlerfreien Text.
            </p>
            <p>Worauf ich im Korrektorat achte:</p>
            <ul className="list-disc list-outside space-y-1 pl-6">
              <li>Rechtschreibung</li>
              <li>Grammatik</li>
              <li>Zeichensetzung</li>
              <li>einheitliche Schreibweisen</li>
              <li>kleinere sprachliche Ungenauigkeiten</li>
            </ul>
            <p>
              Auf Wunsch prüfe ich auch das Satzdokument – also Absätze,
              Umbrüche und die formale Gestaltung vor Veröffentlichung.
            </p>
            <p>
              Ich übernehme auch Korrektorate für Sachtexte und
              Website-Textierungen.
            </p>
          </ServiceCard>
        </div>
      </div>

      {/* ── Orientierungshilfe ── */}
      <div className="bg-primary/5">
        <div
          id="orientierung"
          className="scroll-mt-24 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary leading-tight">
            Welches Angebot passt zu mir?
          </h2>
          <div className="mt-10 space-y-4 max-w-3xl">
            <OrientationCard
              title="Lektorat"
              description="Dein Manuskript ist (fast) fertig und soll inhaltlich und stilistisch geprüft werden."
            />
            <OrientationCard
              title="Probelektorat"
              description="Dein Text ist noch im Entstehen oder du wünschst dir eine erste Einschätzung."
            />
            <OrientationCard
              title="Korrektorat"
              description="Dein Text ist vollständig überarbeitet und bereit für die Veröffentlichung."
            />
          </div>
        </div>
      </div>

      {/* ── Preise ── */}
      <div
        id="preise"
        className="scroll-mt-24 max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary leading-tight">
          Preise für Lektorat und Korrektorat
        </h2>
        <div className="mt-6 space-y-4 font-body text-text-dark leading-relaxed text-base lg:text-lg max-w-3xl">
          <p>
            Meine Preise bewegen sich im üblichen Rahmen und orientieren sich an
            Umfang und Bedarf deines Projekts. Da jedes Buch und jeder
            Schreibprozess unterschiedlich ist, erstelle ich individuelle
            Angebote.
          </p>
          <p>
            Alle Details besprechen wir transparent und in Ruhe, damit keine
            Überraschungen entstehen.
          </p>
        </div>
        <p className="mt-4 font-body text-text-dark leading-relaxed text-base lg:text-lg">
          Du möchtest ein unverbindliches Angebot erhalten? Schreib mir gern.
        </p>
        <CtaLink>Kontakt</CtaLink>
      </div>
    </section>
  );
}
