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

    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 bg-slate-900/80 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <Code className="w-8 h-8 text-purple-400" />
          <span className="text-xl font-bold">Israel Gonçalves Medeiros</span>
        </a>


        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-purple-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

    
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-800 rounded-lg p-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
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