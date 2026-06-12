import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ink-soft dark:bg-ink-soft border-t border-wine/15 dark:border-cream-dim/10 py-10 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display italic text-wine text-lg mb-4 tracking-wide">
          obrigado por passar por aqui
        </p>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/israelkg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-cream-dim hover:text-cream transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/israel-dev-fullstack"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-cream-dim hover:text-cream transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:israelgmedeiros@gmail.com"
            aria-label="Email"
            className="text-cream-dim hover:text-cream transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>

        <p className="text-cream-dim/80 text-sm tracking-wide">
          &copy; {new Date().getFullYear()} <span className="text-cream font-semibold">Israel Gonçalves Medeiros</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
