import { useRef, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
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
  Star,
  Zap,
  BarChart3,
  MessageCircle,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Layers,
  ChevronRight,
  Newspaper,
  Calendar,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "LTAB — AI Growth Studio. Wake up. Your business is already live.",
      },
      {
        name: "description",
        content:
          "AI avatar videos, social media automation, AI-powered websites and custom AI software that runs your operations.",
      },
      { property: "og:title", content: "LTAB — AI Growth Studio" },
      {
        property: "og:description",
        content:
          "We create AI avatar videos, automate social posting & replies, and build AI tools that run your operations.",
      },
    ],
  }),
  component: Index,
});

/* ─── Animation helpers ─── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerFade({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.12 } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
      <Sparkles className="h-3 w-3" />
      {children}
    </span>
  );
}

/* ─── Data ─── */
const services = [
  {
    icon: Video,
    title: "AI Video Ads",
    desc: "No shoots. No delays. On-brand AI avatar video ads delivered in days, not weeks.",
    features: ["AI avatar spokespersons", "Multi-language support", "Weekly content cadence"],
    to: "/services/ai-videos",
  },
  {
    icon: Share2,
    title: "Social Automation",
    desc: "Auto-posting, trend mining, smart replies — your entire social presence on autopilot.",
    features: ["Cross-platform scheduling", "AI-powered replies", "Performance analytics"],
    to: "/services/social-automation",
  },
  {
    icon: Globe,
    title: "AI Websites",
    desc: "Fast, secure, Google-optimized sites engineered to turn searches into booked calls.",
    features: ["SEO-first architecture", "Lead capture built-in", "Lightning-fast load"],
    to: "/services/ai-websites",
  },
  {
    icon: Cpu,
    title: "Custom AI Ops",
    desc: "Workflows, dashboards, and internal tools that streamline every operation.",
    features: ["Lead routing automation", "Real-time dashboards", "Legacy integrations"],
    to: "/services/ai-ops",
  },
];

const process = [
  {
    step: "01",
    title: "Audit & Strategy",
    desc: "We map your current funnel, identify the highest-leverage automation points, and build a custom roadmap.",
  },
  {
    step: "02",
    title: "Create & Configure",
    desc: "Our team builds your AI assets — avatar videos, automations, dashboards — and integrates them into your stack.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    desc: "We go live, monitor performance, and continuously optimize based on real data and conversions.",
  },
];

const stats = [
  { value: "3×", label: "Content output", icon: Zap },
  { value: "-60%", label: "Response time", icon: Clock },
  { value: "+45%", label: "Qualified leads", icon: TrendingUp },
];

const benefits = [
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Direct access to your growth strategist, content team, and technical lead.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    desc: "Real-time dashboard showing every metric that matters to your bottom line.",
  },
  {
    icon: Shield,
    title: "Brand-Safe AI",
    desc: "Human-in-the-loop oversight. Every piece of content is reviewed before going live.",
  },
  {
    icon: Layers,
    title: "Scalable Systems",
    desc: "From 1 channel to 10 — our infrastructure grows with your business.",
  },
];

const brands = ["TVS Motor", "TATA Motors", "German Motors", "Yamaha", "Royal Enfield", "Honda"];

const blogPosts = [
  {
    date: "Jun 15, 2026",
    tag: "AI Video",
    title: "How AI Avatars Are Transforming Video Production for Small Businesses",
    excerpt: "Learn how AI avatar technology is making professional video content accessible to businesses of all sizes — no studio, no actors, no expensive equipment required.",
    slug: "ai-avatars-transforming-video-production",
    author: "LTAB Team",
    readTime: "5 min read",
  },
  {
    date: "May 28, 2026",
    tag: "Social Media",
    title: "The Complete Guide to Social Media Automation in 2026",
    excerpt: "From scheduling to AI-powered replies, discover how automation can cut your social media workload by 60% while boosting engagement.",
    slug: "complete-guide-social-media-automation-2026",
    author: "LTAB Team",
    readTime: "8 min read",
  },
  {
    date: "May 10, 2026",
    tag: "Websites",
    title: "Why Your Business Needs an AI-Powered Website (Not Just a Static One)",
    excerpt: "Static websites are a thing of the past. See how AI-powered sites adapt to visitors, capture leads automatically, and drive conversions while you sleep.",
    slug: "why-your-business-needs-ai-powered-website",
    author: "LTAB Team",
    readTime: "6 min read",
  },
];

const testimonials = [
  {
    quote:
      "LTAB transformed our content pipeline. We went from struggling to post weekly to publishing daily — with better engagement.",
    name: "— Operations Head",
    company: "Leading Automotive Group",
  },
  {
    quote:
      "The AI avatar videos look incredibly natural. Our customers can't tell the difference. Cost savings have been massive.",
    name: "— Marketing Director",
    company: "Premium Dealership Network",
  },
];

