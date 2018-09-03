import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../common/SectionHeader';
import styles from './styles.css';

const Partners = ({ partners }) => (
  <section className={styles.partners}>
    <SectionHeader text="Our Trusted Partners" />
    <p>We work with the most trusted companies in Australia - 600+ companies!</p>
    <ul className={styles.list}>
      {partners.map((partner, i) => (
        <li key={i}>
          <img src={partner.src} alt={partner.name} />
        </li>
      ))}
    </ul>
  </section>
);

Partners.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
};

export default Partners;
