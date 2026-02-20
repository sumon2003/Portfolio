import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-slate-900/50 pt-16 pb-8 px-4 border-t border-white/5 mt-20">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button onClick={scrollToTop} className="p-4 bg-blue-600 rounded-full text-white shadow-lg hover:-translate-y-1 transition-all">
          <FaArrowUp size={20} />
        </button>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">Musafir Sumon</h2>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/sumon2003" target="_blank" className="text-slate-500 hover:text-white transition-colors"><FaGithub size={22} /></a>
          <a href="https://www.linkedin.com/in/md-sumon-hossain-khan-885961266/" target="_blank" className="text-slate-500 hover:text-blue-400 transition-colors"><FaLinkedin size={22} /></a>
          <a href="https://wa.me/8801646819343" target="_blank" className="text-slate-500 hover:text-green-500 transition-colors"><FaWhatsapp size={22} /></a>
        </div>
        <p className="text-slate-500 text-xs border-t border-white/5 pt-8">
          © {new Date().getFullYear()} Musafir Sumon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;