import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FlowShell } from "@/components/FlowShell";
import { Button } from "@/components/ui/button";
import peter from "@/images/peter.png";
import maria from "@/images/maria.png";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/match")({
  head: () => ({}),
  component: MatchPage,
});

function MatchPage() {
  const navigate = useNavigate();
  const t = useT();

  function getProfilePicture(name: any) {
    console.log(name);
    if (name === "Peter") {
      return peter;
    } else if (name === "Maria") {
      return maria;
    }
    return null;
  }

  const profiles = t.match.profiles.map((profile) => ({
    ...profile,
    image: getProfilePicture(profile.name),
  }));

  return (
    <FlowShell>
      <div className="space-y-8 w-[90vw] max-w-6xl relative left-1/2 -translate-x-1/2">
        <h1 className="mt-10 mb-20 text-3xl sm:text-4xl font-semibold text-center">
          {t.match.title}
        </h1>

        <div className="grid gap-6 lg:grid-cols-2">
          {profiles.map((profile) => (
            <div
              key={profile.name}
              className="bg-card border-2 border-border rounded-3xl p-6 space-y-5 shadow-sm"
            >
              <div className="flex items-center gap-5">
                {profile.image ? (
                  <img
                    className="w-20 h-20 rounded-full border-4 border-[var(--accent)] object-cover"
                    src={profile.image}
                    alt={profile.name}
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full border-4 border-[var(--accent)] bg-accent/20 flex items-center justify-center text-3xl font-semibold">
                    {profile.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-2xl font-semibold">
                    {profile.name}, {profile.age}
                  </p>

                  <p className="text-lg text-muted-foreground">{profile.distance}</p>
                </div>
              </div>

              <p className="text-xl leading-relaxed">{profile.bio}</p>

              <div className="space-y-3 pt-4">
                <p className="text-lg font-semibold">{t.match.sharedInterests}</p>

                <div className="flex flex-wrap gap-3">
                  {profile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-base font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <p className="text-lg font-semibold">{t.match.trustSafety}</p>

                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-base font-medium">
                    {t.match.verified}
                  </span>

                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-base font-medium">
                    {t.match.newHere}
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full h-16 text-xl rounded-2xl"
                onClick={() => navigate({ to: "/introduce" })}
              >
                {t.match.open}
              </Button>
            </div>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full h-16 text-xl rounded-2xl border-2"
        >
          <Link to="/finish">{t.match.later}</Link>
        </Button>
      </div>
    </FlowShell>
  );
}
