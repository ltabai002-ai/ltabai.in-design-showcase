import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, CheckCircle2, Target, Users, Shield, BookOpen } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — LTAB AI Growth Studio" },
      {
        name: "description",
        content:
          "Based in Guwahati, Assam, we help businesses worldwide harness the power of AI to automate growth and scale efficiently.",
      },
    ],
  }),
  component: AboutPage,
});

const story = [
  {
    emoji: "🚀",
    title: "The Beginning",
    desc: "Started in Guwahati with a simple vision: help local businesses compete in the digital age using AI technology.",
  },
  {
    emoji: "📈",
    title: "Growth Phase",
    desc: "Expanded our services to include AI videos, social automation, and custom AI tools, serving clients across India.",
  },
  {
    emoji: "🌍",
    title: "Today",
    desc: "Now serving businesses globally with comprehensive AI-powered growth solutions and measurable results.",
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "We measure success by your success. Every solution is designed to deliver tangible business outcomes.",
  },
  {
    icon: Users,
    title: "Human-Centered AI",
    desc: "AI should enhance human capabilities, not replace them. Our solutions always include human oversight.",
  },
  {
    icon: Shield,
    title: "Data Security",
    desc: "Your business data is sacred. We implement enterprise-grade security measures and strict data protection.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "AI technology evolves rapidly. We stay at the forefront of innovation to bring you the most effective solutions.",
  },
];

const whyChoose = [
  "3× content output, −60% response time, +45% qualified leads across our client base",
  "No cookie-cutter approaches — every solution is tailored to your specific business needs",
  "Direct access to our team with priority support and regular strategy sessions",
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-10 left-0 h-[120%] w-[55%] bg-primary clip-tilt opacity-90" />
        </div>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold">About Us</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink max-w-4xl mx-auto leading-tight">
            We're building the future of business growth
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Based in Guwahati, Assam, we help businesses worldwide harness the power of AI to
            automate growth and scale efficiently.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              We believe every business deserves access to cutting-edge AI technology, regardless of
              size or technical expertise. Our mission is to democratize AI-powered growth solutions
              and make them accessible to businesses across India and beyond.
            </p>
            <p className="mt-4 text-muted-foreground">
              We're not just another agency. We're your AI growth partners, committed to delivering
              measurable results through innovative automation, intelligent content creation, and
              smart operational tools.
            </p>
          </div>
          <div className="bg-ink text-on-ink rounded-xl p-8">
            <h3 className="font-display font-bold text-xl">What Drives Us</h3>
            <ul className="mt-4 space-y-3 text-on-ink/70">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Innovation: We
                stay ahead of AI trends
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Results: Every
                solution delivers measurable outcomes
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Accessibility:
                Enterprise-level AI for all businesses
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Partnership: We
                succeed when you succeed
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Our Story</h2>
            <p className="text-muted-foreground mt-2">From local startup to AI growth partner</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {story.map((s) => (
              <div key={s.title} className="p-6 rounded-xl bg-secondary border border-border">
                <div className="text-3xl">{s.emoji}</div>
                <h3 className="mt-3 font-display font-bold text-ink text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Our Values</h2>
            <p className="text-muted-foreground mt-2">The principles that guide everything we do</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-ink text-on-ink rounded-xl p-6 border-b-4 border-ink hover:border-primary transition-colors"
              >
                <div className="h-10 w-10 rounded-md bg-primary text-ink grid place-items-center mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg">{v.title}</h3>
                <p className="mt-2 text-on-ink/70 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Why Choose Us</h2>
            <p className="text-muted-foreground mt-2">
              What makes us different from other AI agencies
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-xl bg-secondary border border-border"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
          <div className="p-6 rounded-xl bg-background border border-border">
            <h3 className="font-display font-bold text-ink text-lg">📍 Our Headquarters</h3>
            <p className="mt-2 text-muted-foreground">Guwahati, Assam, India</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Located in the heart of Northeast India, we're strategically positioned to serve
              businesses across the region while maintaining global connectivity.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              🌐 While we're rooted in Assam, our AI-powered solutions serve clients worldwide.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border">
            <h3 className="font-display font-bold text-ink text-lg">🕒 Business Hours</h3>
            <p className="mt-2 text-muted-foreground">Monday - Saturday: 10:00 AM - 6:00 PM IST</p>
            <p className="text-muted-foreground">Sunday: Closed</p>
            <p className="mt-4 font-semibold text-ink">📞 Get in Touch</p>
            <p className="text-muted-foreground">Email: contactus@blueantdigitech.com</p>
            <p className="text-muted-foreground">WhatsApp: +91 6000683808</p>
            <p className="mt-2 text-xs text-muted-foreground">
              We respond to all inquiries within 4 hours during business days.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-on-ink py-20">
        <div className="absolute inset-0 -z-0">
          <div className="absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -top-20 -right-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to grow with AI?</h2>
          <p className="mt-4 text-on-ink/70">
            Let's discuss how our AI-powered solutions can transform your business operations and
            drive real results.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-ink px-6 h-12 rounded-md font-semibold"
            >
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-transparent text-on-ink border border-on-ink/30 px-6 h-12 rounded-md font-semibold hover:border-on-ink"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
