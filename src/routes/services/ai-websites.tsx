import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/ai-websites")({
  head: () => ({
    meta: [
      { title: "AI Powered Websites — LTAB AI Growth Studio" },
      {
        name: "description",
        content:
          "Fast, secure, Google-ready websites that turn searches into leads. AI-powered web development for your business.",
      },
    ],
  }),
  component: AiWebsitesPage,
});

const benefits = [
  "Google-optimized from day one",
  "Lightning-fast load speeds",
  "Mobile-first responsive design",
  "Built-in lead capture forms",
  "Easy content updates",
  "SSL security included",
];

function AiWebsitesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-10 left-0 h-[120%] w-[55%] bg-primary clip-tilt opacity-90" />
        </div>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold">Service</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              AI Powered Websites
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Fast, secure, Google-ready sites that turn searches into leads. Professional websites
              optimized for conversions.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-ink text-on-ink px-6 h-12 rounded-md font-semibold hover:bg-ink/90"
            >
              Get a Website <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-ink rounded-2xl -rotate-2" />
            <div className="relative h-80 w-full rounded-2xl bg-secondary flex items-center justify-center">
              <Globe className="h-16 w-16 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">What you get</h2>
            <ul className="mt-6 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink text-on-ink rounded-xl p-8">
            <h3 className="font-display font-bold text-xl">Ideal for</h3>
            <ul className="mt-4 space-y-3 text-on-ink/70">
              <li>• Local businesses and startups</li>
              <li>• Service providers and consultants</li>
              <li>• E-commerce and portfolio sites</li>
              <li>• Landing pages and funnels</li>
              <li>• Multi-page business websites</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink">See our work</h2>
          <p className="mt-4 text-muted-foreground">
            Check out our portfolio of websites we've built for businesses like yours.
          </p>
          <Link
            to="/website-gallery"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-ink px-6 h-12 rounded-md font-semibold"
          >
            View Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-on-ink py-20">
        <div className="absolute inset-0 -z-0">
          <div className="absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready for a website that works for you?
          </h2>
          <p className="mt-4 text-on-ink/70">
            Get a Google-ready site that turns visitors into customers.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-ink px-8 h-14 rounded-md font-semibold text-lg"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
