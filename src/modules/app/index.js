import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Banner from '../../components/Banner';
import Icons from '../../components/Icons';
import Partners from '../../components/Partners';
import Projects from '../../components/Projects';
import styles from './styles.css';

class App extends Component {
  render() {
    const { links, icons, partners, projects } = this.props;

    return (
      <div className={styles.container}>
        <Header />
        <Menu links={links} />
        <Banner />
        <Icons icons={icons} />
        <Partners partners={partners} />
        <Projects projects={projects} />
      </div>
    );
  }
}

App.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
  icons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  })).isRequired,
  partners: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  })).isRequired,
};

App.defaultProps = {
  links: [
    {
      label: 'Industries',
      href: '/industries',
      active: true,
    },
    {
      label: 'Employer',
      href: '/employer',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Worker',
      href: '/worker',
    },
    {
      label: 'Jobs',
      href: '/jobs',
    },
    {
      label: 'How It Works',
      href: '/how-it-works',
    },
  ],
  icons: [
    {
      label: 'Civil and rail',
      className: 'civil-and-rail',
    },
    {
      label: 'Mining',
      className: 'mining',
    },
    {
      label: 'Construction',
      className: 'construction',
    },
    {
      label: 'Warehousing',
      className: 'warehousing',
    },
    {
      label: 'Labour hire',
      className: 'labour-hire',
    },
    {
      label: 'Office admin',
      className: 'office-admin',
    },
  ],
  partners: [
    {
      name: 'Rhomberg Rail Australia',
      src: '/images/partner-rhomberg-rail-australia.png',
    },
    {
      name: 'Downer',
      src: '/images/partner-downer.png',
    },
    {
      name: 'Hilti',
      src: '/images/partner-hilti.png',
    },
    {
      name: 'Harvey Norman',
      src: '/images/partner-harvey-norman.png',
    },
    {
      name: 'Lendlease',
      src: '/images/partner-lendlease.png',
    },
    {
      name: 'UMS',
      src: '/images/partner-ums.png',
    },
    {
      name: 'Degnan',
      src: '/images/partner-degnan.png',
    },
    {
      name: 'KONE',
      src: '/images/partner-kone.png',
    },
    {
      name: 'BMD',
      src: '/images/partner-bmd.png',
    },
    {
      name: 'Transport for NSW',
      src: '/images/partner-transport-for-nsw.png',
    },
    {
      name: 'UGL',
      src: '/images/partner-ugl.png',
    },
    {
      name: 'ACT Government',
      src: '/images/partner-act-government.png',
    },
  ],
  projects: [
    {
      name: 'Seventh Street Extension Sydney Airport',
      location: 'Sydney, NSW',
      link: '/projects/seventh-street-extension-sydney-airport',
      imgSrc: 'https://picsum.photos/200/300/?random=123',
    },
    {
      name: 'Richmond Station Upgrade',
      location: 'Sydney, NSW',
      link: '/projects/richmond-station-upgrade',
      imgSrc: 'https://picsum.photos/200/300/?random=456',
    },
    {
      name: 'Royal Melbourne Hospital Upgrade',
      location: 'Melbourne, Vic',
      link: '/projects/royal-melbourne-hospital-upgrade',
      imgSrc: 'https://picsum.photos/200/300/?random=789',
    },
    {
      name: 'Newcastle Light Rail Project',
      location: 'Newcastle, NSW',
      link: '/projects/newcastle-light-rail-project',
      imgSrc: 'https://picsum.photos/200/300/?random=012',
    },
  ],
};

export default App;
