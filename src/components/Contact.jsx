import React from 'react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12 inline-block border-b-4 border-purple-500 pb-2">
          Entre em Contato
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">Seu nome</label>
            <input type="text" id="name" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">Seu e-mail</label>
            <input type="email" id="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">Sua mensagem</label>
            <textarea id="message" rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-semibold"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;