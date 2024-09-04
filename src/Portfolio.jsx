import React, { useEffect, useState, useRef } from 'react';
import styles from './assets/styles/estilos_pagina_inicio.module.scss';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { JobCard, ProjectCard } from './widgets/JobCard';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const Portfolio = () => {

    const [activeSection, setActiveSection] = useState('section1');
    const [pageData, setPageData] = useState(null);     // Para guardar los datos cargados dinámicamente
    const [isLoading, setIsLoading] = useState(true);    // Para saber si los datos están cargando
    const [errorLoading, setErrorLoading] = useState(false); // Para manejar errores de carga

    // Referencias a las secciones

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    let currentLanguage;
    if (location.pathname.startsWith('/en')) {
        currentLanguage = 'en';
    } else if(location.pathname.startsWith('/es')){
        currentLanguage = 'es'; // Asumir español para '/' y otras rutas
    }

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);      // Inicia la carga
            setErrorLoading(false);  // Resetea el error
            try {
                // Importación dinámica basada en el idioma actual
                // Asegúrate que los archivos se llamen 'data-es.js' y 'data-en.js'
                // y que estén en la carpeta './data/' relativa a este archivo.
                const dataModule = await import(`./data/data-${currentLanguage}.js`);
                setPageData(dataModule.default); // Guarda los datos del export default
            } catch (err) {
                console.error(`Error loading data for language: ${currentLanguage}`, err);
                setErrorLoading(true); // Marca el error
                // Opcionalmente, podrías intentar cargar un idioma por defecto aquí
            } finally {
                setIsLoading(false); // Termina la carga (con éxito o error)
            }
        };

        loadData(); // Ejecuta la carga de datos

    }, [currentLanguage]);


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


    useEffect(() => {
        // Solo añadir listeners si NO estamos cargando Y las refs existen
        if (!isLoading && pageData && section1Ref.current && section2Ref.current && section3Ref.current && section4Ref.current) {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                // Usar try/catch por si alguna ref se vuelve null inesperadamente
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
                    // Podría pasar si el componente se desmonta durante el scroll
                }
            };

            const throttledScroll = throttle(handleScroll, 100);
            window.addEventListener('scroll', throttledScroll);

            // Limpiar el listener al desmontar o antes de re-ejecutar el efecto
            return () => {
                window.removeEventListener('scroll', throttledScroll);
            };
        }
    // Ejecutar cuando termine de cargar O cambie pageData (por si cambia layout)
    }, [isLoading, pageData]);

    // handleLanguageChange (igual que antes, cambia la RUTA, lo que disparará el useEffect)

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        let section;
        // Asegurarse que las refs existen antes de acceder a offsetTop
        try {
            switch (sectionId) {
                case 'section1': section = section1Ref.current; break;
                case 'section2': section = section2Ref.current; break;
                case 'section3': section = section3Ref.current; break;
                case 'section4': section = section4Ref.current; break;
                default: section = section1Ref.current;
            }

            if (section) { // Verificar que la sección (ref.current) no sea null
                 window.scrollTo({
                     top: section.offsetTop - 50, // Ajustar offset según necesidad
                     behavior: 'smooth'
                 });
                 setActiveSection(sectionId);
            }
        } catch (e) {
             console.error("Error scrolling to section", e);
        }
    };

    const handleLanguageChange = (event) => {
        const selectedLang = event.target.value;
        if (selectedLang === 'es') {
            navigate('/es');
        } else if (selectedLang === 'en') {
            navigate('/en');
        }
    };

    // --- RENDERIZADO CONDICIONAL (mientras carga o si hay error) ---
    if (isLoading) {
        // Puedes poner un componente Spinner o Skeleton aquí
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
    }

    if (errorLoading || !pageData) {
        // Puedes poner un mensaje de error más elaborado
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red' }}>Error loading data.</div>;
    }

    return (
        <div className='body'>
            <title>Portfolio JD17VM</title>
            <div className={styles['container-total']}>
                <div className={styles['container-scroll-info-block']}>
                    <div className={styles['info-block']}>
                        <h1>Juan Diego Valdivia Mendoza</h1>
                        <p>{pageData.job}</p>
                        <p>I build accessible, pixel-perfect digital experiences for the web.</p>

                        <nav>
                            <ul>
                                <li>
                                    <a
                                        href="#section1"
                                        onClick={(e) => handleNavClick(e, 'section1')}
                                        className={activeSection === 'section1' ? styles.active : ''}
                                    >
                                        {pageData.title.about}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#section2"
                                        onClick={(e) => handleNavClick(e, 'section2')}
                                        className={activeSection === 'section2' ? styles.active : ''}
                                    >
                                        {pageData.title.interests}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#section3"
                                        onClick={(e) => handleNavClick(e, 'section3')}
                                        className={activeSection === 'section3' ? styles.active : ''}
                                    >
                                        {pageData.title.experience.toUpperCase()}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#section4"
                                        onClick={(e) => handleNavClick(e, 'section4')}
                                        className={activeSection === 'section4' ? styles.active : ''}
                                    >
                                        {pageData.title.projects}
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className={styles['social-links']}>
                            <a href=""><FaGithub /></a>
                            <a href=""><MdEmail /></a>
                            <a href=""><FaLinkedin /></a>
                        </div>

                        <div className={styles['container-languages']}>
                            <h2>LANGUAGES</h2>
                            <ul>
                                {pageData.languages.map((language, index) => (
                                    <li key={index}><p>{language.language}:</p> <p>{language.level}</p></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles['container-text-title']}>
                    <div className={styles['text-title']} ref={section1Ref} id="section1">
                        <h2>{pageData.title.about}</h2>
                        <p dangerouslySetInnerHTML={{ __html: pageData.about }}></p>
                    </div>

                    <div className={styles['text-title']} ref={section2Ref} id="section2">
                        <h2>{pageData.title.interests}</h2>
                        <p>{pageData.interests}</p>
                    </div>
                </div>

                <div className={styles['container-experience']} ref={section3Ref} id="section3">
                    <h2>{pageData.title.experience.toUpperCase()}</h2>
                    <div>
                        {pageData.experience.map((job, index) => (
                            <JobCard
                                key={index}
                                startDate={job.startYear}
                                endDate={job.endYear}
                                roleCompany={job.roleCompany}
                                description={job.description}
                                skills={job.skills}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles['container-projects']} ref={section4Ref} id="section4">
                    <h2>{pageData.title.projects}</h2>
                    <div>
                        {pageData.projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                img={project.img}
                                date={project.date}
                                description={project.description}
                                skills={project.skills}
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles['language-selector']}>
                    <select
                        name="LANG"
                        onChange={handleLanguageChange} // Añade el manejador onChange
                        value={currentLanguage} // Opcional: para que el select muestre el idioma actual
                    >
                        <option value="es">Español</option>
                        <option value="en">English</option>
                    </select>
                    <span><IoIosArrowDown /></span>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;