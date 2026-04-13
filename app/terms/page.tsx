"use client"

import { Header } from "@/components/landing/header"
import { Calendar, Mail, Globe } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/contexts/language-context"

const LAST_UPDATED = "March 13, 2026"
const APP_NAME = "ApexCam"
const COMPANY_NAME = "ApexCam, operated by Apex View, registered in Israel"
const CONTACT_EMAIL = "support@apex-view.org"
const WEBSITE = "https://apex-view.org/terms"

interface SectionProps {
  title: string
  children: React.ReactNode
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-3 ml-1">
        {title}
      </h2>
      <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 mt-2 pl-1">
      <span className="text-primary text-sm leading-relaxed shrink-0">•</span>
      <span className="text-sm text-muted-foreground leading-relaxed">{children}</span>
    </div>
  )
}

export default function TermsPage() {
  const t = useTranslation()
  const tr = t.terms

  const intro = tr.intro.replace("{app}", APP_NAME).replace("{company}", COMPANY_NAME)
  const s1Text1 = tr.s1Text1.replace("{app}", APP_NAME)
  const s1Text2 = tr.s1Text2.replace("{company}", COMPANY_NAME)
  const s2Intro = tr.s2Intro.replace("{app}", APP_NAME)
  const s3Intro = tr.s3Intro.replace("{app}", APP_NAME)
  const s7Text1 = tr.s7Text1.replace("{company}", COMPANY_NAME)
  const s9Intro = tr.s9Intro.replace("{app}", APP_NAME)
  const s11Text1 = tr.s11Text1.replace("{companyUpper}", COMPANY_NAME.toUpperCase())
  const copyright = tr.copyright.replace("{year}", String(new Date().getFullYear())).replace("{company}", COMPANY_NAME)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero banner */}
        <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-12 max-w-3xl mx-auto mb-10 border-b border-border">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-foreground mb-3">{tr.title}</h1>
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <Calendar className="h-4 w-4" />
              <span>{tr.lastUpdated} {LAST_UPDATED}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-3xl">
          {/* Intro */}
          <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-xl text-sm text-muted-foreground leading-relaxed">
            {intro}
          </div>

          <Section title={tr.s1Title}>
            <BodyText>{s1Text1}</BodyText>
            <BodyText className="mt-3">{s1Text2}</BodyText>
          </Section>

          <Section title={tr.s2Title}>
            <BodyText>{s2Intro}</BodyText>
            <Bullet>{tr.s2Point1}</Bullet>
            <Bullet>{tr.s2Point2}</Bullet>
            <Bullet>{tr.s2Point3}</Bullet>
            <Bullet>{tr.s2Point4}</Bullet>
            <Bullet>{tr.s2Point5}</Bullet>
            <Bullet>{tr.s2Point6}</Bullet>
            <BodyText className="mt-3">{tr.s2Note}</BodyText>
          </Section>

          <Section title={tr.s3Title}>
            <BodyText>{s3Intro}</BodyText>
            <Bullet>{tr.s3Point1}</Bullet>
            <Bullet>{tr.s3Point2}</Bullet>
            <Bullet>{tr.s3Point3}</Bullet>
            <BodyText className="mt-3">{tr.s3Note}</BodyText>
          </Section>

          <Section title={tr.s4Title}>
            <BodyText>{tr.s4Intro}</BodyText>
            <Bullet>{tr.s4Point1}</Bullet>
            <Bullet>{tr.s4Point2}</Bullet>
            <Bullet>{tr.s4Point3}</Bullet>
            <Bullet>{tr.s4Point4}</Bullet>
            <Bullet>{tr.s4Point5}</Bullet>
            <Bullet>{tr.s4Point6}</Bullet>
            <BodyText className="mt-3">{tr.s4Note1}</BodyText>
            <BodyText className="mt-3">{tr.s4Note2}</BodyText>
          </Section>

          <Section title={tr.s5Title}>
            <BodyText>{tr.s5Intro}</BodyText>
            <Bullet><strong className="text-foreground">{tr.s5Point1Label}</strong>{tr.s5Point1}</Bullet>
            <Bullet><strong className="text-foreground">{tr.s5Point2Label}</strong>{tr.s5Point2}</Bullet>
            <Bullet><strong className="text-foreground">{tr.s5Point3Label}</strong>{tr.s5Point3}</Bullet>
            <Bullet><strong className="text-foreground">{tr.s5Point4Label}</strong>{tr.s5Point4}</Bullet>
            <BodyText className="mt-3">{tr.s5Note}</BodyText>
          </Section>

          <Section title={tr.s6Title}>
            <BodyText>{tr.s6Intro}</BodyText>
            <Bullet><strong className="text-foreground">{tr.s6Point1Label}</strong>{tr.s6Point1}</Bullet>
            <Bullet><strong className="text-foreground">{tr.s6Point2Label}</strong>{tr.s6Point2}</Bullet>
            <Bullet><strong className="text-foreground">{tr.s6Point3Label}</strong>{tr.s6Point3}</Bullet>
            <BodyText className="mt-3">{tr.s6Note}</BodyText>
          </Section>

          <Section title={tr.s7Title}>
            <BodyText>{s7Text1}</BodyText>
            <BodyText className="mt-3">{tr.s7Text2}</BodyText>
            <BodyText className="mt-3">{tr.s7Text3}</BodyText>
          </Section>

          <Section title={tr.s8Title}>
            <BodyText>{tr.s8Text1}</BodyText>
            <Bullet>{tr.s8Point1}</Bullet>
            <Bullet>{tr.s8Point2}</Bullet>
            <Bullet>{tr.s8Point3}</Bullet>
            <Bullet>{tr.s8Point4}</Bullet>
            <BodyText className="mt-3">{tr.s8Note}</BodyText>
          </Section>

          <Section title={tr.s9Title}>
            <BodyText>{s9Intro}</BodyText>
            <Bullet>{tr.s9Point1}</Bullet>
            <Bullet>{tr.s9Point2}</Bullet>
            <Bullet>{tr.s9Point3}</Bullet>
            <Bullet>{tr.s9Point4}</Bullet>
          </Section>

          <Section title={tr.s10Title}>
            <BodyText>{tr.s10Intro}</BodyText>
            <Bullet>{tr.s10Point1}</Bullet>
            <Bullet>{tr.s10Point2}</Bullet>
            <Bullet>{tr.s10Point3}</Bullet>
            <Bullet>{tr.s10Point4}</Bullet>
            <Bullet>{tr.s10Point5}</Bullet>
          </Section>

          <Section title={tr.s11Title}>
            <BodyText>{s11Text1}</BodyText>
            <Bullet>{tr.s11Point1}</Bullet>
            <Bullet>{tr.s11Point2}</Bullet>
            <Bullet>{tr.s11Point3}</Bullet>
            <Bullet>{tr.s11Point4}</Bullet>
            <BodyText className="mt-3">{tr.s11Note}</BodyText>
          </Section>

          <Section title={tr.s12Title}>
            <BodyText>
              {tr.s12Text.split(tr.s12PrivacyPolicy)[0]}
              <Link href="/privacy" className="text-primary hover:underline font-medium">
                {tr.s12PrivacyPolicy}
              </Link>
              {tr.s12Text.split(tr.s12PrivacyPolicy)[1]}
            </BodyText>
          </Section>

          <Section title={tr.s13Title}>
            <BodyText>{tr.s13Intro}</BodyText>
            <Bullet>{tr.s13Point1}</Bullet>
            <Bullet>{tr.s13Point2}</Bullet>
            <Bullet>{tr.s13Point3}</Bullet>
            <Bullet>{tr.s13Point4}</Bullet>
            <BodyText className="mt-3">{tr.s13Note}</BodyText>
          </Section>

          <Section title={tr.s14Title}>
            <BodyText>
              {tr.s14Text1}{" "}
              <strong className="text-foreground">{tr.s14StateOfIsrael}</strong>
              {tr.s14Text1End}
            </BodyText>
            <BodyText className="mt-3">
              {tr.s14Text2}{" "}
              <strong className="text-foreground">{tr.s14ArbitrationIsrael}</strong>
              {tr.s14Text2End}
            </BodyText>
            <BodyText className="mt-3">
              {tr.s14Text3}{" "}
              <strong className="text-foreground">{tr.s14TelAviv}</strong>
              {tr.s14Text3End}
            </BodyText>
          </Section>

          <Section title={tr.s15Title}>
            <BodyText>{tr.s15Text}</BodyText>
          </Section>

          <Section title={tr.s16Title}>
            <BodyText>{tr.s16Intro}</BodyText>
            <div className="mt-4 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="font-semibold text-foreground">{tr.s16EmailLabel}</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-primary shrink-0" />
                <span className="font-semibold text-foreground">{tr.s16WebsiteLabel}</span>
                <a href={WEBSITE} target="_blank" rel="noreferrer" className="text-primary hover:underline">{WEBSITE}</a>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">{tr.s16AppLabel}</span>{" "}
                <span className="text-muted-foreground">{APP_NAME}</span>
              </div>
            </div>
          </Section>

          <p className="text-center text-xs text-muted-foreground/50 mt-8">{copyright}</p>
        </div>
      </main>
    </div>
  )
}
