import React from 'react';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { profile } from '../config/profile';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10 text-center px-4">
        {/* Intro Badge */}
        <div className="inline-block px-4 py-1.5 mb-6 glass border-white/10 rounded-full">
          <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">
            Available for Hire
          </span>
        </div>

        {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{profile.brandName}</span>
          </h1>

        {/* Dynamic Subtext */}
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I build <span className="text-white font-semibold">modern web experiences</span> with a focus on performance, design, and user satisfaction.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#projects" className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
            View My Work
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 glass border-white/10 hover:border-white/20 text-white rounded-2xl font-bold transition-all">
            Let's Talk
          </a>
        </div>

        {/* Hero Socials */}
        <div className="flex items-center justify-center gap-6 text-slate-500">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      
      {/* Decorative Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
