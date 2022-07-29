import React from 'react';
import { Burger } from './Burger/Burger';
import { Nav } from './Nav/Nav';
import style from './header.module.scss'

export const Header = () =>  {
  return (
    <header className={style.main}>
      <Nav/>
      <Burger/>
    </header>
  );
}

