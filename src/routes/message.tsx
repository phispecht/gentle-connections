import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";
import { useT, translations } from "@/lib/i18n";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/message")({
  head: () => ({
    meta: [
      { title: translations.de.message.metaTitle },
      { name: "description", content: translations.de.message.metaDesc },
    ],
  }),
  component: MessagePage,
});

function MessagePage() {
  const navigate = useNavigate();
  const t = useT();
  return (
    <FlowShell>
      <div className="space-y-8">
        <h1 className="text-3xl sm:text-4xl font-semibold">{t.message.title}</h1>
        <p className="text-lg text-muted-foreground">{t.message.subtitle}</p>

        <Textarea
          defaultValue={t.message.body}
          className="min-h-32 text-lg rounded-xl resize-none"
        />

        <Button
          size="lg"
          className="w-full h-16 text-xl rounded-2xl"
          onClick={() => navigate({ to: "/finish" })}
        >
          {t.message.send}
        </Button>
      </div>
    </FlowShell>
  );
}
