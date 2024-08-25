import styles from '../assets/styles/skill-label-styles.module.scss'

const SkillLabel = ({children}) => {
    return (
        <div className={styles['skill-label']}>
            <p>{children}</p>
        </div>
    )
}

const SkillLabelContainer = ({ skills = [] }) => {
    return(
        <div className={styles['skill-label-container']}>
            {skills.map((skill, index) => (
                <SkillLabel key={index}>{skill}</SkillLabel>
            ))}
        </div>
    )
}




export default SkillLabelContainer;