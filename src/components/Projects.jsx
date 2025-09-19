import React from 'react';
import fetchgithub from '../assets/fetch-github.png';
import pokedex from '../assets/pokedex.png';

import N8nIcon from './icons/N8nIcon';
import OpenAIIcon from './icons/OpenAIIcon';
import SupabaseIcon from './icons/SupabaseIcon';
import ApiIcon from './icons/ApiIcon';
import TwigIcon from './icons/TwigIcon';

import { FaSymfony, FaPhp, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTailwindcss } from 'react-icons/si';
import { Code } from 'lucide-react';

const techIcons = {
    Symfony: <FaSymfony size={24} />,
    PHP: <FaPhp size={24} />,
    React: <FaReact size={24} />,
    TailwindCSS: <SiTailwindcss size={24} />,
    Nodejs: <FaNodeJs size={24} />,
    MongoDB: <SiMongodb size={24} />,
    Twig: <TwigIcon className="w-6 h-6" />,
    JavaScript: <SiJavascript size={24} />,
    Java: <FaJava size={24} />,
    N8n: <N8nIcon size={24} />,
    OpenAI: <OpenAIIcon size={24} />,
    Supabase: <SupabaseIcon size={24} />,
    API: <ApiIcon size={24} />,
    default: <Code size={24} />
};


const Projects = () => {
    const projectList = [
        {
            img: fetchgithub,
            title: 'Projeto E-commerce',
            link: '#',
            tech: ['Symfony', 'PHP', 'Twig', 'MongoDB']
        },
        {
            img: 'a',
            title: 'Sistema de Automação',
            link: '#',
            tech: ['N8n', 'JavaScript', 'Supabase']
        },
        {
            img: "s",
            title: 'Plataforma de Cursos',
            link: '#',
            tech: ['JavaScript', 'React', 'TailwindCSS', 'Java']
        },
        {
            img: pokedex,
            title: 'Pokedex',
            link: 'https://israelkg.github.io/pokedex-react/',
            tech: ['JavaScript', 'React', 'TailwindCSS']
        },
        {
            img: fetchgithub,
            title: 'Github API',
            link: 'https://israelkg.github.io/fetch-github-api/',
            tech: ['JavaScript']
        },
    ];

    return (
        <section id="projetos" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Meus Projetos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, index) => (
                        <div key={index} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 group">
                            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col justify-between h-48">
                                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

                                <div className="flex justify-between items-center mt-auto">
                                    <a
                                        href={project.link}
                                        target='_blank'
                                        className="inline-block bg-purple-600 text-black px-6 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
                                    >
                                        Ver mais
                                    </a>

                                    <div className="flex items-center gap-3">
                                        {project.tech.map((techName) => (
                                            <span
                                                key={techName}
                                                className="text-slate-400 group-hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
                                                title={techName}
                                            >
                                                {techIcons[techName] || techIcons.default}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;