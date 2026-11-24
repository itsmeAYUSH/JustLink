import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { VaultDemo } from "@/components/vault-demo";
import { ExtensionShowcase } from "@/components/extension-showcase";
import { BentoFeatures } from "@/components/bento-features";
import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import { CTABanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#090a0d] text-[#f4f4f6]">
      <Navbar />
      <main>
        <Hero />
        <VaultDemo />
        <ExtensionShowcase />
        <BentoFeatures />
        <Comparison />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
