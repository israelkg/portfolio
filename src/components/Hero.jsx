import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react'; // Usando Code como placeholder para Medium
import avatar from '../assets/avatar.webp'; // Crie a pasta assets e coloque sua foto lá

const Hero = () => {
  const socialLinks = [
    { icon: <Github />, href: 'https://github.com/israelkg' },
    { icon: <Linkedin />, href: 'www.linkedin.com/in/israel-dev-fullstack' },
    { icon: <Code />, href: 'https://medium.com/@seu-usuario' }, // Troque pelo ícone que preferir
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-purple-900/30 py-20">
      <div className="text-center flex flex-col items-center">
        
        <div className="mb-8 p-1.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
            <div className="bg-slate-900 p-1.5 rounded-full">
                <img 
                    src={avatar} 
                    alt="Avatar" 
                    className="w-40 h-40 rounded-full object-cover"
                />
            </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Desenvolvedor <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Front-End</span>
        </h1>

        <p className="mt-4 max-w-xl text-lg text-slate-300">
          Sou uma pessoa que ama códigos e a tecnologia, amo ser desenvolvedor.
        </p>

        <div className="mt-8 flex space-x-6">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
            >
              {React.cloneElement(link.icon, { size: 32 })}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;