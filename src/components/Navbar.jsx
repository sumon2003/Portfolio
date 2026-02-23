import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { profile } from '../config/profile';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 140;
      let currentSection = '#home';

      NAV_LINKS.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = link.href;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-2' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`glass flex items-center justify-between px-6 py-3 rounded-2xl border-white/10 ${scrolled ? 'bg-slate-900/80 shadow-2xl' : ''}`}>
          
          {/* Logo */}
          <div className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tighter cursor-pointer">
            {profile.brandName}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-[13px] uppercase tracking-widest font-bold">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition-colors ${activeSection === link.href ? 'text-blue-400' : 'text-slate-400 hover:text-blue-400'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions (Toggle & Mobile Menu Button) */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="hidden sm:block p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600/20 transition-all"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              className="md:hidden text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        <div className={`fixed inset-y-0 right-0 w-[280px] bg-slate-950/95 backdrop-blur-xl z-50 transform transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} border-l border-white/10`}>
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-end mb-10">
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <HiX size={30} />
              </button>
            </div>
            
            <ul className="space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-bold block transition-all ${activeSection === link.href ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-white/5 pt-6">
               <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-bold">Socials</p>
               <div className="flex gap-4">
                  <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm">LinkedIn</a>
                  <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 text-sm">GitHub</a>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Click outside to close (Overlay) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
