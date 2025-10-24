import React from 'react';
import fetchgithub from '../assets/carrosel/github/fetch-github.png';
import pokedex1 from '../assets/carrosel/pokedex/pokedex1.gif';
import pokedex2 from '../assets/carrosel/pokedex/pokedex2.png';
import autopipe1 from '../assets/carrosel/autopipe/auto-pipe1.png';
import autopipe2 from '../assets/carrosel/autopipe/auto-pipe2.png';
import cobranca1 from '../assets/carrosel/cobranca/cobranca1.gif';
import cobranca2 from '../assets/carrosel/cobranca/cobranca2.gif';
import cobranca3 from '../assets/carrosel/cobranca/cobranca3.gif';
import cobranca4 from '../assets/carrosel/cobranca/cobranca4.gif';
import mentora1 from '../assets/carrosel/mentora/mentora1.gif';

import TwigIcon from '../components/icons/TwigIcon';
import N8nIcon from '../components/icons/N8nIcon';
import OpenAIIcon from '../components/icons/OpenAIIcon';
import SupabaseIcon from '../components/icons/SupabaseIcon';

import { FaSymfony, FaPhp, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTailwindcss, SiPostgresql, SiTypescript, SiNestjs } from 'react-icons/si';
import { Code } from 'lucide-react';

export const techIcons = {
  Symfony: <FaSymfony size={24} />,
  PHP: <FaPhp size={24} />,
  React: <FaReact size={24} />,
  TailwindCSS: <SiTailwindcss size={24} />,
  Nodejs: <FaNodeJs size={24} />,
  MongoDB: <SiMongodb size={24} />,
  Twig: <TwigIcon className="w-6 h-6" />,
  JavaScript: <SiJavascript size={24} />,
  TypeScript: <SiTypescript size={24} />,
  NestJS: <SiNestjs size={24} />,
  PostgreSQL: <SiPostgresql size={24} />,
  Java: <FaJava size={24} />,
  Supabase: <SupabaseIcon size={24} />,
  N8n: <N8nIcon size={24} />,
  OpenAI: <OpenAIIcon size={24} />,
  default: <Code size={24} />
};

export const projectList = [
    {
        img: [cobranca1, cobranca2, cobranca3, cobranca4],
        id: 1,
        title: 'Sistema de Cobranças',
        link: '#',
        repoFrontend: 'https://israelkg.github.io/fetch-github-api/',
        repoBackend: '#',
        desc1: 'Desenvolvimento de um sistema de cobranças para gerenciar clientes, faturas e pagamentos, com funcionalidades de geração de relatórios e notificações automáticas.',
        desc2: 'O sistema foi construído utilizando Symfony e PHP no backend, garantindo uma estrutura robusta e escalável. No frontend, utilizei Twig para a renderização de templates, proporcionando uma interface amigável e eficiente. A base de dados é gerenciada com MongoDB, permitindo um armazenamento flexível e eficiente dos dados.',
        description: 'Sistema de cobranças para gerenciar clientes, faturas, pagamentos, relatórios, cobranças e notificações automáticas.',
        tech: ['Symfony', 'Twig', 'MongoDB', 'TailwindCSS', 'PHP'],
        status: "Em desenvolvimento"
    },
    {
        img: [autopipe1, autopipe2],
        id: 2,
        title: 'Auto Pipe',
        link: '#',
        repoFrontend: 'https://github.com/israelkg/autopipe-frontend',
        repoBackend: 'https://github.com/israelkg/autopipe-backend',
        desc1: 'Desenvolvimento de uma plataforma CRM com foco em automação inteligente e comunicação integrada, utilizando React, NestJS e PostgreSQL.',
        desc2: 'O sistema permite que cada usuário crie e gerencie seus próprios agentes SDR de IA, configurando prompts, fluxos e integrações com WhatsApp, VOIP e e-mail para automação completa do funil de vendas.',
        description: 'CRM com IA que integra VOIP, WhatsApp e e-mail, permitindo que usuários criem e gerenciem agentes SDR inteligentes e personalizáveis para automação comercial.',
        tech: ['React', 'NestJS', 'PostgreSQL', 'TypeScript', 'OpenAI'],
        status: "Em desenvolvimento"
    },
    {
        img: [mentora1],
        id: 3,
        title: 'Mentora',
        link: '#',
        repoFrontend: 'https://israelkg.github.io/fetch-github-api/',
        repoBackend: '#',
        desc1: 'Criação de uma plataforma de cursos online com funcionalidades de gerenciamento de usuários, cursos, aulas e avaliações.',
        desc2: 'A plataforma foi desenvolvida utilizando React no frontend, proporcionando uma interface de usuário moderna e responsiva. No backend, utilizei Java com Spring Boot para garantir uma estrutura robusta e escalável. A estilização foi feita com TailwindCSS, permitindo um design atraente e consistente em todas as páginas.',
        description: 'Plataforma de cursos online com funcionalidades de gerenciamento de usuários, cursos, aulas, agenda, simulados, mateiriais e gamificação.',
        tech: ['JavaScript', 'React', 'TailwindCSS', 'Java'],
        status: "Em desenvolvimento"
    },
    {
        img: 'a',
        id: 4,
        title: 'Sistema de Automação',
        link: '#',
        repoFrontend: 'https://israelkg.github.io/fetch-github-api/',
        repoBackend: '#',
        desc1: 'Desenvolvimento de um sistema de automação utilizando N8n para integrar diversas APIs e serviços, facilitando fluxos de trabalho complexos e repetitivos.',
        desc2: 'O sistema utiliza a API do OpenAI para processamento avançado de linguagem natural, permitindo automações inteligentes e personalizadas. A base de dados é gerenciada com Supabase, oferecendo uma solução escalável e eficiente para armazenamento e consulta de dados.',
        description: "Sistema de automação utilizando N8n para integrar diversas CRM Pipefy, IA's, APIs e serviços, diminuindo tarefas repetitivas de uma equipe comercial.",
        tech: ['N8n', 'JavaScript', 'Supabase'],
        status: "Em desenvolvimento"
    },
    {
        img: [pokedex1, pokedex2],
        id: 5,
        title: 'Pokedex',
        link: 'https://israelkg.github.io/pokedex-react/',
        repoFrontend: 'https://github.com/israelkg/pokedex-react',
        repoBackend: '#',
        desc1: 'Criação de uma pokedex com funcionalidades de busca e detalhes dos pokemons.',
        desc2: 'A pokedex foi desenvolvida utilizando React no frontend, proporcionando uma interface de usuário moderna e responsiva. A estilização foi feita com TailwindCSS, permitindo um design atraente e consistente em todas as páginas.',
        description: 'Pokedex com funcionalidades de busca, filtros e detalhes dos pokemons.',
        tech: ['JavaScript', 'React', 'TailwindCSS'],
        status: "Concluído"
    },
    {
        img: fetchgithub,
        id: 6,
        title: 'Github API',
        link: 'https://israelkg.github.io/fetch-github-api/',
        repoFrontend: 'https://github.com/israelkg/fetch-github-api',
        repoBackend: '#',
        desc1: 'Projeto simples que consome a API do Github para buscar usuários e exibir seus repositórios.',
        desc2: 'O projeto foi desenvolvido utilizando JavaScript puro, sem frameworks, para demonstrar o consumo de APIs REST e manipulação do DOM de forma direta e eficiente.',
        description: 'Projeto que consome a API do Github para buscar usuários com seus repositórios, commits e status.',
        tech: ['JavaScript'],
        status: "Concluído"
    },
];