import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const ProjectTile = ({ name, location, link, imgSrc }) => (
  <div className={styles['project-tile']}>
    <img src={imgSrc} alt={name} />
    <p className={styles['project-tile-name']}>{name}</p>
    <p className={styles['project-tile-location']}>{location}</p>
    <Link to={link}>See Project</Link>
  </div>
);

ProjectTile.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default ProjectTile;
