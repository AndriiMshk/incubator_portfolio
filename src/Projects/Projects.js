import React, { useState } from 'react';
import { projects } from '../data/data';
import { Title } from '../common/Title/Title';
import { ProjectItem } from './ProjectItem/ProjectItem';
import container from '../common/container.module.css';
import style from './projects.module.css';


export const Projects = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={style.main
      }>
      <div className={`${container.container} ${style.container}`}>
        <Title title={'Projects'} hover={hover} />
        <div className={style.projectItems}>
          {projects.map((el, index) =>
            <ProjectItem
              key={index}
              title={el.title}
              description={el.description}
              image={el.image}
            />,
          )}
        </div>
      </div>
    </div>
  );
};