import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import avatar from '../assets/avatar.webp';
import { motion } from 'framer-motion';

const Hero = () => {
  const socialLinks = [
    { icon: <Github />, href: 'https://github.com/israelkg', label: 'GitHub' },
    { icon: <Linkedin />, href: 'https://www.linkedin.com/in/israel-dev-fullstack', label: 'LinkedIn' },
    { icon: <Mail />, href: 'mailto:israelgmedeiros@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[calc(100vh-5rem)] bg-cream dark:bg-ink py-16 sm:py-24 px-4 transition-colors duration-300 overflow-hidden"
    >
      {/* Ambient burgundy glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            'radial-gradient(ellipse at top left, color-mix(in oklab, var(--color-wine) 35%, transparent) 0%, transparent 55%), radial-gradient(ellipse at bottom right, color-mix(in oklab, var(--color-wine-deep) 30%, transparent) 0%, transparent 60%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        <div className="mb-8 sm:mb-10 p-1 bg-wine rounded-full shadow-xl shadow-wine-deep/40">
          <div className="bg-cream dark:bg-ink-soft p-1.5 rounded-full transition-colors duration-300">
            <img
              src={avatar}
              alt="Israel Gonçalves"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <p className="font-display italic text-wine dark:text-cream-dim text-lg sm:text-xl mb-3 tracking-wide">
          Israel Gonçalves
        </p>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-ink dark:text-cream mb-6 transition-colors duration-300 px-2 leading-[0.95]">
          Desenvolvedor{' '}
          <span className="block sm:inline italic text-wine">Full-Stack</span>
        </h1>

        <p className="max-w-2xl text-sm sm:text-base text-ink/60 dark:text-cream-dim/80 leading-relaxed mb-10 transition-colors duration-300 px-4 tracking-wide">
          <span className="font-medium text-wine dark:text-cream">Next.js</span> · <span className="font-medium text-wine dark:text-cream">NestJS</span> · <span className="font-medium text-wine dark:text-cream">PostgreSQL</span> · <span className="font-medium text-wine dark:text-cream">Docker</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="#projetos"
            className="flex items-center justify-center gap-2 bg-wine text-cream px-6 py-3 rounded-xl font-semibold hover:bg-wine-deep transition shadow-lg shadow-wine/30"
          >
            Ver Projetos <ArrowDown size={18} />
          </a>
          <a
            href="#contato"
            className="flex items-center justify-center gap-2 bg-transparent text-ink dark:text-cream border border-wine/40 dark:border-cream-dim/40 px-6 py-3 rounded-xl font-semibold hover:bg-wine/10 dark:hover:bg-cream/10 transition"
          >
            Vamos conversar
          </a>
        </div>

        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group relative text-ink/60 dark:text-cream-dim hover:text-wine dark:hover:text-cream transition-all duration-300"
            >
              <span className="absolute -inset-3 bg-wine/15 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></span>
              {React.cloneElement(link.icon, { size: 32, className: 'relative z-10' })}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
