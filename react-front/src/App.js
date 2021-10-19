import React from 'react';
//import { Switch } from 'react-router';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/homePage/Home'
import Info from './components/pages/Info/Info';
import Parrafo from './components/pages/Parrafo';
import Text from './components/Cards/Text';
//import LandingPage from './LandingPage';
//import Text from './components/Cards/ThreeCards';
//import ThreeCards from './components/Cards/ThreeCards';
<script src="js/bootstrap.min.js" crossorigin="anonymous"></script>

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        
          <Route path='/' exact component={Home} />
          <Route path='/' exact component={Info} />

        </Switch>
        <Text/>
       
        <Parrafo/>  
        
       
      </Router>
    </div>
  );
}

export default App;
