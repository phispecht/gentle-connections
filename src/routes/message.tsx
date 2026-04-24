import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/message")({
  head: () => ({
    meta: [
      { title: "First message — Quiet Company" },
      { name: "description", content: "A simple, ready-made first message." },
    ],
  }),
  component: MessagePage,
});

function MessagePage() {
  const navigate = useNavigate();
  return (
    <FlowShell>
      <div className="space-y-8">
        <h1 className="text-3xl sm:text-4xl font-semibold">Your first message</h1>
        <p className="text-lg text-muted-foreground">
          We’ve written something simple. You can send it as it is.
        </p>

        <blockquote className="bg-card border-2 border-border rounded-2xl p-6 text-xl leading-relaxed">
          “Hi Peter, nice to meet you. I also enjoy walks. Maybe we could start with a short chat?”
        </blockquote>

        <Button
          size="lg"
          className="w-full h-16 text-xl rounded-2xl"
          onClick={() => navigate({ to: "/finish" })}
        >
          Send message
        </Button>
      </div>
    </FlowShell>
  );
}
