import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800/50 py-8">
      <div className="container mx-auto px-4 text-center text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/israelkg" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><Github /></a>
            <a href="www.linkedin.com/in/israel-dev-fullstack" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><Linkedin /></a>
            <a href="https://medium.com/@seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><Code /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Israel Gonçalves Medeiros. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;