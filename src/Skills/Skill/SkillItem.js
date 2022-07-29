import React from 'react';
import style from './skillIlem.module.scss';
import Fade from 'react-reveal/Fade';

export const SkillItem = ({ title, description, icon }) => {
  return (
    <Fade left>
      <div className={style.main}>
        <div className={style.icon}>
          <img src={icon} alt="icon" />
        </div>
        <div className={style.title}>
          <h3>{title}</h3>
        </div>
        <div className={style.description}>
          {description}
        </div>
      </div>
    </Fade>
  );
};