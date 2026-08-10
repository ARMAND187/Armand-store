import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* View Full Store Button replacing Top Products */}
        <section className="py-12 sm:py-16 flex justify-center px-4 relative z-10">
          <Link href="/store" className="btn-ghost inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 text-lg font-bold rounded-2xl w-full sm:w-auto justify-center shadow-lg shadow-violet-900/10 hover:-translate-y-1 transition-transform">
            View Full Store
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </section>

        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
