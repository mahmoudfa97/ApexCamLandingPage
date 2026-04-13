"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useLanguage, useTranslation } from "@/contexts/language-context"
import type { Locale } from "@/lib/i18n"

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "he", label: "HE" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const { locale, setLocale } = useLanguage()
  const t = useTranslation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
            <div className="relative">
              <img src="./logo.jpg" alt="ApexCam Logo" className="h-10 w-10 rounded-xl border border-primary/30" />
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-accent/10 rounded-xl blur opacity-60" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-primary">ApexCam</span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase">{t.header.mdvrPlatform}</span>
            </div>
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{t.header.openMenu}</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex lg:gap-x-10">
          <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.header.features}
          </Link>
          <Link href="/#hardware" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.header.hardware}
          </Link>
          <Link href="/#app" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.header.app}
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.header.contact}
          </Link>
        </div>

        {/* Desktop right side — Language switcher + CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          {/* Language switcher */}
          <div className="flex items-center rounded-full border border-border overflow-hidden">
            {LOCALES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLocale(code)}
                className={`px-3 py-1 text-xs font-semibold transition-colors ${
                  locale === code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold cursor-pointer">
            <Link href="https://web.whatsapp.com/send?phone=972504302248" target="_blank" rel="noopener noreferrer">
              {t.header.requestDemo}
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm border-l border-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-md overflow-hidden flex-shrink-0">
                  <Image src="/logo.jpg" alt="ApexCam Logo" fill className="object-cover" />
                </div>
                <span className="text-2xl font-bold text-foreground">
                  Apex<span className="text-primary">Cam</span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">{t.header.closeMenu}</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  <Link
                    href="/#features"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-card hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.header.features}
                  </Link>
                  <Link
                    href="/#hardware"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-card hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.header.hardware}
                  </Link>
                  <Link
                    href="/#app"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-card hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.header.app}
                  </Link>
                  <Link
                    href="/#contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-card hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.header.contact}
                  </Link>
                </div>

                {/* Mobile language switcher */}
                <div className="py-4">
                  <p className="text-xs text-muted-foreground mb-2 px-1">Language</p>
                  <div className="flex gap-2">
                    {LOCALES.map(({ code, label }) => (
                      <button
                        key={code}
                        onClick={() => { setLocale(code); setMobileMenuOpen(false) }}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                          locale === code
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-muted-foreground hover:text-foreground border border-border"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="py-6">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold cursor-pointer">
                    <Link href="https://web.whatsapp.com/send?phone=972504302248" target="_blank" rel="noopener noreferrer">
                      {t.header.requestDemo}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
