import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Video, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/ai-videos")({
  head: () => ({
    meta: [
      { title: "AI Video Ads — LTAB AI Growth Studio" },
      {
        name: "description",
        content:
          "Professional AI avatar videos and ad creatives delivered weekly. No shoots, no delays, on-brand video ads in days.",
      },
    ],
  }),
  component: AiVideosPage,
});

const benefits = [
  "No filming equipment or studio needed",
  "Consistent on-brand output every time",
  "Delivered in days, not weeks",
  "Multiple formats for different platforms",
  "Human-reviewed before going live",
];

function AiVideosPage() {
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
              AI Video Ads
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg">
              No shoots. No delays. On-brand video ads in days. Get professional AI avatar videos
              that look and sound like your brand.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-ink text-on-ink px-6 h-12 rounded-md font-semibold hover:bg-ink/90"
            >
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-ink rounded-2xl -rotate-2" />
            <div className="relative h-80 w-full rounded-2xl bg-secondary flex items-center justify-center">
              <Video className="h-16 w-16 text-primary" />
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
            <h3 className="font-display font-bold text-xl">Perfect for</h3>
            <ul className="mt-4 space-y-3 text-on-ink/70">
              <li>• Social media ads and organic content</li>
              <li>• Product demos and explainers</li>
              <li>• Brand storytelling at scale</li>
              <li>• Consistent weekly content calendars</li>
              <li>• Multi-language content creation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-on-ink py-20">
        <div className="absolute inset-0 -z-0">
          <div className="absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to scale your video content?
          </h2>
          <p className="mt-4 text-on-ink/70">
            Get started with a free consultation and see how AI avatars can work for your brand.
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
