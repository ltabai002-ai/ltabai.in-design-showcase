import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Video, Share2, Globe, Cpu } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — LTAB AI Growth Studio" },
      {
        name: "description",
        content:
          "AI Video Ads, Social Media Automation, AI Powered Websites and Custom AI Software — complete AI growth solutions.",
      },
    ],
  }),
  component: ServicesPage,
});

const serviceList = [
  {
    icon: Video,
    title: "AI Video Ads",
    desc: "No shoots. No delays. On-brand video ads in days.",
    fullDesc:
      "Get scripted, produced AI avatar videos and ad creatives delivered weekly. Perfect for social media, ads, and content marketing.",
    to: "/services/ai-videos",
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    desc: "Auto-posting, trend mining, smart replies, inbox zero.",
    fullDesc:
      "Put your entire social media presence on autopilot with smart scheduling, trend mining, and AI-powered customer replies.",
    to: "/services/social-automation",
  },
  {
    icon: Globe,
    title: "AI Powered Websites",
    desc: "Fast, secure, Google-ready sites that turn searches into leads.",
    fullDesc:
      "Professional websites optimized for local search, lead generation, and conversions. Get found on Google and turn visitors into customers.",
    to: "/services/ai-websites",
  },
  {
    icon: Cpu,
    title: "Custom AI Powered Software",
    desc: "Workflows, dashboards, and internal mini-apps.",
    fullDesc:
      "Custom automation workflows and tools that streamline your operations, from lead routing to data management and reporting.",
    to: "/services/ai-ops",
  },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-10 right-0 h-[120%] w-[55%] bg-primary clip-tilt opacity-90" />
        </div>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold">Our Services</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink max-w-3xl mx-auto leading-tight">
            Content created. Social handled. Ops automated.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Choose the AI growth solution that fits your needs, or combine them for maximum impact.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-ink text-on-ink px-6 h-12 rounded-md font-semibold hover:bg-ink/90"
          >
            Get Started Today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceList.map((s) => (
            <div
              key={s.title}
              className="group bg-ink text-on-ink rounded-xl p-6 border-b-4 border-ink hover:border-primary transition-colors"
            >
              <div className="h-12 w-12 rounded-md bg-primary text-ink grid place-items-center mb-6">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-xl">{s.title}</h3>
              <p className="mt-2 text-on-ink/70 text-sm">{s.fullDesc}</p>
              <Link
                to={s.to}
                className="mt-6 inline-flex items-center gap-1 text-primary font-semibold text-sm"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-6">
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <h3 className="font-display font-bold text-ink text-lg">Will it look robotic?</h3>
              <p className="mt-2 text-muted-foreground">
                No. Our AI avatars are trained on real people and our content follows proven
                frameworks. Everything is reviewed by humans before going live.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <h3 className="font-display font-bold text-ink text-lg">Brand safety?</h3>
              <p className="mt-2 text-muted-foreground">
                All content is pre-approved by you, follows platform guidelines, and includes human
                oversight. We never post automatically without your approval process.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <h3 className="font-display font-bold text-ink text-lg">Maintenance?</h3>
              <p className="mt-2 text-muted-foreground">
                We handle all updates, monitoring, and optimizations. You focus on your business
                while we keep everything running smoothly.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">Have more questions?</p>
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center gap-2 bg-primary text-ink px-6 h-12 rounded-md font-semibold"
            >
              Let's Talk <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
