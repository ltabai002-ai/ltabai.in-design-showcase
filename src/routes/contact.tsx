import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — LTAB AI Growth Studio" },
      {
        name: "description",
        content:
          "Book a demo or get a free AI audit. See how AI can transform your business with our growth solutions.",
      },
    ],
  }),
  component: ContactPage,
});

const steps = [
  {
    n: "1",
    title: "We Review",
    desc: "Within 24 hours, we'll review your submission and prepare a customized presentation.",
  },
  {
    n: "2",
    title: "We Connect",
    desc: "We'll reach out via your preferred method to schedule a convenient time to talk.",
  },
  {
    n: "3",
    title: "We Deliver",
    desc: "Get your demo or audit results, plus a custom growth plan for your business.",
  },
];

function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-10 right-0 h-[120%] w-[55%] bg-primary clip-tilt opacity-90" />
        </div>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold">Contact</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink max-w-3xl mx-auto leading-tight">
            Let's Talk Growth
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Ready to see how AI can transform your business? Book a demo or get a free audit to get
            started.
          </p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="bg-background rounded-xl p-8 border border-border">
            <h2 className="font-display font-bold text-2xl text-ink">📞 Book a Demo</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              See our AI growth solutions in action with a personalized 15-minute demo.
            </p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium text-ink">Name *</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full h-10 px-3 rounded-md border border-border bg-background text-ink text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-ink">Email *</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full h-10 px-3 rounded-md border border-border bg-background text-ink text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-ink">WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  className="mt-1 w-full h-10 px-3 rounded-md border border-border bg-background text-ink text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-ink">Company Name</label>
                <input
                  type="text"
                  className="mt-1 w-full h-10 px-3 rounded-md border border-border bg-background text-ink text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-ink">Website or Instagram Handle</label>
                <input
                  type="text"
                  className="mt-1 w-full h-10 px-3 rounded-md border border-border bg-background text-ink text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-ink">Services Interested In</label>
                <select className="mt-1 w-full h-10 px-3 rounded-md border border-border bg-background text-ink text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="">Select a service</option>
                  <option>AI Videos</option>
                  <option>Social Automation</option>
                  <option>AI Websites</option>
                  <option>AI Ops Tools</option>
                </select>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="email-updates" className="mt-1" />
                <label htmlFor="email-updates" className="text-sm text-muted-foreground">
                  I agree to receive email updates and demo scheduling information *
                </label>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="whatsapp-consent" className="mt-1" />
                <label htmlFor="whatsapp-consent" className="text-sm text-muted-foreground">
                  I agree to receive WhatsApp messages for demo coordination
                </label>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-ink px-6 h-12 rounded-md font-semibold hover:brightness-95"
              >
                Book My Demo <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 border border-border">
              <h2 className="font-display font-bold text-2xl text-ink mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">Email</p>
                    <a
                      href="mailto:contactus@blueantdigitech.com"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      contactus@blueantdigitech.com
                    </a>
                    <p className="text-xs text-muted-foreground">
                      We respond within 4 hours during business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">WhatsApp</p>
                    <a
                      href="https://wa.me/916000683808"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      +91 6000683808
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Quick questions? Message us directly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">Location</p>
                    <p className="text-sm text-muted-foreground">Guwahati, Assam, India</p>
                    <p className="text-xs text-muted-foreground">
                      Serving clients globally with remote-first operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon - Sat: 10:00 AM - 6:00 PM IST
                    </p>
                    <p className="text-xs text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/916000683808"
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 h-14 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink text-center">
            What Happens Next?
          </h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="flex gap-4 items-start p-6 rounded-xl bg-secondary border border-border"
              >
                <div className="shrink-0 h-10 w-10 rounded-md bg-primary text-ink font-display font-extrabold grid place-items-center text-lg">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-lg">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <CheckCircle2 className="h-4 w-4" /> Average response time: 4 hours
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
