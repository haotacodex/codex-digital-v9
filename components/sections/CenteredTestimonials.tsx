// v9 Component
// Modes: A
// B
// Card Tier: N/A
// Decorative: centered layout, minimal in B
"use client"

import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { PageWrapper } from "@/components/layout/PageWrapper"
import { SectionLabel } from "@/components/ui/SectionLabel"

interface Testimonial {
  quote: string
  name: string
  role: string
  company?: string
  avatar?: string
}

interface CenteredTestimonialsProps {
  testimonials: Testimonial[]
}

export function CenteredTestimonials({ testimonials }: CenteredTestimonialsProps) {
  return (
    <section style={{ background: "var(--color-bg-light)", padding: "var(--space-xl) 0" }}>
      <PageWrapper>
        <SectionLabel label="CLIENT STORIES" />
        <div
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            marginTop: "var(--space-lg)",
          }}
        >
          <InfiniteSlider gap={32} reverse duration={60} durationOnHover={120}>
            {testimonials.map((testimonial, index) => {
              const initials = testimonial.name.split(" ").map(n => n[0]).join("").toUpperCase()
              return (
                <div
                  key={index}
                  style={{
                    flexShrink: 0,
                    width: "360px",
                    padding: "var(--space-md)",
                    background: "var(--color-bg-card)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-sm)",
                    textAlign: "left",
                    cursor: "default",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(18px, 2vw, 22px)",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      color: "var(--color-text)",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    "{testimonial.quote}"
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-sm)",
                    }}
                  >
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "var(--color-primary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--color-text-inverse)",
                          fontSize: "var(--text-label)",
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      >
                        {initials}
                      </div>
                    )}
                    <div>
                      <div
                        style={{
                          fontSize: "var(--text-body)",
                          fontWeight: 600,
                          color: "var(--color-text)",
                          marginBottom: "4px",
                        }}
                      >
                        {testimonial.name}
                      </div>
                      <div
                        style={{
                          fontSize: "var(--text-caption)",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </InfiniteSlider>
        </div>
      </PageWrapper>
    </section>
  )
}



