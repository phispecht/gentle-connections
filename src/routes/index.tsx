import { createFileRoute, Link } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quiet Company — Find someone nearby" },
      {
        name: "description",
        content:
          "A calm, low-pressure way for older adults to find someone nearby to share everyday moments with.",
      },
      { property: "og:title", content: "Quiet Company — Find someone nearby" },
      {
        property: "og:description",
        content: "No pressure. Start at your own pace.",
      },
    ],
  }),
  component: WelcomePage,
});

function WelcomePage() {
  return (
    <FlowShell>
      <div className="text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-foreground">
          Find someone nearby to share everyday moments with - people in a similar stage of life
        </h1>
        <p className="text-xl text-muted-foreground">
          Connect with people in your area safely and simply, at your own pace. <span>❤️</span>
        </p>
        <div className="pt-4">
          <Button asChild size="lg" className="h-16 px-10 text-xl rounded-2xl">
            <Link to="/profile">Get started</Link>
          </Button>
        </div>
      </div>
    </FlowShell>
  );
}
