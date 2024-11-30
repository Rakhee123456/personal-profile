import React, { useState } from "react";

const projects = [
  {
    title: "Smart Irrigation System",
    description:
      "Developed and implemented a smart irrigation system aimed at optimizing water usage in agriculture through data-driven decision-making. Integrated Microcontroller (NodeMCU/ESP8266), soil moisture sensor, and smartphone for real-time monitoring.",
    technologies: "HTML, JavaScript, NodeMCU, Soil Moisture Sensor",
    github: "rakheepandey/smart-irrigation",
    link: "#",
  },
  {
    title: "Virtual Assistant",
    description:
      "Designed a GUI-based virtual assistant with voice command functionality and NLP capabilities. Streamlined daily tasks and provided personalized assistance.",
    technologies: "Python, HTML, CSS, JavaScript",
    github: "rakheepandey/virtual-assistant",
    link: "#",
  },
  {
    title: "Nepali Optical Character Recognition (OCR)",
    description:
      "Developed an OCR system to extract text from images containing Nepali script. Leveraged CNN and Tesseract to enhance accuracy and facilitate digitization efforts.",
    technologies: "Python, CNN, Tesseract, HTML, CSS, JavaScript",
    github: "rakheepandey/nepali-ocr",
    link: "#",
  },
  {
    title: "To-Do App",
    description:
      "Created a simple and efficient To-Do application to help users manage their daily tasks with ease. Features include task creation, editing, and deletion.",
    technologies: "ReactJS, Tailwind CSS",
    github: "rakheepandey/todo-app",
    link: "https://todo-app.vercel.app/",
  },
];

const Projects = ({ bg_color }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`container mx-auto mb-5 p-5 ${bg_color} rounded-lg shadow-lg max-w-full`}>
      <h2 className="text-3xl font-bold text-center mb-8 text-light">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group ${bg_color} rounded-lg shadow-md shadow-light overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer`}
            onClick={() => setSelectedProject(index)}
          >
            <div className="p-5">
              <h3 className="text-xl font-semibold text-light mb-2">{project.title}</h3>
              <hr className="border-b border-light mb-2" />
              <p className="text-light line-clamp-2">{project.description}</p>
              <p className="text-light mt-2 font-medium">
                Technologies: {project.technologies}
              </p>
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-yellow-600 to-teal-400 text-white p-5 transition-opacity duration-500 ease-in-out"
              style={{ zIndex: 1 }}
            >
              <p>{project.description}</p>
              <div className="mt-3 flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Deployed
                  </a>
                )}
                {project.github && (
                  <a
                    href={`https://github.com/${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
