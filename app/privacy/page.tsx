"use client"

import { Shield, Mail, Globe } from "lucide-react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { useTranslation } from "@/contexts/language-context"

const LAST_UPDATED = "March 13, 2026"
const APP_NAME = "ApexCam"
const COMPANY_NAME = "ApexCam, operated by Apex View, registered in Israel"
const CONTACT_EMAIL = "support@apex-view.org"
const PRIVACY_PORTAL = "https://apex-view.org/privacy"

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

function Subhead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold text-primary tracking-wide uppercase mt-4 mb-2">
      {children}
    </p>
  )
}

interface DataRowProps {
  label: string
  value: string
  isLast?: boolean
}

function DataRow({ label, value, isLast }: DataRowProps) {
  return (
    <div className={`flex gap-4 py-2.5 ${!isLast ? "border-b border-border/50" : ""}`}>
      <span className="w-36 shrink-0 text-sm font-semibold text-foreground">{label}</span>
      <span className="text-sm text-muted-foreground leading-snug">{value}</span>
    </div>
  )
}

export default function PrivacyPage() {
  const t = useTranslation()
  const p = t.privacy

  const s6Note = p.s6Note.replace("{email}", CONTACT_EMAIL)
  const s7Text2 = p.s7Text2.replace("{email}", CONTACT_EMAIL)
  const copyright = p.copyright.replace("{year}", String(new Date().getFullYear())).replace("{company}", COMPANY_NAME)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero banner */}
        <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background py-12 max-w-3xl mx-auto mb-10 border-b border-border">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-foreground mb-3">{p.title}</h1>
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <Shield className="h-4 w-4" />
              <span>{p.lastUpdated} {LAST_UPDATED}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-3xl">
          {/* Intro card */}
          <div className="mb-8 p-5 bg-primary/5 border border-primary/20 rounded-xl flex gap-3 items-start">
            <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">{p.intro}</p>
          </div>

          <Section title={p.s1Title}>
            <BodyText className="mb-2">{p.s1Intro}</BodyText>

            <Subhead>{p.s1AccountHead}</Subhead>
            <Bullet>{p.s1Account1}</Bullet>
            <Bullet>{p.s1Account2}</Bullet>
            <Bullet>{p.s1Account3}</Bullet>

            <Subhead>{p.s1DeviceHead}</Subhead>
            <Bullet>{p.s1Device1}</Bullet>
            <Bullet>{p.s1Device2}</Bullet>
            <Bullet>{p.s1Device3}</Bullet>
            <Bullet>{p.s1Device4}</Bullet>

            <Subhead>{p.s1LocationHead}</Subhead>
            <Bullet>
              <strong className="text-foreground">{p.s1Location1Label}</strong>{p.s1Location1}
            </Bullet>
            <Bullet>
              <strong className="text-foreground">{p.s1Location2Label}</strong>{p.s1Location2}
            </Bullet>
            <Bullet>
              <strong className="text-foreground">{p.s1Location3Label}</strong>{p.s1Location3}
            </Bullet>

            <Subhead>{p.s1CameraHead}</Subhead>
            <Bullet>{p.s1Camera1}</Bullet>
            <Bullet>{p.s1Camera2}</Bullet>
            <Bullet>{p.s1Camera3}</Bullet>
          </Section>

          <Section title={p.s2Title}>
            <DataRow label={p.s2Row1Label} value={p.s2Row1Value} />
            <DataRow label={p.s2Row2Label} value={p.s2Row2Value} />
            <DataRow label={p.s2Row3Label} value={p.s2Row3Value} />
            <DataRow label={p.s2Row4Label} value={p.s2Row4Value} />
            <DataRow label={p.s2Row5Label} value={p.s2Row5Value} isLast />
            <BodyText className="mt-3">{p.s2Note}</BodyText>
          </Section>

          <Section title={p.s3Title}>
            <BodyText>
              {p.s3Intro}
            </BodyText>
            <div className="mt-4 space-y-0">
              {[
                { name: "Supabase", use: p.s3SupabaseUse, retention: p.s3SupabaseRetention },
                { name: "Google Maps Platform", use: p.s3GoogleMapsUse, retention: p.s3GoogleMapsRetention },
                { name: "Firebase (Google)", use: p.s3FirebaseUse, retention: p.s3FirebaseRetention },
              ].map((item, index, arr) => (
                <div
                  key={item.name}
                  className={`py-3 ${index < arr.length - 1 ? "border-b border-border/50" : ""}`}
                >
                  <p className="text-sm font-bold text-foreground mb-1">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.use}</p>
                  <p className="text-xs text-primary mt-1">{p.s3RetentionLabel} {item.retention}</p>
                </div>
              ))}
            </div>
            <BodyText className="mt-3">{p.s3Legal}</BodyText>
          </Section>

          <Section title={p.s4Title}>
            <BodyText>{p.s4Intro}</BodyText>
            <Bullet><strong className="text-foreground">{p.s4Point1Label}</strong>{p.s4Point1}</Bullet>
            <Bullet><strong className="text-foreground">{p.s4Point2Label}</strong>{p.s4Point2}</Bullet>
            <Bullet><strong className="text-foreground">{p.s4Point3Label}</strong>{p.s4Point3}</Bullet>
            <Bullet><strong className="text-foreground">{p.s4Point4Label}</strong>{p.s4Point4}</Bullet>
            <BodyText className="mt-3">{p.s4Note}</BodyText>
          </Section>

          <Section title={p.s5Title}>
            <BodyText>{p.s5Intro}</BodyText>
            <Bullet>{p.s5Point1}</Bullet>
            <Bullet>{p.s5Point2}</Bullet>
            <Bullet>{p.s5Point3}</Bullet>
            <Bullet>{p.s5Point4}</Bullet>
          </Section>

          <Section title={p.s6Title}>
            <BodyText>{p.s6Intro}</BodyText>
            <Bullet><strong className="text-foreground">{p.s6Point1Label}</strong>{p.s6Point1}</Bullet>
            <Bullet><strong className="text-foreground">{p.s6Point2Label}</strong>{p.s6Point2}</Bullet>
            <Bullet><strong className="text-foreground">{p.s6Point3Label}</strong>{p.s6Point3}</Bullet>
            <Bullet><strong className="text-foreground">{p.s6Point4Label}</strong>{p.s6Point4}</Bullet>
            <Bullet><strong className="text-foreground">{p.s6Point5Label}</strong>{p.s6Point5}</Bullet>
            <Bullet><strong className="text-foreground">{p.s6Point6Label}</strong>{p.s6Point6}</Bullet>
            <BodyText className="mt-3">{s6Note}</BodyText>
          </Section>

          <Section title={p.s7Title}>
            <BodyText>{p.s7Text1}</BodyText>
            <BodyText className="mt-3">{s7Text2}</BodyText>
          </Section>

          <Section title={p.s8Title}>
            <BodyText className="mb-2">{p.s8Intro}</BodyText>
            <DataRow label={p.s8CameraLabel} value={p.s8CameraValue} />
            <DataRow label={p.s8MicLabel} value={p.s8MicValue} />
            <DataRow label={p.s8LocationLabel} value={p.s8LocationValue} />
            <DataRow label={p.s8BgLocationLabel} value={p.s8BgLocationValue} />
            <DataRow label={p.s8NotifLabel} value={p.s8NotifValue} />
            <DataRow label={p.s8PhotoLabel} value={p.s8PhotoValue} isLast />
            <BodyText className="mt-3">{p.s8Note}</BodyText>
          </Section>

          <Section title={p.s9Title}>
            <BodyText>{p.s9Text1}</BodyText>
            <BodyText className="mt-3">{p.s9Text2}</BodyText>
          </Section>

          <Section title={p.s10Title}>
            <BodyText>{p.s10Text1}</BodyText>
            <BodyText className="mt-3">{p.s10Text2}</BodyText>
          </Section>

          <Section title={p.s11Title}>
            <BodyText>{p.s11Text}</BodyText>
          </Section>

          <Section title={p.s12Title}>
            <BodyText>{p.s12Intro}</BodyText>
            <div className="mt-4 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="font-semibold text-foreground">{p.s12EmailLabel}</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-primary shrink-0" />
                <span className="font-semibold text-foreground">{p.s12PortalLabel}</span>
                <a href={PRIVACY_PORTAL} target="_blank" rel="noreferrer" className="text-primary hover:underline">{PRIVACY_PORTAL}</a>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">{p.s12AppLabel}</span>{" "}
                <span className="text-muted-foreground">{APP_NAME}</span>
              </div>
            </div>
            <BodyText className="mt-4 italic">{p.s12Legal}</BodyText>
          </Section>

          <p className="text-center text-xs text-muted-foreground/50 mt-8">{copyright}</p>
        </div>
      </main>
    </div>
  )
}
