import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/match")({
  head: () => ({
    meta: [
      { title: "Your match — Quiet Company" },
      { name: "description", content: "Meet someone nearby. No pressure." },
    ],
  }),
  component: MatchPage,
});

function MatchPage() {
  const navigate = useNavigate();
  return (
    <FlowShell>
      <div className="space-y-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center">
          Someone nearby
        </h1>

        <div className="bg-card border-2 border-border rounded-3xl p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-5">
            <div
              aria-hidden
              className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-3xl font-semibold text-accent-foreground"
            >
              P
            </div>
            <div>
              <p className="text-2xl font-semibold">Meet Peter (69)</p>
              <p className="text-lg text-muted-foreground">Lives 10 minutes away</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed">
            Enjoys morning walks and coffee.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-base font-medium">
              ✓ Verified profile
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-base font-medium">
              Also new here
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            size="lg"
            className="w-full h-16 text-xl rounded-2xl"
            onClick={() => navigate({ to: "/introduce" })}
          >
            I’m open to connecting
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full h-16 text-xl rounded-2xl border-2"
          >
            <Link to="/finish">Maybe later</Link>
          </Button>
        </div>
      </div>
    </FlowShell>
  );
}
