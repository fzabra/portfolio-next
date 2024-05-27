import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import styles from './GitHubCalendar.module.scss';

const GitHubCalendarComponent: React.FC = () => {
  return (
    <div className={styles.calendarContainer}>
      <h2>Gráfico de Contribuições do GitHub</h2>
      <GitHubCalendar username="fzabra" />
      <p><a href='https://github.com/fzabra/' target='_blank'>https://github.com/fzabra/</a></p>
    </div>
  );
};

export default GitHubCalendarComponent;