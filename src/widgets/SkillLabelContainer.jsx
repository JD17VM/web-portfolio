import styles from '../assets/styles/skill-label-styles.module.scss'

const SkillLabel = ({children}) => {
    return (
        <div className={styles['skill-label']}>
            <p>{children}</p>
        </div>
    )
}

const SkillLabelContainer = () => {
    return(
        <div className={styles['skill-label-container']}>
            <SkillLabel>CSS</SkillLabel>
            <SkillLabel>JavaScript</SkillLabel>
            <SkillLabel>HTML</SkillLabel>
            <SkillLabel>Node.js</SkillLabel>
            <SkillLabel>Node.js</SkillLabel>
            <SkillLabel>Node.js</SkillLabel>
            <SkillLabel>Node.js</SkillLabel>
            <SkillLabel>Node.js</SkillLabel>
            <SkillLabel>Node.js</SkillLabel>
            <SkillLabel>Node.js</SkillLabel>
        </div>
    )
}




export default SkillLabelContainer;