import React from 'react';
import style from './nav.module.scss';

export const Nav = () => {
  return (
    <div className={style.main}>
      <a href="#main">Main</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contacts">Contacts</a>
    </div>
  );
};

