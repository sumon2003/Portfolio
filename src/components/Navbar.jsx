import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-2xl">
        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Musafir_Sumon
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* Light/Dark Toggle (Placeholder) */}
        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
          🌙
        </button>
      </div>
    </nav>
  );
};

export default Navbar;