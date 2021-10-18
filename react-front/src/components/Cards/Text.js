import React from 'react'
import './Text.css';
import Card from "./Card";
import CardTwo from './CardTwo';
import CardThree from './CardThree';
import r1 from "../img/r1.jpeg";
import ob2 from '../img/ob2.jpg';
import desafio3 from '../img/desafio3.jpg'



const card = [
    {
      id: 1,
      title: "Informaciòn",
      image: r1,
      url: "https://es.wikipedia.org/wiki/Reciclaje",

      id: 2,
      image2: ob2,
      url: "https://es.wikipedia.org/wiki/Obsolescencia_programada",

      id: 3,
      image3: desafio3,
      url: "https://es.mongabay.com/2021/01/desafios-ambientales-argentina-2021-deforestacion-humedales-agronegocios/",
    },
   
  ];

  /*const CardTwo = [
    {
        id: 2,
        //title: "Fazt Blog",
        //image: image2,
        url: "https://blog.faztweb.com",
      },
      
  ]
  
  const CardThree = [
    {
        id: 3,
        //title: "Fazt Youtube",
        //image: image3,
        url: "https://youtube.com/fazttech",
      },
  ]
  */
function Text() {
    return (
      
        <div className="texto">
        <div className="row">
          {card.map(({ title, image, image2, image3, url, id }) => (
            <div className="container" key={id}>
              <Card imageSource={image} title={title} url={url} 
              
              />  
             <br/>
              <CardThree imageSource={image3} title={title} url={url} 
              
              />
              <br/>
              <CardTwo imageSource={image2} title={title} url={url} 
              
              />
              
            </div>
            
            
          ))}
        
          
        </div>
      </div>
    )
}




export default Text
