import { createFileRoute, Link } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";
import { useT, translations } from "@/lib/i18n";

export const Route = createFileRoute("/finish")({
  head: () => ({
    meta: [
      { title: translations.de.finish.metaTitle },
      { name: "description", content: translations.de.finish.metaDesc },
    ],
  }),
  component: FinishPage,
});

function FinishPage() {
  const t = useT();
  return (
    <FlowShell>
      <div className="text-center space-y-10">
        <div
          aria-hidden
          className="mx-auto w-20 h-20 rounded-full bg-accent flex items-center justify-center text-3xl text-accent-foreground"
        >
          ✓
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">{t.finish.title}</h1>
        <p className="text-xl text-muted-foreground">{t.finish.subtitle}</p>
        <Button asChild size="lg" className="w-full h-16 text-xl rounded-2xl">
          <Link to="/">{t.finish.cta}</Link>
        </Button>
      </div>
    </FlowShell>
  );
}
