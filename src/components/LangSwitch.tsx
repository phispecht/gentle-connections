import { langStore, useLang, useT } from "@/lib/i18n";

export function LangSwitch() {
  const lang = useLang();
  const t = useT();
  return (
    <div
      role="group"
      aria-label={t.langSwitch.label}
      className="inline-flex items-center rounded-full border-2 border-border bg-card overflow-hidden"
    >
      {(["de", "en"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => langStore.set(l)}
            aria-pressed={active}
            className={`px-4 py-2 text-base font-semibold transition-colors ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-secondary"
            }`}
          >
            {t.langSwitch[l]}
          </button>
        );
      })}
    </div>
  );
}
