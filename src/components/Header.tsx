import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Search, Sparkles } from "lucide-react";

const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "AI Gallery", to: "/ai-gallery" },
  { label: "Websites", to: "/website-gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-xl">
          <span className="inline-block h-8 w-8 rounded-md bg-primary grid place-items-center text-ink">
            <Sparkles className="h-4 w-4" />
          </span>
          LTAB<span className="text-primary">.</span>AI
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-primary transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:grid place-items-center h-9 w-9 rounded-full border border-border hover:border-primary">
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-ink px-4 h-9 rounded-md font-semibold text-sm hover:brightness-95"
          >
            Book a Demo <ArrowRight className="h-4 w-4" />
          </Link>
          <button className="md:hidden grid place-items-center h-9 w-9 rounded-md border border-border">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
