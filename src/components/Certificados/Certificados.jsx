import React, {useState, useEffect} from "react";
// import certificadoHtml from "../../assets/images/certificado-html.png"
// import certificadoCarrera from "../../assets/images/certificado-carrera.png"
// import certificadoJavascript from "../../assets/images/certificado-javascript.png"
import certificado1 from "../../assets/images/certificado1.png"
import certificado2 from "../../assets/images/certificado2.png"
import certificado3 from "../../assets/images/certificado3.png"
import Carrousel from "./Carrousel";
import "../Certificados/certificadosStyle.css"

const Certificados = () => {

    const mockImagenes = [`${certificado1}`,`${certificado2}`,`${certificado3}`]

    return (
        <>
            <section className="certificado-section">
                <div className="certificado-container">
                    <div className="certicados-titles">
                        <h1 className="h1-certificado">Certifica<span className="certi-span">ción</span>.</h1>
                        <p className="text-certificado">Actualmente cuento con la certificación de carrera de <span className="weigth">Programador Frontend</span> de <span className="weigth-2">Coderhouse</span>.
                            Está incluye:</p>
                        <div className="ul-certificado">
                            <div className="list-item">
                                <i className="bi-ci bi-circle-fill"></i>
                                <p className="p-li">Curso de HTML5 y CSS3<span className="weigth">.</span></p>
                            </div>
                            <div className="list-item">
                                <i className="bi-ci bi-circle-fill"></i>
                                <p className="p-li">Curso de JavaScript<span className="weigth">.</span></p>
                            </div>
                            <div className="list-item">
                                <i className="bi-ci bi-circle-fill"></i>
                                <p className="p-li">Curso de React<span className="weigth">.</span></p>
                            </div>
                        </div>
                        <div>
                            {/* <div className="images-certificado">
                                <img src={certificadoCarrera} className="img-certificado" />
                                <img src={certificadoJavascript} className="img-certificado" />
                                <img src={certificadoHtml} className="img-certificado" /> 
                            </div> */}
                        <Carrousel imagenes={mockImagenes}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Certificados