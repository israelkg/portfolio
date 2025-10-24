import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectList, techIcons } from '../data/projects';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
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
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-md">Projeto não encontrado!</h2>
        <Link to="/" className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-all shadow-md" >
          <ArrowLeft size={20} /> Voltar para a Home
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-200">
      <div className="container mx-auto max-w-5xl">
        <Link to="/" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-10 text-lg font-medium">
          <ArrowLeft size={20} /> Voltar para todos os projetos
        </Link>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg">
          {project.title}
        </h1>

        <div className="relative overflow-hidden rounded-2xl shadow-xl mb-10">
          {project.status === "Em desenvolvimento" && (
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px] flex flex-col items-center justify-center text-center text-white animate-pulse z-10">
              <p className="text-2xl font-semibold mb-2">🚧 Em desenvolvimento</p>
              <p className="text-base opacity-80">Disponível em breve</p>
            </div>
          )}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="w-full rounded-2xl"
          >
            {Array.isArray(project.img)
              ? project.img.map((image, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={image}
                    alt={`${project.title} ${i + 1}`}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </SwiperSlide>
              ))
              : (
                <SwiperSlide>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </SwiperSlide>
              )}
          </Swiper>
        </div>


        <p className="text-lg text-slate-300 leading-relaxed mb-10"> {project.desc1}</p>
        <p className="text-lg text-slate-300 leading-relaxed mb-10"> {project.desc2} </p>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-slate-100">Tecnologias utilizadas</h3>
          <div className="flex flex-wrap gap-4">
            {project.tech.map((techName) => (
              <span key={techName} className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors shadow-md" title={techName}>
                <span className="text-purple-400 text-2xl">
                  {techIcons[techName] || techIcons.default}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl hover:opacity-90 transition-all text-white shadow-lg" >
              <ExternalLink size={20} /> Ver Projeto Online
            </a>
          )}
          {project.repoFrontend && (
            <a href={project.repoFrontend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition-all shadow-lg" >
              <Github size={20} /> Repositório Front-end
            </a>
          )}
          {project.repoBackend && project.repoBackend !== "#" && (
            <a href={project.repoBackend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition-all shadow-lg">
              <Github size={20} /> Repositório Back-end
            </a>
          )}
        </div>
      </div>
    </section >
  );
};

export default ProjectDetail;