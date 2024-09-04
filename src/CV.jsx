import React from 'react';
import './assets/styles/estilos_generales.css'
import './assets/styles/cv-page-styles.scss';

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

const TextBlock = ({title,content}) => {
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

const Title = ({children}) => {
    return (
        <h2 className='right-col__title'>{children}</h2>
    )
}

const MetaHeader = ({children, aside_upper,aside_lower}) => {
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

const ExperienceItem = ({title,description,start_date,end_date,country, skills}) => {
    return(
        <div className='right-col__experience-item'>
            <MetaHeader aside_upper={<><p>{start_date}</p><p> to {end_date}</p></>}  aside_lower={country}>
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
            
            <div className="right-col__experience_skills">
                <p>{pageData.title.tools}:</p>
                <p>{skills}</p>
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
                title={pageData.title.about}
                content={pageData.about}
                />

                <TextBlock 
                title={pageData.title.interests}
                content={pageData.interests}
                />
            </div>
            <div className="right-col">
                <Title>{pageData.title.experience}</Title>
                <div className="right-col__spacer">
                    {pageData.experience.map((job, index) => (
                        <ExperienceItem
                        key = {index}
                        title = {job.roleCompany}
                        description = {job.description}
                        start_date = {`${job.startMonth} ${job.startYear}`}
                        end_date = {`${job.endMonth} ${job.endYear}`}
                        country = 'Peru'
                        skills = {job.skills.join(", ")}
                        />
                    ))}
                </div>

                <Title>{pageData.title.education}</Title>
                <div className="right-col__spacer">
                    <MetaHeader aside_upper={pageData.education.year}>
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