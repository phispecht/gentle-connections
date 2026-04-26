import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { flowStore, useProfile } from "@/lib/flow-store";

const INTERESTS = ["Coffee", "Walks", "Conversation", "Gardening", "Reading", "Music", "Board games", "Cooking / Baking", "Watching TV", "Phone calls"];

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "About you — Quiet Company" },
      { name: "description", content: "Tell us a little about yourself." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const navigate = useNavigate();
  const profile = useProfile();
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
    });
    navigate({ to: "/match" });
  };

  return (
    <FlowShell>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold">A little about you</h1>
          <p className="text-lg text-muted-foreground">Just the basics. Nothing is shared yet.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-lg">Name</Label>
            <Input id="name" name="name" required defaultValue={profile.name}
              className="h-14 text-lg rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age" className="text-lg">Age</Label>
            <Input id="age" name="age" inputMode="numeric" required defaultValue={profile.age}
              className="h-14 text-lg rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location" className="text-lg">Location</Label>
            <Input id="location" name="location" required defaultValue={profile.location}
              placeholder="Town or neighborhood"
              className="h-14 text-lg rounded-xl" />
          </div>

          <div className="space-y-3">
            <Label className="text-lg">What do you enjoy?</Label>
            <div className="flex flex-wrap gap-3 mt-4">
              {INTERESTS.map((i) => {
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

          <Button type="submit" size="lg" className="w-full h-16 text-xl rounded-2xl">
            Continue
          </Button>
        </form>
      </div>
    </FlowShell>
  );
}
