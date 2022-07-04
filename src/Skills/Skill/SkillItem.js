import React from 'react';
import style from './skillIlem.module.css'

export const SkillItem = ({title, description, icon}) => {
return (
  <div className={style.main}>
    <div className={style.icon}>
      <img src={icon} alt="icon" />
    </div>
    <h3>{title}</h3>
    <span>{description}</span>
  </div>
)
}