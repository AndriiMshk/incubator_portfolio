import React from 'react';
import container from '../common/container.module.css';
import style from './main.module.css';
import ava from './img/avatar.png';

export const Main = () => {
  return (
    <div className={style.main}>
      <div className={`${container.container} ${style.container}`}>
        <div className={style.greeting}>
          <span>Hello</span>
          <h1>Name</h1>
          <p>yo yo yo</p>
        </div>
        <div className={style.photo}>
          <img src={ava} alt="ava" />
        </div>
      </div>
    </div>
  );
};

