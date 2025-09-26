import React from 'react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12 relative inline-block">
          <span className="relative z-10">Entre em Contato</span>
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
        </h2>

        <form className="space-y-6 bg-slate-800/50 p-8 rounded-2xl shadow-lg shadow-slate-900/50 backdrop-blur-sm">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">Seu nome</label>
            <input type="text" id="name" 
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 placeholder-slate-500 
              focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" 
              placeholder="Digite seu nome"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">Seu e-mail</label>
            <input type="email" id="email" 
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 placeholder-slate-500 
              focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" 
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">Sua mensagem</label>
            <textarea id="message" rows="4" 
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 placeholder-slate-500 
              focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" 
              placeholder="Digite sua mensagem..."
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300 shadow-lg shadow-purple-900/30">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
