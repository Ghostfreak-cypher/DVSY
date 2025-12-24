import React from "react";
import AboutusCard from "./AboutusCard";
import ImageContainer from "./ImageContainer";
const AboutusSection = () => {
  return (
    <>
      <div className="p-5 flex flex-col md:flex-row  gap-5">
        <AboutusCard />
        <ImageContainer imageUrl="/img1.png" height="h-[65.5vh]" />
      </div>
    </>
  );
};

export default AboutusSection;
