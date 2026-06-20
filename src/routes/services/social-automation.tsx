import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Share2, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/social-automation")({
  head: () => ({
    meta: [
      { title: "Social Media Automation — LTAB AI Growth Studio" },
      {
        name: "description",
        content:
          "Auto-posting, trend mining, smart replies, and inbox zero. Put your entire social media on autopilot with AI.",
      },
    ],
  }),
  component: SocialAutomationPage,
});

const benefits = [
  "Smart scheduling across all major platforms",
  "AI-powered trend mining and content ideas",
  "Automated customer replies with human oversight",
  "Inbox zero with smart routing",
  "Performance tracking and weekly reports",
];

function SocialAutomationPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-10 right-0 h-[120%] w-[55%] bg-primary clip-tilt opacity-90" />
        </div>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold">Service</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              Social Media Automation
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Auto-posting, trend mining, smart replies, inbox zero. Put your entire social media
              presence on autopilot.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-ink text-on-ink px-6 h-12 rounded-md font-semibold hover:bg-ink/90"
            >
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-ink rounded-2xl rotate-2" />
            <div className="relative h-80 w-full rounded-2xl bg-secondary flex items-center justify-center">
              <Share2 className="h-16 w-16 text-primary" />
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
            <h3 className="font-display font-bold text-xl">Platforms we cover</h3>
            <ul className="mt-4 space-y-3 text-on-ink/70">
              <li>• Instagram & Facebook</li>
              <li>• LinkedIn</li>
              <li>• Twitter / X</li>
              <li>• YouTube</li>
              <li>• WhatsApp Business</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-on-ink py-20">
        <div className="absolute inset-0 -z-0">
          <div className="absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to automate your social media?
          </h2>
          <p className="mt-4 text-on-ink/70">
            Let us handle your social presence while you focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-ink px-8 h-14 rounded-md font-semibold text-lg"
          >
            Book a Demo <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
