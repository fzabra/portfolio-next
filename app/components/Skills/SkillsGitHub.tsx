'use client';

import React from 'react';
import styles from './Skills.module.scss';
import GitHubCalendarComponent from '../GitHub/GitHubCalendar';

const SkillsGitHub: React.FC = () => {
  return (
    <div className={styles.skillsContainer}>
      <GitHubCalendarComponent />
    </div>
  );
};

export default SkillsGitHub;
