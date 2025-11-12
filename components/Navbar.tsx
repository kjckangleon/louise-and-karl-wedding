
import React, { useState, useEffect } from 'react';
import { SECTIONS, GROOM_NAME, BRIDE_NAME } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initials = `${GROOM_NAME.charAt(0)} & ${BRIDE_NAME.charAt(0)}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-serif text-[#6D4C41]">
          {initials}
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {SECTIONS.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="text-gray-700 hover:text-[#6D4C41] transition-colors font-medium">
              {section.title}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {SECTIONS.map((section) => (
              <a key={section.id} href={`#${section.id}`} onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#6D4C41] transition-colors font-medium py-2">
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
