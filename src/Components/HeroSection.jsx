import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="hero-section h-[92vh] w-screen  flex items-center justify-center  p-4 pr-8 overflow-hidden">
      <div className="container max-w-full rounded-3xl  h-[90vh] w-full bg-[url(/hero.png)] bg-contain bg-center">
        <h1 className="text-zinc-300 text-4xl md:text-6xl lg:text-9xl font-light absolute top-[50%] left-4 md:left-10 lg:left-20">
          DESIGN <br />{" "}
          <span className="text-[#a8a8a8b9] pl-10 md:pl-20 lg:pl-40">
            & FREEDOM
          </span>
          <div className="miniContainer flex flex-col md:flex-row w-[calc(100vw-2rem)] md:w-[80vw] justify-between items-start md:items-center gap-4">
            <p className="text-sm md:text-lg lg:text-xl font-thin mt-6 pl-10 md:pl-20 lg:pl-40 ">
              Explore Independent Style by Embracing Uniqueness <br /> with Our
              Exclusive Designer Apparel
            </p>
            <div className="learnmore text-sm flex items-center justify-center">
              <div className="circle h-10 w-10 text-xl opacity-80 flex items-center justify-center bg-[#00000048] rounded-full">
                <FaLongArrowAltDown />
              </div>
              <span className="ml-4 font-light">LEARN MORE</span>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
