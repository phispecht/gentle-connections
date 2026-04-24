import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/introduce")({
  head: () => ({
    meta: [
      { title: "A gentle introduction — Quiet Company" },
      { name: "description", content: "Would you like us to introduce you?" },
    ],
  }),
  component: IntroducePage,
});

function IntroducePage() {
  const navigate = useNavigate();
  return (
    <FlowShell>
      <div className="text-center space-y-10">
        <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
          Would you like us to introduce you?
        </h1>
        <p className="text-lg text-muted-foreground">
          We’ll send a short, friendly first message on your behalf.
        </p>
        <div className="space-y-3">
          <Button
            size="lg"
            className="w-full h-16 text-xl rounded-2xl"
            onClick={() => navigate({ to: "/message" })}
          >
            Yes, introduce us
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full h-16 text-xl rounded-2xl border-2"
          >
            <Link to="/finish">Not now</Link>
          </Button>
        </div>
      </div>
    </FlowShell>
  );
}
