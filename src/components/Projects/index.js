import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import ProjectTile from './project-tile';
import styles from './styles.css';

const Projects = ({ projects }) => (
  <section className={styles.projects}>
    <SectionHeader text="Featured Projects" />
    <ul className={styles['project-list']}>
      {projects.map((project, i) => (
        <li key={i}>
          <ProjectTile key={i} {...project} />
        </li>
      ))}
    </ul>
    <Link to="/projects" className={styles.button}>All Projects</Link>
  </section>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  })).isRequired,
};

export default Projects;
