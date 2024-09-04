// src/data/data-es.js

const pageData = {
    job: "Desarrollador Full-Stack", // Traducido

    data: {
        dateBirth: "17 de Abril de 2002", // Traducido y formateado
        country: "Perú",                  // Traducido (con tilde)
        github: "github.com/JD17VM",      // Sin cambios (identificador)
        gmail: "jdiegodiego4@gmail.com", // Sin cambios (email)
    },

    title: {
        about: "ACERCA DE MÍ", // Traducido
        interests: "INTERESES",   // Traducido
        experience: "Experiencia", // Traducido
        education: "Educación",   // Traducido
        courses: "Cursos",       // Traducido
        languages: "Idiomas",     // Traducido
        tools: "Herramientas", // Traducido (aunque no estaba en el original, es común)
        projects: "PROYECTOS"     // Traducido
    },

    about: "Desde joven, la programación ha sido mi pasión. He tenido la oportunidad de sumergirme en el desarrollo de software y enseñar programación. Me especializo tanto en el desarrollo web backend como frontend, trabajando con diversas tecnologías y adaptándome rápidamente a nuevas herramientas. <br/> <br/> Mi versatilidad me permite resolver desafíos complejos y entregar soluciones de alta calidad. Me impulsa la constante evolución del mundo tecnológico, siempre ansioso por aprender e implementar innovaciones. Ya sea colaborando con equipos o trabajando de forma independiente, mi objetivo es crecer tanto técnica como profesionalmente mientras contribuyo a proyectos significativos.", // Traducido

    interests: "Busco unirme a una empresa que me desafíe con nuevas oportunidades, ya que tengo la capacidad de afrontarlas eficazmente. Estoy comprometido con el aprendizaje y desarrollo continuo, asegurando mi adaptabilidad en un entorno laboral dinámico y la entrega constante de soluciones innovadoras.", // Traducido

    experience: [
        {
            startYear: "2023",
            startMonth: "Feb",    // Sin cambios (abreviatura común)
            endYear: "actualidad", // Traducido
            endMonth: "",
            roleCompany: "Full-Stack y Modalidad Híbrida - JPAWAJ SAC", // Traducido
            description: [
                "Desarrollé e implementé interfaces de usuario interactivas y responsivas usando HTML, CSS y JavaScript, asegurando una experiencia de usuario fluida y eficiente.", // Traducido
                "Diseñé la interfaz de usuario y la experiencia de usuario (UI/UX) desde cero, enfocándome en mejorar la usabilidad y el atractivo visual general.", // Traducido
                "Desarrollé y mantuve la funcionalidad backend usando PHP con el framework Laravel, gestionando la lógica del lado del servidor y la integración con bases de datos.", // Traducido
                "Diseñé e implementé la base de datos, optimizando las consultas de datos." // Traducido
            ],
            skills: ["JavaScript", "Node.js", "React", "JSX", "PHP", "Laravel", "MySQL", "Docker", "CSS", "HTML", "Git", "Github"] // Sin cambios (términos técnicos)
        },
        {
            startYear: "2021",
            startMonth: "Feb",
            endYear: "2023",
            endMonth: "Abr",     // Sin cambios (abreviatura común)
            roleCompany: "Desarrollador Back-End y Modalidad Híbrida - JPAWAJ SAC", // Traducido
            description: [
                 "Desarrollé e implementé interfaces de usuario interactivas y responsivas usando HTML, CSS y JavaScript, asegurando una experiencia de usuario fluida y eficiente.", // Traducido
                 "Diseñé la interfaz de usuario y la experiencia de usuario (UI/UX) desde cero, enfocándome en mejorar la usabilidad y el atractivo visual general.", // Traducido
                 "Desarrollé y mantuve la funcionalidad backend usando PHP con el framework Laravel, gestionando la lógica del lado del servidor y la integración con bases de datos.", // Traducido
                 "Diseñé e implementé la base de datos, optimizando las consultas de datos." // Traducido
            ],
            skills: ["PHP", "Laravel", "PhpWord", "MySQL", "Git", "Github"] // Sin cambios
        },
        {
            startYear: "2024",
            startMonth: "Ago",    // Sin cambios (abreviatura común)
            endYear: "2024",
            endMonth: "Oct",     // Sin cambios (abreviatura común)
            roleCompany: "Full-Stack y Trabajo Remoto - Operaciones Topográficas y Agrimensuras (OTyM)", // Traducido
            description: [
                "Desarrollé e implementé interfaces de usuario interactivas y responsivas usando HTML, CSS y JavaScript, asegurando una experiencia de usuario fluida y eficiente.", // Traducido
                "Diseñé la interfaz de usuario y la experiencia de usuario (UI/UX) desde cero, enfocándome en mejorar la usabilidad y el atractivo visual general.", // Traducido
                "Desarrollé y mantuve la funcionalidad backend usando PHP con el framework Laravel, gestionando la lógica del lado del servidor y la integración con bases de datos.", // Traducido
                "Diseñé e implementé la base de datos, optimizando las consultas de datos." // Traducido
            ],
            skills: ["PHP", "Laravel", "PhpWord", "MySQL", "Git", "Github"] // Sin cambios
        },
    ],

    education: {
        career: "Ciencia de la Computación", // Traducido
        university: "Universidad Nacional de San Agustín de Arequipa", // Traducido (nombre completo)
        year: "quinto año",             // Traducido
    },

    courses: [
        {
            course: "Aplicaciones en Inteligencia Artificial IA", // Traducido
            institution: "Universidad Continental",             // Sin cambios (nombre propio)
        },
        {
            // Nombre oficial del certificado, generalmente no se traduce
            course: "Cambridge English Entry Level Certificate in ESOL",
            institution: "Internacional - Universidad de Cambridge", // Traducido parcialmente
        },
    ],

    languages: [
        {
            language: "Español", // Traducido
            level: "Nativo",    // Traducido
        },
        {
            language: "Inglés",    // Traducido
            level: "Avanzado",   // Traducido (o 'Competente'/'Fluido')
        },
        {
            language: "Portugués", // Traducido
            level: "Intermedio", // Traducido
        },
    ],

    projects : [
        {
            img: "./imgs/projects/moliplast_web.png", // Sin cambios (ruta)
            date: "2025",                             // Sin cambios (año)
            title: "Web Moliplast",                  // Traducido
            description: "Aplicación de Página Única (SPA) desarrollada con React.js y SCSS para una experiencia frontend dinámica, integrada fluidamente con un backend de API REST Laravel.", // Traducido
            skills: ["JavaScript", "Node.js", "React", "JSX", "PHP", "Laravel", "MySQL", "CSS", "HTML", "Git", "Github"], // Sin cambios
            link: "https://github.com/JD17VM/moliplast-web" // Sin cambios (URL)
        },
        {
            img : "./imgs/projects/dynamic_video_generator.png", 
            date : "2024", 
            title : "Dynamic Product Video Generator", 
            description : "Aplicación web que convierte información de productos en videos de marketing profesionales usando Remotion. Cuenta con una interfaz de formulario intuitiva para generar videos dinámicos de exhibición de productos con transiciones y superposiciones personalizadas.", 
            skills : ["JavaScript", "Node.js", "React", "Remotion", "JSX"],
            link: "https://github.com/JD17VM/dynamic-product-video-generator"
        },
        {
            img: "./imgs/projects/ll_aa.png",
            date: "2024",
            title: "Web Launch Lab y Arrow Ascend", // Traducido
            description: "Este sitio web muestra dos proyectos inmersivos de RV y el proceso de desarrollo detrás de ellos, con un enfoque en el diseño adecuado de la interfaz.", // Traducido
            skills: ["JavaScript", "Node.js", "React", "Remotion", "JSX"], // Sin cambios
            link: "https://github.com/JD17VM/launchlab-vr-arrowascend-web"
        },
    ],

    scale: {
        left_col_width: 0, //%
        right_col_row_gap: 0, //pt
    }
};

export default pageData; // Exportar para poder importarlo dinámicamente