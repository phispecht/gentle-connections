import { useSyncExternalStore } from "react";

export type Profile = {
  name: string;
  age: string;
  location: string;
  interests: string[];
};

let profile: Profile = { name: "", age: "", location: "", interests: [] };
const listeners = new Set<() => void>();

export const flowStore = {
  get: () => profile,
  set: (next: Partial<Profile>) => {
    profile = { ...profile, ...next };
    listeners.forEach((l) => l());
  },
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

export function useProfile() {
  return useSyncExternalStore(flowStore.subscribe, flowStore.get, flowStore.get);
}
