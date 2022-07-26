import React from 'react';
import { footerItems } from '../data/data';
import style from './footer.module.scss';


export const Footer = () => {
  return (
    <footer className={style.main}>
      <h2>Andrii Moshko</h2>
      <div className={style.items}>
        {footerItems.map((el, index) => <div key={index} className={style.item}>
          <a href={el.src}><img src={el.icon} alt="icon" /></a>
        </div>)}
      </div>
      <h4>2022 © all rights reserved</h4>
    </footer>
  );
};

