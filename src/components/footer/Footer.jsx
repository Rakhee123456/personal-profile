import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[hsla(164,38%,18%,1)] to-[hsla(158,77%,77%,1)] text-light py-6 mb-1">
      <div className="max-w-full mx-auto px-4 flex flex-col justify-center items-center">
        {/* Left Section: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base text-light">
            &copy; {new Date().getFullYear()} Rakhee Pandey. All Rights Reserved.
          </p>
          <p className="text-xs text-center text-light">
            Designed & Developed by Rakhee Pandey
          </p>
        </div>

        {/* Right Section: Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/rakhee-pandey-2b497a220/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 mt-1" />
          </a>
          <a
            href="https://github.com/Rakhee123456"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-500 transition"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6 mt-1" />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 mt-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
