import React from 'react'
import './Text.css';
import Card from "./Card";


const card = [
    {
      id: 1,
      title: "Informaciòn",
      //image: image1,
      url: "https://es.wikipedia.org/wiki/Reciclaje",
    },
   
  ];

  const cardTwo = [
    {
        id: 2,
        title: "Fazt Blog",
        //image: image2,
        url: "https://blog.faztweb.com",
      },
      
  ]
  
  const cardThree = [
    {
        id: 3,
        title: "Fazt Youtube",
        //image: image3,
        url: "https://youtube.com/fazttech",
      },
  ]
  
function Text() {
    return (
        <div className="texto">
        <div className="row">
          {card.map(({ title, image, url, id }) => (
            <div className="col-md-4" key={id}>
              <Card imageSource={image} title={title} url={url} 
              
              />
            </div>
          ))}
          
          
        </div>
      </div>
    )
}




export default Text
