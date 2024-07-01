import React from "react";
// import { useState, useEffect } from "react";
import gif from "../../assets/images/gif-ecommerce.gif"
import gif2 from "../../assets/images/gif-bootcamp.gif"
import gif3 from "../../assets/images/gif-agenda.gif"
import gif4 from "../../assets/images/gif-gaming.gif"
import gif5 from "../../assets/images/note-gif.gif" 
import gif6 from "../../assets/images/api-laravel.gif" 
import gif7 from "../../assets/images/node-api.gif" 
import FirstCard from "../FirstCard/FirstCard";
import SecondCard from "../SecondCard/SecondCard";
import ThirdCard from "../ThirdCard/ThirdCard";
import FourthCard from "../FourthCard/FourthCard";
import CartaCinco from "../../../CartaCinco/CartaCinco";
import SevenCard from "../../../SevenCard/SevenCard";


import "../Proyectos/projectsStyle.css"
import SixCard from "../../../SixCard/SixCard";





const Projects = () => {


    return (
        <>
            <section className="section-projects" id="projects">
                <div className="projects-container">
                    <div className="projects-inner">
                        <h1 className="projects-title"><span className="projects-span">Proyectos</span> desarrollados<span className="projects-span">.</span></h1>
                        <p className="projects-text">Estos son los últimos proyectos que fui desarrollando.</p>
                    </div>
                </div>
                <div className="card-grid">

                    <CartaCinco
                        title="Gestor de notas"
                        gif={gif5}
                        cardBody="Hecho con: Laravel, Blade y MySQL  (responsive)"
                    />

                    <SecondCard
                        title="Bootcamp de programación "
                        gif={gif2}
                        cardBody="Hecho con: React (responsive)"
                    />

                    <SixCard
                        title="Gestor de libros (API Rest one) "
                        gif={gif7}
                        cardBody="Hecho con: Node Js, Express y MySQL (only Backend)"
                    />

                    <FirstCard
                        title="E-Commerce con carrito y Firebase "
                        gif={gif}
                        cardBody="Hecho con: React y Firebase" />

                    <SevenCard
                        title="CRUD (de productos) "
                        gif={gif6}
                        cardBody="Hecho con: React, Laravel y MySQL"
                    />

                    <ThirdCard
                        title="App de agénda médica"
                        gif={gif3}
                        cardBody="Hecho con: Js vanilla (responsive)"
                    />

                    <FourthCard
                        title="Web gamming"
                        gif={gif4}
                        cardBody="Hecho con: Html y Js vanilla (responsive)"
                    />



                </div>
            </section>
        </>
    )
}

export default Projects;