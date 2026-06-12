import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="sobre"
      className="py-16 sm:py-24 bg-cream-dim/30 dark:bg-ink-soft transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center max-w-3xl"
      >
        <p className="font-display italic text-wine dark:text-cream-dim text-lg mb-3 tracking-wide">
          Sobre
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink dark:text-cream mb-10 leading-tight">
          Quem é o <span className="italic text-wine">Israel</span>
        </h2>

        <p className="text-lg text-ink/80 dark:text-cream-dim leading-relaxed">
          Brasileiro, desenvolvedor full-stack. Stack principal:
          <span className="text-wine dark:text-cream font-medium"> React</span>,
          <span className="text-wine dark:text-cream font-medium"> Next.js</span>,
          <span className="text-wine dark:text-cream font-medium"> NestJS</span>,
          <span className="text-wine dark:text-cream font-medium"> PostgreSQL</span> e
          <span className="text-wine dark:text-cream font-medium"> Docker</span>.
        </p>

        <p className="text-lg text-ink/80 dark:text-cream-dim leading-relaxed mt-4">
          Hoje construo o <span className="text-wine dark:text-cream font-medium">Berry System</span> —
          ecossistema de produtos dev/IA/infra (Berry Ops, Berry Kit, Berry City).
          Também atendo clientes em freelance.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
