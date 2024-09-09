import React, { useEffect, useState, useRef, useMemo } from 'react'; // Añade useMemo
import styles from './assets/styles/estilos_pagina_inicio.module.scss';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { JobCard, ProjectCard } from './widgets/JobCard'; // Asegúrate que la ruta sea correcta
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

// Importa los datos estáticamente
import portfolioDataSource from './data/data.js'; // Ajusta la ruta si es necesario

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('section1');
    // Ya no necesitamos isLoading o errorLoading para los datos de idioma
    // Ya no necesitamos pageData en el state, lo derivaremos

    // Referencias a las secciones (sin cambios)
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    // Determina el idioma actual usando useMemo para eficiencia
    const currentLanguage = useMemo(() => {
        if (location.pathname.startsWith('/es')) return 'es';
        if (location.pathname.startsWith('/pt')) return 'pt';
        return 'en'; // Default a inglés
    }, [location.pathname]);

    // Deriva los datos específicos del idioma usando useMemo (acceso directo)
    const portfolioData = useMemo(() => {
        const lang = currentLanguage;
        const fallbackLang = 'en'; // Idioma de respaldo

        // --- Acceso directo con fallback ---

        // Obtener objetos/valores traducidos directamente
        const titles = portfolioDataSource.title[lang] ?? portfolioDataSource.title[fallbackLang] ?? {};
        const aboutText = portfolioDataSource.about[lang] ?? portfolioDataSource.about[fallbackLang] ?? '';
        const interestsText = portfolioDataSource.interests[lang] ?? portfolioDataSource.interests[fallbackLang] ?? '';
        const languagesArray = portfolioDataSource.languages[lang] ?? portfolioDataSource.languages[fallbackLang] ?? [];
        const monthsArray = portfolioDataSource.months[lang] ?? portfolioDataSource.months[fallbackLang] ?? [];

        // Función auxiliar SÓLO para formatear fechas (ya que es un poco más compleja)
        const formatEndDate = (job) => {
            if (job.endYear === 'present') {
                switch (lang) {
                    case 'es': return 'Presente';
                    case 'pt': return 'Presente';
                    default: return 'Present';
                }
            }
            // Acceso directo a meses con fallback dentro de la función
            const months = portfolioDataSource.months[lang] ?? portfolioDataSource.months[fallbackLang] ?? [];
            const monthIndex = parseInt(job.endMonth, 10) - 1;
            const month = months[monthIndex] ?? job.endMonth; // Fallback al número si el mes no existe
            return `${month} ${job.endYear}`;
        };

        const formatStartDate = (job) => {
            // Acceso directo a meses con fallback dentro de la función
            const months = portfolioDataSource.months[lang] ?? portfolioDataSource.months[fallbackLang] ?? [];
            const monthIndex = parseInt(job.startMonth, 10) - 1;
            const month = months[monthIndex] ?? job.startMonth; // Fallback al número
            return `${month} ${job.startYear}`;
        };


        return {
            // Datos comunes (igual que antes)
            name: "Juan Diego Valdivia Mendoza",
            job: portfolioDataSource.job,
            githubLink: `https://github.com/${portfolioDataSource.data.github.replace('github.com/', '')}`,
            emailLink: `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioDataSource.data.gmail}`,
            linkedinLink: "https://www.linkedin.com/in/juan-diego-v-bb399619a",
            tagline: "I build accessible, pixel-perfect digital experiences for the web.",

            // --- Usar los datos obtenidos directamente ---
            title: titles, // El objeto completo de títulos para el idioma
            about: aboutText,
            interests: interestsText,
            languages: languagesArray,

            // Procesar experiencia con acceso directo dentro del map
            experience: portfolioDataSource.experience.map(exp => ({
                // Datos comunes del item
                startYear: exp.startYear,
                endYear: exp.endYear,
                skills: exp.skills,
                // Datos formateados/traducidos
                startDate: formatStartDate(exp),
                endDate: formatEndDate(exp),
                // Acceso directo a traducciones anidadas con fallback
                roleCompany: exp.roleCompany[lang] ?? exp.roleCompany[fallbackLang] ?? '',
                description: (exp.description[lang] ?? exp.description[fallbackLang] ?? []),
            })),

            // Procesar proyectos con acceso directo dentro del map
            projects: portfolioDataSource.projects.map(proj => ({
                // Datos comunes del item
                img: proj.img,
                date: proj.date,
                skills: proj.skills,
                link: proj.link,
                // Acceso directo a traducciones anidadas con fallback
                title: proj.title[lang] ?? proj.title[fallbackLang] ?? '',
                description: proj.description[lang] ?? proj.description[fallbackLang] ?? '',
            })),

            // education: portfolioDataSource.education[lang] ?? portfolioDataSource.education[fallbackLang] ?? {},
            // courses: portfolioDataSource.courses, // No traducido
        };
    }, [currentLanguage]); // Solo recalcula cuando cambia el idioma


    // Función Throttle (sin cambios)
    const throttle = (func, limit) => {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    };

    // useEffect para el scroll (sin cambios significativos en la lógica interna)
    useEffect(() => {
        // Añadir listeners solo si los datos y las refs existen
        if (portfolioData && section1Ref.current && section2Ref.current && section3Ref.current && section4Ref.current) {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                try {
                    if (scrollPosition < section2Ref.current.offsetTop - 100) {
                        setActiveSection('section1');
                    } else if (scrollPosition < section3Ref.current.offsetTop - 100) {
                        setActiveSection('section2');
                    } else if (scrollPosition < section4Ref.current.offsetTop - 100) {
                        setActiveSection('section3');
                    } else {
                        setActiveSection('section4');
                    }
                } catch (e) {
                    // console.warn("Error accessing ref offsetTop during scroll", e);
                }
            };

            const throttledScroll = throttle(handleScroll, 100);
            window.addEventListener('scroll', throttledScroll);

            return () => {
                window.removeEventListener('scroll', throttledScroll);
            };
        }
        // Ejecutar si cambian los datos (idioma) o las refs (aunque esto último es menos probable)
    }, [portfolioData, section1Ref, section2Ref, section3Ref, section4Ref]); // Depende de portfolioData

    // Navegación por click (sin cambios)
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        let section;
        try {
            switch (sectionId) {
                case 'section1': section = section1Ref.current; break;
                case 'section2': section = section2Ref.current; break;
                case 'section3': section = section3Ref.current; break;
                case 'section4': section = section4Ref.current; break;
                default: section = section1Ref.current;
            }
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 50,
                    behavior: 'smooth'
                });
                setActiveSection(sectionId);
            }
        } catch (e) {
            console.error("Error scrolling to section", e);
        }
    };

    // Cambio de idioma (sin cambios)
    const handleLanguageChange = (event) => {
        const selectedLang = event.target.value;
        // Navega a la ruta correspondiente, lo que actualizará `currentLanguage` via useMemo
        if (selectedLang === 'es') navigate('/es');
        else if (selectedLang === 'en') navigate('/en');
        else if (selectedLang === 'pt') navigate('/pt');
    };

    // --- RENDERIZADO ---
    // Ya no se necesita el estado de carga/error para el archivo de idioma
    if (!portfolioData) {
        // Puede mostrar un loader simple si la derivación inicial tarda (poco probable)
        return <div>Loading initial data...</div>;
    }

    return (
        <div className='body'>
            <title>Portfolio JD17VM</title>
            <div className={styles['container-total']}>
                <div className={styles['container-scroll-info-block']}>
                    <div className={styles['info-block']}>
                        <h1>{portfolioData.name}</h1> {/* Nombre desde los datos */}
                        <p>{portfolioData.job}</p>     {/* Job Title desde los datos */}
                        <p>{portfolioData.tagline}</p> {/* Tagline (traducir si es necesario) */}

                        <nav>
                            <ul>
                                {/* Usar los títulos traducidos */}
                                <li><a href="#section1" onClick={(e) => handleNavClick(e, 'section1')} className={activeSection === 'section1' ? styles.active : ''}>{portfolioData.title.about}</a></li>
                                <li><a href="#section2" onClick={(e) => handleNavClick(e, 'section2')} className={activeSection === 'section2' ? styles.active : ''}>{portfolioData.title.interests}</a></li>
                                <li><a href="#section3" onClick={(e) => handleNavClick(e, 'section3')} className={activeSection === 'section3' ? styles.active : ''}>{portfolioData.title.experience.toUpperCase()}</a></li>
                                <li><a href="#section4" onClick={(e) => handleNavClick(e, 'section4')} className={activeSection === 'section4' ? styles.active : ''}>{portfolioData.title.projects}</a></li>
                            </ul>
                        </nav>

                        {/* Links Sociales */}
                        <div className={styles['social-links']}>
                            <a href={portfolioData.githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href={portfolioData.emailLink} target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                            <a href={portfolioData.linkedinLink} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>

                        {/* Sección de Idiomas */}
                        <div className={styles['container-languages']}>
                            {/* Usar el título traducido */}
                            <h2>{portfolioData.title.languages.toUpperCase()}</h2>
                            <ul>
                                {portfolioData.languages.map((language, index) => (
                                    <li key={index}><p>{language.language}:</p> <p>{language.level}</p></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Sección About e Interests */}
                <div className={styles['container-text-title']}>
                    <div className={styles['text-title']} ref={section1Ref} id="section1">
                        <h2>{portfolioData.title.about}</h2>
                        {/* Usar el texto traducido */}
                        <p dangerouslySetInnerHTML={{ __html: portfolioData.about }}></p>
                    </div>

                    <div className={styles['text-title']} ref={section2Ref} id="section2">
                        <h2>{portfolioData.title.interests}</h2>
                        {/* Usar el texto traducido */}
                        <p>{portfolioData.interests}</p>
                    </div>
                </div>

                {/* Sección Experiencia */}
                <div className={styles['container-experience']} ref={section3Ref} id="section3">
                    <h2>{portfolioData.title.experience.toUpperCase()}</h2>
                    <div>
                        {portfolioData.experience.map((job, index) => (
                            <JobCard
                                key={index}
                                startDate={job.startDate} // Usar fecha formateada
                                endDate={job.endDate}     // Usar fecha formateada
                                roleCompany={job.roleCompany} // Usar valor traducido
                                description={job.description} // Usar valor traducido/formateado
                                skills={job.skills}       // Usar skills comunes
                            />
                        ))}
                    </div>
                </div>

                {/* Sección Proyectos */}
                <div className={styles['container-projects']} ref={section4Ref} id="section4">
                    <h2>{portfolioData.title.projects}</h2>
                    <div>
                        {portfolioData.projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}           // Usar título traducido
                                img={project.img}             // Dato común
                                date={project.date}           // Dato común
                                description={project.description} // Usar descripción traducida
                                skills={project.skills}       // Dato común
                                link={project.link}           // Dato común
                            />
                        ))}
                    </div>
                </div>
                {/* Fin container-main-content */}

                {/* Selector de Idioma (Fijo o en otra posición) */}
                <div className={styles['language-selector']}>
                    <select
                        name="LANG"
                        onChange={handleLanguageChange} // Añade el manejador onChange
                        value={currentLanguage} // Opcional: para que el select muestre el idioma actual
                    >
                        <option value="es">Español</option>
                        <option value="en">English</option>
                        <option value="pt">Português</option>
                    </select>
                    <span><IoIosArrowDown /></span>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;