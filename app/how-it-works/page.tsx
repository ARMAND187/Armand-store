import Header from "@/components/Header";
import HowToOrder from "@/components/HowToOrder";
import PaymentMethods from "@/components/PaymentMethods";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16">
          <p className="section-eyebrow mb-3">Support & Guides</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-[#8b8ba8] text-lg max-w-2xl mx-auto">
            Everything you need to know about ordering, paying, and reaching our support team.
          </p>
        </div>
        
        <HowToOrder />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 my-20">
          <div className="h-px bg-white/5 w-full" />
        </div>
        
        <PaymentMethods />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 my-20">
          <div className="h-px bg-white/5 w-full" />
        </div>

        <FAQSection />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 my-20">
          <div className="h-px bg-white/5 w-full" />
        </div>
        
        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
