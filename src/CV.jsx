import React, { useMemo } from 'react'; // Quitado useState, useEffect si no son necesarios para carga asíncrona
import { useLocation, useNavigate } from 'react-router-dom';
import './assets/styles/estilos_generales.css';
import './assets/styles/cv-page-styles.scss';
import imageHelper from './utils/imageHelper'; // Asegúrate que la ruta sea correcta
import { IoIosArrowDown } from "react-icons/io";

// --- Importar la fuente de datos consolidada ---
import cvDataSource from './data/data.js'; // Ajusta la ruta si es necesario

const PersonalDetailItem = ({ image, children }) => {
    return (
        <div className='left-col__personal-detail-item'>
            <img src={image} alt="" />
            <p>{children}</p>
        </div>
    );
}

const TextBlock = ({ title, content }) => {
    // Añadir verificación por si content es null o undefined
    if (!content) return null;
    return (
        <div className="left-col__text-block">
            <div>
                <h2>{title}</h2>
                <span></span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    )
}

const Title = ({ children }) => {
    return (
        <h2 className='right-col__title'>{children}</h2>
    )
}

const MetaHeader = ({ children, aside_upper, aside_lower }) => {
    return (
        <div className="right-col__meta-header">
            <div className="right-col__meta-header-text">{children}</div>
            {/* Solo renderizar 'aside' si tiene contenido */}
            {(aside_upper || aside_lower) && (
                 <div className="right-col__meta-header-aside">
                    <div>{aside_upper}</div>
                    {aside_lower && <div>{aside_lower}</div>} {/* Asegurar que aside_lower no sea null/undefined */}
                </div>
            )}
        </div>
    )
}

// Modificado para aceptar startDate, endDate y manejar 'Present'
const ExperienceItem = ({ title, description, startDate, endDate, country, skills, toolsLabel }) => {
    if (!description) return null;

    // Determinar texto para el aside superior (rango de fechas)
    const dateRangeText = `${startDate} - ${endDate}`;

    return (
        <div className='right-col__experience-item'>
            <MetaHeader aside_upper={<><p>{startDate}</p><p> to {endDate}</p></>} aside_lower={country}>
                <h3>{title}</h3>
            </MetaHeader>
            <div className="right-col__experience-description">
                {Array.isArray(description) ? (
                    <ul>
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{description}</p>
                )}
            </div>
            {skills && skills.length > 0 && ( // Solo mostrar si hay skills
                <div className="right-col__experience_skills">
                    <p>{toolsLabel}:</p>
                    <p>{Array.isArray(skills) ? skills.join(", ") : skills}</p>
                </div>
            )}
        </div>
    )
}


