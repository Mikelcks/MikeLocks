import React from 'react';
import styles from './skillBar.module.scss';

const SkillBar = ({ skillName, level }) => {
    return (
        <div className={styles.skillBar}>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${level}%` }}>
                    <span className={styles.progressText}>{skillName}</span>
                </div>
            </div>
        </div>
    );
};

export default SkillBar;
