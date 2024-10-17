import { useState } from 'react';
import './App.css';
import Content from '../../practice/src/Content';
import Footer from './Footer';
import Header from './Header';

function App() {



  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
