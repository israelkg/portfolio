import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';
import Switch from '../button/Switch';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const sectionId = href.substring(1);

    // Se não estiver na home, navega primeiro para home
    if (location.pathname !== '/') {
      navigate('/');
      // Aguarda a navegação e então faz o scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 h-20 px-6 bg-cream/90 dark:bg-ink/95 backdrop-blur-md border-b border-wine/15 dark:border-cream-dim/10 shadow-md w-full flex items-center transition-colors duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        <a href="#home" onClick={handleLogoClick} className="flex items-center gap-2 group">
          <Code className="w-8 h-8 text-wine dark:text-cream group-hover:text-wine-deep dark:group-hover:text-cream-dim transition-colors duration-300" />
          <span className="font-display text-xl sm:text-2xl font-semibold text-ink dark:text-cream group-hover:text-wine dark:group-hover:text-cream-dim transition-colors">
            Israel Gonçalves
          </span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-ink/75 dark:text-cream-dim hover:text-wine dark:hover:text-cream transition-colors duration-300 relative group cursor-pointer font-medium tracking-wide"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-wine dark:bg-cream-dim transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Switch />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Switch />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-ink/75 dark:text-cream-dim hover:text-wine dark:hover:text-cream transition-colors"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-cream/95 dark:bg-ink/95 p-5 shadow-lg border-b border-wine/15 dark:border-cream-dim/10 md:hidden flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-ink/75 dark:text-cream-dim hover:text-wine dark:hover:text-cream transition-colors duration-300 text-center cursor-pointer font-medium text-lg py-2 border-b border-wine/10 dark:border-cream-dim/10 last:border-0"
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
