import React from "react";
import Card from "./Card.jsx";
const CardSection1 = () => {
  return (
    <div className="px-6 py-2 flex flex-wrap gap-3 justify-center items-center">
      <Card
        name="Independency"
        description="Explore the creativity of independent designers from around the globe."
      />
      <Card
        name="Uniquity"
        description="Discover the charm of unique pieces that stand out effortlessly."
      />
      <Card
        name="Sustainability"
        description="Embrace eco-conscious fashion choices without compromising on style."
      />
      <Card
        name="Quality"
        description="Experience unparalleled craftsmanship and attention to detail."
      />
    </div>
  );
};

export default CardSection1;
