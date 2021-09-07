import React from 'react';
import {informacionOne, } from './Data';
import Informacion from './Informacion';

function Info() {
    return (
        <>
           <Informacion {...informacionOne}/>
        </>
    );
}

export default Info
