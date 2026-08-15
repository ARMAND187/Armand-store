import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import FeaturesSection from "@/components/FeaturesSection";
import ReviewsSection from "@/components/ReviewsSection";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* View Full Store Button replacing Top Products */}
        <FadeIn direction="up">
          <section className="pb-16 flex justify-center px-4 relative z-10 -mt-8 sm:-mt-12">
            <Link href="/store" className="glass-card inline-flex items-center gap-3 px-10 sm:px-14 py-5 sm:py-6 text-xl sm:text-2xl font-semibold rounded-3xl w-full sm:w-auto justify-center text-white hover:bg-white/5 transition-all duration-300 relative overflow-hidden group border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <span className="relative z-10 flex items-center gap-3 tracking-wide">
                View Full Store
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Link>
          </section>
        </FadeIn>

        <FeaturesSection />
        <ReviewsSection />

        <FadeIn direction="up">
          <SocialSection />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
