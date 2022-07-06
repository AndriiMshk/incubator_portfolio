import React, { useState } from 'react';
import style from './projectItem.module.scss';

export const ProjectItem = ({ title, description, image }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={style.main}
    >
      <a href="https://github.com/AndrMshk/portfolio">
        <div className={
          hover
            ? `${style.image} ${style.hover}`
            : style.image}
             style={{ backgroundImage: `url(${image})` }}>
          {/*<button>open</button>*/}
        </div>
      </a>
      <div className={style.project}>
        <div className={hover ? `${style.hover}` : ''}>
          <h3>{title}</h3>
        </div>
        <div className={style.description}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};