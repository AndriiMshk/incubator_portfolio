import React from 'react';
import { footerItems } from '../data/data';
import style from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={style.main}>
      <h2>Name</h2>
      <div className={style.items}>
        {footerItems.map((el, index) => <div key={index} className={style.item}>
          <a href={el.src}><img src={el.img} alt="" /></a>
        </div>)}
      </div>
      <h4>all rights reserved</h4>
    </div>
  );
};

