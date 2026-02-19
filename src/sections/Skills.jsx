import React from 'react';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">
          Technical <span className="text-blue-400">Proficiency</span>
        </h2>
        <p className="text-slate-400">Visualizing my expertise across the stack.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillsData.map((category, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl border-white/10 hover:border-blue-500/20 transition-all">
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4 text-blue-400">
              <category.icon size={28} />
              <h3 className="text-2xl font-bold text-white">{category.category}</h3>
            </div>
            
            <div className="space-y-6">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="group">
                  <div className="flex justify-between mb-2 items-center">
                    <span className="flex items-center gap-3 font-medium text-slate-200">
                      {/* Font Awesome/Simple Icon based on color */}
                      <skill.icon style={{ color: skill.color }} size={20} className="group-hover:scale-120 transition-transform" />
                      {skill.name}
                    </span>
                    <span className="text-blue-400 text-xs font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="h-2 w-full bg-slate-900/50 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-500 transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(37,99,235,0.3)]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;