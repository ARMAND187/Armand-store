import Header from "@/components/Header";
import ProductSection from "@/components/ProductSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

export default function StorePage() {
  return (
    <>
      <Header />
      <main>
        <ProductSection featuredOnly={false} />
        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
