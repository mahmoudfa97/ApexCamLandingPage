import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Hardware } from "@/components/landing/hardware"
import { AppFeatures } from "@/components/landing/app-features"
import { SocialProof } from "@/components/landing/social-proof"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Hardware />
      <AppFeatures />
      {/* <SocialProof /> */}
      <Footer />
    </main>
  )
}
