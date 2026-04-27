import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LangSwitch } from "@/components/LangSwitch";
import { useLang, useT } from "@/lib/i18n";

export const Route = createFileRoute("/imprint")({
  head: () => ({
    meta: [
      { title: "Impressum — Gentle Connections" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG für Gentle Connections." },
    ],
  }),
  component: ImprintPage,
});

function ImprintPage() {
  const lang = useLang();
  const t = useT();
  const isDE = lang === "de";

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="absolute top-4 right-4">
        <LangSwitch />
      </div>
      <article className="w-full max-w-3xl mx-auto space-y-8 text-foreground">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
          {isDE ? "Impressum" : "Imprint"}
        </h1>

        <p className="text-base text-muted-foreground mb-8">
          {isDE
            ? "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)."
            : "Information pursuant to § 5 of the German Digital Services Act (DDG) and § 18 (2) of the Interstate Media Treaty (MStV)."}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {isDE ? "Diensteanbieter" : "Service provider"}
          </h2>
          <p className="text-base leading-relaxed">
            Gentle Connections<br />
            Philipp Specht<br />
            Mühlenstraße 61<br />
            10551 Berlin<br />
            {isDE ? "Deutschland" : "Germany"}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{isDE ? "Kontakt" : "Contact"}</h2>
          <p className="text-base leading-relaxed">
            {isDE ? "E-Mail" : "Email"}: philippspecht1990@gmail.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {isDE
              ? "Redaktionell verantwortlich (§ 18 Abs. 2 MStV)"
              : "Responsible for content (§ 18 (2) MStV)"}
          </h2>
          <p className="text-base leading-relaxed">
            Philipp Specht<br />
            Mühlenstraße 61<br />
            10551 Berlin<br />
            {isDE ? "Deutschland" : "Germany"}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {isDE ? "EU-Streitschlichtung" : "EU dispute resolution"}
          </h2>
          <p className="text-base leading-relaxed">
            {isDE
              ? "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:"
              : "The European Commission provides a platform for online dispute resolution (ODR):"}{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            {isDE
              ? ". Unsere E-Mail-Adresse finden Sie oben im Impressum."
              : ". Our email address can be found above."}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {isDE
              ? "Verbraucherstreitbeilegung / Universalschlichtungsstelle"
              : "Consumer dispute resolution"}
          </h2>
          <p className="text-base leading-relaxed">
            {isDE
              ? "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
              : "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board."}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {isDE ? "Haftung für Inhalte" : "Liability for content"}
          </h2>
          <p className="text-base leading-relaxed">
            {isDE
              ? "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
              : "As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 (1) DDG. According to §§ 8 to 10 DDG, however, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity."}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {isDE ? "Haftung für Links" : "Liability for links"}
          </h2>
          <p className="text-base leading-relaxed">
            {isDE
              ? "Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."
              : "Our offer may contain links to external third-party websites whose content we have no influence over. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            {isDE ? "Urheberrecht" : "Copyright"}
          </h2>
          <p className="text-base leading-relaxed">
            {isDE
              ? "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."
              : "The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator."}
          </p>
        </section>

        <div className="pt-6">
          <Button asChild size="lg" className="h-14 px-8 text-lg rounded-2xl">
            <Link to="/">{t.common.back}</Link>
          </Button>
        </div>
      </article>
    </div>
  );
}
