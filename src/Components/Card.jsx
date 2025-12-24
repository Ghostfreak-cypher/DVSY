import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
const Card = (props) => {
  return (
    <div className="h-60 w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.5625rem)] bg-[#1E1E1E]  rounded-xl p-6 md:p-12 flex flex-col justify-evenly gap-3">
      <h1 className="text-2xl text-white opacity-70 uppercase">{props.name}</h1>
      <p className="text-sm text-gray-300">{props.description}</p>
      <div className="learnmore mt-6 flex items-center gap-4 text-gray-300 text-sm">
        <div className="circle h-10 w-10 text-xl rotate-225 rounded-full bg-[#4B4B4B] flex items-center justify-center border-2 ">
          <FaLongArrowAltDown />
        </div>
        <span>LEARN MORE</span>
      </div>
    </div>
  );
};

export default Card;
