import React from 'react';
import Navbar from './components/Navbar';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

/**
 * Main Application Component
 * This file serves as the main entry point where all sections are organized.
 */
function App() {
  return (
    <div className="relative overflow-x-hidden min-h-screen">

      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

        {/* Main Hero Card using Glassmorphism effect */}
        <div className="glass p-12 rounded-[2.5rem] max-w-3xl border-white/20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Musafir Sumon</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            A passionate Frontend Developer building <span className="text-blue-400 font-semibold">smarter</span> and <span className="text-purple-400 font-semibold">visually appealing</span> web experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <a href="#projects" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-bold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              View My Work
            </a>
            
            {/* Secondary Button */}
            <a href="#skills" className="px-10 py-4 glass hover:bg-white/20 rounded-2xl font-bold transition-all">
              My Expertise
            </a>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      
    </div>
  );
}

export default App;