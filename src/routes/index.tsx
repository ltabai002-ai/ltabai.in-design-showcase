import { createFileRoute } from "@tanstack/react-router";
import heroPerson from "@/assets/hero-person.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import whyChoose from "@/assets/why-choose.jpg";
import {
  ArrowRight,
  Sparkles,
  Video,
  Share2,
  Globe,
  Cpu,
  CheckCircle2,
  Play,
  Sun,
  Menu,
  Search,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LTAB AI — Wake up. Your business is already live." },
      {
        name: "description",
        content:
          "AI avatar videos, social media automation, AI-powered websites and custom AI software that runs your operations.",
      },
      { property: "og:title", content: "LTAB AI — AI Growth Studio" },
      {
        property: "og:description",
        content:
          "We create AI avatar videos, automate social posting & replies, and build AI tools that run your operations.",
      },
    ],
  }),
  component: Index,
});

const nav = ["Home", "Services", "AI Gallery", "Websites", "About", "Contact"];

const stats = [
  { value: "3×", label: "Content output" },
  { value: "−60%", label: "Response time" },
  { value: "+45%", label: "Qualified leads" },
];

const steps = [
  { n: "01", title: "Make", desc: "We script & produce AI avatar videos and ad creatives." },
  { n: "02", title: "Move", desc: "We schedule & auto-post, reply to customers, and track performance." },
  { n: "03", title: "Manage", desc: "We build AI tools to organize data, automate tasks, and keep ops smooth." },
];

const services = [
  { icon: Video, title: "AI Video Ads", desc: "No shoots. No delays. On-brand video ads in days." },
  { icon: Share2, title: "Social Automation", desc: "Auto-posting, trend mining, smart replies, inbox zero." },
  { icon: Globe, title: "AI Powered Websites", desc: "Fast, secure, Google-ready sites that turn searches into leads." },
  { icon: Cpu, title: "Custom AI Software", desc: "Workflows, dashboards, and internal mini-apps." },
];

