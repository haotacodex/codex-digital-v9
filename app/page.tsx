import { services, caseStudies } from "@/lib/content"
import { clientLogos } from "@/lib/config"
import { MarketingLayout } from "@/components/layout/MarketingLayout"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesStrip } from "@/components/sections/ServicesStrip"
import { WorkGrid } from "@/components/sections/WorkGrid"
import { InhouseBlock } from "@/components/sections/InhouseBlock"
import { CenteredTestimonials } from "@/components/sections/CenteredTestimonials"
import { TrustBar } from "@/components/sections/TrustBar"
import { CtaBand } from "@/components/sections/CtaBand"

export default function Home() {
  return (
    <MarketingLayout hideHeader>
      <HeroSection
        heading="Built in-house. Delivered with accountability."
        subheading="Full-service digital agency in North Sydney. Websites, apps, software, branding, campaigns, and hosting — built by senior practitioners, every project."
        primaryCta={{ label: "Start a project", href: "/start-a-project" }}
        secondaryCta={{ label: "See our work", href: "/work" }}
      />
      <TrustBar logos={clientLogos} showSteadfastCallout />
      <ServicesStrip heading="End-to-end digital services. Built in-house." services={services} />
      <WorkGrid
        heading="Work that performs."
        subheading="Selected projects across financial services, insurance, energy, manufacturing, and distribution."
        caseStudies={caseStudies.slice(0,9)}
        showFilter
        ctaLabel="View all work"
        ctaHref="/work"
      />
      <InhouseBlock
        heading="Senior practitioners. Every project."
        paragraphs={[
          "Every project at Codex Digital is led by senior practitioners with 15-20 years' experience. We do not outsource to third parties, use offshore contractors, or hand work to junior staff.",
          "You deal with one point of contact from first meeting to final delivery. That accountability is what makes our work consistent — and what makes our clients stay."
        ]}
      />
      <CenteredTestimonials
        testimonials={[
          {
            quote: "One team, start to finish. No handoffs, no surprises. Codex delivered a platform that handles real volume — and the numbers prove it.",
            name: "Adrian Merrick",
            role: "Founder & CEO",
            company: "Energy Locals",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
          },
          {
            quote: "The team at Codex understood our complex requirements from day one. Their in-house delivery model meant we had direct access to senior developers throughout the entire project.",
            name: "Sarah Chen",
            role: "Head of Digital",
            company: "Qantas Super",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
          },
          {
            quote: "We have worked with many agencies over the years. Codex is the first to deliver on time, on budget, and above expectation — every single time.",
            name: "Mark Davidson",
            role: "Managing Director",
            company: "Nautilus Marine",
            avatar: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=80&h=80&fit=crop&crop=face",
          },
        ]}
      />
      <CtaBand
        heading="Ready to build something that works?"
        body="If your current website is holding you back, or your next project needs to be built right from day one, we should talk."
        ctaLabel="Start a project"
        ctaHref="/start-a-project"
        microCopy="No sales pitch. Just a conversation about what you need and whether we are the right fit."
      />
    </MarketingLayout>
  )
}
