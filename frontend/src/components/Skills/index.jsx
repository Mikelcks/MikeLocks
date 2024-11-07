import React from 'react';
import SkillBar from '../SkillBar/index';
import styles from './skills.module.scss';

const Skills = () => {
    const skills = [
        { name: 'JavaScript / React', level: 70 },
        { name: 'HTML / CSS', level: 80 },
        { name: 'WordPress - Compétence en cours d\'acquisition', level: 5 },
        { name: 'PHP - Compétence en cours d\'acquisition', level: 5 },
        { name: 'SQL - Compétence en cours d\'acquisition', level: 5 },
    ];

    return (
        <div className={styles.skillsContainer}>
            {skills.map((skill, index) => (
                <SkillBar key={index} skillName={skill.name} level={skill.level} />
            ))}
        </div>
    );
};

export default Skills;
