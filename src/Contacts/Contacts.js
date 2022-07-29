import React, { useState } from 'react';
import { Title } from '../common/Title/Title';
import container from '../common/styles/container.module.scss';
import style from './contacts.module.scss';

export const Contacts = () => {
  const [hover, setHover] = useState(false);
  return (
      <section
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={style.main}
        id={'contacts'}
      >
        <div className={`${container.container} ${style.container}`}>
          <Title title={'Contact me'} hover={hover} />
          <form action="" className={style.form}>
            <input type="text" placeholder={'Name'} />
            <input type="text" placeholder={'Email'} />
            <textarea placeholder={'Message'} />
            <button onClick={(e) => {e.preventDefault();}} type={'submit'}>send</button>
          </form>
        </div>
      </section>
  );
};