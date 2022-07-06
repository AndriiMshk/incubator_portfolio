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
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
