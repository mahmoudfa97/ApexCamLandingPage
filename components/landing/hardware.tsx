"use client"

import Image from "next/image"
import { Camera, Shield, Wifi, Plug, HardDrive, Thermometer } from "lucide-react"
import { useTranslation } from "@/contexts/language-context"

const SPEC_ICONS = [Camera, Shield, Wifi, Plug, HardDrive, Thermometer]

const HIGHLIGHT_POINTS = [
  { id: "mdvr", x: "18%", y: "56%", key: "mdvr" as const },
  { id: "monitor", x: "34%", y: "53%", key: "monitor" as const },
  { id: "leftSideCam", x: "19%", y: "51%", key: "leftSideCam" as const },
  { id: "rightSideCam", x: "44%", y: "54%", key: "rightSideCam" as const },
  { id: "frontCam", x: "23%", y: "48%", key: "frontCam" as const },
  { id: "rearCam", x: "82%", y: "62%", key: "rearCam" as const },
]

export function Hardware() {
  const t = useTranslation()
  const specs = t.hardware.specs

  return (
    <section id="hardware" className="relative py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  src="/images/mdvr-device.png"
                  alt="ApexCam 4-Camera MDVR Kit - Professional fleet recording system"
                  fill
                  className="object-cover rounded-3xl"
                />
                {/* Highlight points */}
                {HIGHLIGHT_POINTS.map((point) => (
                  <div
                    key={point.id}
                    className="group absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer z-10"
                    style={{ left: point.x, top: point.y }}
                  >
                    {/* Ripple effect rings */}
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75 animate-ping duration-1000" />
                    {/* Inner core dot */}
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary shadow-lg border border-background shadow-primary/50 group-hover:scale-110 transition-transform duration-300" />
                    
                    {/* Sleek Tooltip card */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 opacity-0 pointer-events-none scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out z-20 flex flex-col items-center">
                      <div className="bg-popover text-popover-foreground text-xs font-semibold px-3 py-1.5 rounded-lg border border-border shadow-xl whitespace-nowrap backdrop-blur-md bg-opacity-95">
                        {t.hardware.highlights[point.key]}
                      </div>
                      {/* Down arrow */}
                      <div className="w-2.5 h-2.5 bg-popover border-r border-b border-border rotate-45 -mt-1.5 backdrop-blur-md bg-opacity-95" />
                    </div>
                  </div>
                ))}
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
        <div className="mt-16 lg:mt-24 rounded-2xl bg-background border border-border p-4 sm:p-8 lg:p-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 sm:mb-8">{t.hardware.whatsIncluded}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
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
