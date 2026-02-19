import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="relative">
      <Navbar />
      
      {/* Hero Section Placeholder */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="glass p-12 rounded-3xl max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Hi, I'm <span className="text-blue-400">Musafir Sumon</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            A passionate Frontend Developer building "smarter and visually appealing" web experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition">
              View Projects
            </button>
            <button className="px-8 py-3 glass hover:bg-white/20 rounded-full font-bold transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default App;