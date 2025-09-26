import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-4xl font-extrabold text-white mb-8 relative inline-block">
          <span className="relative z-10">Sobre Mim</span>
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
        </h2>
        
        <p className="text-lg text-slate-300 leading-relaxed">Entrei na programação em 2024 através do curso 
          <span className="text-purple-400 font-medium"> DevQuest</span>, começando no front-end e avançando até 
          <span className="text-pink-400 font-medium"> React</span>. Meu primeiro projeto marcante foi um site de aniversário para minha namorada.
        </p>

        <p className="text-lg text-slate-300 leading-relaxed mt-4">
          Hoje tenho domínio em front-end, experiência com back-end e frameworks, além de um foco especial em 
          <span className="text-pink-400 font-medium"> n8n</span> e integrações API. Gosto de trabalhar sozinho, pois aprendi no 
            estágio que disciplina e motivação aceleram meu aprendizado. Fora do código, curto 
          <span className="text-purple-400 font-medium"> correr</span> e jogar, o que me ajuda a manter o equilíbrio.
        </p>
      </div>
    </section>
  );
};

export default About;
