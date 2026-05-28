import AboutSection from "./Components/About";
import ApproachSection from "./Components/Approach";
import ContactSection from "./Components/ContactUs";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ServicesSection from "./Components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <ContactSection />
      <Footer />
    </>
  );
}