function Index() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-glow pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left content */}
            <div className="relative z-10 pt-12 lg:pt-0">
              <FadeUp>
                <SectionTag>AI Growth Studio</SectionTag>
              </FadeUp>

              <FadeUp delay={0.15}>
                <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-ink">
                  Wake up. Your&nbsp;business is{" "}
                  <span className="text-gradient">already live.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.3}>
                <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
                  We create your videos with AI avatars, automate social posting & replies, and
                  build AI tools that run your operations — so you wake up to growth, not chaos.
                </p>
              </FadeUp>

              <FadeUp delay={0.45}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-2 bg-ink text-on-ink px-8 h-14 rounded-full font-semibold text-base hover:bg-ink/90 transition-all shadow-premium-lg"
                  >
                    Book a Free Demo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="#how"
                    className="inline-flex items-center gap-2.5 bg-white text-ink border border-[#e5e1d9] px-8 h-14 rounded-full font-semibold text-base shadow-premium hover:shadow-premium-lg hover:border-primary/30 transition-all"
                  >
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                      <Play className="h-3.5 w-3.5 fill-primary" />
                    </span>
                    Watch how it works
                  </a>
                </div>
              </FadeUp>

              {/* Trust indicators */}
              <FadeUp delay={0.6}>
                <div className="mt-12 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-[#e5e1d9] border-2 border-white flex items-center justify-center text-[10px] font-bold text-muted-foreground"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                    <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary">
                      +
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-ink">50+</span> businesses trust us
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right visual */}
            <div className="relative">
              <FadeUp delay={0.2}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-[32px] blur-sm" />
                  <div className="relative rounded-[24px] overflow-hidden shadow-premium-xl">
                    <img
                      src={heroPerson}
                      alt="LTAB AI Growth Studio"
                      width={800}
                      height={800}
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Floating stat card 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-premium-lg border border-white/40 min-w-[160px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-ink">3 days</div>
                        <div className="text-xs text-muted-foreground">Avg. delivery time</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating stat card 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.0,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-premium-lg border border-white/40 min-w-[160px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-ink">4.9★</div>
                        <div className="text-xs text-muted-foreground">Client satisfaction</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── TRUST BAR ─────────── */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 gradient-section pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp>
            <p className="text-center text-muted-foreground text-xs tracking-[0.2em] uppercase font-semibold">
              Trusted by leading brands
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-4">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-muted-foreground/60 font-display font-bold text-xl md:text-2xl hover:text-ink/40 transition-colors duration-300"
                >
                  {brand}
                </span>
              ))}
            </div>
          </FadeUp>

          <StaggerFade className="mt-14 grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="relative bg-white rounded-2xl p-6 text-center shadow-card border border-[#f0ede6] hover:shadow-premium-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="font-display font-extrabold text-3xl md:text-4xl text-ink">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerFade>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-section-alt pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp className="text-center max-w-2xl mx-auto">
            <SectionTag>What We Build</SectionTag>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              Services that compound your growth
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Four integrated solutions designed to work together and multiply your results.
            </p>
          </FadeUp>

          <StaggerFade className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Link
                  to={s.to}
                  className="group relative block h-full bg-white rounded-3xl p-7 shadow-card hover:shadow-premium-xl transition-all duration-500 border border-[#f0ede6] hover:border-primary/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                      <s.icon className="h-7 w-7 text-primary" />
                    </div>

                    <h3 className="font-display font-bold text-xl text-ink group-hover:text-primary transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed flex-1">
                      {s.desc}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-[#f0ede6] flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-300">
                      Explore <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerFade>
        </div>
      </section>

      {/* ─────────── HOW IT WORKS ─────────── */}
      <section id="how" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-section pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left - Image */}
            <FadeUp>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-[32px] blur-md" />
                <div className="relative rounded-[24px] overflow-hidden shadow-premium-xl">
                  <img
                    src={teamMeeting}
                    alt="LTAB team process"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-premium-lg border border-white/40 float">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-ink">Trusted</span>
                      <span className="text-muted-foreground"> Process</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right - Content */}
            <div>
              <FadeUp>
                <SectionTag>How We Work</SectionTag>
              </FadeUp>

              <FadeUp delay={0.15}>
                <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink leading-tight">
                  Three steps to <span className="text-gradient">automated growth.</span>
                </h2>
              </FadeUp>

              <FadeUp delay={0.3}>
                <p className="mt-4 text-muted-foreground max-w-lg">
                  From strategy to execution to optimization — we build and manage the entire
                  pipeline so you can focus on running your business.
                </p>
              </FadeUp>

              <div className="mt-12 space-y-8">
                {process.map((p, i) => (
                  <FadeUp key={p.step} delay={0.35 + i * 0.15}>
                    <div className="flex gap-5 items-start group">
                      <div className="shrink-0 relative">
                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center font-display font-extrabold text-lg text-primary group-hover:bg-primary/20 transition-colors duration-300">
                          {p.step}
                        </div>
                        {i < process.length - 1 && (
                          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-px h-10 bg-[#e5e1d9]" />
                        )}
                      </div>
                      <div className="pt-2">
                        <h3 className="font-display font-bold text-xl text-ink">{p.title}</h3>
                        <p className="mt-1.5 text-muted-foreground">{p.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.8}>
                <Link
                  to="/services"
                  className="mt-10 inline-flex items-center gap-2 bg-ink text-on-ink px-7 h-13 rounded-full font-semibold hover:bg-ink/90 transition-all shadow-premium-lg group"
                >
                  Explore our services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── WHY CHOOSE ─────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-ink pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left - Image */}
            <FadeUp className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-[32px] blur-md" />
                <div className="relative rounded-[24px] overflow-hidden shadow-premium-xl">
                  <img
                    src={whyChoose}
                    alt="Why choose LTAB"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full aspect-[5/4] object-cover"
                  />
                  <div className="absolute inset-0 rounded-[24px] ring-1 ring-white/10" />
                </div>
              </div>
            </FadeUp>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <FadeUp>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                  <Sparkles className="h-3 w-3" />
                  Why Choose Us
                </span>
              </FadeUp>

              <FadeUp delay={0.15}>
                <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-on-ink leading-tight">
                  The LTAB <span className="text-gradient">advantage.</span>
                </h2>
              </FadeUp>

              <FadeUp delay={0.3}>
                <p className="mt-4 text-on-ink/60 max-w-lg">
                  We don't just deliver content — we install a growth engine that compounds while
                  you sleep.
                </p>
              </FadeUp>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <FadeUp key={b.title} delay={0.35 + i * 0.1}>
                    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                        <b.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-on-ink">{b.title}</h3>
                      <p className="mt-1.5 text-sm text-on-ink/50">{b.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-section pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp className="text-center max-w-xl mx-auto">
            <SectionTag>Testimonials</SectionTag>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              Trusted by industry leaders
            </h2>
          </FadeUp>

          <StaggerFade className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="relative bg-white rounded-3xl p-8 shadow-card border border-[#f0ede6]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-ink/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 pt-4 border-t border-[#f0ede6]">
                    <p className="font-semibold text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerFade>
        </div>
      </section>

      {/* ─────────── BLOG / PRESS RELEASE ─────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-section-alt pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp className="text-center max-w-xl mx-auto">
            <SectionTag>Press Release</SectionTag>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              Latest from LTAB
            </h2>
            <p className="mt-4 text-muted-foreground">
              Insights, guides, and announcements from our team.
            </p>
          </FadeUp>

          <StaggerFade className="mt-14 grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  to="/blog"
                  className="group block h-full bg-white rounded-3xl p-6 shadow-card hover:shadow-premium-xl transition-all duration-500 border border-[#f0ede6] hover:border-primary/20"
                >
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#e5e1d9]" />
                    <span>{post.readTime}</span>
                  </div>

                  <span className="inline-block text-[10px] font-semibold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
                    {post.tag}
                  </span>

                  <h3 className="font-display font-bold text-lg text-ink group-hover:text-primary transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#f0ede6] flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-300">
                    Read More <ChevronRight className="h-4 w-4" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerFade>

          <FadeUp delay={0.5} className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-ink text-on-ink px-7 h-13 rounded-full font-semibold hover:bg-ink/90 transition-all shadow-premium-lg group"
            >
              View all articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-ink pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-80 bg-primary/15 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              <MessageCircle className="h-3 w-3" />
              Let's Talk Growth
            </span>
          </FadeUp>

          <FadeUp delay={0.15}>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-ink leading-tight text-glow">
              Show me how AI
              <br />
              <span className="text-gradient">fits my business.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mt-4 text-on-ink/60 max-w-lg mx-auto">
              No hard pitch — we map what to automate first, then show you the highest-leverage
              moves for your specific business.
            </p>
          </FadeUp>

          <FadeUp delay={0.45}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/916000683808"
                className="group relative inline-flex items-center gap-2 bg-primary text-ink px-10 h-15 rounded-full font-bold text-lg hover:brightness-95 transition-all glow-orange"
              >
                Book a Free Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-on-ink backdrop-blur-sm border border-white/20 px-8 h-15 rounded-full font-semibold text-base hover:bg-white/15 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Talk to us
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <p className="mt-8 text-xs text-on-ink/40">
              Free 15-minute consultation. No commitment required.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
