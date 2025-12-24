import React from "react";

const Stat = (props) => {
  return (
    <div className="flex flex-col justify-center items-start uppercase text-white gap-2 p-4">
      <h4 className="text-sm md:text-base lg:text-lg tracking-tighter text-zinc-600">
        {props.title}
      </h4>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter ">
        {props.count}
      </h1>
    </div>
  );
};

export default Stat;
