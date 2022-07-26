import React from 'react';
import './App.scss';
import { Footer } from './Footer/Footer';
import { Contacts } from './Contacts/Contacts';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';
import { Header } from './Header/Header';
import { Main } from  './Main/Main'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contacts/> vb
      <Footer/>
    </div>
  );
}

export default App;


// partical js  прикодбный еффект фона
// react-reveal плавно появляются элементы при скрололе на них
// react typing effect для текста типа он печатается на ходу
// > сделать в апп чаилды через один с разным немного фоном
 // react-tilt для ховера на фото
// react-scroll для плавного скролла