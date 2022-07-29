import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import style from './projectItem.module.scss';
import Tilt from 'react-vanilla-tilt';

export const ProjectItem = ({ title, description, image, link }) => {
  const [hover, setHover] = useState(false);
  return (
    <Fade left>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={style.main}
      >
        <Tilt
          style={{
            minWidth: '200px',
            minHeight: '200px',
            marginTop: '5px',
            borderRadius: '15px',
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          <a href={link} target="_blank">
            <div
              className={style.image}>
            </div>
          </a>
        </Tilt>
        <div className={style.project}>
          <div className={hover ? `${style.hover}` : ''}>
            <h3>{title}</h3>
          </div>
          <div className={style.description}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};