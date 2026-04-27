import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — Gentle Connections" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von Gentle Connections gemäß DSGVO und BDSG für Nutzer in Deutschland.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <main className="w-full max-w-3xl mx-auto space-y-8 text-foreground">
        <header className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-muted-foreground">
            Gentle Connections — Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long" })}
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">1. Verantwortlicher</h2>
          <p className="text-lg leading-relaxed">
            Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung
            (DSGVO) und des Bundesdatenschutzgesetzes (BDSG) ist der Anbieter von
            Gentle Connections. Sie erreichen uns über die in der App angegebenen Kontaktwege.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">2. Grundsätze</h2>
          <p className="text-lg leading-relaxed">
            Wir behandeln Ihre persönlichen Daten vertraulich, sicher und entsprechend
            der gesetzlichen Datenschutzvorschriften. Wir erheben nur so viele Daten,
            wie für die Nutzung von Gentle Connections nötig sind („Datenminimierung",
            Art. 5 Abs. 1 lit. c DSGVO).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">3. Welche Daten wir verarbeiten</h2>
          <p className="text-lg leading-relaxed">
            Für die Nutzung dieses Prototyps verarbeiten wir folgende Angaben, die Sie
            freiwillig eingeben:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li>Vorname (oder ein gewünschter Anzeigename)</li>
            <li>Alter</li>
            <li>Ungefährer Wohnort (z. B. Stadt oder Stadtteil)</li>
            <li>Ausgewählte Interessen (z. B. Spaziergänge, Kaffee, Gespräche)</li>
          </ul>
          <p className="text-lg leading-relaxed">
            In dieser Prototyp-Version werden Ihre Eingaben ausschließlich lokal in
            Ihrem Browser gespeichert. Es findet keine Übertragung an einen Server,
            kein Tracking und keine Weitergabe an Dritte statt.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">4. Rechtsgrundlage</h2>
          <p className="text-lg leading-relaxed">
            Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO) sowie zur Erfüllung des Nutzungsverhältnisses
            (Art. 6 Abs. 1 lit. b DSGVO). Sie können Ihre Einwilligung jederzeit mit
            Wirkung für die Zukunft widerrufen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">5. Speicherdauer</h2>
          <p className="text-lg leading-relaxed">
            Ihre Angaben werden nur so lange gespeichert, wie es für die Nutzung
            der App erforderlich ist. Sie können die lokal gespeicherten Daten
            jederzeit löschen, indem Sie die Browserdaten dieser Seite entfernen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">6. Keine Weitergabe an Dritte</h2>
          <p className="text-lg leading-relaxed">
            Wir geben Ihre Daten nicht an Dritte weiter und nutzen keine
            Werbe-Tracker, keine Analyse-Cookies und keine Social-Media-Plugins.
            Eine Übermittlung in Länder außerhalb der EU/des EWR findet nicht statt.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">7. Sicherheit</h2>
          <p className="text-lg leading-relaxed">
            Die Verbindung zu Gentle Connections erfolgt verschlüsselt über HTTPS
            (TLS). Wir setzen technische und organisatorische Maßnahmen ein, um Ihre
            Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen
            (Art. 32 DSGVO).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">8. Ihre Rechte</h2>
          <p className="text-lg leading-relaxed">
            Ihnen stehen nach DSGVO folgende Rechte zu:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung („Recht auf Vergessenwerden", Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">9. Beschwerderecht</h2>
          <p className="text-lg leading-relaxed">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
            beschweren (Art. 77 DSGVO). Zuständig ist in der Regel die
            Aufsichtsbehörde Ihres Bundeslandes oder der Bundesbeauftragte für
            den Datenschutz und die Informationsfreiheit (BfDI).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">10. Änderungen dieser Erklärung</h2>
          <p className="text-lg leading-relaxed">
            Wir passen diese Datenschutzerklärung an, wenn sich die Funktionen
            der App oder die rechtlichen Anforderungen ändern. Die jeweils
            aktuelle Version finden Sie stets auf dieser Seite.
          </p>
        </section>

        <div className="pt-6">
          <Button asChild size="lg" className="h-14 px-8 text-lg rounded-2xl">
            <Link to="/">Zurück zur Startseite</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