// ----- Componente CV Modificado -----
const CV = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Para el selector de idioma

    // Determinar el idioma actual desde la URL usando useMemo
    const currentLanguage = useMemo(() => {
        // Modifica estas rutas según la estructura de tu aplicación para el CV
        if (location.pathname.startsWith('/es/cv')) return 'es';
        if (location.pathname.startsWith('/pt/cv')) return 'pt';
        // Asume que cualquier otra ruta o la raíz '/cv' es inglés por defecto
        // O ajusta '/en/cv' si esa es tu ruta específica para inglés
        if (location.pathname.startsWith('/en/cv') || location.pathname === '/cv') return 'en';
        return 'en'; // Fallback final
    }, [location.pathname]);

    // Procesar los datos usando useMemo, similar a Portfolio.jsx
    const pageData = useMemo(() => {
        const lang = currentLanguage;
        const fallbackLang = 'en'; // Idioma de respaldo

        // --- Helper Functions para Fechas (dentro o fuera de useMemo) ---
         const formatEndDate = (job) => {
            if (job.endYear?.toLowerCase() === 'present') {
                switch (lang) {
                    case 'es': return 'Presente';
                    case 'pt': return 'Presente';
                    default: return 'Present';
                }
            }
            const months = cvDataSource.months[lang] ?? cvDataSource.months[fallbackLang] ?? [];
            const monthIndex = parseInt(job.endMonth, 10) - 1;
            // Asegurarse que endMonth no sea vacío antes de parsear
            const month = job.endMonth && months[monthIndex] ? months[monthIndex] : (job.endMonth || '');
            return `${month} ${job.endYear || ''}`.trim(); // Evitar espacios extra si falta mes o año
        };

        const formatStartDate = (job) => {
            const months = cvDataSource.months[lang] ?? cvDataSource.months[fallbackLang] ?? [];
            const monthIndex = parseInt(job.startMonth, 10) - 1;
             // Asegurarse que startMonth no sea vacío antes de parsear
            const month = job.startMonth && months[monthIndex] ? months[monthIndex] : (job.startMonth || '');
            return `${month} ${job.startYear || ''}`.trim();
        };

        // --- Extracción y Procesamiento de Datos ---
        const titles = cvDataSource.title[lang] ?? cvDataSource.title[fallbackLang] ?? {};
        const aboutText = cvDataSource.about[lang] ?? cvDataSource.about[fallbackLang] ?? '';
        const interestsText = cvDataSource.interests[lang] ?? cvDataSource.interests[fallbackLang] ?? '';
        const educationData = cvDataSource.education[lang] ?? cvDataSource.education[fallbackLang] ?? {};
        const languagesArray = cvDataSource.languages[lang] ?? cvDataSource.languages[fallbackLang] ?? [];
        const scaleData = cvDataSource.scale[lang] ?? cvDataSource.scale[fallbackLang] ?? { left_col_width: 0, right_col_row_gap: 0 }; // Default scale

        return {
            // Datos comunes
            name: "Juan Diego Valdivia Mendoza", // Asumiendo que el nombre es fijo
            job: cvDataSource.job,
            data: cvDataSource.data, // Objeto con dateBirth, country, github, gmail
            courses: cvDataSource.courses, // Array de cursos (común)

            // Datos específicos del idioma o con fallback
            title: titles,
            about: aboutText,
            interests: interestsText,
            education: educationData,
            languages: languagesArray,
            scale: scaleData,

            // Datos procesados (como experiencia)
            experience: cvDataSource.experience.map(exp => ({
                // Campos comunes que no dependen del idioma
                startYear: exp.startYear,
                startMonth: exp.startMonth,
                endYear: exp.endYear,
                endMonth: exp.endMonth,
                skills: exp.skills,
                // Campos que sí dependen del idioma
                roleCompany: exp.roleCompany[lang] ?? exp.roleCompany[fallbackLang] ?? '',
                description: exp.description[lang] ?? exp.description[fallbackLang] ?? [],
                // Campos formateados
                startDate: formatStartDate(exp),
                endDate: formatEndDate(exp),
            })),
        };
    }, [currentLanguage]); // Recalcular solo si cambia el idioma

    // --- RENDERIZADO ---
    // Puedes añadir un chequeo simple por si pageData no está listo (aunque useMemo suele ser síncrono post-render inicial)
    if (!pageData) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading CV data...</div>;
    }

    return (
        <div className='body-cv'>
            <title>CV_{pageData.name.replace(/ /g, '_')}</title>

            {/* --- Columna Izquierda --- */}
            {/* Usar los datos de escala procesados */}
            <div className="left-col" style={{width: `${35 + (pageData.scale?.left_col_width ?? 0)}%`}}>
                <h1>{pageData.name.split(' ').slice(0, 2).join(' ')} <br /> {pageData.name.split(' ').slice(2).join(' ')}</h1>
                <h2>{pageData.job}</h2>
                <div className="left-col__personal-details">
                    {/* Usar datos comunes del objeto 'data' */}
                    {pageData.data && (
                        <>
                            <PersonalDetailItem image={imageHelper.calendar_icon}>{pageData.data.dateBirth}</PersonalDetailItem>
                            <PersonalDetailItem image={imageHelper.map_icon}>{pageData.data.country}</PersonalDetailItem>
                            <PersonalDetailItem image={imageHelper.github_icon}>{pageData.data.github}</PersonalDetailItem>
                            <PersonalDetailItem image={imageHelper.email_icon}>{pageData.data.gmail}</PersonalDetailItem>
                        </>
                    )}
                </div>
                {/* Usar títulos y textos traducidos */}
                {pageData.title && (
                    <>
                        <TextBlock
                            title={pageData.title.about}
                            content={pageData.about}
                        />
                        <TextBlock
                            title={pageData.title.interests}
                            content={pageData.interests}
                        />
                    </>
                )}
            </div>

            {/* --- Columna Derecha --- */}
             {/* Usar los datos de escala procesados */}
            <div className="right-col" style={{rowGap: `${3.5 + (pageData.scale?.right_col_row_gap ?? 0)}pt`}}>
                {/* Sección Experiencia */}
                {pageData.title && pageData.experience && (
                    <>
                        <Title>{pageData.title.experience}</Title>
                        <div className="right-col__spacer">
                            {pageData.experience.map((job, index) => (
                                <ExperienceItem
                                    key={index}
                                    title={job.roleCompany}         // Traducido
                                    description={job.description}    // Traducido
                                    startDate={job.startDate}        // Formateado
                                    endDate={job.endDate}          // Formateado
                                    country={pageData.data?.country} // Dato común
                                    skills={job.skills}             // Dato común
                                    toolsLabel={pageData.title.tools || 'Tools'} // Etiqueta traducida con fallback
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Sección Educación */}
                {pageData.title && pageData.education && (
                    <>
                        <Title>{pageData.title.education}</Title>
                        <div className="right-col__spacer">
                            <MetaHeader aside_upper={pageData.education.year}> {/* Traducido */}
                                <p>{pageData.education.career}</p>     {/* Traducido */}
                                <strong>{pageData.education.university}</strong> {/* Traducido */}
                            </MetaHeader>
                        </div>
                    </>
                )}

                {/* Sección Cursos */}
                {/* Asume que los datos de cursos son comunes, solo el título cambia */}
                {pageData.title && pageData.courses && (
                    <>
                        <Title>{pageData.title.courses}</Title>
                        <div className="right-col__spacer">
                            {pageData.courses.map((course, index) => (
                                // Si los cursos tuvieran 'year', se podría añadir a aside_upper
                                <MetaHeader key={index} /* aside_upper={course.year} */>
                                    <p>{course.course}</p>
                                    <strong>{course.institution}</strong>
                                </MetaHeader>
                            ))}
                        </div>
                    </>
                )}

                {/* Asegúrate que pageData.title y pageData.languages existen */}
                {pageData.title && pageData.languages && (
                    <>
                        <Title>{pageData.title.languages}</Title>
                        <div className="right-col__spacer">
                            <MetaHeader>
                                {pageData.languages.map((language, index) => (
                                    <p key={index}>- <strong>{language.language}: </strong>{language.level}</p>
                                ))}
                            </MetaHeader>
                        </div>
                     </>
                 )}
            </div>
        </div>
    );
}

export default CV;