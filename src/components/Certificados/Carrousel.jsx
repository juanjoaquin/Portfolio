import React, { useState } from "react";
import "../Certificados/Carrousel-module.css"

const Carrousel = ({ imagenes }) => {
    
    const [imagenActual, setImagenActual] = useState(0);
    const cantidad = imagenes?.length;

    if(!Array.isArray(imagenes) || cantidad === 0) return null;

    const handleNext = () => {
        setImagenActual(imagenActual == cantidad - 1 ? 0 : imagenActual + 1)
    }

    const handlePrevious = () => {
        setImagenActual(imagenActual == 0 ? cantidad - 1 : imagenActual - 1 )
    }

    return (
        <div  >
            <div className="carrousel-container">
            {imagenes.map((imagen, index) => {
                return (
                    <div key={index} className={`slide ${imagenActual === index ? 'active' : ''}`}>
                        {imagenActual == index && (<img className="cachorro" key={index} src={imagen} alt="" />)}
                    </div>
                    
                )
            })}
            </div>
            <div className="con-bot">
            <button className="carrousel-buttons" onClick={handlePrevious}>←</button>
            <button className="carrousel-buttons" onClick={handleNext}>→</button>
            </div>
            
        </div>
    );

}

export default Carrousel