"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MapPin, Video, Cloud, Route, Truck, Camera, Download, Info, Maximize2, ChevronLeft, ChevronRight, X, Check } from "lucide-react"
import Link from "next/link"
import { useTranslation, useLanguage } from "@/contexts/language-context"

const FEATURE_ICONS = [Truck, Video, MapPin, Info, Route, Cloud, Camera, Download]

const IMAGE_URLS = [
  "/images/screenshots/app-1.png",
  "/images/screenshots/app-3.png",
  "/images/screenshots/app-2.png",
  "/images/screenshots/app-4.png",
  "/images/playback-screen.jpg",
  "/images/telemetry-screen.jpeg",
  "/images/trip-history-screen.jpg",
  "/images/app-mockup.jpg",
]

const FEATURE_DETAILS: Record<"en" | "ar" | "he", string[][]> = {
  en: [
    ["Live status tracking (online/offline)", "Easy search & filtering", "Quick access controls", "Grouping by region"],
    ["Real-time 1080p streaming", "4 camera streams simultaneously", "Interactive full-screen layout", "Integrated latency optimization"],
    ["Pinpoint accuracy on maps", "Integrated routing and navigation", "Speedometer & direction tracking", "Distance metrics calculation"],
    ["Live speed & mileage tracker", "Heading & direction sensors", "Cellular network status (4G/LTE)", "Satellite/GPS coordinate stream"],
    ["Interactive route line playback", "Time/date range filtering", "Fuel and speed telemetry history", "Exportable trip analytics reports"],
    ["Search recordings by calendar date", "Filter by video/event type", "In-app playback controls", "High-speed cloud downloads"],
    ["One-tap snapshot for all channels", "Custom camera angle selection", "Automatic saving to device library", "Instant sharing support"],
    ["Track active background downloads", "Filter by status (Pending, Loading, Completed)", "Background task persistence", "Easy file management & sharing"]
  ],
  ar: [
    ["تتبع الحالة المباشرة (متصل/غير متصل)", "سهولة البحث والتصفية", "عناصر تحكم سريعة الوصول", "التجميع حسب المنطقة"],
    ["بث مباشر بجودة 1080p في الوقت الفعلي", "بث 4 قنوات كاميرا في نفس الوقت", "تصميم تفاعلي بملء الشاشة", "تحسين زمن الوصول المدمج"],
    ["دقة متناهية لتحديد الموقع على الخرائط", "توجيه وملاحة مدمجة", "تتبع السرعة والاتجاه", "حساب مقاييس المسافة"],
    ["تتبع السرعة والمسافة المقطوعة مباشرة", "مستشعرات الاتجاه والحركة", "حالة الشبكة الخلوية (4G/LTE)", "تدفق إحداثيات الأقمار الصناعية/GPS"],
    ["تشغيل تفاعلي لمسار الرحلة", "تصفية حسب نطاق الوقت/التاريخ", "سجل قياسات الوقود والسرعة", "تقارير تحليلات الرحلة القابلة للتصدير"],
    ["البحث عن التسجيلات حسب تاريخ التقويم", "التصفية حسب نوع الفيديو/الحدث", "عناصر تحكم في التشغيل داخل التطبيق", "تنزيلات سحابية عالية السرعة"],
    ["لقطة بنقرة واحدة لجميع القنوات", "تحديد زوايا كاميرا مخصصة", "حفظ تلقائي في مكتبة الجهاز", "دعم المشاركة الفورية"],
    ["تتبع التنزيلات النشطة في الخلفية", "التصفية حسب الحالة (معلق، قيد التحميل، مكتمل)", "استمرار مهام الخلفية", "سهولة إدارة الملفات ومشاركتها"]
  ],
  he: [
    ["מעקב סטטוס חי (מחובר/מנותק)", "חיפוש וסינון קלים", "בקרות גישה מהירה", "קבוצות לפי אזורים"],
    ["הזרמה בזמן אמת ב-1080p", "4 שידורי מצלמה בו-זמנית", "פריסה אינטראקטיבית במסך מלא", "אופטימיזציית שיהוי מובנית"],
    ["דיוק מירבי על גבי מפות", "ניווט ומסלולים מובנים", "מעקב מהירות וכיוון", "חישוב מדדי מרחק"],
    ["מעקב מהירות וקילומטראז' חי", "חיישני כיוון ותנועה", "סטטוס רשת סלולרית (4G/LTE)", "זרם קואורדינטות לוויין/GPS"],
    ["ניגון מסלול אינטראקטיבי", "סינון לפי טווח תאריכים ושעות", "היסטוריית טלמטריית דלק ומהירות", "דוחות אנליטיקה ניתנים לייצוא"],
    ["חיפוש הקלטות לפי תאריך בלוח השנה", "סינון לפי סוג סרטון/אירוע", "בקרות ניגון מובנות באפליקציה", "הורדות ענן במהירות גבוהה"],
    ["צילום מסך בהקשה אחת לכל הערוצים", "בחירת זווית מצלמה מותאמת אישית", "שמירה אוטומטית לגלריית המכשיר", "תמיכה בשיתוף מיידי"],
    ["מעקב אחר הורדות פעילות ברקע", "סינון לפי סטטוס (ממתין, טוען, הושלם)", "המשכיות משימות רקע", "ניהול ושיתוף קבצים קל"]
  ]
}

