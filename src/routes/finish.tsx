import { createFileRoute, Link } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/finish")({
  head: () => ({
    meta: [
      { title: "You’re in control — Quiet Company" },
      { name: "description", content: "You can continue or stop anytime." },
    ],
  }),
  component: FinishPage,
});

function FinishPage() {
  return (
    <FlowShell>
      <div className="text-center space-y-10">
        <div
          aria-hidden
          className="mx-auto w-20 h-20 rounded-full bg-accent flex items-center justify-center text-3xl text-accent-foreground"
        >
          ✓
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
          You’re in control.
        </h1>
        <p className="text-xl text-muted-foreground">
          You can continue or stop anytime.
        </p>
        <Button
          asChild
          size="lg"
          className="w-full h-16 text-xl rounded-2xl"
        >
          <Link to="/">Finish</Link>
        </Button>
      </div>
    </FlowShell>
  );
}
