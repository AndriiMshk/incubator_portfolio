import React, { useState } from 'react';
import { Title } from '../common/Title/Title';
import container from '../common/container.module.css';
import style from './contacts.module.scss';

export const Contacts = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={style.main}
    >
      <div className={`${container.container} ${style.container}`}>
        <Title title={'Contacts'} hover={hover} />
        <form action="">
          <div className={style.form}>
            <input type="text" />
            <input type="text" />
            <textarea></textarea>
            <button>send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

