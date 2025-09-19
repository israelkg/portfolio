import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 inline-block border-b-4 border-purple-500 pb-2">
          Sobre Mim
        </h2>
        <p className="text-slate-300 leading-relaxed mt-6">
          Olá! Sou um desenvolvedor apaixonado por criar interfaces de usuário intuitivas e dinâmicas. Com experiência em React e um profundo conhecimento do ecossistema JavaScript, busco constantemente aprender novas tecnologias para construir aplicações web modernas e eficientes. Meu objetivo é transformar ideias complexas em experiências digitais simples e elegantes.
        </p>
      </div>
    </section>
  );
};

export default About;