import React from "react";
import { skillsData } from "../constants";

const Skills = () => {
  return (
    <section className="c-space my-20" id="skills">
      <div className="w-full text-white">
        <p className="head-text mb-3">Skills & Expertise</p>
        <p className="text-gray_gradient text-lg max-w-2xl mb-12">
          Specialized in React Native mobile app development, advanced AI integrations, cloud services, and scalable architecture.
        </p>

        <div className="flex flex-col gap-12">
          {skillsData.map((group, groupIdx) => (
            <div key={groupIdx} className="flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-black-300 pb-3">
                <div className="w-9 h-9 rounded-lg bg-black-300 p-1.5 flex items-center justify-center border border-white/10">
                  <img src={group.icon} alt={group.category} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-white font-generalsans">{group.category}</h3>
              </div>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                {group.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="grid-container hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {skill.title}
                      </h4>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-cyan-300 border border-cyan-500/20 font-medium whitespace-nowrap">
                        {skill.badge}
                      </span>
                    </div>
                    <p className="grid-subtext text-sm leading-relaxed">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
