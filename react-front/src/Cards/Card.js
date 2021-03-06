import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Card.css";

function Card({ imageSource, title, text, url }) {
  return (
    <div class="container">
    <div class="row">
        <div class="col-lg-4 d-flex align-items-stretch"></div>
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="Reciclaje" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Mas sobre el tema
        </a>
      </div>
    </div>
    </div>
    </div>
  
  );
}

// function CardTwo({ title, text, url}) {
//     return (
//         <div className="card text-center bg-dark animate__animated animate__fadeInUp">
          
//           <div className="card-body text-light">
//             <h4 className="card-title">{title}</h4>
//             <p className="card-text text-secondary">
//               {text
//                 ? text
//                 : ".La obsolescencia programada u obsolescencia planificada es la determinación o programación del fin de la vida útil de un producto, de modo que, tras un período de tiempo calculado de antemano por el fabricante o por la empresa durante la fase de diseño del mismo, éste se torne obsoleto, no funcional, inútil o inservible por diversos procedimientos, por ejemplo por falta de repuestos, induciendo a los consumidores a la compra de un nuevo producto que lo sustituya2​. Su función es generar mayores ingresos debido a compras más frecuentes, que redundan en beneficios económicos continuos por periodos de tiempo más largos para empresas o fabricantes3​.  "}
//             </p>
//             <a
//               href={url ? url : "#!"}
//               target="_blank"
//               className="btn btn-outline-secondary border-0"
//               rel="noreferrer"
//             >
//               Mas sobre el tema
//             </a>
//           </div>
//         </div>
//       );
// }

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};



export default Card;