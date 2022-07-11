import git from '../assets/img/footer/git.png';
import telegram from '../assets/img/footer/telegram.png';
import linkedin from '../assets/img/footer/linkedin.png';
import hh from '../assets/img/footer/hh.png';

import social from '../assets/img/projects/social.jpeg';
import todo from '../assets/img/projects/todo2.jpg';

import react from '../../src/assets/img/skills/react.png';
import redux from '../../src/assets/img/skills/redux.png';
import html from '../../src/assets/img/skills/html-css.jpg';
import rest from '../../src/assets/img/skills/rest.png';
import jquery from '../../src/assets/img/skills/jquery.png';
import jest from '../../src/assets/img/skills/jest.jpg';
import githab from '../../src/assets/img/skills/git.png';
import story from '../../src/assets/img/skills/story.png';
import figma from '../../src/assets/img/skills/figma.png';
import postman from '../../src/assets/img/skills/postman.png';

export const projects = [
  {
    title: 'Social Network', description: 'Typescript, React, ' +
      'Redux, Rest API, Routes, classes, axios, thunk, redux-form', image: social,
  },
  {
    title: 'TodoList', description: 'Typescript, React, ' +
      'Redux, formik, Rest API, hooks, axios, thunk, Storybook, Jest', image: todo,
  },
  { title: 'project 2', description: 'projects description2', image: social },
  { title: 'project 2', description: 'projects description2', image: social },
];

export const footerItems = [
  { img: git, src: 'https://github.com/AndrMshk', icon: git },
  { img: telegram, src: 'https://t.me/andr_default', icon: telegram },
  { img: linkedin, src: '', icon: linkedin },
  { img: hh, src: '', icon: hh },
];

export const skills = [
  { title: 'React', description: 'TypeScript, Javascript, classes, hooks, Routes', icon: react },
  { title: 'Redux', description: 'Redux Toolkit, FLUX, redux-form, formik, thunk, saga', icon: redux },
  { title: 'HTML+CSS', description: 'Saas(SCSS), adaptive, Material UI, Ant Design, Styled-components', icon: html },
  { title: 'Rest API', description: 'ajax, axois, fetch, CRUD', icon: rest },
  { title: 'jQuery', description: 'basic', icon: jquery },
  { title: 'Jest', description: 'Unit tests', icon: jest },
  { title: 'Git', description: '', icon: githab },
  { title: 'Storybook', description: '', icon: story },
  { title: 'Figma', description: '', icon: figma },
  { title: 'Postman', description: '', icon: postman },
];