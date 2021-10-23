import React from 'react'
import './Text.css';
import Card from "./Card";
import r1 from "../img/r1.jpeg";
import ob2 from '../img/ob2.jpg';
import desafio3 from '../img/desafio3.jpg'




const card = [
    {
      id: 1,
      title: "Reciclaje",
      image: r1,
      url: "https://es.wikipedia.org/wiki/Reciclaje",
      text: "El reciclaje es un proceso cuyo objetivo es convertir residuos en nuevos productos o en materia prima para su posterior utilización. Se previene el desuso de materiales potencialmente útiles, se reduce el consumo de nueva materia prima y el uso de energía, se previene la contaminación del aire (a través de la incineración) y del agua (a través de los vertederos), así como también se disminuyen las emisiones de gases de efecto invernadero en comparación con la producción de plásticos. ",

      id: 2,
      title2: "Obsolescencia programada",
      image2: ob2,
      url2: "https://es.wikipedia.org/wiki/Obsolescencia_programada",
      text2: "La obsolescencia programada u obsolescencia planificada es la determinación o programación del fin de la vida útil de un producto, de modo que, tras un período de tiempo calculado de antemano por el fabricante o por la empresa durante la fase de diseño del mismo, éste se torne obsoleto, no funcional, inútil o inservible por diversos procedimientos, por ejemplo por falta de repuestos, induciendo a los consumidores a la compra de un nuevo producto que lo sustituya2​. Su función es generar mayores ingresos debido a compras más frecuentes, que redundan en beneficios económicos continuos por periodos de tiempo más largos para empresas o fabricantes3​.  ",

      id: 3,
      title3: "Desafios ambientales",
      image3: desafio3,
      url3: "https://es.mongabay.com/2021/01/desafios-ambientales-argentina-2021-deforestacion-humedales-agronegocios/",
      text3: ".    El 2021 presenta múltiples retos para el país más austral del continente. Algunas de fondo, como discutir el modelo productivo; otras más puntuales, como la sanción y puesta en marcha de normas legales en relación a bosques, humedales, glaciares o explotaciones mineras. Lograr que lo ambiental sea parte de la agenda política cotidiana y aumentar la conciencia y la participación ciudadana en estos temas también integran el panel de desafíos para 2021.​.  "
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
        <div className="card-group">
          {card.map(({ title, title2, title3, image, image2, image3, url, url2, url3, id , text, text2, text3}) => (
            <div className="container" key={id}>
              <Card imageSource={image} title={title} url={url} text={text}
              
              />  
             <br/>
              <Card imageSource={image3} title={title3} url={url3} text={text3}
              
              />
              <br/>
              <Card imageSource={image2} title={title2} url={url2} text={text2}
              
              />
              
            </div>
            
            
          ))}
        
          
        </div>
      </div>
    )
}




export default Text
