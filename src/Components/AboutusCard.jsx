import React from "react";

const AboutusCard = () => {
  return (
    <div className="h-full w-full md:w-1/2 p-6 md:p-10 lg:p-14  bg-[#1E1E1E] rounded-xl">
      <div className="headings flex flex-col gap-6 md:gap-10 text-white">
        <h1 className="uppercase tracking-tighter text-zinc-300">About</h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          WHERE FASHION MEETS FREEDOM
        </h1>
      </div>
      <div className="paraArea flex flex-col md:flex-row gap-6 md:gap-10 mt-6 md:mt-10 text-sm md:text-base text-zinc-500">
        <p>
          We believe that fashion should be an expression of individuality. We
          encourage creativity and originality in every item we offer,
          presenting customers with exclusive collections from independent
          designers. With a commitment to fostering a community of creativity
          and innovation,
        </p>
        <p>
          we strive to connect designers with fashion enthusiasts who appreciate
          the artistry and individuality behind each piece. Driven by our
          dedication to authenticity, we curate each collection with a keen eye
          for unique designs that inspire confidence and self-expression.
        </p>
      </div>
    </div>
  );
};

export default AboutusCard;
