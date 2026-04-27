import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LangSwitch } from "@/components/LangSwitch";
import { useLang, useT } from "@/lib/i18n";

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
  const lang = useLang();
  const t = useT();
  const isDE = lang === "de";

  const content = isDE
    ? {
        title: "Datenschutzerklärung",
        updated: `Gentle Connections — Stand: ${new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long" })}`,
        sections: [
          {
            h: "1. Verantwortlicher",
            p: "Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG) ist der Anbieter von Gentle Connections. Sie erreichen uns über die im Impressum angegebenen Kontaktwege.",
          },
          {
            h: "2. Grundsätze",
            p: "Wir behandeln Ihre persönlichen Daten vertraulich, sicher und entsprechend der gesetzlichen Datenschutzvorschriften. Wir erheben nur so viele Daten, wie für die Nutzung von Gentle Connections nötig sind („Datenminimierung“, Art. 5 Abs. 1 lit. c DSGVO).",
          },
          {
            h: "3. Welche Daten wir verarbeiten",
            p: "Für die Nutzung dieses Prototyps verarbeiten wir folgende Angaben, die Sie freiwillig eingeben:",
            list: [
              "Vorname (oder ein gewünschter Anzeigename)",
              "Alter",
              "Ungefährer Wohnort (z. B. Stadt oder Stadtteil)",
              "Ausgewählte Interessen (z. B. Spaziergänge, Kaffee, Gespräche)",
            ],
            p2: "In dieser Prototyp-Version werden Ihre Eingaben ausschließlich lokal in Ihrem Browser gespeichert. Es findet keine Übertragung an einen Server, kein Tracking und keine Weitergabe an Dritte statt.",
          },
          {
            h: "4. Rechtsgrundlage",
            p: "Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sowie zur Erfüllung des Nutzungsverhältnisses (Art. 6 Abs. 1 lit. b DSGVO). Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.",
          },
          {
            h: "5. Speicherdauer",
            p: "Ihre Angaben werden nur so lange gespeichert, wie es für die Nutzung der App erforderlich ist. Sie können die lokal gespeicherten Daten jederzeit löschen, indem Sie die Browserdaten dieser Seite entfernen.",
          },
          {
            h: "6. Keine Weitergabe an Dritte",
            p: "Wir geben Ihre Daten nicht an Dritte weiter und nutzen keine Werbe-Tracker, keine Analyse-Cookies und keine Social-Media-Plugins. Eine Übermittlung in Länder außerhalb der EU/des EWR findet nicht statt.",
          },
          {
            h: "7. Sicherheit",
            p: "Die Verbindung zu Gentle Connections erfolgt verschlüsselt über HTTPS (TLS). Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen (Art. 32 DSGVO).",
          },
          {
            h: "8. Ihre Rechte",
            p: "Ihnen stehen nach DSGVO folgende Rechte zu:",
            list: [
              "Recht auf Auskunft (Art. 15 DSGVO)",
              "Recht auf Berichtigung (Art. 16 DSGVO)",
              "Recht auf Löschung („Recht auf Vergessenwerden“, Art. 17 DSGVO)",
              "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
              "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
              "Widerspruchsrecht (Art. 21 DSGVO)",
              "Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)",
            ],
          },
          {
            h: "9. Beschwerderecht",
            p: "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig ist in der Regel die Aufsichtsbehörde Ihres Bundeslandes oder der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI).",
          },
          {
            h: "10. Änderungen dieser Erklärung",
            p: "Wir passen diese Datenschutzerklärung an, wenn sich die Funktionen der App oder die rechtlichen Anforderungen ändern. Die jeweils aktuelle Version finden Sie stets auf dieser Seite.",
          },
        ],
      }
    : {
        title: "Privacy Policy",
        updated: `Gentle Connections — Last updated: ${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}`,
        sections: [
          {
            h: "1. Controller",
            p: "The controller responsible for data processing within the meaning of the General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG) is the provider of Gentle Connections. You can reach us via the contact details listed in the imprint.",
          },
          {
            h: "2. Principles",
            p: "We treat your personal data confidentially, securely, and in accordance with statutory data protection regulations. We collect only as much data as is necessary to use Gentle Connections (data minimisation, Art. 5 (1)(c) GDPR).",
          },
          {
            h: "3. Which data we process",
            p: "To use this prototype, we process the following information that you provide voluntarily:",
            list: [
              "First name (or a chosen display name)",
              "Age",
              "Approximate location (e.g. town or neighbourhood)",
              "Selected interests (e.g. walks, coffee, conversation)",
            ],
            p2: "In this prototype version, your input is stored exclusively locally in your browser. There is no transmission to a server, no tracking, and no sharing with third parties.",
          },
          {
            h: "4. Legal basis",
            p: "Processing takes place on the basis of your consent (Art. 6 (1)(a) GDPR) and to fulfil the user relationship (Art. 6 (1)(b) GDPR). You can withdraw your consent at any time with effect for the future.",
          },
          {
            h: "5. Retention period",
            p: "Your data is stored only for as long as necessary to use the app. You can delete locally stored data at any time by clearing the browser data for this site.",
          },
          {
            h: "6. No sharing with third parties",
            p: "We do not share your data with third parties and do not use advertising trackers, analytics cookies, or social media plugins. No transfer to countries outside the EU/EEA takes place.",
          },
          {
            h: "7. Security",
            p: "The connection to Gentle Connections is encrypted via HTTPS (TLS). We use technical and organisational measures to protect your data from loss, misuse, and unauthorised access (Art. 32 GDPR).",
          },
          {
            h: "8. Your rights",
            p: "Under the GDPR you have the following rights:",
            list: [
              "Right of access (Art. 15 GDPR)",
              "Right to rectification (Art. 16 GDPR)",
              "Right to erasure (“right to be forgotten”, Art. 17 GDPR)",
              "Right to restriction of processing (Art. 18 GDPR)",
              "Right to data portability (Art. 20 GDPR)",
              "Right to object (Art. 21 GDPR)",
              "Right to withdraw consent (Art. 7 (3) GDPR)",
            ],
          },
          {
            h: "9. Right to lodge a complaint",
            p: "You have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). Usually the supervisory authority of your federal state or the Federal Commissioner for Data Protection and Freedom of Information (BfDI) is responsible.",
          },
          {
            h: "10. Changes to this policy",
            p: "We will update this privacy policy if the app's functionality or legal requirements change. The current version can always be found on this page.",
          },
        ],
      };

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="absolute top-4 right-4">
        <LangSwitch />
      </div>
      <main className="w-full max-w-3xl mx-auto space-y-8 text-foreground">
        <header className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">{content.title}</h1>
          <p className="text-lg text-muted-foreground">{content.updated}</p>
        </header>

        {content.sections.map((s) => (
          <section key={s.h} className="space-y-3">
            <h2 className="text-2xl font-semibold">{s.h}</h2>
            <p className="text-lg leading-relaxed">{s.p}</p>
            {s.list && (
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
            {s.p2 && <p className="text-lg leading-relaxed">{s.p2}</p>}
          </section>
        ))}

        <div className="pt-6">
          <Button asChild size="lg" className="h-14 px-8 text-lg rounded-2xl">
            <Link to="/">{t.common.back}</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
