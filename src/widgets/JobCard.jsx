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
    link = ""
}) => {
    return(
        <a href={link} target="_blank" className={styles['project-card']}>
            <div className={styles['cont-img']}>
                <img src={img} alt="My image project" />
            </div>
            <p>{date}</p>
            <div className={styles['cont-info']}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <SkillLabelContainer skills={skills}/>
        </a>
    )
}