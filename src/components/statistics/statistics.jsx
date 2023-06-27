import { NotificationMessage } from './NotificationMessage';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({ good, neutral, bad, total, positive }) => {
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
        {total > 0 && `Positive feedback: ${positive}%`}
      </span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};
