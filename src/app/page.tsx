import NavBar from "@/components/NavBar/NavBar";
import HeroSection from "@/components/HeroSection/HeroSection";
import WorksSection from "@/components/Works/WorksSection";
import AboutSection from "@/components/About/AboutSection";
import Footer from "@/components/Footer/Footer";
import ContactPopup from "@/components/ContactPopup/ContactPopup";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <WorksSection />
      <AboutSection />
      <Footer />
      <ContactPopup />
    </main>
  );
}
