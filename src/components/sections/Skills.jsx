import React from "react";

const skills = [
  { category: "Web Development", skills: ["JavaScript", "HTML", "CSS","ReactJS", "Django"] },
  { category: "AI & Machine Learning", skills: ["Python", "TensorFlow", "OpenCV",  "CNN"] },

];

const skillLevels = {
  "JavaScript": 50,
  "HTML": 75,
  "CSS": 60,
  "ReactJS": 45,
  "Django": 30,
  "Python": 60,
  "TensorFlow": 30,
  "OpenCV": 45,
  "CNN": 35,

};

const Skills = ({bg_color}) => {
  return (
    <div className={`container mx-auto mb-5 p-5 ${bg_color} rounded-lg shadow-lg max-w-full`}>
      <h2 className="text-3xl font-bold text-center mb-8 text-light">Technical Skills</h2>
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-light mb-4">{skillCategory.category}</h3>
          <div className="space-y-4">
            {skillCategory.skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between">
                  <span className="text-light">{skill}</span>
                  <span className="text-light text-sm">{skillLevels[skill]}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${skillLevels[skill]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
