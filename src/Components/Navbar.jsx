import React from "react";

const Navbar = () => {
  let navlinks = ["DESIGNERS", "COLLABS", "EVENTS", "BLOG", "CARD"];
  return (
    <div className="navbar text-white flex items-center justify-between p-4 ">
      <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
        DVSY
      </h1>
      <div className="nav-links hidden lg:flex gap-2">
        {navlinks.map((link) => (
          <a
            href="#home"
            className=" px-4 py-2  bg-[#1E1E1E] tracking-tighter rounded-md hover:bg-[#333333]"
          >
            {link}
          </a>
        ))}
        <a
          href=""
          className=" px-4 py-2 uppercase bg-[#d34f31] tracking-tighter rounded-md hover:bg-[#f30c0cdf]"
        >
          Get In touch
        </a>
      </div>
    </div>
  );
};

export default Navbar;
