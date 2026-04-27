import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import gentleConnections from "@/images/gentle-connections-icon.svg";

export function FlowShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <main className="w-full max-w-xl mx-auto">
        <div className="absolute top-4 left-4">
          <img className="h-25 w-auto" src={gentleConnections} alt="Logo Genuine Connections" />
        </div>
        {children}
      </main>
      <footer className="mt-10 text-base text-muted-foreground flex flex-col items-center gap-2">
        <span>Calm. Private. At your pace.</span>
        <div className="flex gap-4">
          <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground">
            Datenschutz
          </Link>
          <Link to="/imprint" className="underline underline-offset-4 hover:text-foreground">
            Impressum
          </Link>
        </div>
      </footer>
    </div>
  );
}
