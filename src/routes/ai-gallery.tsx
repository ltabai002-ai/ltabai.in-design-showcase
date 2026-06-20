import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/ai-gallery")({
  head: () => ({
    meta: [
      { title: "AI Gallery — LTAB AI Growth Studio" },
      {
        name: "description",
        content:
          "Explore our portfolio of AI-generated content including avatar videos, social media creatives, and more.",
      },
    ],
  }),
  component: AiGalleryPage,
});

const galleryItems = [
  {
    title: "AI Avatar Video",
    desc: "Professional spokesperson videos generated with AI avatars",
    color: "bg-primary",
  },
  {
    title: "Social Media Creative",
    desc: "Platform-optimized ad creatives and organic content",
    color: "bg-ink",
  },
  {
    title: "Product Demo",
    desc: "AI-narrated product demonstrations and explainers",
    color: "bg-primary",
  },
  {
    title: "Brand Story",
    desc: "Compelling brand narratives delivered by AI avatars",
    color: "bg-ink",
  },
  {
    title: "Ad Campaign",
    desc: "Multi-format ad campaigns for various platforms",
    color: "bg-primary",
  },
  {
    title: "Content Series",
    desc: "Weekly content series with consistent branding",
    color: "bg-ink",
  },
];

function AiGalleryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-10 left-0 h-[120%] w-[55%] bg-primary clip-tilt opacity-90" />
        </div>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-bold">Portfolio</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink">AI Content Gallery</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Check out our AI-generated content — from avatar videos to social media creatives.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-xl overflow-hidden border border-border bg-background hover:shadow-lg transition-shadow"
              >
                <div className="h-48 flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-primary opacity-40" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-ink text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Want content like this for your brand?
          </h2>
          <p className="mt-4 text-on-ink/70">
            Let's create AI-powered content that drives results.
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
