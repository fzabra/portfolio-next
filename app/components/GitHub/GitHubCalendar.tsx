import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import styles from './GitHubCalendar.module.scss';

const GitHubCalendarComponent: React.FC = () => {
  return (
    <div className={styles.calendarContainer}>
      <h2>Gráfico de Contribuições do GitHub</h2>
      <GitHubCalendar username="fzabra" />
    </div>
  );
};

export default GitHubCalendarComponent;