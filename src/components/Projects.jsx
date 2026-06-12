import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectList, techIcons } from '../data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const BACKEND_TECHS = ['NestJS', 'PostgreSQL', 'Prisma', 'BullMQ', 'Redis', 'Nodejs'];

const FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'producao', label: 'Em produção' },
  { id: 'fullstack', label: 'Full-Stack', techs: BACKEND_TECHS },
  { id: 'frontend', label: 'Frontend' },
];

const MAX_TECH_ICONS = 5;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projectList;
    if (activeFilter === 'producao') return projectList.filter((p) => p.status === 'Em produção');
    if (activeFilter === 'frontend') {
      return projectList.filter((p) => !p.tech.some((t) => BACKEND_TECHS.includes(t)));
    }
    const filter = FILTERS.find((f) => f.id === activeFilter);
    if (!filter?.techs) return projectList;
    return projectList.filter((p) => p.tech.some((t) => filter.techs.includes(t)));
  }, [activeFilter]);

  return (
    <section id="projetos" className="py-16 sm:py-24 bg-cream dark:bg-ink transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <p className="font-display italic text-wine dark:text-cream-dim text-lg text-center mb-3 tracking-wide">
          Trabalhos
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-center mb-12 text-ink dark:text-cream leading-tight">
          Meus <span className="italic text-wine">Projetos</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f.id
                  ? 'bg-wine text-cream shadow-md shadow-wine/30'
                  : 'bg-transparent text-ink/70 dark:text-cream-dim border border-wine/30 dark:border-cream-dim/30 hover:border-wine dark:hover:border-cream'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filtered.map((project) => {
            if (!project) return null;

            const visibleTechs = project.tech.slice(0, MAX_TECH_ICONS);
            const hiddenCount = project.tech.length - MAX_TECH_ICONS;

            const techIconsList = visibleTechs.map((techName) => {
              const techIcon = techIcons[techName] || techIcons.default;
              if (!techIcon) return null;
              return (
                <span
                  key={techName}
                  className="text-ink/50 dark:text-cream-dim/70 group-hover:text-wine dark:group-hover:text-cream transform hover:scale-110 transition-all duration-300"
                  title={techName}
                >
                  {techIcon}
                </span>
              );
            }).filter(Boolean);

            return (
              <Link
                key={project.id}
                to={`/projetos/${project.id}`}
                className="relative bg-cream-dim/20 dark:bg-ink-soft rounded-2xl overflow-hidden shadow-lg border border-wine/15 dark:border-cream-dim/10 hover:border-wine/60 dark:hover:border-cream-dim/40 hover:shadow-wine/20 transform hover:-translate-y-2 transition-all duration-500 group block cursor-pointer"
              >
                <div className="absolute top-3 right-3 z-20 flex flex-col items-end gap-1.5">
                  {project.status === 'Em produção' && (
                    <span className="bg-emerald-500/95 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                      Em produção
                    </span>
                  )}
                  {project.status === 'Em desenvolvimento' && (
                    <span className="bg-amber-500/95 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                      Em desenvolvimento
                    </span>
                  )}
                  {project.status === 'Vendido' && (
                    <span className="bg-violet-500/95 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                      Vendido
                    </span>
                  )}
                </div>

                <div className="overflow-hidden">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 9000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full aspect-[4/3] rounded-t-2xl"
                  >
                    {Array.isArray(project.img)
                      ? project.img.map((image, i) => (
                        <SwiperSlide
                          key={i}
                          data-swiper-autoplay={project.slideDelays?.[i] ?? 9000}
                        >
                          <img
                            src={image}
                            alt={`${project.title} ${i + 1}`}
                            loading="lazy"
                            className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </SwiperSlide>
                      ))
                      : (
                        <SwiperSlide>
                          <img
                            src={project.img}
                            alt={project.title}
                            loading="lazy"
                            className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </SwiperSlide>
                      )}
                  </Swiper>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-ink dark:text-cream group-hover:text-wine dark:group-hover:text-cream-dim transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-ink/70 dark:text-cream-dim/85 transition-colors mb-6 line-clamp-3">{project.description}</p>

                  <div className="flex justify-between items-center mt-auto gap-2">
                    <span className="inline-block bg-wine text-cream px-5 py-2 rounded-lg font-medium group-hover:bg-wine-deep transition-colors duration-300 shadow-md text-sm">
                      Ver mais
                    </span>

                    <div className="flex items-center gap-3 flex-wrap justify-end">
                      {techIconsList}
                      {hiddenCount > 0 && (
                        <span className="text-xs font-semibold text-ink/60 dark:text-cream-dim bg-cream-dim/30 dark:bg-ink/60 px-2 py-1 rounded-md">
                          +{hiddenCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink/60 dark:text-cream-dim mt-12">Nenhum projeto nessa categoria ainda.</p>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
