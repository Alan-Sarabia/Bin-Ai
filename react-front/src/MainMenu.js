import React, {useState} from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
//import NewNavbar from './components/pages/NewNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/homePage/Home'
import Info from './components/pages/Info/Info';
import Footer from './components/pages/Footer/Footer';
//import firebase from "firebase";
//import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
//import { googleProvider } from './authMethod';
//import socialMediaAuth from './service/auth';



<script src="js/bootstrap.min.js" crossorigin="anonymous"></script>

function MainMenu() {
  

  
  return (
    <div className="App">
        
        
      <Router>
       <Navbar />

      {/*<NewNavbar />*/}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Informaciòn' exact component={Info} />
        </Switch>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default MainMenu
