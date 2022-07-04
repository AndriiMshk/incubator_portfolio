import React from 'react';
import style from './projectItem.module.css';

export const ProjectItem = ({ title, description }) => {
  return (
    <div className={style.main}>
      <div className={style.image}>
        <a href="">Open</a>
      </div>
      <div className={style.project}>
        <h4>{title}</h4>
        <div className={style.description}>
          {description}
        </div>
      </div>
    </div>
  );
};