export function AppFeatures() {
  const t = useTranslation()
  const { locale } = useLanguage()
  const features = t.appFeatures.features
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  // Keyboard controls & body scroll lock
  useEffect(() => {
    if (selectedIdx === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIdx(null)
      } else if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % features.length : null))
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev !== null ? (prev - 1 + features.length) % features.length : null))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedIdx, features.length])

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
                onClick={() => setSelectedIdx(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedIdx(index)
                  }
                }}
                role="button"
                tabIndex={0}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${spans[index]}`}
              >
                <div className="relative h-full flex flex-col">
                  {/* Phone Screenshot */}
                  <div className="relative flex-1 overflow-hidden">
                    <Image
                      src={IMAGE_URLS[index]}
                      alt={feature.title}
                      fill
                      className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    
                    {/* Zoom / Maximize glass badge */}
                    <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-background/50 backdrop-blur-md border border-border/30 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-md">
                      <Maximize2 className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
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
              <Link href="https://play.google.com/store/apps/details?id=com.mahmoudfaour.apexcam" target="_blank" rel="noopener noreferrer">
                <div className="text-sm font-semibold text-foreground">{t.appFeatures.googlePlay}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Details Lightbox Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          {/* Backdrop Click */}
          <div className="absolute inset-0 bg-black/45" onClick={() => setSelectedIdx(null)} />
          
          {/* Modal Card */}
          <div className="relative w-full max-w-4xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-10 animate-in zoom-in-95 duration-250">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-background/80 border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors shadow-sm cursor-pointer"
              aria-label="Close"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            {/* Left Side: Blurred background & contained real screenshot */}
            <div className="relative w-full md:w-1/2 bg-black/30 flex items-center justify-center p-6 min-h-[260px] md:min-h-[450px]">
              <div 
                className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-25 scale-105"
                style={{ backgroundImage: `url(${IMAGE_URLS[selectedIdx]})` }}
              />
              <div className="relative w-full h-full min-h-[220px] md:min-h-[380px] flex items-center justify-center">
                <img
                  src={IMAGE_URLS[selectedIdx]}
                  alt={features[selectedIdx].title}
                  className="max-h-[32vh] md:max-h-[60vh] object-contain drop-shadow-2xl rounded-xl border border-white/10"
                />
              </div>
            </div>

            {/* Right Side: Header, description, capability details & navigation */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full">
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
                    {(() => {
                      const Icon = FEATURE_ICONS[selectedIdx]
                      return <Icon className="h-5.5 w-5.5" />
                    })()}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                    {features[selectedIdx].title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {features[selectedIdx].description}
                </p>

                {/* Organized Details List */}
                <div className="border-t border-border pt-6">
                  <h4 className="text-xs font-bold text-foreground/80 uppercase tracking-widest mb-4">
                    {locale === "ar" ? "القدرات الرئيسية" : locale === "he" ? "יכולות מפתח" : "Key Capabilities"}
                  </h4>
                  <ul className="space-y-3.5">
                    {FEATURE_DETAILS[locale as keyof typeof FEATURE_DETAILS]?.[selectedIdx]?.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-foreground">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary mt-0.5 shadow-sm">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{detail}</span>
                      </li>
                    )) || (
                      <li className="text-sm text-muted-foreground">Details coming soon...</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* In-Card Nav Footer */}
              <div className="flex items-center justify-between border-t border-border pt-6 mt-8">
                <button
                  onClick={() => setSelectedIdx((prev) => (prev !== null ? (prev - 1 + features.length) % features.length : null))}
                  className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <ChevronLeft className={`h-4.5 w-4.5 ${locale === "ar" || locale === "he" ? "rotate-180" : ""}`} />
                  <span>{locale === "ar" ? "السابق" : locale === "he" ? "הקודם" : "Previous"}</span>
                </button>
                <button
                  onClick={() => setSelectedIdx((prev) => (prev !== null ? (prev + 1) % features.length : null))}
                  className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <span>{locale === "ar" ? "التالي" : locale === "he" ? "הבא" : "Next"}</span>
                  <ChevronRight className={`h-4.5 w-4.5 ${locale === "ar" || locale === "he" ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>

            {/* Desktop Outside Nav Arrows */}
            <button
              onClick={() => setSelectedIdx((prev) => (prev !== null ? (prev - 1 + features.length) % features.length : null))}
              className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 h-12 w-12 items-center justify-center rounded-full bg-background/80 border border-border text-foreground hover:bg-muted transition-colors shadow-lg cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setSelectedIdx((prev) => (prev !== null ? (prev + 1) % features.length : null))}
              className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 h-12 w-12 items-center justify-center rounded-full bg-background/80 border border-border text-foreground hover:bg-muted transition-colors shadow-lg cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
