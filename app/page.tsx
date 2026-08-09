import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import HowToOrder from "@/components/HowToOrder";
import PaymentMethods from "@/components/PaymentMethods";
import SocialSection from "@/components/SocialSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <HowToOrder />
        <PaymentMethods />
        <SocialSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
