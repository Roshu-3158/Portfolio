import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 md:py-24 px-6 md:px-[10vw] lg:px-[15vw] xl:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
        SKILLS
      </h2>
      <div className="w-20 h-1.5 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-400 mt-6 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories Container */}
    <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900/80 backdrop-blur-md p-6 sm:p-8 w-full lg:w-[48%] xl:w-[45%] rounded-3xl border border-white/10 
          shadow-[0_0_30px_1px_rgba(130,69,236,0.15)] transition-all duration-300 hover:border-[#8245ec]/50"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-200 mb-8 text-center uppercase tracking-wide">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1500}
            gyroscope={true}
          >
            {/* Responsive Grid: 2 cols on tiny, 3 on medium, 2 on large (inside half-width card) */}
            <div className="grid grid-cols-2 xs:grid-cols-3 gap-3 sm:gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-gray-800/50 border border-gray-700 hover:border-[#8245ec] rounded-xl py-3 px-2 text-center transition-colors duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                  />
                  <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-300 break-words">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;