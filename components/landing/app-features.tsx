"use client"

import Image from "next/image"
import { MapPin, Video, Cloud, Route, Truck, Camera, Download, Info } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/contexts/language-context"

const FEATURE_ICONS = [Truck, Video, MapPin, Info, Route, Cloud, Camera, Download]

export function AppFeatures() {
  const t = useTranslation()
  const features = t.appFeatures.features

  return (
    <section id="app" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.appFeatures.sectionLabel}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {t.appFeatures.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t.appFeatures.description}
          </p>
        </div>

        {/* Bento Grid - Showcasing Real App Screenshots */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[320px]">
          {features.map((feature, index) => {
            const Icon = FEATURE_ICONS[index]
            const imageUrls = [
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4e3c8a58-10b0-4a5a-a810-97f1a10dc4cf-nKRWzRwl9pTIQFRuywcdy52w2k2XUG.jpeg",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/58f16a22-3eb2-4e2e-aec5-a2ab43c74c77-4jOgWrPT41HL9clHF24AbnYFBPnjEA.jpeg",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cbbf07fe-882c-45cf-a937-0b9042891a6b-8FeoTjZM8Kt8PzvnOYtfz6jNx2xCzu.jpeg",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/93b6d701-c95e-436a-8662-f197332b0b5e-h9D5s4uZqYdatKcWQAb6SQOi2egPwZ.jpeg",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ee02d2d1-f1b2-48be-ac34-e342be948ccc-TiWViCxB425CzQU5ZAxovRCE1dGUUz.jpeg",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e5705749-b84c-476d-a827-0607a1585ead-0rElR4NXNaS3YJiJoJfT04DCO2krKi.jpeg",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7a10cf74-696f-4f13-b319-72bf94162bd6-BjmeQnjDAPsI3YNf0pLlr3MDKr1p83.jpeg",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a33af320-438e-4a90-b3ad-e032b6baee24-F2EdOfmvoeXuOIu7pRTpTSm8Km9DLt.jpeg",
            ]
            const spans = [
              "lg:col-span-1 lg:row-span-2",
              "lg:col-span-2 lg:row-span-2",
              "lg:col-span-1 lg:row-span-1",
              "lg:col-span-1 lg:row-span-1",
              "lg:col-span-1 lg:row-span-1",
              "lg:col-span-1 lg:row-span-1",
              "lg:col-span-1 lg:row-span-1",
              "lg:col-span-1 lg:row-span-1",
            ]
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all ${spans[index]}`}
              >
                <div className="relative h-full flex flex-col">
                  {/* Phone Screenshot */}
                  <div className="relative flex-1 overflow-hidden">
                    <Image
                      src={imageUrls[index]}
                      alt={feature.title}
                      fill
                      className="object-cover object-top opacity-70 group-hover:opacity-90 transition-opacity scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* App Store Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-3 rounded-xl bg-card border border-border px-6 py-3">
            <svg className="h-8 w-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div>
              <div className="text-xs text-muted-foreground">{t.appFeatures.downloadOn}</div>
              <Link href="https://apps.apple.com/il/app/apexcam/id6758610725" target="_blank" rel="noopener noreferrer">
                <div className="text-sm font-semibold text-foreground">{t.appFeatures.appStore}</div>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-card border border-border px-6 py-3">
            <svg className="h-8 w-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            <div>
              <div className="text-xs text-muted-foreground">{t.appFeatures.getItOn}</div>
              <Link href="https://play.google.com/store/apps/details?id=com.apexcam.app" target="_blank" rel="noopener noreferrer">
                <div className="text-sm font-semibold text-foreground">{t.appFeatures.googlePlay}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
