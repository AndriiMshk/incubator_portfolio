import React, { useState } from 'react';
import { skills } from '../data/data';
import { SkillItem } from './Skill/SkillItem';
import container from '../common/container.module.css';
import style from './skills.module.scss';
import { Title } from '../common/Title/Title';

export const Skills = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={style.main}
    >
      <div className={`${container.container} ${style.container}`}>
        <Title title={'Skills'} hover={hover} />
        <div className={style.skillsItems}>
          {skills.map((el, index) =>
            <SkillItem
              key={index}
              title={el.title}
              description={el.description}
            />)
          }
        </div>
      </div>
    </div>
  );
};

