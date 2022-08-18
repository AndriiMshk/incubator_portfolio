import React, { useState } from 'react';
import { Title } from '../common/Title/Title';
import container from '../common/styles/container.module.scss';
import style from './main.module.scss';
import ava from '../assets/img/main/DSC_4301.jpg';
import TypeIt from 'typeit-react';
import Tilt from 'react-vanilla-tilt';

export const Main = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <main
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={style.main}
        id={'main'}
      >
        <div className={`${container.container} ${style.container}`}>
          <div className={style.photo}>
            <Tilt>
              <img src={ava} alt="ava"  />
            </Tilt>
          </div>
          <div className={style.greeting}>
            <div className={style.title}>
              <Title title={'About me'} hover={hover} />
            </div>
            <div>
              <h1>Andrii Moshko</h1>
              <TypeIt style={{ fontSize: '1.17em', fontWeight: 'bold' }} options={{ loop: true }}>
                Front-end Developer
              </TypeIt>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
