import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe } from "lucide-react";

export const Route = createFileRoute("/website-gallery")({
  head: () => ({
    meta: [
      { title: "Website Gallery — LTAB AI Growth Studio" },
      {
        name: "description",
        content:
          "Explore our portfolio of professionally designed AI-powered websites. Fast, secure, and conversion-focused web experiences.",
      },
    ],
  }),
  component: WebsiteGalleryPage,
});

const websites = [
  {
    title: "Business Landing Page",
    desc: "Conversion-focused landing page with lead capture",
    category: "Landing Page",
  },
  {
    title: "Service Provider Site",
    desc: "Multi-page site showcasing services and testimonials",
    category: "Business",
  },
  {
    title: "E-commerce Store",
    desc: "Product catalog with seamless checkout experience",
    category: "E-commerce",
  },
  {
    title: "Portfolio Website",
    desc: "Creative portfolio with project showcase",
    category: "Portfolio",
  },
  {
    title: "Local Business Site",
    desc: "Google-optimized site for local search visibility",
    category: "Local SEO",
  },
  {
    title: "Startup Landing",
    desc: "Modern landing page for product launches",
    category: "Startup",
  },
];

function WebsiteGalleryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-10 right-0 h-[120%] w-[55%] bg-primary clip-tilt opacity-90" />
        </div>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold">Portfolio</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink">Website Gallery</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of professionally designed websites built with AI-powered
            solutions. Each project showcases our expertise in creating fast, secure, and
            conversion-focused web experiences.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map((site) => (
              <div
                key={site.title}
                className="group rounded-xl overflow-hidden border border-border bg-background hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-secondary flex items-center justify-center border-b border-border">
                  <Globe className="h-16 w-16 text-primary opacity-40" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                    {site.category}
                  </span>
                  <h3 className="mt-1 font-display font-bold text-ink text-lg">{site.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{site.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
            Want a website like these?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Let's build something amazing for your business. Our team specializes in creating fast,
            secure, and conversion-focused websites powered by AI.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-ink text-on-ink px-6 h-12 rounded-md font-semibold hover:bg-ink/90"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services/ai-websites"
              className="inline-flex items-center gap-2 bg-background text-ink border border-ink/20 px-6 h-12 rounded-md font-semibold hover:border-ink"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
