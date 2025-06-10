import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FounderSection from "../components/FounderSection";
import ServicesSection from "../components/ServicesSection";
import TrackRecordSection from "../components/TrackRecordSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrackRecordSection />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Index;
