import React from 'react';

import fetchgithub from '../assets/carrosel/github/fetch-github.png';
import berryOpsHome from '../assets/carrosel/berry-ops/berryops-homepage.gif';
import berryOpsDash from '../assets/carrosel/berry-ops/berryops-dashboard-chat.gif';
import berryKitHome from '../assets/carrosel/berry-kit/berrykit-homepage.gif';
import berryKitTools from '../assets/carrosel/berry-kit/berrykit-tools.gif';
import berryWebLanding from '../assets/carrosel/berry-web/berrysystem-web-landingpage.gif';
import berryWebKit from '../assets/carrosel/berry-web/berry-web-kit/berrysystem-web-berrykit.gif';
import berryWebOps from '../assets/carrosel/berry-web/berry-web-ops/berrysystem-web-berryops.gif';
import pokedex1 from '../assets/carrosel/pokedex/pokedex1.gif';
import pokedex2 from '../assets/carrosel/pokedex/pokedex2.png';
import inspirar1 from '../assets/carrosel/inspirar-imoveis/cadastro-imovel.gif';
import inspirar2 from '../assets/carrosel/inspirar-imoveis/contato.gif';
import inspirar3 from '../assets/carrosel/inspirar-imoveis/parcerias.gif';
import inspirar4 from '../assets/carrosel/inspirar-imoveis/servicos.gif';
import inspirar5 from '../assets/carrosel/inspirar-imoveis/sobre.gif';
import inspirarInicio from '../assets/carrosel/inspirar-imoveis/inicio.gif';
import inspirarImoveis from '../assets/carrosel/inspirar-imoveis/imoveis.gif';

import N8nIcon from '../components/icons/N8nIcon';
import SupabaseIcon from '../components/icons/SupabaseIcon';

import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import {
    SiJavascript,
    SiTailwindcss,
    SiPostgresql,
    SiTypescript,
    SiNestjs,
    SiOpenai,
    SiRedis,
    SiSocketdotio,
    SiVite,
    SiNextdotjs,
    SiPrisma,
} from 'react-icons/si';
import { Code, Terminal } from 'lucide-react';

export const techIcons = {
    React: <FaReact size={24} />,
    TailwindCSS: <SiTailwindcss size={24} />,
    Nodejs: <FaNodeJs size={24} />,
    JavaScript: <SiJavascript size={24} />,
    TypeScript: <SiTypescript size={24} />,
    NestJS: <SiNestjs size={24} />,
    PostgreSQL: <SiPostgresql size={24} />,
    Supabase: <SupabaseIcon size={24} />,
    N8n: <N8nIcon size={24} />,
    OpenAI: <SiOpenai size={24} />,
    Redis: <SiRedis size={24} />,
    Docker: <FaDocker size={24} />,
    'Socket.io': <SiSocketdotio size={24} />,
    Vite: <SiVite size={24} />,
    'Next.js': <SiNextdotjs size={24} />,
    Prisma: <SiPrisma size={24} />,
    BullMQ: <Terminal size={24} />,
    SSH: <Terminal size={24} />,
    Puppeteer: <Code size={24} />,
    default: <Code size={24} />,
};

