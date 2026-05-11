import { createFileRoute, Link } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";
import { useT, translations, useLang } from "@/lib/i18n";
import meetingSomeoneGer from "@/images/meeting-someone-ger-1.png";
import meetingSomeoneEn from "@/images/meeting-someone-en-1.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: translations.de.welcome.metaTitle },
      { name: "description", content: translations.de.welcome.metaDesc },
      { property: "og:title", content: translations.de.welcome.metaTitle },
      { property: "og:description", content: translations.de.welcome.metaDesc },
    ],
  }),
  component: WelcomePage,
});

function WelcomePage() {
  const t = useT();
  const lang = useLang();
  const isDE = lang === "de";
  return (
    <FlowShell>
      <div className="text-center space-y-3 w-[70vw] max-w-none relative left-1/2 -translate-x-1/2">
        <h1 className="mt-18 text-3xl sm:text-4xl font-semibold leading-tight text-foreground">
          {t.welcome.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {t.welcome.subtitle} <span>❤️</span>
        </p>
        <img className="w-[90vw] max-w-none relative left-1/2 -translate-x-1/2 rounded-2xl" src={isDE ? meetingSomeoneGer : meetingSomeoneEn} alt="meeting someone" />
        <div className="pt-4">
          <Button asChild size="lg" className="h-16 px-10 text-xl rounded-2xl">
            <Link to="/profile">{t.welcome.cta}</Link>
          </Button>
        </div>
      </div>
    </FlowShell>
  );
}
