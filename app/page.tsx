import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import RobotLoader from "@/components/RobotLoader";

export default function HomePage() {
  return (
    <>
      <Header />
      <RobotLoader />
      <main>
        <Hero />
        
        {/* View Full Store Button replacing Top Products */}
        <section className="pb-16 flex justify-center px-4 relative z-10 -mt-8 sm:-mt-12">
          <Link href="/store" className="inline-flex items-center gap-3 px-10 sm:px-14 py-5 sm:py-6 text-xl sm:text-2xl font-black rounded-3xl w-full sm:w-auto justify-center bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_30px_rgba(124,58,237,0.4)] animate-breathe transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10 flex items-center gap-3">
              View Full Store
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </Link>
        </section>

        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
