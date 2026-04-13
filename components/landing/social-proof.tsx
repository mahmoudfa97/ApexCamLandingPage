"use client"

import { Quote, Star } from "lucide-react"
import { useTranslation } from "@/contexts/language-context"

const logos = ["TransCorp", "FleetPro", "HaulMax", "CargoLink", "TruckNet", "RoadKing"]

export function SocialProof() {
  const t = useTranslation()

  return (
    <section id="features" className="relative py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust badges */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.socialProof.trustedBy}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-6">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {t.socialProof.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</span>
                {index === 3 && <Star className="h-6 w-6 text-primary fill-primary" />}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20 lg:mt-24">
          <h3 className="text-center text-2xl font-bold text-foreground mb-12">
            {t.socialProof.whatCustomersSay}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t.socialProof.testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="relative rounded-2xl bg-background border border-border p-8 hover:border-primary/30 transition-colors"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                <p className="text-muted-foreground leading-relaxed">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
