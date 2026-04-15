"use client"

import { Shield, Mail, AlertTriangle, Send } from "lucide-react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { useTranslation } from "@/contexts/language-context"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-3 ml-1">
        {title}
      </h2>
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        {children}
      </div>
    </div>
  )
}

function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-sm text-muted-foreground leading-relaxed ${className}`}>
      {children}
    </p>
  )
}

export default function DeleteAccountPage() {
  const t = useTranslation()
  const d = t.deleteAccount

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero banner */}
        <div className="relative bg-gradient-to-br from-destructive/10 via-background to-background py-16 max-w-3xl mx-auto mb-10 border-b border-border text-center">
          <div className="container mx-auto px-6">
            <div className="inline-flex items-center justify-center p-3 bg-destructive/10 rounded-full mb-6">
              <Shield className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{d.title}</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              {d.intro}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-2xl">
          <Section title={d.step1Title}>
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-primary/10 rounded-lg shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <BodyText>{d.step1Desc}</BodyText>
            </div>
          </Section>

          <Section title={d.step2Title}>
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-primary/10 rounded-lg shrink-0">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <BodyText>{d.step2Desc}</BodyText>
            </div>
          </Section>

          <Section title={d.dataScopeTitle}>
            <div className="space-y-4">
              <BodyText className="text-foreground font-medium">{d.dataScopeIntro}</BodyText>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {d.dataScopeItems?.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                <BodyText className="text-foreground leading-relaxed">{d.timeframe}</BodyText>
              </div>
            </div>
          </Section>

          <div className="mt-12 flex flex-col items-center">
            <div className="p-6 bg-card border border-border rounded-2xl shadow-sm text-center w-full max-w-md">
              <div className="text-sm font-semibold text-muted-foreground mb-2">
                {d.contactEmailLabel}
              </div>
              <a 
                href={`mailto:${d.contactEmail}?subject=Account Deletion Request`}
                className="text-2xl font-bold text-primary hover:underline hover:text-primary/80 transition-colors block mb-6"
              >
                {d.contactEmail}
              </a>
              
              <a
                href={`mailto:${d.contactEmail}?subject=Account Deletion Request`}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all shadow-md shadow-primary/20 w-full"
              >
                <Send className="h-4 w-4" />
                <span>{d.buttonText}</span>
              </a>
            </div>
          </div>

          <div className="mt-12 p-5 bg-destructive/5 border border-destructive/20 rounded-xl flex gap-3 items-start">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm text-destructive leading-relaxed font-medium">
              {d.legalNote}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
