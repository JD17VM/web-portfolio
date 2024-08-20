import styles from '../assets/styles/job-card-styles.module.scss'
import SkillLabelContainer from './SkillLabelContainer';

export const JobCard = () => {
    return(
        <div className={styles['job-card']}>
            
            <p>2024 - PRESENT</p>
            <div className={styles['cont-info']}>
                <h3>Senior Frontend Engineer, Accessibility . Klavijo</h3>
                <p>In my spare time, Im usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seedsKorok seeds.</p>
                <SkillLabelContainer/>
            </div>
        </div>
    )
}


export const ProjectCard = () => {
    return(
        <div className={styles['element-card']}>
            <div className={styles['cont-img']}>

            </div>
            <p>2024 - PRESENT</p>
            <div className={styles['cont-info']}>
                <h3>Senior Frontend Engineer, Accessibility . Klavijo</h3>
                <p>In my spare time, Im usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seedsKorok seeds.</p>
                
            </div>
            <SkillLabelContainer/>
        </div>
    )
}