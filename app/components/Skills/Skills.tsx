'use client';

import React from 'react';
import styles from './Skills.module.scss';


type Skill = {
  name: string;
  percentage: number;
};

const skills: Skill[] = [
  { name: 'HTML', percentage: 100 },
  { name: 'CSS', percentage: 100 },
  { name: 'JavaScript', percentage: 100 },
  { name: 'TypeScript', percentage: 100 },
  { name: 'React', percentage: 100 },
  { name: 'Next.js', percentage: 50 },
  { name: 'Node.js', percentage: 30 },
];

const getProgressBarColor = (percentage: number): string => {
  if (percentage <= 25) return styles.red;
  if (percentage <= 50) return styles.orange;
  if (percentage <= 75) return styles.purple;
  if (percentage === 100) return styles.green;
  return styles.blue;
};

const Skills: React.FC = () => {
  return (
    <div className={styles.skillsContainer}>
      <p>Quão confortável me sinto com cada habilidade</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skill}>
            <span className={styles.skillName}>{skill.name}</span>
            <div className={styles.progressBarContainer}>
              <div
                className={`${styles.progressBar} ${getProgressBarColor(skill.percentage)}`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <span className={styles.percentage}>{skill.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
