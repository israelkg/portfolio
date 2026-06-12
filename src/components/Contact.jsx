import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';

const EMAIL = 'israelgmedeiros@gmail.com';
const WHATSAPP = '5546991033806';
const WHATSAPP_DISPLAY = '+55 (46) 99103-3806';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const subject = encodeURIComponent(`Contato do portfólio - ${form.name}`);
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá Israel! Vi seu portfólio e gostaria de conversar.')}`;

  return (
    <section id="contato" className="py-16 sm:py-24 bg-cream-dim/30 dark:bg-ink-soft transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 max-w-2xl"
      >
        <div className="text-center mb-12">
          <p className="font-display italic text-wine dark:text-cream-dim text-lg mb-3 tracking-wide">
            Contato
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink dark:text-cream leading-tight">
            Vamos <span className="italic text-wine">conversar</span>
          </h2>
          <p className="text-ink/70 dark:text-cream-dim mt-4">Resposta em até 24h. Disponível para projetos freelance e CLT.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 bg-cream/60 dark:bg-ink/60 border border-wine/20 dark:border-cream-dim/20 hover:border-wine dark:hover:border-cream-dim px-5 py-4 rounded-xl transition-all hover:-translate-y-1 shadow-md">
            <Mail className="text-wine dark:text-cream flex-shrink-0" size={24} />
            <div className="text-left min-w-0">
              <p className="text-xs text-ink/60 dark:text-cream-dim/80">Email</p>
              <p className="text-sm font-medium text-ink dark:text-cream truncate">{EMAIL}</p>
            </div>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-cream/60 dark:bg-ink/60 border border-wine/20 dark:border-cream-dim/20 hover:border-emerald-600 dark:hover:border-emerald-400 px-5 py-4 rounded-xl transition-all hover:-translate-y-1 shadow-md">
            <MessageCircle className="text-emerald-700 dark:text-emerald-400 flex-shrink-0" size={24} />
            <div className="text-left">
              <p className="text-xs text-ink/60 dark:text-cream-dim/80">WhatsApp</p>
              <p className="text-sm font-medium text-ink dark:text-cream">{WHATSAPP_DISPLAY}</p>
            </div>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-cream/50 dark:bg-ink/40 p-6 sm:p-8 rounded-2xl shadow-lg backdrop-blur-sm transition-colors duration-300 border border-wine/10 dark:border-cream-dim/10">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-ink/80 dark:text-cream-dim transition-colors">Seu nome</label>
            <input type="text" id="name" required value={form.name} onChange={handleChange}
              className="w-full bg-cream-dim/20 dark:bg-ink/80 border border-wine/20 dark:border-cream-dim/20 rounded-lg p-3 text-ink dark:text-cream placeholder-ink/40 dark:placeholder-cream-dim/50
              focus:outline-none focus:ring-2 focus:ring-wine transition duration-300"
              placeholder="Digite seu nome"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-ink/80 dark:text-cream-dim transition-colors">Seu e-mail</label>
            <input type="email" id="email" required value={form.email} onChange={handleChange}
              className="w-full bg-cream-dim/20 dark:bg-ink/80 border border-wine/20 dark:border-cream-dim/20 rounded-lg p-3 text-ink dark:text-cream placeholder-ink/40 dark:placeholder-cream-dim/50
              focus:outline-none focus:ring-2 focus:ring-wine transition duration-300"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-ink/80 dark:text-cream-dim transition-colors">Sua mensagem</label>
            <textarea id="message" rows="4" required value={form.message} onChange={handleChange}
              className="w-full bg-cream-dim/20 dark:bg-ink/80 border border-wine/20 dark:border-cream-dim/20 rounded-lg p-3 text-ink dark:text-cream placeholder-ink/40 dark:placeholder-cream-dim/50
              focus:outline-none focus:ring-2 focus:ring-wine transition duration-300"
              placeholder="Conte sobre seu projeto..."
            ></textarea>
          </div>

          <button type="submit"
            className="flex items-center justify-center gap-2 w-full bg-wine text-cream px-6 py-3 rounded-lg font-semibold hover:bg-wine-deep transition duration-300 shadow-lg shadow-wine/30">
            {sent ? (
              <>
                <CheckCircle size={20} /> Email aberto no seu cliente
              </>
            ) : (
              <>
                <Send size={20} /> Enviar Mensagem
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
