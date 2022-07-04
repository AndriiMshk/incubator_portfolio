import React from 'react';
import container from '../common/container.module.css';
import style from './footer.module.css';
import git from './img/git.png';

export const Footer = () => {
  const items = [
    { img: git, src: '' },
    { img: git, src: '' },
    { img: git, src: '' },
    { img: git, src: '' },
  ];
  return (
      <div className={style.main}>
        <h2 className={container.title}>Name</h2>
        <div className={style.items}>
          {items.map((el, index) => <div className={style.item}>
            <a href={el.src}><img src={el.img} alt="" /></a>
          </div>)}
        </div>
        <h4 className={container.title}>all rights reserved</h4>
      </div>
  );
};

