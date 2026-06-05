import { useEffect, useSyncExternalStore } from "react";

export type Lang = "de" | "en";

const STORAGE_KEY = "gc-lang";

// Always start with "de" so SSR and the client's first render match.
// We hydrate from localStorage in an effect after mount.
let lang: Lang = "de";
let hydrated = false;
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
  hydrateFromStorage: () => {
    if (hydrated || typeof window === "undefined") return;
    hydrated = true;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if ((stored === "de" || stored === "en") && stored !== lang) {
      langStore.set(stored);
    } else {
      document.documentElement.lang = lang;
    }
  },
};

export function useLang(): Lang {
  useEffect(() => {
    langStore.hydrateFromStorage();
  }, []);
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
      title: "Finde Freunde durch gemeinsame Interessen und Aktivitäten",
      subtitle:
        "Treffen Sie Menschen mit ähnlichen Interessen, teilen Sie Aktivitäten und bauen Sie neue Kontakte in Ihrem eigenen Tempo auf.",
      cta: "Jetzt starten",
      metaTitle: "Gentle Connections — Jemanden in der Nähe finden",
      metaDesc: "Eine ruhige Möglichkeit für ältere Menschen, jemanden in der Nähe zu finden.",
    },
    profile: {
      title: "Erzählen Sie ein wenig über sich",
      subtitle:
        "Nur wenige Angaben, damit andere Sie besser kennenlernen können. Sie entscheiden jederzeit, welche Informationen sichtbar sind.",
      photo: "Ihr Profilbild (optional)",
      photoDescription: "Ein Profilbild ist freiwillig. Sie entscheiden selbst, was andere sehen.",
      photoPlaceholder: "Profilbild hinzufügen (im Prototyp nicht verfügbar)",
      name: "Name",
      age: "Alter",
      location: "Wohnort",
      locationPlaceholder: "Stadt oder Stadtteil",
      interestsLabel: "Was machen Sie gerne?",
      aboutMePlaceholder:
        "Beispiel: Ich gehe gerne spazieren, probiere neue Rezepte aus und freue mich über nette Gespräche bei einem Kaffee.",
      continue: "Weiter",
      interests: [
        "Kaffee",
        "Spaziergänge",
        "Gespräche",
        "Gartenarbeit",
        "Lesen",
        "Musik",
        "Brettspiele",
        "Kochen / Backen",
        "Fernsehen",
        "Telefonieren",
      ],
      aboutMe:
        "Erzählen Sie etwas über sich, Ihre Interessen oder was Sie gerne gemeinsam unternehmen möchten. (optional)",
      metaTitle: "Über Sie — Gentle Connections",
      metaDesc: "Erzählen Sie uns ein wenig über sich.",
    },
    match: {
      title: "Menschen mit ähnlichen Interessen",
      sharedInterests: "Gemeinsame Interessen",
      trustSafety: "Vertrauen & Sicherheit",
      verified: "✓ Identität bestätigt",
      newHere: "🌱 Neu dabei",
      open: "Ein erstes Gespräch starten",
      later: "Vielleicht später",

      profiles: [
        {
          name: "Peter",
          age: 69,
          distance: "Wohnt 10 Minuten entfernt",
          bio: "Ich gehe gerne morgens spazieren, probiere neue Rezepte aus und freue mich über nette Gespräche bei einem Kaffee.",
          interests: ["☕ Kaffee", "🚶 Spaziergänge", "🍳 Kochen", "📚 Lesen"],
        },
        {
          name: "Maria",
          age: 60,
          distance: "Wohnt in Ihrer Nähe",
          bio: "Ich verbringe gerne Zeit im Garten, höre Musik und freue mich über gemeinsame Spaziergänge.",
          interests: ["🌱 Gartenarbeit", "🎵 Musik", "🚶 Spaziergänge"],
        },
        {
          name: "Michaela",
          age: 63,
          distance: "Wohnt 15 Minuten entfernt",
          bio: "Ich koche gerne, lese viel und tausche mich gerne mit anderen Menschen aus.",
          interests: ["🍳 Kochen", "📚 Lesen", "💬 Gespräche"],
        },
      ],
    },
    introduce: {
      title: "Möchten Sie, dass wir Sie vorstellen?",
      subtitle:
        "Wir bereiten eine freundliche erste Nachricht vor. Sie können diese vor dem Senden überprüfen.",
      yes: "Weiter zur ersten Nachricht",
      no: "Nicht jetzt",
    },
    message: {
      title: "Ihre erste Nachricht",
      subtitle:
        "Hier ist ein Vorschlag für Ihre erste Nachricht. Sie können diese ändern oder direkt senden.",
      body: "Hallo Peter, ich habe gesehen, dass wir beide gerne spazieren gehen. Ich würde mich über ein freundliches Gespräch freuen.",
      send: "Erste Nachricht senden",
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
      title: "Find friendships through shared interests and activities",
      subtitle:
        "Meet like-minded people, share activities, and build new connections at your own pace.",
      cta: "Get started",
      metaTitle: "Gentle Connections — Find someone nearby",
      metaDesc: "A calm, low-pressure way for older adults to find someone nearby.",
    },
    profile: {
      title: "Tell us a little about yourself",
      subtitle:
        "Just a few details so others can get to know you better. You can decide at any time which information is visible.",
      photo: "Your profile picture (optional)",
      photoDescription: "Adding a profile picture is optional. You decide what others can see.",
      photoPlaceholder: "Add profile picture (not available in the prototype)",
      name: "Name",
      age: "Age",
      location: "Location",
      locationPlaceholder: "Town or neighborhood",
      interestsLabel: "What do you enjoy?",
      aboutMePlaceholder:
        "Example: I enjoy going for walks, trying out new recipes, and having nice conversations over coffee. (optional)",
      continue: "Continue",
      interests: [
        "Coffee",
        "Walks",
        "Conversation",
        "Gardening",
        "Reading",
        "Music",
        "Board games",
        "Cooking / Baking",
        "Watching TV",
        "Phone calls",
      ],
      aboutMe:
        "Tell us a little about yourself, your interests, or what you'd like to do together.",
      metaTitle: "About you — Gentle Connections",
      metaDesc: "Tell us a little about yourself.",
    },
    match: {
      title: "People with similar interests",
      sharedInterests: "Shared interests",
      trustSafety: "Trust & Safety",
      verified: "✓ Identity verified",
      newHere: "🌱 New here",
      open: "Start a first conversation",
      later: "Maybe later",

      profiles: [
        {
          name: "Peter",
          age: 69,
          distance: "Lives 10 minutes away",
          bio: "I enjoy going for walks in the morning, trying new recipes, and having nice conversations over coffee.",
          interests: ["☕ Coffee", "🚶 Walks", "🍳 Cooking", "📚 Reading"],
        },
        {
          name: "Maria",
          age: 60,
          distance: "Lives nearby",
          bio: "I enjoy spending time in the garden, listening to music, and going for walks together.",
          interests: ["🌱 Gardening", "🎵 Music", "🚶 Walks"],
        },
        {
          name: "Michaela",
          age: 63,
          distance: "Lives 15 minutes away",
          bio: "I enjoy cooking, reading books, and having interesting conversations with other people.",
          interests: ["🍳 Cooking", "📚 Reading", "💬 Conversations"],
        },
      ],
    },
    introduce: {
      title: "Would you like us to introduce you?",
      subtitle: "We’ll prepare a friendly first message. You can review it before sending.",
      yes: "Continue to first message",
      no: "Not now",
      metaTitle: "A gentle introduction — Gentle Connections",
      metaDesc: "Would you like us to introduce you?",
    },
    message: {
      title: "Your first message",
      subtitle: "Here is a suggested message. You can change it or send it as it is.",
      body: "Hello Peter, I saw that we both enjoy going for walks. I would be happy to start with a friendly conversation.",
      send: "Send first message",
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

type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepStringify<U>[]
    : { readonly [K in keyof T]: DeepStringify<T[K]> };

export type Dict = DeepStringify<(typeof translations)["de"]>;

export function useT(): Dict {
  const l = useLang();
  return translations[l] as unknown as Dict;
}
