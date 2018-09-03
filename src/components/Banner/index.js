import React from 'react';
import Button from '../common/Button/button';
import styles from './styles.css';

const Banner = () => (
  <section className={styles.banner}>
    <h1 className={styles.h1}>Need Managed Labour Hire or Contract Workers?</h1>
    <h4 className={styles.h4}>1 to 200+ workers simply Phone: 1300 824 403</h4>
    <Button label="Hire Staff" className={styles.button} />
  </section>
);

export default Banner;
