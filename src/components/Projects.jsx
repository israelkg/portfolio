import React from 'react';
import { Link } from 'react-router-dom'; 
import { projectList, techIcons } from '../data/projects';

const Projects = () => {
  const projects = projectList || [];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 inline-block border-b-4 border-purple-500 pb-2">
          Meus Projetos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => {
            if (!project) return null;

            const techIconsList = project.tech
              .map((techName) => {
                const techIcon = techIcons[techName] || techIcons.default;
                if (!techIcon) return null;

                return (
                  <span 
                    key={techName} 
                    className="text-slate-400 group-hover:text-purple-400 transform hover:scale-110 transition-all duration-300"
                    title={techName}
                  >
                    {techIcon}
                  </span>
                );
              })
              .filter(Boolean);

            return (
              <div 
                key={index} 
                className="bg-slate-800/60 rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:border-purple-500/60 hover:shadow-purple-500/20 transform hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="overflow-hidden">
                  <img src={project.img} alt={project.title} 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500" />

                </div>

                <div className="p-6 flex flex-col justify-between h-auto min-h-[208px]">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-100 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p>{project.description}</p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <Link 
                      to={`/projetos/${project.id}`} 
                      className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 shadow-md"
                    >
                      Ver mais
                    </Link>

                    <div className="flex items-center gap-3">
                      {techIconsList}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
