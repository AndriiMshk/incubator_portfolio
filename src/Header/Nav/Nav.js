import React from 'react';
import style from './nav.module.scss';

export const Nav = () => {
  return (
    <div className={style.main}>
      <a href="">Main</a>
      <a href="">Skills</a>
      <a href="">Projects</a>
      <a href="">Contacts</a>
    </div>
  );
};

