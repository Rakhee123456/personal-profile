import React from "react";
import AboutProfile from "../../assests/20240605_090558.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"; // Import FontAwesome brand icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome solid icons

const About = ({ bg_color }) => {
  return (
    <div className={` ${bg_color} flex justify-center items-center mb-5`}>
      <div
        className={`mx-auto ${bg_color} shadow-lg p-8 rounded-lg md:flex md:gap-8`}
      >
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <div className="relative">
            <img
              src={AboutProfile}
              alt="Rakhee Pandey"
              className="w-64 h-80 object-cover rounded-lg border-4 border-gray-200 shadow-lg shadow-white"
            />
            <div className="absolute inset-0 border-8 border-blue-400 rounded-lg -z-10 top-2 left-2"></div>
          </div>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4 text-light">
            About{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-teal-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(56,178,172,0.8)]">
              Rakhee Pandey
            </span>
          </h1>
          <p className="text-light mb-4">
            Hello! I’m <strong>Rakhee Pandey</strong>, a passionate Computer
            Engineering student based in Koteshwor, Kathmandu, Nepal. I am
            currently pursuing my Bachelor of Engineering (Computer Engineering)
            from Nepal Engineering College, PU, with a strong foundation in
            computer architecture, programming, and problem-solving.
          </p>
          <p className="text-light mb-4">
            Over the years, I have worked on exciting projects such as the{" "}
            <em>Smart Irrigation System</em>, <em>Virtual Assistant</em>, and{" "}
            <em>Nepali Optical Character Recognition (OCR)</em>. These projects
            have helped me develop skills in programming languages like Python,
            C++, and JavaScript, as well as tools like MATLAB, Tesseract, and
            Visual Studio Code.
          </p>
          <p className="text-light mb-4">
            Feel free to check out my work on
            <a
              href="https://github.com/Rakhee123456"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {" "}
              GitHub{" "}
            </a>
            or connect with me on
            <a
              href="https://www.linkedin.com/in/rakhee-pandey-2b497a220/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {" "}
              LinkedIn
            </a>
            .
          </p>
          <p className="text-light mb-4">
            You can also contact me directly via{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rakheepandey5712@gmail.com"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>{" "}
            or WhatsApp:
            <a
              href="https://wa.me/9779745372200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 font-semibold"
            >
              {" "}
              +977 9745372200
            </a>
            .
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/Rakhee123456"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faGithub} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakhee-pandey-2b497a220/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faLinkedin} color="white" />
            </a>
            <a
              href="https://wa.me/9779745372200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:text-green-600"
            >
              <FontAwesomeIcon icon={faWhatsapp} color="white" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rakheepandey5712@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:text-red-600"
            >
              <FontAwesomeIcon icon={faEnvelope} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
