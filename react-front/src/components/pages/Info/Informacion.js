
import React from 'react';
import './informacion.css';

function Informacion({
    lightBg, topLine, lightText, lightTextDesc, headline, description, img, alt, imgStart
}) {
    return (
        <>
        <div className={lightBg ? 'info-section' : 'info-sectiondarkBg'}> </div>

         {/* Contenedor de información*/}  
         <div className="container">
            <div className="row info-row"
            style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
            >
                <div className="col">
                    <div className="hinfo-text-wrapper">
                        <div className="top-line">{topLine}</div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                        <p className={lightTextDesc ? 'info-subtitle' : 'info-subtitle dark'}>
                            {description}
                        </p>

                    </div>
                </div>

                <div className='col'>
                    <div className='info-img-wrapper'>
                        <img src={img} alt={alt} className='hinfo-img'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Informacion
