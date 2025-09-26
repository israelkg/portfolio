import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-slate-700/50 py-8 ">
      <div className="container mx-auto px-4 text-center">
        
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://github.com/israelkg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/israel-dev-fullstack" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="https://medium.com/@seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Code size={28} />
          </a>
        </div>

        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Israel Gonçalves Medeiros</span>.  
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
