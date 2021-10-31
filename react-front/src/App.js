import React from 'react';
import './App.css';
import Title from './Title/Title'
import Background from './SVG/Background'
import Footer from './Footer/Footer';
import { Router } from 'react-router';

<script src="js/bootstrap.min.js" crossorigin="anonymous"></script>
function App() {
  return (
    <div className="App">
  
        <Title/>
        <Background/>
      <Router>
       <Footer/>
       </Router>
   
    </div>
  );
}

export default App;
