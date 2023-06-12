import { NotificationMessage } from './NotificationMessage';
import styles from './statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={styles.statistics}>
      <span className={styles.bold}>Statistics:</span>
      <span className={styles.bold}>
        {total ? `Good : ${good}` : <NotificationMessage />}{' '}
      </span>
      <span className={styles.bold}>{total > 0 && `Neutral: ${neutral}`} </span>
      <span className={styles.bold}>{total > 0 && `Bad: ${bad}`} </span>
      <span className={styles.bold}>{total > 0 && `Total: ${total}`}</span>
      <span className={styles.bold}>
        {total > 0 && `Positive feedback: ${positivePercentage}%`}
      </span>
    </div>
  );
};
