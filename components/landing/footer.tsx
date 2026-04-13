"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/contexts/language-context"

export function Footer() {
  const t = useTranslation()

  return (
    <footer id="contact" className="border-t border-border/50 ">
      <div className="container py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.footer.ctaTitle}<br />
            <span className="text-gradient-gold">{t.footer.ctaHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.footer.ctaDescription}
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-light font-semibold text-base px-10 glow-gold" asChild>
            <a href="https://web.whatsapp.com/send?phone=972504302248" target="_blank" rel="noopener noreferrer">
              {t.footer.getStarted} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="border-t border-border/50 py-6 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>{t.footer.copyright}</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">{t.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
