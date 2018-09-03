import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const SectionHeader = ({ text }) => (
  <h2 className={styles['section-header']}>{text}</h2>
);

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionHeader;
