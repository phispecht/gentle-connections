import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { flowStore, useProfile } from "@/lib/flow-store";
import { useT, translations } from "@/lib/i18n";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: translations.de.profile.metaTitle },
      { name: "description", content: translations.de.profile.metaDesc },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const navigate = useNavigate();
  const profile = useProfile();
  const t = useT();
  const [interests, setInterests] = useState<string[]>(profile.interests);

  const toggle = (i: string) =>
    setInterests((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    flowStore.set({
      name: String(data.get("name") || ""),
      age: String(data.get("age") || ""),
      location: String(data.get("location") || ""),
      interests,
      aboutMe: String(data.get("aboutMe") || ""),
    });
    navigate({ to: "/match" });
  };

  return (
    <FlowShell>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold">{t.profile.title}</h1>
          <p className="text-lg text-muted-foreground">{t.profile.subtitle}</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label className="text-lg">{t.profile.photo}</Label>

            <p className="text-muted-foreground">{t.profile.photoDescription}</p>

            <div className="mt-4 flex h-32 items-center justify-center rounded-xl border border-dashed text-lg text-muted-foreground">
              {t.profile.photoPlaceholder}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-lg">
              {t.profile.name}
            </Label>
            <Input
              id="name"
              name="name"
              required
              defaultValue={profile.name}
              className="h-14 text-lg rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age" className="text-lg">
              {t.profile.age}
            </Label>
            <Input
              id="age"
              name="age"
              inputMode="numeric"
              required
              defaultValue={profile.age}
              className="h-14 text-lg rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location" className="text-lg">
              {t.profile.location}
            </Label>
            <Input
              id="location"
              name="location"
              required
              defaultValue={profile.location}
              placeholder={t.profile.locationPlaceholder}
              className="h-14 text-lg rounded-xl"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-lg">{t.profile.interestsLabel}</Label>
            <div className="flex flex-wrap gap-3 mt-4">
              {t.profile.interests.map((i) => {
                const active = interests.includes(i);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggle(i)}
                    aria-pressed={active}
                    className={`px-5 py-3 text-lg rounded-full border-2 transition-colors ${
                      active
                        ? "bg-[var(--profile-selection)] border-[var(--profile-selection)] text-foreground"
                        : "bg-card text-foreground border-border hover:bg-secondary"
                    }`}
                  >
                    {i}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="aboutMe" className="text-lg">
              {t.profile.aboutMe}
            </Label>

            <Textarea
              id="aboutMe"
              name="aboutMe"
              defaultValue={profile.aboutMe}
              placeholder={t.profile.aboutMePlaceholder}
              className="mt-4 min-h-32 text-lg rounded-xl resize-none"
            />
          </div>

          <Button type="submit" size="lg" className="w-full h-16 text-xl rounded-2xl">
            {t.profile.continue}
          </Button>
        </form>
      </div>
    </FlowShell>
  );
}
