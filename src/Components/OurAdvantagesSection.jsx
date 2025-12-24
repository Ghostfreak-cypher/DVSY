import React from "react";
import ImageContainer from "./ImageContainer";
import AdvantageCard from "./AdvantageCard";
const OurAdvantagesSection = () => {
  return (
    <div className="our-advantages-section ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-zinc-50 p-6 md:p-10">
        OUR ADVANTAGES
      </h1>
      <div className="h-full w-screen pr-8 flex overflow-hidden flex-col md:flex-row gap-5 p-5">
        <ImageContainer imageUrl="/img2.png" height="h-[40vh] md:h-[65.5vh]" />
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <AdvantageCard />
          <AdvantageCard />
        </div>
      </div>
      <div className="h-full w-screen flex pr-8  overflow-hidden flex-col md:flex-row-reverse gap-5 p-5">
        <ImageContainer imageUrl="/img3.png" height="h-[40vh] md:h-[65.5vh]" />
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <AdvantageCard />
          <AdvantageCard />
        </div>
      </div>
    </div>
  );
};

export default OurAdvantagesSection;
