import React from 'react';
//import { Switch } from 'react-router';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/homePage/Home'
import Info from './components/pages/Info/Info';
import Footer from './components/pages/Footer/Footer';
import Parrafo from './components/pages/Parrafo';
<script src="js/bootstrap.min.js" crossorigin="anonymous"></script>

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        
          <Route path='/' exact component={Home} />
          <Route path='/Informaciòn' exact component={Info} />
        </Switch>
       
        <Parrafo/> 
       
      </Router>
    </div>
  );
}

export default App;
