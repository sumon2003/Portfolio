import React from 'react';
import { FaUserCircle, FaGraduationCap, FaCode } from 'react-icons/fa';

/*
    About Section Component
*/
const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-slate-400 italic">Get to know the developer behind the code.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Visual/Image Placeholder */}
        <div className="flex justify-center relative">
          <div className="w-64 h-64 md:w-80 md:h-80 glass rounded-[3rem] overflow-hidden border-2 border-blue-500/30 relative z-10">
            
            <img 
              src="#" 
              alt="Musafir Sumon" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Decorative background shape */}
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -z-10"></div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">
            I am <span className="text-blue-400">Musafir Sumon</span>, a creative Frontend Developer.
          </h3>
          
          <p className="text-slate-300 leading-relaxed text-lg">
            With a strong foundation in both frontend and backend technologies, I specialize in building 
            responsive, high-performance web applications. My goal is to combine clean code with 
            exceptional design to provide the best user experience.
          </p>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="glass p-4 rounded-2xl flex items-center gap-4">
              <FaGraduationCap className="text-blue-400 text-2xl" />
              <div>
                <h4 className="font-bold text-white">Education</h4>
                <p className="text-xs text-slate-400">CSE Graduate</p>
              </div>
            </div>
            <div className="glass p-4 rounded-2xl flex items-center gap-4">
              <FaCode className="text-purple-400 text-2xl" />
              <div>
                <h4 className="font-bold text-white">Experience</h4>
                <p className="text-xs text-slate-400">2+ Years Coding</p>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
             <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:opacity-90 transition-all">
                Download Resume
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;