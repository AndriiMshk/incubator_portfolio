import React, { useState } from 'react';
import { projects } from '../data/data';
import { Title } from '../common/Title/Title';
import { ProjectItem } from './ProjectItem/ProjectItem';
import container from '../common/styles/container.module.scss';
import style from './projects.module.scss';

export const Projects = () => {
  const [hover, setHover] = useState(false);
  return (
    <section
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={style.main}
      id={'projects'}
    >
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
    </section>
  );
};