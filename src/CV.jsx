import React, { useEffect, useState } from 'react'; // Añadido useEffect, useState
import { useLocation, useNavigate } from 'react-router-dom'; // Añadido useLocation, useNavigate
import './assets/styles/estilos_generales.css';
import './assets/styles/cv-page-styles.scss';
import imageHelper from './utils/imageHelper';
import { IoIosArrowDown } from "react-icons/io"; // Opcional: para el selector de idioma

// Componentes internos (sin cambios)
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
            <div className="right-col__meta-header-aside">
                <div>{aside_upper}</div>
                {aside_lower}
            </div>
        </div>
    )
}

const ExperienceItem = ({ title, description, start_date, end_date, country, skills, toolsLabel }) => {
     // Añadir verificación por si description o skills son null/undefined
    if (!description) return null;

    return (
        <div className='right-col__experience-item'>
            <MetaHeader aside_upper={<><p>{start_date}</p><p> to {end_date}</p></>} aside_lower={country}>
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
                     {/* Usar la etiqueta traducida */}
                    <p>{toolsLabel}:</p>
                    <p>{Array.isArray(skills) ? skills.join(", ") : skills}</p>
                </div>
            )}
        </div>
    )
}


// ----- Componente CV Modificado -----
const CV = () => {
    const [pageData, setPageData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorLoading, setErrorLoading] = useState(false);

    const location = useLocation();

    // Determinar el idioma actual desde la URL
    let currentLanguage = 'es'; // Idioma por defecto
    if (location.pathname.startsWith('/en/cv')) {
        currentLanguage = 'en';
    } else if (location.pathname.startsWith('/es/cv')) {
        currentLanguage = 'es';
    } else if (location.pathname.startsWith('/pt/cv')) {
        currentLanguage = 'pt';
    }// Podrías añadir más lógica si esperas otras rutas o una ruta raíz para el CV

    // Cargar datos dinámicamente basado en el idioma
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            setErrorLoading(false);
            try {
                // Importación dinámica
                const dataModule = await import(`./data/data-${currentLanguage}.js`);
                setPageData(dataModule.default);
            } catch (err) {
                console.error(`Error loading CV data for language: ${currentLanguage}`, err);
                setErrorLoading(true);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();

    }, [currentLanguage]); // Se ejecuta cuando cambia el idioma


    // --- RENDERIZADO CONDICIONAL ---
    if (isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading CV...</div>;
    }

    if (errorLoading || !pageData) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red' }}>Error loading CV data.</div>;
    }

    // --- RENDERIZADO PRINCIPAL ---
    // Ahora usa `pageData` del estado en lugar del import estático
    return (
        <div className='body-cv'>
            <title>CV_Juan_Diego_Valdivia_Mendoza</title>

            <div className="left-col" style={{width: `${35 + pageData.scale.left_col_width}%`}}>
                <h1>Juan Diego <br /> Valdivia Mendoza</h1>
                <h2>{pageData.job}</h2>
                <div className="left-col__personal-details">
                    {/* Asegúrate que pageData.data existe antes de acceder */}
                    {pageData.data && (
                        <>
                            <PersonalDetailItem image={imageHelper.calendar_icon}>{pageData.data.dateBirth}</PersonalDetailItem>
                            <PersonalDetailItem image={imageHelper.map_icon}>{pageData.data.country}</PersonalDetailItem>
                            <PersonalDetailItem image={imageHelper.github_icon}>{pageData.data.github}</PersonalDetailItem>
                            <PersonalDetailItem image={imageHelper.email_icon}>{pageData.data.gmail}</PersonalDetailItem>
                        </>
                    )}
                </div>
                {/* Asegúrate que pageData.title existe */}
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

            <div className="right-col" style={{rowGap: `${3.5 + pageData.scale.right_col_row_gap}pt`}}>
             {/* Asegúrate que pageData.title y pageData.experience existen */}
                {pageData.title && pageData.experience && (
                    <>
                        <Title>{pageData.title.experience}</Title>
                        <div className="right-col__spacer">
                            {pageData.experience.map((job, index) => (
                                <ExperienceItem
                                    key={index}
                                    title={job.roleCompany}
                                    description={job.description}
                                    start_date={`${job.startMonth} ${job.startYear}`}
                                    end_date={`${job.endMonth} ${job.endYear}`}
                                    country='Peru' // O hacerlo dinámico si está en pageData
                                    skills={job.skills} // Ya se une con join dentro del componente si es array
                                    toolsLabel={pageData.title.tools || 'Tools'} // Pasar la etiqueta traducida
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Asegúrate que pageData.title y pageData.education existen */}
                {pageData.title && pageData.education && (
                     <>
                        <Title>{pageData.title.education}</Title>
                        <div className="right-col__spacer">
                            <MetaHeader aside_upper={pageData.education.year}>
                                <p>{pageData.education.career}</p>
                                <strong>{pageData.education.university}</strong>
                            </MetaHeader>
                        </div>
                     </>
                 )}

                {/* Asegúrate que pageData.title y pageData.courses existen */}
                {pageData.title && pageData.courses && (
                    <>
                        <Title>{pageData.title.courses}</Title>
                        <div className="right-col__spacer">
                            {pageData.courses.map((course, index) => (
                                <MetaHeader key={index} aside_upper={course.year}> {/* Asumiendo que hay un año */}
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