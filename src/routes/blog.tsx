import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, ChevronRight, Sparkles, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Press Release — LTAB AI Growth Studio" },
      {
        name: "description",
        content: "Latest insights, guides, and announcements from the LTAB team on AI video, social automation, AI websites, and custom AI software.",
      },
    ],
  }),
  component: BlogPage,
});

const allPosts = [
  {
    date: "Jun 15, 2026",
    tag: "AI Video",
    title: "How AI Avatars Are Transforming Video Production for Small Businesses",
    excerpt: "Learn how AI avatar technology is making professional video content accessible to businesses of all sizes — no studio, no actors, no expensive equipment required.",
    slug: "ai-avatars-transforming-video-production",
    author: "LTAB Team",
    readTime: "5 min read",
    content: "AI avatar technology has revolutionized the way businesses approach video content. Gone are the days when producing a professional video required a full studio setup, actors, and a significant budget. Today, AI avatars can deliver on-brand video content in days, not weeks.\n\nOur platform uses advanced AI to create realistic avatar spokespeople that can speak multiple languages, maintain consistent branding, and deliver your message with natural expressions and gestures. This technology is particularly transformative for small businesses that need regular video content but lack the resources for traditional production.\n\nKey benefits include: consistent brand representation across all videos, rapid turnaround times, multi-language support for global reach, and significant cost savings compared to traditional video production.",
  },
  {
    date: "May 28, 2026",
    tag: "Social Media",
    title: "The Complete Guide to Social Media Automation in 2026",
    excerpt: "From scheduling to AI-powered replies, discover how automation can cut your social media workload by 60% while boosting engagement.",
    slug: "complete-guide-social-media-automation-2026",
    author: "LTAB Team",
    readTime: "8 min read",
    content: "Social media automation has evolved far beyond simple scheduling. In 2026, AI-powered tools can manage your entire social presence — from content creation to customer engagement — with minimal human intervention.\n\nModern social automation platforms use machine learning to understand your brand voice, identify trending topics in your industry, and generate relevant content suggestions. They can also automate responses to common customer inquiries, ensuring no message goes unanswered.\n\nThe key to successful automation is finding the right balance between efficiency and authenticity. Our approach combines AI efficiency with human oversight to maintain genuine connections with your audience while dramatically reducing the time and effort required.",
  },
  {
    date: "May 10, 2026",
    tag: "Websites",
    title: "Why Your Business Needs an AI-Powered Website (Not Just a Static One)",
    excerpt: "Static websites are a thing of the past. See how AI-powered sites adapt to visitors, capture leads automatically, and drive conversions while you sleep.",
    slug: "why-your-business-needs-ai-powered-website",
    author: "LTAB Team",
    readTime: "6 min read",
    content: "The difference between a static website and an AI-powered one is the difference between a brochure and a salesperson. While static sites simply display information, AI-powered websites actively engage visitors, learn from their behavior, and optimize for conversions in real-time.\n\nModern AI websites can personalize content based on visitor behavior, automatically capture and qualify leads, integrate with your CRM and marketing tools, and continuously optimize for search engines. They're built on modern frameworks that ensure lightning-fast load times and exceptional user experiences.\n\nFor businesses looking to compete in today's digital landscape, an AI-powered website isn't just nice to have — it's essential for turning online visitors into paying customers.",
  },
  {
    date: "Apr 22, 2026",
    tag: "AI Ops",
    title: "Streamlining Operations with Custom AI Software",
    excerpt: "Discover how custom AI tools can automate repetitive tasks, streamline workflows, and free your team to focus on high-impact work.",
    slug: "streamlining-operations-custom-ai-software",
    author: "LTAB Team",
    readTime: "7 min read",
    content: "Every business has repetitive tasks that eat up valuable time and resources. Custom AI software can automate these processes, freeing your team to focus on strategic initiatives that drive growth.\n\nFrom lead routing and follow-up automation to inventory management and reporting, AI-powered tools can transform your operations. The key is building solutions that integrate seamlessly with your existing stack and are tailored to your specific workflows.\n\nOur approach focuses on identifying the highest-leverage automation opportunities first, then building custom solutions that deliver immediate ROI while scaling with your business.",
  },
  {
    date: "Mar 15, 2026",
    tag: "Company",
    title: "LTAB Expands Services to Northeast India Region",
    excerpt: "We're excited to announce our expanded presence in Northeast India, bringing AI-powered growth solutions to businesses across the region.",
    slug: "ltab-expands-northeast-india",
    author: "LTAB Team",
    readTime: "4 min read",
    content: "LTAB is proud to announce the expansion of our services across Northeast India. Based in Guwahati, Assam, we're strategically positioned to serve businesses throughout the region with our comprehensive AI-powered growth solutions.\n\nThis expansion reflects our commitment to making enterprise-level AI technology accessible to businesses of all sizes, regardless of location. From AI video production to social media automation, our services are now available to businesses across Assam, Meghalaya, Nagaland, and beyond.\n\nWe're excited to bring the power of AI to more businesses and look forward to partnering with local entrepreneurs and enterprises to drive growth and innovation.",
  },
  {
    date: "Feb 28, 2026",
    tag: "AI Video",
    title: "5 Ways AI Video Ads Outperform Traditional Video Production",
    excerpt: "From cost savings to speed to consistency, here are five concrete ways AI-generated video ads deliver better results than traditional production.",
    slug: "5-ways-ai-video-ads-outperform-traditional",
    author: "LTAB Team",
    readTime: "6 min read",
    content: "AI video ads are rapidly replacing traditional production for businesses that need consistent, high-quality video content at scale. Here are five ways they deliver superior results:\n\n1. Cost: AI video production costs 60-80% less than traditional production.\n2. Speed: Videos can be produced in days, not weeks.\n3. Consistency: Every video maintains perfect brand consistency.\n4. Scale: Produce dozens of videos in the time it takes to produce one traditionally.\n5. Optimization: AI can test and optimize video variations automatically.\n\nFor businesses that rely on video content for marketing and communication, AI video ads represent the future of cost-effective, scalable content production.",
  },
];

function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-glow pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            <Sparkles className="h-3 w-3" />
            Press Release
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink leading-tight max-w-3xl mx-auto">
            Latest from <span className="text-gradient">LTAB</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Insights, guides, and announcements from our team on AI video, social automation, websites, and more.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <div
                key={post.slug}
                className="group bg-white rounded-3xl p-6 shadow-card hover:shadow-premium-xl transition-all duration-500 border border-[#f0ede6] hover:border-primary/20"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#e5e1d9]" />
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <span className="inline-block text-[10px] font-semibold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
                  {post.tag}
                </span>

                <h3 className="font-display font-bold text-lg text-ink group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-6 pt-4 border-t border-[#f0ede6] flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-300">
                  Read More <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-ink pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-80 bg-primary/15 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-ink leading-tight">
            Want to stay updated?
          </h2>
          <p className="mt-4 text-on-ink/60 max-w-md mx-auto">
            Follow us for the latest in AI growth, automation, and digital transformation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-ink px-8 h-14 rounded-full font-semibold text-lg hover:brightness-95 transition-all glow-orange"
            >
              Get in Touch <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
