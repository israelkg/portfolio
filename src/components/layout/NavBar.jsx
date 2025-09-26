import React, { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 shadow-md">
      <div className="flex justify-between items-center">
        
        <a href="#home" className="flex items-center gap-2 group">
          <Code className="w-8 h-8 text-purple-400 group-hover:text-pink-500 transition-colors duration-300" />
          <span className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
            Israel Gonçalves Medeiros
          </span>
        </a>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-slate-300 hover:text-purple-400 transition-colors duration-300 relative group" >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-slate-300 hover:text-purple-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-800/95 rounded-xl p-5 shadow-lg border border-slate-700/50">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-slate-300 hover:text-purple-400 transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
