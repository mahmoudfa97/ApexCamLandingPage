"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { DemoModal } from "./demo-modal"
import { useTranslation } from "@/contexts/language-context"

export function Hero() {
  const t = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute top-1/4 ltr:right-0 rtl:left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t.hero.badge}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
              {t.hero.title}{" "}
              <span className="text-primary">{t.hero.titleHighlight}</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col items-stretch sm:flex-row sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <DemoModal>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base cursor-pointer w-full sm:w-auto">
                  {t.hero.requestDemo}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DemoModal>
              <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-card h-11 sm:h-12 text-sm sm:text-base w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4" />
                {t.hero.watchOverview}
              </Button>
            </div>

            <div className="mt-8 sm:mt-12 flex items-center gap-4 sm:gap-8 justify-center lg:justify-start">
              <div>
                <div className="text-3xl font-bold text-foreground">{t.hero.stat1.value}</div>
                <div className="text-sm text-muted-foreground">{t.hero.stat1.label}</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">{t.hero.stat2.value}</div>
                <div className="text-sm text-muted-foreground">{t.hero.stat2.label}</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">{t.hero.stat3.value}</div>
                <div className="text-sm text-muted-foreground">{t.hero.stat3.label}</div>
              </div>
            </div>
          </div>

          {/* Right side - Real App Screenshots */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative z-10 flex items-end gap-4">
              {/* Main App Screenshot - Live Stream */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-2xl transform translate-y-4" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/58f16a22-3eb2-4e2e-aec5-a2ab43c74c77-4jOgWrPT41HL9clHF24AbnYFBPnjEA.jpeg"
                  alt="ApexCam Mobile App - 4-channel live view with real-time telemetry"
                  width={280}
                  height={560}
                  className="relative rounded-[2rem] shadow-2xl shadow-black/50 border-4 border-card"
                  priority
                />
                {/* Decorative Logo */}
                <div className="absolute top-16 ltr:-left-10 rtl:-right-10 z-20 w-20 h-20 border-4 border-background rounded-2xl hidden lg:block overflow-hidden shadow-xl bg-background">
                  <img src="/logo.png" alt="ApexCam Logo" className="w-full h-full object-contain rounded-xl" />
                </div>
              </div>

              {/* Secondary Screenshot - Map View */}
              <div className="relative ltr:-ml-8 rtl:-mr-8 mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cbbf07fe-882c-45cf-a937-0b9042891a6b-8FeoTjZM8Kt8PzvnOYtfz6jNx2xCzu.jpeg"
                  alt="ApexCam Mobile App - GPS tracking and navigation"
                  width={200}
                  height={400}
                  className="rounded-[1.5rem] shadow-2xl shadow-black/50 border-4 border-card opacity-90"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 ltr:right-0 rtl:left-0 -z-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
