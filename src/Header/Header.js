import React from 'react';
import { Nav } from './Nav/Nav';
import style from './header.module.scss'

export const Header = () =>  {
  return (
    <div className={style.main}>
      <Nav/>
    </div>
  );
}

