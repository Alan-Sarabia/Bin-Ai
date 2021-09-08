import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import {Spinner} from 'reactstrap';
import axios from 'axios';
import Load from './Load';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart
}) {
    return (
        <>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-sectiondarkBg'}> </div>

         {/* Contenedor de información*/}  
         <div className="container">
            <div className="row home__hero-row"
            style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
            >
                <div className="col">
                    <div className="home__hero-text-wrapper">
                        <div className="top-line">{topLine}</div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                        <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                            {description}
                        </p>
                       
                        
                               
                        <Button/>     
                                
                       
                    </div>
                </div>


                <div className='col'>
                    <div className='home__hero-img-wrapper'>
                        <img src={img} alt={alt} className='home__hero-img'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection