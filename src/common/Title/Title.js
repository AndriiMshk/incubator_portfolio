import React from 'react';
import style from './title.module.css'

export const Title = ({title, hover}) => {

  return (
        <div className={hover?  `${style.title} ${style.hover}` : style.title}>
          <h2>{title}</h2>
    </div>
  );
};