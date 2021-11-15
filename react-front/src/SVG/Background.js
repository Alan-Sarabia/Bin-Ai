import React from 'react'
import './Background.css';
//import b from './b.svg';
import Button from '../Button/Button';
//import Card from '../Cards/Cards';
import Text from '../Cards/Text';
import { Route } from 'react-router-dom';

function Background() {

    return (
        <div >
            <div className="spacer layer1" >
                <br />
                <br />  <br />  <br />
                <h3>Carga el modelo</h3><br />
                <Button />
                <br />
                <Route path='/' exact component={Text} />
                <div class="spacer layer2" > </div>
            </div>
        </div>
    )
}

export default Background
