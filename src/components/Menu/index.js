import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const Menu = ({ links }) => (
  <ul className={styles.menu}>
    {links.map((link, i) => {
      const className = link.active ? `${styles.link} ${styles.active}` : styles.link;

      return (
        <li key={i}>
          <Link to={link.href} className={className}>{link.label}</Link>
        </li>
      );
    })}
  </ul>
);

Menu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
};

export default Menu;
