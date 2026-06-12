import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectList, techIcons } from '../data/projects';
import { ArrowLeft, ExternalLink, Github, Lock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ProjectDetail = () => {
  const { projectId } = useParams();

  const project = projectList.find((p) => p.id === Number(projectId));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cream dark:bg-ink transition-colors duration-300">
        <h2 className="font-display text-4xl font-bold mb-6 text-ink dark:text-cream">Projeto não encontrado!</h2>
        <Link to="/" className="flex items-center gap-2 bg-wine text-cream px-6 py-3 rounded-xl hover:bg-wine-deep transition-all shadow-md font-medium" >
          <ArrowLeft size={20} /> Voltar para a Home
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-cream dark:bg-ink text-ink dark:text-cream-dim transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <Link to="/" className="flex items-center gap-2 text-wine dark:text-cream hover:text-wine-deep dark:hover:text-cream-dim transition-colors mb-10 text-lg font-medium">
          <ArrowLeft size={20} /> Voltar para todos os projetos
        </Link>

        <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 text-ink dark:text-cream leading-[1.05]">
          {project.title}
        </h1>

        <div className="relative overflow-hidden rounded-2xl shadow-xl mb-10">
          <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
            {project.status === "Em produção" && (
              <span className="bg-emerald-500/95 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                Em produção
              </span>
            )}
            {project.status === "Em desenvolvimento" && (
              <span className="bg-amber-500/95 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                Em desenvolvimento
              </span>
            )}
            {project.status === "Vendido" && (
              <span className="bg-violet-500/95 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                Vendido
              </span>
            )}
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 9000, disableOnInteraction: false }}
            loop={true}
            className="w-full rounded-2xl"
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
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </SwiperSlide>
              ))
              : (
                <SwiperSlide>
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </SwiperSlide>
              )}
          </Swiper>
        </div>


        <div className="bg-cream-dim/20 dark:bg-ink-soft backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-10 border border-wine/15 dark:border-cream-dim/10 shadow-xl transition-colors duration-300">
          <p className="text-lg text-ink/85 dark:text-cream leading-relaxed mb-6">{project.desc1}</p>
          <p className="text-lg text-ink/85 dark:text-cream leading-relaxed">{project.desc2}</p>
        </div>

        <div className="mb-10">
          <h3 className="font-display text-2xl font-semibold mb-4 text-ink dark:text-cream transition-colors">Tecnologias utilizadas</h3>
          <div className="flex flex-wrap gap-4">
            {project.tech.map((techName) => (
              <span key={techName} className="flex items-center justify-center w-12 h-12 rounded-xl bg-cream/50 dark:bg-ink-soft border border-wine/15 dark:border-cream-dim/10 hover:bg-cream-dim/40 dark:hover:bg-ink-card transition-colors shadow-md" title={techName}>
                <span className="text-wine dark:text-cream text-2xl">
                  {techIcons[techName] || techIcons.default}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          {project.link && project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-wine !text-cream px-6 py-3 rounded-xl hover:bg-wine-deep transition-all shadow-lg font-medium" >
              <ExternalLink size={20} /> Ver Projeto Online
            </a>
          )}
          {project.repoFrontend && project.repoFrontend !== "#" && (
            <a href={project.repoFrontend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-ink-soft !text-cream px-6 py-3 rounded-xl hover:bg-ink-card transition-all shadow-lg border border-cream-dim/15" >
              <Github size={20} /> Repositório Front-end
            </a>
          )}
          {project.repoBackend && project.repoBackend !== "#" && (
            <a href={project.repoBackend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-ink-soft !text-cream px-6 py-3 rounded-xl hover:bg-ink-card transition-all shadow-lg border border-cream-dim/15">
              <Github size={20} /> Repositório Back-end
            </a>
          )}
          {project.isPrivate && (
            <span className="flex items-center gap-2 bg-cream-dim/30 dark:bg-ink-card text-ink/80 dark:text-cream-dim px-6 py-3 rounded-xl font-medium border border-wine/20 dark:border-cream-dim/15">
              <Lock size={18} /> Código privado — disponível sob solicitação
            </span>
          )}
        </div>
      </div>
    </section >
  );
};

export default ProjectDetail;