const benefits = [
  { title: "More Qualified Leads", desc: "AI-powered content and smart automation bring the right customers to your door." },
  { title: "Faster Replies, Happier Customers", desc: "Instant responses and smart routing mean no customer waits, no leads slip through." },
  { title: "Lower Content Costs", desc: "AI avatars and automated workflows deliver professional content at a fraction of the cost." },
  { title: "Clear Dashboards", desc: "Real-time data and automated reports show exactly what's working and what isn't." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-display font-extrabold text-xl">
            <span className="inline-block h-8 w-8 rounded-md bg-primary grid place-items-center text-ink">
              <Sparkles className="h-4 w-4" />
            </span>
            LTAB<span className="text-primary">.</span>AI
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {nav.map((n) => (
              <a key={n} href="#" className="hover:text-primary transition-colors">
                {n}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden md:grid place-items-center h-9 w-9 rounded-full border border-border hover:border-primary">
              <Search className="h-4 w-4" />
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-ink px-4 h-9 rounded-md font-semibold text-sm hover:brightness-95"
            >
              Book a Demo <ArrowRight className="h-4 w-4" />
            </a>
            <button className="md:hidden grid place-items-center h-9 w-9 rounded-md border border-border">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-10 left-0 h-[120%] w-[55%] bg-primary clip-tilt opacity-90" />
          <div className="absolute top-10 right-10 h-40 w-40 diagonal-stripe opacity-20 rounded-full" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-ink/70 bg-background/60 px-3 py-1 rounded-full mb-6">
              <Sun className="h-3 w-3" /> AI Growth Studio
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] text-ink">
              Wake up. Your <br />
              business is <span className="underline decoration-ink decoration-4 underline-offset-4">already live.</span>
            </h1>
            <p className="mt-6 text-ink/80 max-w-md text-base leading-relaxed">
              We create your videos with AI avatars, automate social posting & replies, and build AI
              tools that run your operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-ink text-on-ink px-6 h-12 rounded-md font-semibold hover:bg-ink/90"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 bg-background text-ink border border-ink/20 px-6 h-12 rounded-md font-semibold hover:border-ink"
              >
                <Play className="h-4 w-4" /> Watch how it works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-ink rounded-2xl -rotate-2" />
            <img
              src={heroPerson}
              alt="AI Growth Studio"
              width={1024}
              height={1024}
              className="relative rounded-2xl shadow-2xl object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-xl hidden sm:block">
              <div className="text-xs text-muted-foreground">Avg. delivery</div>
              <div className="font-display font-bold text-2xl text-ink">3 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST + STATS BAND */}
      <section className="bg-ink text-on-ink">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-center text-on-ink/60 text-xs tracking-[0.3em] uppercase">
            Worked with leading brands
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-on-ink/80 font-display font-bold text-xl">
            <span>TVS Motor</span>
            <span className="opacity-40">•</span>
            <span>TATA Motors</span>
            <span className="opacity-40">•</span>
            <span>German Motors</span>
            <span className="opacity-40">•</span>
            <span>Yamaha</span>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-background text-ink rounded-xl p-6 text-center border-b-4 border-primary">
                <div className="font-display font-extrabold text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={teamMeeting}
              alt="Team collaborating"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-2xl object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 bg-ink text-on-ink rounded-full h-24 w-24 grid place-items-center font-display font-bold text-sm text-center leading-tight shadow-xl">
              Trusted<br />Process
            </div>
            <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-primary grid place-items-center">
              <Sparkles className="h-7 w-7 text-ink" />
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold">How it works</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-ink">
              Three simple steps to automated growth
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              From scripting to scheduling to scaling — we handle the entire pipeline so you can
              focus on what matters: your business.
            </p>
            <div className="mt-10 space-y-6">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5 items-start">
                  <div className="shrink-0 h-12 w-12 rounded-md bg-primary text-ink font-display font-extrabold grid place-items-center">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-ink">{s.title}</h3>
                    <p className="text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#services"
              className="mt-10 inline-flex items-center gap-2 bg-primary text-ink px-6 h-12 rounded-md font-semibold"
            >
              See the full process <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold">Our Services</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-ink">
              Services we're providing to our customers
            </h2>
            <p className="mt-4 text-muted-foreground">
              Complete AI-powered growth solutions designed to make your brand always-on.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-ink text-on-ink rounded-xl p-6 border-b-4 border-ink hover:border-primary transition-colors"
              >
                <div className="h-12 w-12 rounded-md bg-primary text-ink grid place-items-center mb-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-xl">{s.title}</h3>
                <p className="mt-2 text-on-ink/70 text-sm">{s.desc}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src={whyChoose}
              alt="Customers using AI tools"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-2xl object-cover aspect-[5/4]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-ink/10" />
            <div className="absolute -right-4 -bottom-4 h-24 w-24 diagonal-stripe rounded-md opacity-80" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold">Why choose us</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-ink">
              Why you should choose our AI technology
            </h2>
            <p className="mt-4 text-muted-foreground">
              We don't just deliver content — we install a growth engine that compounds while you sleep.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="p-5 rounded-xl bg-secondary border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 font-display font-bold text-ink">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden bg-ink text-on-ink">
        <div className="absolute inset-0 -z-0">
          <div className="absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -top-20 -right-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold">Let's talk</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Show me how AI fits my business.
          </h2>
          <p className="mt-4 text-on-ink/70 max-w-xl mx-auto">
            No hard pitch — we map what to automate first, then show you the highest-leverage moves.
          </p>
          <a
            href="https://wa.me/916000683808"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-ink px-8 h-14 rounded-md font-semibold text-lg"
          >
            Book a Demo <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-extrabold text-ink">
            <span className="inline-block h-6 w-6 rounded-md bg-primary grid place-items-center">
              <Sparkles className="h-3 w-3 text-ink" />
            </span>
            LTAB<span className="text-primary">.</span>AI
          </div>
          <div>© {new Date().getFullYear()} LTAB AI. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="https://wa.me/916000683808" className="hover:text-ink">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
