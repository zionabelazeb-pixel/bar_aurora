/**
 * Home — Bar Aurora Dai Chimici
 * Design: Warm Trattoria Energy
 * Assembles all sections in order per the bar-restaurant-website-redesign skill.
 */
import About from "@/components/About";
import Contact from "@/components/Contact";
import Feste from "@/components/Feste";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import WhyUs from "@/components/WhyUs";
import HowToOrder from "@/components/HowToOrder";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#FDF6EC" }}>
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <Hero />

      {/* 3. Marquee Ticker */}
      <Marquee />
      {/* 4. How To Order */}
      <HowToOrder />

      {/* 5. About + Quick Access */}
      <About />

      {/* 5. Why Us */}
      <WhyUs />

      {/* 6. Gallery */}
      <Gallery />

      {/* 7. Menu */}
      <Menu />

      {/* 8. Reviews */}
      <Reviews />

      {/* 9. Feste & Lauree */}
      <Feste />

      {/* 10. Contact & Hours */}
      <Contact />

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
