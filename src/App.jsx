import React from "react";
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import CardSection1 from "./Components/CardSection1.jsx";
import StatsSection from "./Components/StatsSection.jsx";
import AboutusSection from "./Components/AboutusSection.jsx";
import OurAdvantagesSection from "./Components/OurAdvantagesSection.jsx";
const App = () => {
  return (
    <div className="app  bg-[#060503] overflow-hidden">
      <Navbar />
      <HeroSection />
      <CardSection1 />
      <StatsSection />
      <AboutusSection />
      <OurAdvantagesSection />
    </div>
  );
};

export default App;
