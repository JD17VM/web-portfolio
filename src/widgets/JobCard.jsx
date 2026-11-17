import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from '../assets/styles/job-card-styles.module.scss'
import SkillLabelContainer from './SkillLabelContainer';
import imageHelper from '../utils/imageHelper';

export const JobCard = ({ 
    startDate = "", 
    endDate = "", 
    roleCompany = "The asignated role . Company Name", 
    description = "In the space provided below, please provide a comprehensive account of all the functions and responsibilities you undertook during your tenure at the company.", 
    skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6", "Skill 7", "Skill 8"] 
}) => {
    return(
        <div className={styles['job-card']}>
            <div>
                {startDate === endDate ? (
                    <p>{startDate}</p>
                ) : (
                    <>
                        <p>{startDate}</p>
                        <p>to {endDate}</p>
                    </>
                )}
            </div>
            <div className={styles['cont-info']}>
                <h3>{roleCompany}</h3>
                {Array.isArray(description) ? (
                    <ul>
                        {description.map((item, index) => (
                            <li key={index}>- {item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{description}</p>
                )}
                <SkillLabelContainer skills={skills}/>
            </div>
        </div>
    )
}

export const ProjectCard = ({
    img = imageHelper.default_square_img,
    date = "YEAR",
    title = "This is the project title",
    description = "In the designated area below, users are kindly requested to provide a comprehensive description of the project at hand. This description should encompass the most relevant aspects of the project.",
    skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6", "Skill 7", "Skill 8"],
    link = "",
    liveLink = "",
    gallery = [],
    labels = {}
}) => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const hasGallery = gallery.length > 0;
    const isPrivate = !link;
    const isClickable = hasGallery || link || liveLink;

    const openGallery = () => {
        setCurrent(0);
        setIsGalleryOpen(true);
    };

    const next = () => setCurrent(c => (c + 1) % gallery.length);
    const prev = () => setCurrent(c => (c - 1 + gallery.length) % gallery.length);

    const handleCardClick = () => {
        if (hasGallery) openGallery();
        else if (link) window.open(link, '_blank', 'noopener,noreferrer');
        else if (liveLink) window.open(liveLink, '_blank', 'noopener,noreferrer');
    };

    const handleKeyDown = (e) => {
        if (e.target !== e.currentTarget) return;
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
        }
    };

    useEffect(() => {
        if (!isGalleryOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') setIsGalleryOpen(false);
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGalleryOpen, gallery.length]);

    return(
        <>
            <div
                className={`${styles['project-card']} ${isClickable ? styles['clickable'] : ''}`}
                onClick={handleCardClick}
                onKeyDown={handleKeyDown}
                role={isClickable ? 'button' : undefined}
                tabIndex={isClickable ? 0 : undefined}
            >
                <div className={styles['cont-img']}>
                    <img
                        src={img}
                        alt={title}
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = imageHelper.default_square_img;
                        }}
                    />
                </div>
                <p>{date}</p>
                <div className={styles['cont-info']}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className={styles['project-actions']} onClick={(e) => e.stopPropagation()}>
                        {hasGallery && (
                            <button type="button" onClick={openGallery}>{labels.screenshots ?? 'Screenshots'}</button>
                        )}
                        {liveLink && (
                            <a href={liveLink} target="_blank" rel="noopener noreferrer">{labels.visitSite ?? 'Visit site'}</a>
                        )}
                        {link && (
                            <a href={link} target="_blank" rel="noopener noreferrer">{labels.viewCode ?? 'View code'}</a>
                        )}
                        {isPrivate && (
                            <span>{labels.privateCode ?? 'Private code'}</span>
                        )}
                    </div>
                </div>
                <SkillLabelContainer skills={skills}/>
            </div>

            {isGalleryOpen && createPortal(
                <div className={styles['gallery-overlay']} onClick={() => setIsGalleryOpen(false)}>
                    <div
                        className={styles['gallery-modal']}
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label={title}
                    >
                        <div className={styles['gallery-header']}>
                            <h3>{title}</h3>
                            <button type="button" onClick={() => setIsGalleryOpen(false)}>{labels.close ?? 'Close'}</button>
                        </div>
                        <div className={styles['gallery-main']}>
                            {gallery.length > 1 && (
                                <button type="button" aria-label="Previous" onClick={prev}>&#8249;</button>
                            )}
                            <img src={gallery[current].src} alt={gallery[current].caption || title} />
                            {gallery.length > 1 && (
                                <button type="button" aria-label="Next" onClick={next}>&#8250;</button>
                            )}
                        </div>
                        {gallery[current].caption && <p>{gallery[current].caption}</p>}
                        {gallery.length > 1 && (
                            <div className={styles['gallery-thumbs']}>
                                {gallery.map((item, i) => (
                                    <button
                                        type="button"
                                        key={item.src}
                                        className={i === current ? styles['active'] : ''}
                                        onClick={() => setCurrent(i)}
                                    >
                                        <img src={item.src} alt="" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}
