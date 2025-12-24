import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
const AdvantageCard = () => {
  return (
    <div className="h-1/3 w-full text-white p-6 md:p-10  bg-[#1E1E1E] rounded-xl flex flex-col gap-4">
      <h1 className="text-xl md:text-2xl uppercase tracking-tighter text-zinc-300">
        INDEPENDENT DESIGNERS
      </h1>
      <div className="content flex flex-col md:flex-row justify-between gap-4">
        <p className="text-sm w-full md:w-3/4 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          vel reprehenderit necessitatibus repudiandae quia illum repellendus
          modi nesciunt hic itaque deserunt dicta vitae, commodi eius blanditiis
          accusantium officiis perspiciatis? Hic.
        </p>
        <div className="learnmore mt-6 flex  items-center gap-4 text-gray-300 text-sm">
          <div className="circle h-10 w-10 text-xl rotate-225 rounded-full bg-[#4B4B4B] flex items-center justify-center border-2 ">
            <FaLongArrowAltDown />
          </div>
          <span>LEARN MORE</span>
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;
