import git from '../assets/img/footer/git.png';
import telegram from '../assets/img/footer/telegram.png';
import linkedin from '../assets/img/footer/linkedin.png';

import social from '../assets/img/projects/social.jpeg';
import todo from '../assets/img/projects/todo2.jpg';
import rs from '../assets/img/projects/rs_portf.png';

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
      'Redux, Rest API, Routes, classes, axios, thunk, redux-form, AntDesign', image: social,
    link: 'https://andrmshk.github.io/social_new/'
  },
  {
    title: 'TodoList', description: 'Typescript, React, ' +
      'Redux, formik, Rest API, hooks, axios, thunk, Storybook, Jest, MUI', image: todo,
    link: 'https://todolist031.herokuapp.com/'
  },
  { title: 'Cards', description: 'Typescript, React, ' +
      'Redux, formik, Rest API, hooks, axios, thunk, MUI', image: social,
    link: 'https://andrmshk.github.io/cards/'
  },
  { title: 'RS School Project', description: 'Javascript, CSS', image: rs,
    link: 'https://andrmshk.github.io/portfolio-RS/'},
];

export const footerItems = [
  { img: git, src: 'https://github.com/AndrMshk', icon: git },
  { img: telegram, src: 'https://t.me/andr_default', icon: telegram },
  { img: linkedin, src: 'https://www.linkedin.com/in/adrdii-moshko-913822242/', icon: linkedin },
];

export const skills = [
  { title: 'React', description: 'TypeScript, Javascript, React Native, classes, hooks, Routes', icon: react },
  { title: 'Redux', description: 'Redux Toolkit, FLUX, useForm, formik, thunk', icon: redux },
  { title: 'HTML+CSS', description: 'Sass(SCSS),CSS Modules, adaptive, Material UI, Ant Design', icon: html },
  { title: 'Rest API', description: 'ajax, axois, fetch, WebSocket', icon: rest },
  { title: 'jQuery', description: 'basic', icon: jquery },
  { title: 'Jest', description: 'Unit tests', icon: jest },
  { title: 'Git', description: '', icon: githab },
  { title: 'Storybook', description: '', icon: story },
  { title: 'Figma', description: '', icon: figma },
  { title: 'Postman', description: '', icon: postman },
];
