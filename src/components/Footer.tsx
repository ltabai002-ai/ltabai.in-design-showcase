import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display font-extrabold text-ink">
          <span className="inline-block h-6 w-6 rounded-md bg-primary grid place-items-center">
            <Sparkles className="h-3 w-3 text-ink" />
          </span>
          LTAB<span className="text-primary">.</span>AI
        </div>
        <div>&copy; {new Date().getFullYear()} LTAB AI. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-ink">
            Privacy
          </a>
          <a href="#" className="hover:text-ink">
            Terms
          </a>
          <a
            href="https://wa.me/916000683808"
            className="hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
