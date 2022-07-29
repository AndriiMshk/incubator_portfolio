import React from 'react';
import './App.scss';
import { Contacts } from './Contacts/Contacts';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;


// react-reveal плавно появляются элементы при скрололе на них

//сделать бургер отдельной компонентом и сделать медиа запрос когда ширина ... тьо менять то одну то другую компонетну