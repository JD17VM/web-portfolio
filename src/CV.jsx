import React, { useEffect, useState, useRef } from 'react';
import './assets/styles/estilos_generales.css'
import './assets/styles/estilos_pagina_cv.scss';

import imageHelper from './utils/imageHelper';

import pageData from "./data/data"

const Dato = ({image, children}) => {
    return (
        <div className='dato'>
            <img src={image} alt="" />
            <p>{children}</p>
        </div>
    );
}

const Seccion_Izquierda = ({titulo,contenido}) => {
    return (
        <div className="seccion_izquierda">
            <div>
                <h2>{titulo}</h2>
                <span></span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: contenido }}></p>
        </div>
    )
}

const Title = ({children}) => {
    return (
        <h2 className='titulo_derecha'>{children}</h2>
    )
}

const Cabecera = ({children, derecha_superior,derecha_inferior}) => {
    return (
        <div className="cabecera">
            <div className="texto">{children}</div>
            <div className="derecha_s">
                <div>{derecha_superior}</div>
                {derecha_inferior}
            </div>
        </div>
    )
}

const Experiencia = ({titulo,descripcion,fecha_inicio,fecha_fin,pais, herramientas}) => {
    return(
        <div className='experiencia'>
            <Cabecera derecha_superior={<><p>{fecha_inicio}</p><p> to {fecha_fin}</p></>}  derecha_inferior={pais}>
                <h3>{titulo}</h3>
            </Cabecera>
            <div className="descripcion">
                {Array.isArray(descripcion) ? (
                    <ul>
                        {descripcion.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{descripcion}</p>
                )}
            </div>
            
            <div className="herramientas">
                <p>{pageData.title.tools}:</p>
                <p>{herramientas}</p>
            </div>
        </div>
    )
}

const CV = () => {
    return (
        <div className='body-cv'>
            <div className="izquierda">
                <h1>Juan Diego <br/> Valdivia Mendoza</h1>
                <h2>{pageData.job}</h2>
                <div className="contenedor_datos">
                    <Dato image={imageHelper.calendar_icon}>{pageData.data.dateBirth}</Dato>
                    <Dato image={imageHelper.map_icon}>{pageData.data.country}</Dato>
                    <Dato image={imageHelper.github_icon}>{pageData.data.github}</Dato>
                    <Dato image={imageHelper.email_icon}>{pageData.data.gmail}</Dato>
                </div>
                <Seccion_Izquierda 
                titulo={pageData.title.about}
                contenido={pageData.about}
                />

                <Seccion_Izquierda 
                titulo={pageData.title.interests}
                contenido={pageData.interests}
                />
            </div>
            <div className="derecha">
                <Title>{pageData.title.experience}</Title>
                <div className="cont_agrupado">

                    {pageData.experience.map((job, index) => (
                        <Experiencia
                        key = {index}
                        titulo = {job.roleCompany}
                        descripcion = {job.description}
                        fecha_inicio = {`${job.startMonth} ${job.startYear}`}
                        fecha_fin = {`${job.endMonth} ${job.endYear}`}
                        pais = 'Peru'
                        herramientas = {job.skills.join(", ")}
                        />
                    ))}
                </div>

                <Title>{pageData.title.education}</Title>
                <div className="cont_agrupado">
                    <Cabecera derecha_superior={pageData.education.year}>
                        <p>{pageData.education.career}</p>
                        <strong>{pageData.education.university}</strong>
                    </Cabecera>
                </div>

                <Title>{pageData.title.courses}</Title>

                <div className="cont_agrupado">
                    {pageData.courses.map((course, index) => (
                        <Cabecera key={index}>
                            <p>{course.course}</p>
                            <strong>{course.institution}</strong>
                        </Cabecera>
                    ))}

                </div>
                
                <Title>{pageData.title.languages}</Title>
                <div className="cont_agrupado">
                    <Cabecera>
                    {pageData.languages.map((language, index) => (
                        <p key={index}>- <strong>{language.language}: </strong>{language.level}</p>
                    ))}
                    </Cabecera>
                </div>
            </div>
        </div>
    );
}

export default CV;