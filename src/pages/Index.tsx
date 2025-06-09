
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TrackRecordSection from "../components/TrackRecordSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrackRecordSection />
      <WhatWeDoSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
