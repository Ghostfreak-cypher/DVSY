import React from "react";

const ImageContainer = (props) => {
  return (
    <div
      className={`w-full md:w-1/2 rounded-xl bg-cover bg-center bg-no-repeat ${
        props.height || "h-full"
      }`}
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    ></div>
  );
};

export default ImageContainer;
