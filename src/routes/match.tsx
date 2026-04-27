import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";
import peter from "@/images/peter.png";
import { useT, translations } from "@/lib/i18n";

export const Route = createFileRoute("/match")({
  head: () => ({
    meta: [
      { title: translations.de.match.metaTitle },
      { name: "description", content: translations.de.match.metaDesc },
    ],
  }),
  component: MatchPage,
});

function MatchPage() {
  const navigate = useNavigate();
  const t = useT();
  return (
    <FlowShell>
      <div className="space-y-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center">
          {t.match.title}
        </h1>

        <div className="bg-card border-2 border-border rounded-3xl p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-5">
            <div
              aria-hidden
              className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-3xl font-semibold text-accent-foreground"
            >
              <div className="">
                <img className="rounded-full border-4 border-[var(--accent)]" src={peter} alt="Peter" />
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold">{t.match.meet}</p>
              <p className="text-lg text-muted-foreground">{t.match.distance}</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed">{t.match.bio}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-base font-medium">
              {t.match.verified}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-base font-medium">
              {t.match.newHere}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            size="lg"
            className="w-full h-16 text-xl rounded-2xl"
            onClick={() => navigate({ to: "/introduce" })}
          >
            {t.match.open}
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full h-16 text-xl rounded-2xl border-2"
          >
            <Link to="/finish">{t.match.later}</Link>
          </Button>
        </div>
      </div>
    </FlowShell>
  );
}
