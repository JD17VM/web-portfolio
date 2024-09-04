// src/data/data-pt.js

const pageData = {
    job: "Desenvolvedor Full-Stack", // Traduzido

    data: {
        dateBirth: "17 de Abril de 2002",   // Formato mantido, nome do mês é igual
        country: "Peru",                    // Traduzido (sem acento)
        github: "github.com/JD17VM",        // Sem alterações (identificador)
        gmail: "jdiegodiego4@gmail.com",    // Sem alterações (email)
    },

    title: {
        about: "SOBRE MIM",         // Traduzido
        interests: "INTERESSES",       // Traduzido
        experience: "Experiência",     // Traduzido
        education: "Educação",         // Traduzido
        courses: "Cursos",           // Traduzido
        languages: "Idiomas",          // Traduzido
        tools: "Ferramentas",      // Traduzido
        projects: "PROJETOS"         // Traduzido
    },

    about: "Desde jovem, a programação tem sido minha paixão. Tive a oportunidade de mergulhar no desenvolvimento de software e ensinar programação. Especializo-me tanto no desenvolvimento web backend quanto frontend, trabalhando com diversas tecnologias e adaptando-me rapidamente a novas ferramentas. <br/> <br/> Minha versatilidade permite-me resolver desafios complexos e entregar soluções de alta qualidade. Sou impulsionado pela constante evolução do mundo tecnológico, sempre ansioso por aprender e implementar inovações. Seja colaborando com equipes ou trabalhando de forma independente, meu objetivo é crescer tanto técnica quanto profissionalmente enquanto contribuo para projetos significativos.", // Traduzido

    interests: "Busco me juntar a uma empresa que me desafie com novas oportunidades, pois tenho a capacidade de enfrentá-las eficazmente. Estou comprometido com o aprendizado e desenvolvimento contínuos, garantindo minha adaptabilidade em um ambiente de trabalho dinâmico e a entrega constante de soluções inovadoras.", // Traduzido

    experience: [
        {
            startYear: "2023",
            startMonth: "Fev",          // Abreviação PT
            endYear: "atualmente",      // Traduzido
            endMonth: "",
            roleCompany: "Full-Stack e Modalidade Híbrida - JPAWAJ SAC", // Traduzido
            description: [
                "Desenvolvi e implementei interfaces de usuário interativas e responsivas usando HTML, CSS e JavaScript, garantindo uma experiência de usuário fluida e eficiente.", // Traduzido
                "Projetei a interface do usuário e a experiência do usuário (UI/UX) do zero, focando em melhorar a usabilidade e o apelo visual geral.", // Traduzido
                "Desenvolvi e mantive a funcionalidade backend usando PHP com o framework Laravel, gerenciando a lógica do lado do servidor e a integração com bancos de dados.", // Traduzido
                "Projetei e implementei o banco de dados, otimizando as consultas de dados." // Traduzido
            ],
            skills: ["JavaScript", "Node.js", "React", "JSX", "PHP", "Laravel", "MySQL", "Docker", "CSS", "HTML", "Git", "Github"] // Sem alterações (termos técnicos)
        },
        {
            startYear: "2021",
            startMonth: "Fev",          // Abreviação PT
            endYear: "2023",
            endMonth: "Abr",          // Abreviação PT (igual ES)
            roleCompany: "Desenvolvedor Back-End e Modalidade Híbrida - JPAWAJ SAC", // Traduzido
            description: [
                "Desenvolvi e implementei interfaces de usuário interativas e responsivas usando HTML, CSS e JavaScript, garantindo uma experiência de usuário fluida e eficiente.", // Traduzido
                "Projetei a interface do usuário e a experiência do usuário (UI/UX) do zero, focando em melhorar a usabilidade e o apelo visual geral.", // Traduzido
                "Desenvolvi e mantive a funcionalidade backend usando PHP com o framework Laravel, gerenciando a lógica do lado do servidor e a integração com bancos de dados.", // Traduzido
                "Projetei e implementei o banco de dados, otimizando as consultas de dados." // Traduzido
            ],
            skills: ["PHP", "Laravel", "PhpWord", "MySQL", "Git", "Github"] // Sem alterações
        },
        {
            startYear: "2024",
            startMonth: "Ago",          // Abreviação PT (igual ES)
            endYear: "2024",
            endMonth: "Out",          // Abreviação PT
            // Manter o nome da empresa como está ou adaptar se houver uma tradução oficial/comum
            roleCompany: "Full-Stack e Trabalho Remoto - Operaciones Topográficas y Agrimensuras (OTyM)", // Traduzido (exceto nome da empresa)
            description: [
                "Desenvolvi e implementei interfaces de usuário interativas e responsivas usando HTML, CSS e JavaScript, garantindo uma experiência de usuário fluida e eficiente.", // Traduzido
                "Projetei a interface do usuário e a experiência do usuário (UI/UX) do zero, focando em melhorar a usabilidade e o apelo visual geral.", // Traduzido
                "Desenvolvi e mantive a funcionalidade backend usando PHP com o framework Laravel, gerenciando a lógica do lado do servidor e a integração com bancos de dados.", // Traduzido
                "Projetei e implementei o banco de dados, otimizando as consultas de dados." // Traduzido
            ],
            skills: ["PHP", "Laravel", "PhpWord", "MySQL", "Git", "Github"] // Sem alterações
        },
    ],

    education: {
        career: "Ciência da Computação", // Traduzido
        // Manter o nome original da universidade, a menos que haja uma tradução consagrada
        university: "Universidad Nacional de San Agustín de Arequipa", // Sem alterações (nome próprio)
        year: "quinto ano",             // Traduzido
    },

    courses: [
        {
            course: "Aplicações em Inteligência Artificial IA", // Traduzido
            institution: "Universidad Continental",             // Sem alterações (nome próprio)
        },
        {
            // Nome oficial do certificado, geralmente não se traduz
            course: "Cambridge English Entry Level Certificate in ESOL",
            institution: "Internacional - Universidade de Cambridge", // Traduzido parcialmente
        },
    ],

    languages: [
        {
            language: "Espanhol",         // Traduzido
            level: "Nativo",           // Traduzido
        },
        {
            language: "Inglês",           // Traduzido
            level: "Avançado",         // Traduzido
        },
        {
            language: "Português",        // Traduzido
            level: "Intermediário",    // Traduzido
        },
    ],

    projects : [
        {
            img: "./imgs/projects/moliplast_web.png", // Sem alterações (caminho)
            date: "2025",                           // Sem alterações (ano)
            title: "Web Moliplast",                 // Manter nome do projeto
            description: "Aplicação de Página Única (SPA) desenvolvida com React.js e SCSS para uma experiência frontend dinâmica, integrada fluidamente com um backend de API REST Laravel.", // Traduzido
            skills: ["JavaScript", "Node.js", "React", "JSX", "PHP", "Laravel", "MySQL", "CSS", "HTML", "Git", "Github"], // Sem alterações
            link: "https://github.com/JD17VM/moliplast-web" // Sem alterações (URL)
        },
        {
            img : "./imgs/projects/dynamic_video_generator.png",
            date : "2024",
            title : "Dynamic Product Video Generator", // Manter nome do projeto
            description : "Aplicação web que converte informações de produtos em vídeos de marketing profissionais usando Remotion. Possui uma interface de formulário intuitiva para gerar vídeos dinâmicos de exibição de produtos com transições e sobreposições personalizadas.", // Traduzido
            skills : ["JavaScript", "Node.js", "React", "Remotion", "JSX"], // Sem alterações
            link: "https://github.com/JD17VM/dynamic-product-video-generator" // Sem alterações
        },
        {
            img: "./imgs/projects/ll_aa.png",
            date: "2024",
            title: "Web Launch Lab e Arrow Ascend", // Traduzido (conjunção 'e')
            description: "Este site mostra dois projetos imersivos de RV e o processo de desenvolvimento por trás deles, com foco no design adequado da interface.", // Traduzido
            skills: ["JavaScript", "Node.js", "React", "Remotion", "JSX"], // Sem alterações
            link: "https://github.com/JD17VM/launchlab-vr-arrowascend-web" // Sem alterações
        },
    ],

    scale: {
        left_col_width: -1, //%
        right_col_row_gap: -1, //pt
    }
};

export default pageData; // Exportar para poder importá-lo dinamicamente