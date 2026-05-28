import AboutSection from "./Components/About";
import ApproachSection from "./Components/Approach";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <Footer />
    </>
  );
}
