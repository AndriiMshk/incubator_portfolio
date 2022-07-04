import React from 'react';
import container from '../common/container.module.css';
import style from './contacts.module.css';

export const Contacts = () => {
  return (
    <div className={style.main}>
      <div className={`${container.container} ${style.container}`}>
        <h2 className={container.title}>Contacts</h2>
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

