import React from 'react';
import { SkillItem } from './Skill/SkillItem';
import container from '../common/container.module.css';
import style from './skills.module.css';
import { Title } from '../common/Title/Title';

export const Skills = () => {
  const skills = [
    { title: 'skill 1', description: 'skill description1', icon: '' },
    { title: 'skill 2', description: 'skill description2 description2', icon: '' },
    { title: 'skill 3', description: 'skill description3 description3 description3', icon: '' },
    { title: 'skill 4', description: 'skill description4 description4 description4 description4', icon: '' },
    { title: 'skill 5', description: 'skill description5 description5 description5', icon: '' },
    { title: 'skill 6', description: 'skill description6 description6', icon: '' },
  ];
  return (
    <div className={style.main}>
      <div className={`${container.container} ${style.container}`}>
        <Title title={'Skills'} />
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

