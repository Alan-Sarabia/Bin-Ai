import React from 'react';
import './App.css';
import Title from './Title/Title'
import Background from './SVG/Background'
import Footer from './Footer/Footer';
// import { Router } from 'react-router';
 import {BrowserRouter, Route} from 'react-router-dom';

<script src="js/bootstrap.min.js" crossorigin="anonymous"></script>
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Title/>
        <Background/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
