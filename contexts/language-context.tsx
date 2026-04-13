"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Locale, translations, Translations } from "@/lib/i18n"

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  // Read persisted locale on mount and apply dir/lang
  useEffect(() => {
    const stored = (typeof window !== "undefined" ? localStorage.getItem("apexcam_locale") : null) as Locale | null
    const valid: Locale[] = ["en", "ar", "he"]
    if (stored && valid.includes(stored)) {
      setLocaleState(stored)
      applyDir(stored)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("apexcam_locale", newLocale)
    }
    applyDir(newLocale)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

function applyDir(locale: Locale) {
  if (typeof document === "undefined") return
  const isRtl = locale === "ar" || locale === "he"
  document.documentElement.dir = isRtl ? "rtl" : "ltr"
  document.documentElement.lang = locale
}

export const useLanguage = () => useContext(LanguageContext)
export const useTranslation = () => useContext(LanguageContext).t
