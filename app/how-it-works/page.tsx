import Header from "@/components/Header";
import HowToOrder from "@/components/HowToOrder";
import PaymentMethods from "@/components/PaymentMethods";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { TELEGRAM_URL } from "@/config/site";

export default function HowItWorksPage() {
  return (
    <>
      <Header />
    <main className="pt-32 pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16">
          <p className="section-eyebrow mb-3">Support & Guides</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-[#8b8ba8] text-lg max-w-2xl mx-auto mb-8">
            Everything you need to know about ordering, paying, and reaching our support team.
          </p>
          <div className="flex justify-center">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-base shadow-[0_0_20px_rgba(124,58,237,0.3)] animate-pulse hover:animate-none hover:scale-105 transition-transform"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.02 9.52c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.883.701z" />
              </svg>
              JOIN TELEGRAM CHANNEL
            </a>
          </div>
        </div>
        
        <div className="space-y-16 sm:space-y-24">
          <HowToOrder />
          <PaymentMethods />
          <FAQSection />
        </div>
        
        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
