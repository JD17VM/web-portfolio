import React, { useEffect, useState, useRef } from 'react';
import './assets/styles/estilos_generales.css'
import './assets/styles/estilos_pagina_cv.scss';

import imageHelper from './utils/imageHelper';

import pageData from "./data/data"

const PersonalDetailItem = ({image, children}) => {
    return (
        <div className='left-col__personal-detail-item'>
            <img src={image} alt="" />
            <p>{children}</p>
        </div>
    );
}

const TextBlock = ({titulo,contenido}) => {
    return (
        <div className="left-col__text-block">
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
        <h2 className='right-col__title'>{children}</h2>
    )
}

const MetaHeader = ({children, derecha_superior,derecha_inferior}) => {
    return (
        <div className="right-col__meta-header">
            <div className="right-col__meta-header-text">{children}</div>
            <div className="right-col__meta-header-aside">
                <div>{derecha_superior}</div>
                {derecha_inferior}
            </div>
        </div>
    )
}

const ExperienceItem = ({titulo,descripcion,fecha_inicio,fecha_fin,pais, herramientas}) => {
    return(
        <div className='right-col__experience-item'>
            <MetaHeader derecha_superior={<><p>{fecha_inicio}</p><p> to {fecha_fin}</p></>}  derecha_inferior={pais}>
                <h3>{titulo}</h3>
            </MetaHeader>
            <div className="right-col__experience-description">
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
            
            <div className="right-col__experience_skills">
                <p>{pageData.title.tools}:</p>
                <p>{herramientas}</p>
            </div>
        </div>
    )
}

const CV = () => {
    return (
        <div className='body-cv'>
            <div className="left-col">
                <h1>Juan Diego <br/> Valdivia Mendoza</h1>
                <h2>{pageData.job}</h2>
                <div className="left-col__personal-details">
                    <PersonalDetailItem image={imageHelper.calendar_icon}>{pageData.data.dateBirth}</PersonalDetailItem>
                    <PersonalDetailItem image={imageHelper.map_icon}>{pageData.data.country}</PersonalDetailItem>
                    <PersonalDetailItem image={imageHelper.github_icon}>{pageData.data.github}</PersonalDetailItem>
                    <PersonalDetailItem image={imageHelper.email_icon}>{pageData.data.gmail}</PersonalDetailItem>
                </div>
                <TextBlock 
                titulo={pageData.title.about}
                contenido={pageData.about}
                />

                <TextBlock 
                titulo={pageData.title.interests}
                contenido={pageData.interests}
                />
            </div>
            <div className="right-col">
                <Title>{pageData.title.experience}</Title>
                <div className="right-col__spacer">
                    {pageData.experience.map((job, index) => (
                        <ExperienceItem
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
                <div className="right-col__spacer">
                    <MetaHeader derecha_superior={pageData.education.year}>
                        <p>{pageData.education.career}</p>
                        <strong>{pageData.education.university}</strong>
                    </MetaHeader>
                </div>

                <Title>{pageData.title.courses}</Title>

                <div className="right-col__spacer">
                    {pageData.courses.map((course, index) => (
                        <MetaHeader key={index}>
                            <p>{course.course}</p>
                            <strong>{course.institution}</strong>
                        </MetaHeader>
                    ))}

                </div>
                
                <Title>{pageData.title.languages}</Title>
                <div className="right-col__spacer">
                    <MetaHeader>
                    {pageData.languages.map((language, index) => (
                        <p key={index}>- <strong>{language.language}: </strong>{language.level}</p>
                    ))}
                    </MetaHeader>
                </div>
            </div>
        </div>
    );
}

export default CV;