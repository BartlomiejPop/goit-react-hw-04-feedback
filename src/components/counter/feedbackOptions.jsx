import React from 'react';
import styles from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  addGoodFeedback,
  addNeutralFeedback,
  addBadFeedback,
}) => {
  return (
    <div className={styles.options}>
      <button className={styles.btn} type="button" onClick={addGoodFeedback}>
        Good
      </button>
      <button className={styles.btn} type="button" onClick={addNeutralFeedback}>
        Neutral
      </button>
      <button className={styles.btn} type="button" onClick={addBadFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  addGoodFeedback: PropTypes.func.isRequired,
  addBadFeedback: PropTypes.func.isRequired,
  addNeutralFeedback: PropTypes.func.isRequired,
};
