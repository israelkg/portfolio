import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react'; 
import avatar from '../assets/avatar.webp'; 

const Hero = () => {
  const socialLinks = [
    { icon: <Github />, href: 'https://github.com/israelkg' },
    { icon: <Linkedin />, href: 'https://www.linkedin.com/in/israel-dev-fullstack' },
    { icon: <Code />, href: 'https://medium.com/@seu-usuario' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
      <div className="text-center flex flex-col items-center">
        <div className="mb-10 p-1.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-xl shadow-purple-900/40">
          <div className="bg-slate-900 p-1.5 rounded-full">
            <img src={avatar} alt="Avatar" 
              className="w-40 h-40 rounded-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          Desenvolvedor{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Front-End</span>
        </h1>

        <p className="max-w-xl text-lg text-slate-300 leading-relaxed mb-8">Apaixonado por tecnologia e desenvolvimento. Transformo ideias em experiências digitais com criatividade e performance.</p>

        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer"
              className="group relative text-slate-400 hover:text-purple-400 transition-all duration-300"
            >
              <span className="absolute -inset-3 bg-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></span>
              {React.cloneElement(link.icon, { size: 32, className: "relative z-10" })}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