export const projectList = [
    // === EM PRODUÇÃO — flagship ===
    {
        img: [berryOpsHome, berryOpsDash],
        slideDelays: [14000, 8000],
        id: 10,
        title: 'Berry Ops',
        link: 'https://ops.berrysystem.com.br',
        repoFrontend: '#',
        repoBackend: '#',
        isPrivate: true,
        desc1: 'Quem mantém servidor perde tempo demais com deploy manual, lendo log às 2h da manhã e editando config no terminal. Berry Ops resolve isso conversando: o usuário manda "sobe o deploy do projeto X" pelo WhatsApp ou pela web e o sistema executa em produção — com aprovação antes de qualquer coisa arriscada e backup automático antes de tocar arquivo sensível.',
        desc2: 'Plataforma multi-tenant, multi-server, com cache Redis para snapshots de estado, execução paralela de passos read-only, deploy macro (/deploy <slug>) que monta plano canônico (git status → pull → docker compose config → up -d --build) e editor de arquivo remoto via SFTP com diff unificado, backup atomico e classificação de paths sensíveis (/etc/, .ssh/, compose, nginx, /srv/infra/). Risk classifier escala automaticamente em prod (medium→high, high→critical) e aciona double-confirm. BYO LLM key (Claude/OpenAI/Groq) configurável por tenant. Stack: NestJS 11 + Prisma 6 + Postgres 16 no API, Next 15 + Tailwind 4 + React 19 no web, BullMQ no worker, ssh2 + SFTP para acesso remoto, audit log completo por execução.',
        description: 'Resolve deploy, leitura de log e manutenção de servidor via conversa no WhatsApp ou web. Sem terminal, com aprovação antes de mexer em produção.',
        tech: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Docker', 'SSH'],
        status: 'Em produção',
    },
    {
        img: [berryKitHome, berryKitTools],
        slideDelays: [11000, 6000],
        id: 11,
        title: 'Berry Kit',
        link: 'https://kit.berrysystem.com.br',
        repoFrontend: '#',
        repoBackend: '#',
        isPrivate: true,
        desc1: 'Quem trabalha com automação (n8n, Zapier, Make) ou backoffice precisa do mesmo combo: gerar PDF, QR Code, screenshot, manipular arquivo, debugar webhook. Hoje paga 5 SaaS diferentes ou vive trocando de aba. Berry Kit junta tudo num toolkit self-hosted: 9 ferramentas com interface web E API REST, deploy em 2 minutos via Docker, sem dado sensível saindo pra terceiro.',
        desc2: 'Servidor Node + Express + Puppeteer (Chromium headless) empacotado em Docker. 9 ferramentas: HTML/Markdown → PDF, URL → PDF, PDF Merge, PDF Compress, Imagens (Pixel Forge — conversão JPG/PNG/WEBP/AVIF 100% client-side), QR Code, Screenshot de URL, Dev Tools (JSON/Base64/JWT/UUID/Hash/Timestamp) e Webhook Inspector. API REST autenticada por X-API-Key para automações; UI web pronta para uso direto. Open core: comunidade gratuita; PRO planejado com job assíncrono, callback webhook e S3 sink. Posicionamento: privado, API-first, em português.',
        description: 'Toolkit self-hosted com 9 ferramentas — PDF, QR Code, screenshot, dev tools, webhook inspector. UI web + API REST. Pensado para automações n8n/Zapier/Make.',
        tech: ['Nodejs', 'JavaScript', 'Docker', 'Puppeteer'],
        status: 'Em produção',
    },
    {
        img: [berryWebLanding, berryWebKit, berryWebOps],
        slideDelays: [13000, 7000, 7000],
        id: 12,
        title: 'Berry System (hub)',
        link: 'https://berrysystem.com.br',
        repoFrontend: '#',
        repoBackend: '#',
        isPrivate: true,
        desc1: 'Site institucional que apresenta meu ecossistema de produtos (Berry Ops, Berry Kit, Berry City, Berry Auth) para clientes que querem entender o que ofereço. Vitrine de cada produto, blog técnico e canal de contato comercial direto.',
        desc2: 'Next 16 App Router + Tailwind v4 + dark mode default. SEO completo (robots.ts, sitemap.ts, OpenGraph dinâmico, JSON-LD por produto). Mobile-first, Lighthouse 100/100. Hospedado em VPS própria atrás de Cloudflare, deploy via Docker. Identidade visual unificada — mascote (gato) em variantes por produto (morango, mirtilo, amora etc.).',
        description: 'Site institucional do meu ecossistema Berry. Vitrine de produtos, blog técnico e contato comercial.',
        tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Docker'],
        status: 'Em produção',
    },

    // === TRABALHO COM CLIENTE ===
    {
        img: [inspirarInicio, inspirarImoveis, inspirar1, inspirar2, inspirar3, inspirar4, inspirar5],
        id: 1,
        title: 'Sistema Imobiliário',
        link: 'https://patriciafariasimoveis.com.br/',
        repoFrontend: '#',
        repoBackend: '#',
        isPrivate: true,
        desc1: 'Sistema imobiliário completo desenvolvido sob medida, com site público otimizado para SEO e painel administrativo para gestão de imóveis e proprietários. A solução integra cadastro de imóveis, gerenciamento de imagens, organização de dados e infraestrutura em VPS com Docker, focada em performance, escalabilidade e conversão de leads.',
        desc2: 'Plataforma imobiliária desenvolvida do zero, unindo site institucional e sistema administrativo em uma solução única. O projeto conta com CRUD de imóveis e proprietários, associação inteligente entre dados, páginas de imóveis otimizadas para SEO, layout responsivo e infraestrutura própria em VPS com Docker. A aplicação foi pensada para facilitar a gestão interna e melhorar a apresentação dos imóveis, garantindo organização, escalabilidade e melhor experiência para usuários e clientes.',
        description: 'Sistema imobiliário completo com site público otimizado para SEO e painel administrativo. Cliente em produção.',
        tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'TailwindCSS', 'Docker'],
        status: 'Em produção',
    },
    // === EXPERIMENTOS TÉCNICOS ===
    {
        img: [pokedex1, pokedex2],
        id: 2,
        title: 'Pokedex',
        link: 'https://israelkg.github.io/pokedex-react/',
        repoFrontend: 'https://github.com/israelkg/pokedex-react',
        repoBackend: '#',
        desc1: 'Pokedex em React com busca, filtros e detalhes dos pokémons consumindo a PokeAPI.',
        desc2: 'Projeto pra exercitar consumo de API REST, gerenciamento de estado, filtros dinâmicos e UI responsiva. React + TailwindCSS, hospedado no GitHub Pages.',
        description: 'Pokedex com busca, filtros e detalhes. React + PokeAPI.',
        tech: ['JavaScript', 'React', 'TailwindCSS'],
        status: 'Concluído',
    },
    {
        img: fetchgithub,
        id: 3,
        title: 'GitHub API Explorer',
        link: 'https://israelkg.github.io/fetch-github-api/',
        repoFrontend: 'https://github.com/israelkg/fetch-github-api',
        repoBackend: '#',
        desc1: 'Busca usuários do GitHub e exibe perfil + repositórios consumindo a API pública.',
        desc2: 'JavaScript puro, sem framework. Foco em fetch + manipulação DOM + tratamento de erro. Demonstra fundamento sem abstração de biblioteca.',
        description: 'Consome a API do GitHub. Mostra perfil, repos e commits. JS puro.',
        tech: ['JavaScript'],
        status: 'Concluído',
    },
];
