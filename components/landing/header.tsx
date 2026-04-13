"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
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
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const { locale, setLocale } = useLanguage()
  const t = useTranslation()

  useEffect(() => { setMounted(true) }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 lg:px-8">

          {/* Logo */}
          <div className="flex min-w-0 lg:flex-1">
            <div
              className="flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0"
              onClick={() => router.push("/")}
            >
              <div className="relative flex-shrink-0">
                <img
                  src="/logo.jpg"
                  alt="ApexCam Logo"
                  className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl border border-primary/30"
                />
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-accent/10 rounded-xl blur opacity-60" />
              </div>
              <div className="flex flex-col leading-none min-w-0">
                <span className="text-lg sm:text-xl font-bold text-primary">ApexCam</span>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground tracking-widest uppercase truncate">
                  {t.header.mdvrPlatform}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="flex flex-shrink-0 lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label={t.header.openMenu}
            >
              <span className="sr-only">{t.header.openMenu}</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex lg:gap-x-10">
            <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.header.features}</Link>
            <Link href="/#hardware" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.header.hardware}</Link>
            <Link href="/#app"      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.header.app}</Link>
            <Link href="/#contact"  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{t.header.contact}</Link>
          </div>

          {/* Desktop right: Language switcher + CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
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
      </header>

      {/*
        Mobile menu rendered via React portal directly into document.body.
        This is necessary because the header uses `backdrop-filter: blur` which
        creates a CSS containing block — any `position: fixed` child is then
        positioned relative to the header, not the viewport.
        The portal escapes that stacking context entirely.

        We also use inline styles for the panel background (#111111) instead of
        Tailwind's `bg-background` to guarantee a solid, opaque color regardless
        of any CSS variable resolution edge-cases in Tailwind v4.
      */}
      {mounted && mobileMenuOpen && createPortal(
        <>
          {/* Semi-transparent backdrop */}
          <div
            aria-hidden="true"
            onClick={closeMenu}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 998,
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Slide-in panel */}
          <div
            role="dialog"
            aria-modal="true"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              width: "100%",
              maxWidth: "20rem",
              backgroundColor: "#111111",
              borderLeft: "1px solid #262626",
              overflowY: "auto",
              padding: "1.25rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {/* Panel header row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <Link
                href="/"
                onClick={closeMenu}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
              >
                <div style={{ position: "relative", width: "2rem", height: "2rem", borderRadius: "0.375rem", overflow: "hidden", flexShrink: 0 }}>
                  <Image src="/logo.jpg" alt="ApexCam Logo" fill className="object-cover" />
                </div>
                <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>
                  Apex<span style={{ color: "#E5A93D" }}>Cam</span>
                </span>
              </Link>

              <button
                type="button"
                aria-label={t.header.closeMenu}
                onClick={closeMenu}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.5rem",
                  borderRadius: "0.375rem",
                  color: "#a1a1aa",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <X style={{ width: "1.5rem", height: "1.5rem" }} aria-hidden="true" />
              </button>
            </div>

            {/* Divider */}
            <div style={{ height: 1, backgroundColor: "#262626", marginBottom: "1.5rem" }} />

            {/* Nav links */}
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginBottom: "1.5rem" }}>
              {[
                { href: "/#features", label: t.header.features },
                { href: "/#hardware", label: t.header.hardware },
                { href: "/#app",      label: t.header.app },
                { href: "/#contact",  label: t.header.contact },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-muted-foreground hover:bg-card hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div style={{ height: 1, backgroundColor: "#262626", marginBottom: "1.5rem" }} />

            {/* Language switcher */}
            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#a1a1aa", marginBottom: "0.75rem" }}>
                Language
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
                {LOCALES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => { setLocale(code); closeMenu() }}
                    style={{
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      border: locale === code ? "none" : "1px solid #262626",
                      backgroundColor: locale === code ? "#E5A93D" : "#1a1a1a",
                      color: locale === code ? "#111111" : "#a1a1aa",
                      transition: "all 0.15s",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://web.whatsapp.com/send?phone=972504302248"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 700,
                textDecoration: "none",
                backgroundColor: "#E5A93D",
                color: "#111111",
                transition: "opacity 0.15s",
              }}
            >
              {t.header.requestDemo}
            </a>
          </div>
        </>,
        document.body
      )}
    </>
  )
}
