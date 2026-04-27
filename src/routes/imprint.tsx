import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/imprint")({
  head: () => ({
    meta: [
      { title: "Impressum — Gentle Connections" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG für Gentle Connections." },
      { property: "og:title", content: "Impressum — Gentle Connections" },
      { property: "og:description", content: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG." },
    ],
  }),
  component: ImprintPage,
});

function ImprintPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <article className="w-full max-w-3xl mx-auto space-y-8 text-foreground">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Impressum</h1>

        <p className="text-base text-muted-foreground mb-8">
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV).
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Diensteanbieter</h2>
          <p className="text-base leading-relaxed">
            Gentle Connections<br />
            Philipp Specht<br />
            Mühlenstraße 61<br />
            10551 Berlin<br />
            Deutschland
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p className="text-base leading-relaxed">
            E-Mail: philippspecht1990@gmail.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Redaktionell verantwortlich (§ 18 Abs. 2 MStV)</h2>
          <p className="text-base leading-relaxed">
            Philipp Specht<br />
            Mühlenstraße 61<br />
            10551 Berlin<br />
            Deutschland
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">EU-Streitschlichtung</h2>
          <p className="text-base leading-relaxed">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="text-base leading-relaxed">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Haftung für Inhalte</h2>
          <p className="text-base leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Haftung für Links</h2>
          <p className="text-base leading-relaxed">
            Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Urheberrecht</h2>
          <p className="text-base leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <div className="pt-6">
          <Button asChild size="lg" className="h-14 px-8 text-lg rounded-2xl">
            <Link to="/">Zurück zur Startseite</Link>
          </Button>
        </div>
      </article>
    </div>
  );
}
