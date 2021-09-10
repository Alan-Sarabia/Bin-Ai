import React from 'react';
import HeroSection from '../HeroSection';
import {homeObjeOne, } from '../homePage/Data';
import News from '../News/News'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <>  
            <HeroSection {...homeObjeOne}/>
        </>
    );
}

export default Home
