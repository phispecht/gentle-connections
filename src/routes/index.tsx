import { createFileRoute, Link } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";
import { useT, translations } from "@/lib/i18n";

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
  return (
    <FlowShell>
      <div className="text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-foreground">
          {t.welcome.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {t.welcome.subtitle} <span>❤️</span>
        </p>
        <div className="pt-4">
          <Button asChild size="lg" className="h-16 px-10 text-xl rounded-2xl">
            <Link to="/profile">{t.welcome.cta}</Link>
          </Button>
        </div>
      </div>
    </FlowShell>
  );
}
