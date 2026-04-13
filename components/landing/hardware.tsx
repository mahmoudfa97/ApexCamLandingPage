"use client"

import Image from "next/image"
import { Camera, Shield, Wifi, Plug, HardDrive, Thermometer } from "lucide-react"
import { useTranslation } from "@/contexts/language-context"

const SPEC_ICONS = [Camera, Shield, Wifi, Plug, HardDrive, Thermometer]

export function Hardware() {
  const t = useTranslation()
  const specs = t.hardware.specs

  return (
    <section id="hardware" className="relative py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.hardware.sectionLabel}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {t.hardware.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t.hardware.description}
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
                <Image
                  src="/images/mdvr-device.jpg"
                  alt="ApexCam 4-Camera MDVR Kit - Professional fleet recording system"
                  fill
                  className="object-cover rounded-3xl"
                />
                {/* Highlight points */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse" />
                <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary rounded-full animate-pulse delay-300" />
                <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse delay-500" />
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {specs.map((spec, index) => {
                const Icon = SPEC_ICONS[index]
                return (
                  <div
                    key={spec.title}
                    className="group relative rounded-2xl bg-background border border-border p-6 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{spec.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Included items */}
        <div className="mt-16 lg:mt-24 rounded-2xl bg-background border border-border p-8 lg:p-12">
          <h3 className="text-xl font-semibold text-foreground mb-8">{t.hardware.whatsIncluded}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {t.hardware.includedItems.map((item) => (
              <div key={item.item} className="flex items-center gap-3">
                <span className="text-2xl font-bold text-primary">{item.count}</span>
                <span className="text-sm text-muted-foreground">{item.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
