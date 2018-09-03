import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ label, className }) => (
  <button className={`${styles.button} ${className}`}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
