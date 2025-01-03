import React from "react";

import Banner from "./Banner";
import Education from "./Education";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";
import Projects from "./Projects";
import About from "./About";
import IntrestedFields from "./IntrestedFields";
import Contact from "./Contact";

const Home = () => {
  const bg_color_for_tailwind = "bg-gradient-to-r from-[hsla(164,38%,18%,1)] to-[hsla(158,77%,77%,1)]";

  return (
    <>
      <div id="banner">
        <Banner bg_color={bg_color_for_tailwind} />
      </div>
      <div id="education">
        <Education bg_color={bg_color_for_tailwind} />
      </div>
      <div id="skills">
        <Skills bg_color={bg_color_for_tailwind} />
      </div>
      <div id="soft-skills">
        <SoftSkills bg_color={bg_color_for_tailwind} />
      </div>
      <div id="projects">
        <Projects bg_color={bg_color_for_tailwind} />
      </div>
      <div id="about">
        <About bg_color={bg_color_for_tailwind} />
      </div>
      <div id="intrested-fields">
        <IntrestedFields bg_color={bg_color_for_tailwind} />
      </div>
      <div id="contact">
        <Contact bg_color={bg_color_for_tailwind} />
      </div>
    </>
  );
};

export default Home;
