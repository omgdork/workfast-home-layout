import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Icons = ({ icons }) => (
  <ul className={styles.icons}>
    {icons.map((icon, i) => <li key={i} className={styles[icon.className]}>{icon.label}</li>)}
  </ul>
);

Icons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  })).isRequired,
};

export default Icons;
