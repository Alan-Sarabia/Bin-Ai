import React from 'react'
//import "./Card.css";
function CardThree({ imageSource, title, text, url}) {
    return (
        <div>
            <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="Desafios ambientales" className="card-img-top" />
      </div>
          
          <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">
              {text
                ? text
                : ".    El 2021 presenta múltiples retos para el país más austral del continente. Algunas de fondo, como discutir el modelo productivo; otras más puntuales, como la sanción y puesta en marcha de normas legales en relación a bosques, humedales, glaciares o explotaciones mineras. Lograr que lo ambiental sea parte de la agenda política cotidiana y aumentar la conciencia y la participación ciudadana en estos temas también integran el panel de desafíos para 2021.​.  "}
            </p>
            <a
              href={url ? url : "#!"}
              target="_blank"
              className="btn btn-outline-secondary border-0"
              rel="noreferrer"
            >
              Mas {title}
            </a>
          </div>
        </div>
        </div>
    )
}

export default CardThree
