import React from 'react';
import style from './nav.module.scss';
import { Link } from 'react-scroll';

export const Nav = () => {
  return (
    <nav className={style.main}>
      <Link offset={-80} to="main" smooth>Main</Link>
      <Link offset={-80} to="skills" smooth>Skills</Link>
      <Link offset={-80} to="projects" smooth>Projects</Link>
      <Link offset={-80} to="contacts" smooth>Contacts</Link>
    </nav>
  );
};

