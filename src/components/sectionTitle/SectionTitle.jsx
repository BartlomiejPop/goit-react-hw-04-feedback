import styles from './sectionTitle.module.css';
import PropTypes from 'prop-types';

export const SectionTitle = ({ children }) => {
  return <h1 className={styles.header}>{children}</h1>;
};

SectionTitle.propTypes = {
  children: PropTypes.string,
};
