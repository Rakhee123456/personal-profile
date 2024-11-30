import React from "react";
import { Link } from "react-scroll";
import BannerProfile from "../../assests/upscaledimage.png";
import CV from "../../assests/CV.pdf";

const Banner = ({ bg_color }) => {
  return (
    <div
      className={`container rounded-b-2xl min-h-[75vh] max-w-full flex flex-col lg:flex-row justify-center lg:justify-start ${bg_color} relative overflow-hidden mb-5 items-center p-5 lg:px-44 mt-11 `}
    >
      {/* Image with Magical Lighting Frame */}
      <div className="relative lg:flex-1 flex justify-center lg:justify-start">
        {/* 3D Shadow and Magical Glow */}
        <div
          className={`absolute inset-0 ${bg_color} rounded-full blur-lg opacity-80 animate-pulse lg:top-0 lg:h-[300px] lg:w-[300px] h-[250px] w-[250px]`}
        ></div>

        <img
          src={BannerProfile}
          alt="banner"
          className="relative rounded-full w-48 sm:w-60 lg:w-80 border-4 border-white shadow-xl p-3 transform scale-100 transition-transform duration-500 hover:scale-110 hover:rotate-3"
          style={{
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",
            marginTop: "10px",
          }}
        />
      </div>

      {/* Content side with some description */}
      <div className="z-10 px-5 lg:flex-1 text-center lg:text-left mt-5 lg:mt-0">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg">
          Hi! I'm{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-teal-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(56,178,172,0.8)]">
            Rakhee Pandey
          </span>
        </h1>
        <p className="text-light text-base sm:text-lg md:text-xl mt-4">
          I'm a web developer and artificial intelligence enthusiast passionate
          about turning ideas into solutions for real-world problems. My
          projects, such as the Smart Irrigation System and Nepali Optical
          Character Recognition (OCR), reflect my dedication to innovation and
          technology-driven solutions.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row items-center gap-5 drop-shadow-md">
          <Link
            to="contact"
            className="text-light text-lg sm:text-xl md:text-2xl font-bold border-2 rounded-full p-3 text-center hover:bg-secondary cursor-pointer w-full lg:w-auto"
            duration={500}
            smooth={true}
          >
            Contact
          </Link>
          <a
            href={CV}
            download="Rakhee_Pandey_CV.pdf"
            className="text-light text-lg sm:text-xl md:text-2xl font-bold border-2 rounded-full p-3 text-center hover:bg-secondary cursor-pointer w-full lg:w-auto"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
