import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button/button';
import styles from './styles.css';

const Header = () => (
  <header className={styles.header}>
    <Link to="/" className={styles.link}>Workfast</Link>
    <p>
      Need staff? <span className={styles.contact}>Call 1300 824 403</span>
    </p>
    <Button label="Login" className={styles.login} />
  </header>
);

export default Header;
