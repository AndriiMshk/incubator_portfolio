import React, { useState } from 'react';
import style from './burger.module.scss';
import { Link } from 'react-scroll';

export const Burger = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={style.main}>
      <div
        className={style.buttonContainer}
        onClick={() => setShowMenu(!showMenu)}>
        <div className={!showMenu ? `${style.button}` : `${style.button} ${style.open}`}>
        </div>
      </div>
      <div className={!showMenu ? `${style.list}` : `${style.list} ${style.visible}`}>
        <Link onClick={()=>setShowMenu(false)} offset={-80} to="main" smooth>Main</Link>
        <Link onClick={()=>setShowMenu(false)} offset={-80} to="skills" smooth>Skills</Link>
        <Link onClick={()=>setShowMenu(false)} offset={-80} to="projects" smooth>Projects</Link>
        <Link onClick={()=>setShowMenu(false)} offset={-80} to="contacts" smooth>Contacts</Link>
      </div>
    </div>
  );
};
