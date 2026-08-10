import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductSection featuredOnly={true} />
        <TrustBadges />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
