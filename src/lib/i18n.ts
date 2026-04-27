import { useSyncExternalStore } from "react";

export type Lang = "de" | "en";

const STORAGE_KEY = "gc-lang";

function initialLang(): Lang {
  if (typeof window === "undefined") return "de";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "de" || stored === "en") return stored;
  return "de";
}

let lang: Lang = initialLang();
const listeners = new Set<() => void>();

export const langStore = {
  get: () => lang,
  getServer: (): Lang => "de",
  set: (next: Lang) => {
    lang = next;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    }
    listeners.forEach((l) => l());
  },
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

export function useLang(): Lang {
  return useSyncExternalStore(langStore.subscribe, langStore.get, langStore.getServer);
}

export const translations = {
  de: {
    footer: {
      tagline: "Ruhig. Privat. In Ihrem Tempo.",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
    langSwitch: { de: "DE", en: "EN", label: "Sprache" },
    welcome: {
      title: "Finden Sie jemanden in der Nähe, mit dem Sie alltägliche Momente teilen können – Menschen in einer ähnlichen Lebensphase",
      subtitle: "Verbinden Sie sich sicher und einfach mit Menschen in Ihrer Umgebung – in Ihrem eigenen Tempo.",
      cta: "Jetzt starten",
      metaTitle: "Gentle Connections — Jemanden in der Nähe finden",
      metaDesc: "Eine ruhige Möglichkeit für ältere Menschen, jemanden in der Nähe zu finden.",
    },
    profile: {
      title: "Ein wenig über Sie",
      subtitle: "Nur das Wichtigste. Es wird noch nichts geteilt.",
      name: "Name",
      age: "Alter",
      location: "Wohnort",
      locationPlaceholder: "Stadt oder Stadtteil",
      interestsLabel: "Was machen Sie gerne?",
      continue: "Weiter",
      interests: ["Kaffee", "Spaziergänge", "Gespräche", "Gartenarbeit", "Lesen", "Musik", "Brettspiele", "Kochen / Backen", "Fernsehen", "Telefonieren"],
      metaTitle: "Über Sie — Gentle Connections",
      metaDesc: "Erzählen Sie uns ein wenig über sich.",
    },
    match: {
      title: "Jemand in der Nähe",
      meet: "Peter (69) kennenlernen",
      distance: "Wohnt 10 Minuten entfernt",
      bio: "Genießt Spaziergänge am Morgen und Kaffee.",
      verified: "✓ Verifiziertes Profil",
      newHere: "Auch neu hier",
      open: "Ich bin offen für einen Kontakt",
      later: "Vielleicht später",
      metaTitle: "Ihr Match — Gentle Connections",
      metaDesc: "Lernen Sie jemanden in der Nähe kennen. Kein Druck.",
    },
    introduce: {
      title: "Möchten Sie, dass wir Sie vorstellen?",
      subtitle: "Wir senden eine kurze, freundliche erste Nachricht in Ihrem Namen.",
      yes: "Ja, stellen Sie uns vor",
      no: "Nicht jetzt",
      metaTitle: "Eine sanfte Vorstellung — Gentle Connections",
      metaDesc: "Möchten Sie, dass wir Sie vorstellen?",
    },
    message: {
      title: "Ihre erste Nachricht",
      subtitle: "Wir haben etwas Einfaches geschrieben. Sie können es so senden.",
      body: "„Hallo Peter, schön, Sie kennenzulernen. Ich gehe auch gerne spazieren. Vielleicht beginnen wir mit einem kurzen Gespräch?“",
      send: "Nachricht senden",
      metaTitle: "Erste Nachricht — Gentle Connections",
      metaDesc: "Eine einfache, vorbereitete erste Nachricht.",
    },
    finish: {
      title: "Sie haben die Kontrolle.",
      subtitle: "Sie können jederzeit weitermachen oder aufhören.",
      cta: "Fertig",
      metaTitle: "Sie haben die Kontrolle — Gentle Connections",
      metaDesc: "Sie können jederzeit weitermachen oder aufhören.",
    },
    common: { back: "Zurück zur Startseite" },
  },
  en: {
    footer: {
      tagline: "Calm. Private. At your pace.",
      imprint: "Imprint",
      privacy: "Privacy",
    },
    langSwitch: { de: "DE", en: "EN", label: "Language" },
    welcome: {
      title: "Find someone nearby to share everyday moments with — people in a similar stage of life",
      subtitle: "Connect with people in your area safely and simply, at your own pace.",
      cta: "Get started",
      metaTitle: "Gentle Connections — Find someone nearby",
      metaDesc: "A calm, low-pressure way for older adults to find someone nearby.",
    },
    profile: {
      title: "A little about you",
      subtitle: "Just the basics. Nothing is shared yet.",
      name: "Name",
      age: "Age",
      location: "Location",
      locationPlaceholder: "Town or neighborhood",
      interestsLabel: "What do you enjoy?",
      continue: "Continue",
      interests: ["Coffee", "Walks", "Conversation", "Gardening", "Reading", "Music", "Board games", "Cooking / Baking", "Watching TV", "Phone calls"],
      metaTitle: "About you — Gentle Connections",
      metaDesc: "Tell us a little about yourself.",
    },
    match: {
      title: "Someone nearby",
      meet: "Meet Peter (69)",
      distance: "Lives 10 minutes away",
      bio: "Enjoys morning walks and coffee.",
      verified: "✓ Verified profile",
      newHere: "Also new here",
      open: "I’m open to connecting",
      later: "Maybe later",
      metaTitle: "Your match — Gentle Connections",
      metaDesc: "Meet someone nearby. No pressure.",
    },
    introduce: {
      title: "Would you like us to introduce you?",
      subtitle: "We’ll send a short, friendly first message on your behalf.",
      yes: "Yes, introduce us",
      no: "Not now",
      metaTitle: "A gentle introduction — Gentle Connections",
      metaDesc: "Would you like us to introduce you?",
    },
    message: {
      title: "Your first message",
      subtitle: "We’ve written something simple. You can send it as it is.",
      body: "“Hi Peter, nice to meet you. I also enjoy walks. Maybe we could start with a short chat?”",
      send: "Send message",
      metaTitle: "First message — Gentle Connections",
      metaDesc: "A simple, ready-made first message.",
    },
    finish: {
      title: "You’re in control.",
      subtitle: "You can continue or stop anytime.",
      cta: "Finish",
      metaTitle: "You’re in control — Gentle Connections",
      metaDesc: "You can continue or stop anytime.",
    },
    common: { back: "Back to home" },
  },
} as const;

export type Dict = (typeof translations)["de"];

export function useT(): Dict {
  const l = useLang();
  return translations[l];
}

