import React, { useState } from 'react';
import { Title } from '../common/Title/Title';
import container from '../common/styles/container.module.scss';
import style from './main.module.scss';
import ava from '../assets/img/main/avatar.png';

export const Main = () => {
  const [hover, setHover] = useState(false);
  return (
    <main
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={style.main}
      id={'main'}
    >
      <div className={`${container.container} ${style.container}`}>
        <div className={style.photo}>
          <img src={ava} alt="ava" />
        </div>
        <div className={style.greeting}>
          <div className={style.title}>
            <Title title={'About me'} hover={hover}/>
          </div>
          <div>
            <h1>Andrii Moshko</h1>
            <h3>Front-end Developer</h3>
            <p>Kyiv, Ukraine, 34 year old</p>
          </div>
        </div>
      </div>
    </main>
  );
};

