import React from 'react';
import { FaGraduationCap, FaCode, FaDownload } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import ScrollReveal from '../components/ScrollReveal';
import profileImg from '../assets/img/profile.png';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-20 relative">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        <p className="text-slate-400 mt-4 italic tracking-wide">Get to know the developer behind the code.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
        {/* Left Side: Animated Image Container */}
        <div className="relative group">
          {/* Main Photo Frame with Floating Animation */}
          <div className="relative z-10 w-full max-w-md mx-auto aspect-square glass rounded-[3.5rem] overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-all duration-700 animate-float">
            <img 
              src="src/assets/img/profile.png" 
              alt="Musafir Sumon" 
              className="w-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Background Decorative Circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>
        </div>

        {/* Right Side: Smart Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              I am a <br />
              <span className="text-blue-400">
                <Typewriter
                  words={['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-lg border-l-4 border-blue-600/30 pl-6 py-2">
              With a strong foundation in both frontend and backend technologies, I specialize in building 
              <span className="text-white font-medium"> responsive, high-performance web applications</span>. 
              My goal is to combine clean code with exceptional design to provide the best user experience.
            </p>
          </div>

          {/* Premium Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="glass p-6 rounded-[2rem] border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FaGraduationCap size={24} />
              </div>
              <h4 className="font-bold text-white text-lg">Education</h4>
              <p className="text-sm text-slate-400">CSE Graduate</p>
            </div>

            <div className="glass p-6 rounded-[2rem] border-white/5 hover:border-purple-500/30 transition-all hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <FaCode size={24} />
              </div>
              <h4 className="font-bold text-white text-lg">Experience</h4>
              <p className="text-sm text-slate-400">2+ Years Coding</p>
            </div>
          </div>
          
          <div className="pt-6">
            <a 
              href="/Resume.pdf" 
              download="Musafir_Sumon_Resume.pdf" 
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20"
            >
              <span className="relative z-10">Download Resume</span>
              <FaDownload className="relative z-10 group-hover:animate-bounce" />
              
              {/* Button Hover Shine Effect */}
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;