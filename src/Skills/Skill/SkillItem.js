import React from 'react';
import style from './skillIlem.module.scss';

export const SkillItem = ({ title, description, icon }) => {
  return (
    <div className={style.main}>
      <div className={style.icon}>
        <img src={icon} alt="icon" />
      </div>
      <h3>{title}</h3>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
};