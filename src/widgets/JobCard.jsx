import styles from '../assets/styles/job-card-styles.module.scss'
import SkillLabelContainer from './SkillLabelContainer';

const JobCard = () => {
    return(
        <div className={styles['job-card']}>
            <p>2024 - PRESENT</p>
            <div>
                <h3>Senior Frontend Engineer, Accessibility . Klavijo</h3>
                <p>In my spare time, Im usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seedsKorok seeds.</p>
                <SkillLabelContainer/>
            </div>
        </div>
    )
}

export default JobCard;