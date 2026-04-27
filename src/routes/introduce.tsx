import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";
import { useT, translations } from "@/lib/i18n";

export const Route = createFileRoute("/introduce")({
  head: () => ({
    meta: [
      { title: translations.de.introduce.metaTitle },
      { name: "description", content: translations.de.introduce.metaDesc },
    ],
  }),
  component: IntroducePage,
});

function IntroducePage() {
  const navigate = useNavigate();
  const t = useT();
  return (
    <FlowShell>
      <div className="text-center space-y-10">
        <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
          {t.introduce.title}
        </h1>
        <p className="text-lg text-muted-foreground">{t.introduce.subtitle}</p>
        <div className="space-y-3">
          <Button
            size="lg"
            className="w-full h-16 text-xl rounded-2xl"
            onClick={() => navigate({ to: "/message" })}
          >
            {t.introduce.yes}
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full h-16 text-xl rounded-2xl border-2"
          >
            <Link to="/finish">{t.introduce.no}</Link>
          </Button>
        </div>
      </div>
    </FlowShell>
  );
}
