import React from "react";
import Stat from "./Stat.jsx";
const StatsSection = () => {
  return (
    <div className="stats-section flex flex-wrap justify-evenly items-center gap-8 md:gap-20 lg:gap-40 py-6">
      <Stat title="Designers" count="150+" />
      <Stat title="Clients" count="500+" />
      <Stat title="Masterpieces" count="20K+" />
      <Stat title="Events" count="50+" />
    </div>
  );
};

export default StatsSection;
