import React from "react";
import css from "../../assets/images/css.png"
import html from "../../assets/images/html.png"
import javascript from "../../assets/images/javascript.png"
import react from "../../assets/images/react.png"
import adobe from "../../assets/images/adobe.png"
import figma from "../../assets/images/figma.png"
import mysql from "../../assets/images/mysql-logo.png"
import laravel from "../../assets/images/laravel-logo.png"
import php from "../../assets/images/logo-php.png"
import node from "../../assets/images/node-logo.png"


import "../Skills/skillsStyle.css"

const Skills = () => {
    return (
        <>
            <section className="skills-section" id="skills" >
                <div className="skills-container" >
                    <div className="skills-text">
                        <h1 className="h1-skills"><span className="weigth">Ha</span>bilidade<span className="weigth">s.</span></h1>
                        <p className="p-skills">Actualmente cuento con este manejo de habilidades, en el cual trato de prácticar y mejorarlo
                            todos los días que pueda. Y en un futuro aprender distintos lenguajes/frameworks, además de arquitecturas y patrones de diseño.
                        </p>
                    </div>
                    <div className="all-cards-container">
                    <div className="skills-card-container">
                        <div className="skills-gif">
                            <img src={css} className="css-png" />
                        </div>
                        <div className="skills-content">
                            <h3>CSS3</h3>
                        </div>
                    </div>
                    <div className="skills-card-container">
                        <div className="skills-gif">
                            <img src={html} className="css-png" />
                        </div>
                        <div className="skills-content">
                            <h3>HTML</h3>
                        </div>
                    </div>
                    <div className="skills-card-container">
                        <div className="skills-gif">
                            <img src={javascript} className="css-png" />
                        </div>
                        <div className="skills-content">
                            <h3>JAVASCRIPT</h3>
                        </div>
                    </div>
                    <div className="skills-card-container">
                        <div className="skills-gif">
                            <img src={react} className="css-png-1" />
                        </div>
                        <div className="skills-content">
                            <h3>REACT js</h3>
                        </div>
                    </div>

                    <div className="skills-card-container">
                        <div className="skills-gif">
                            <img src={mysql} className="css-png-1" />
                        </div>
                        <div className="skills-content">
                            <h3>MySQL</h3>
                        </div>
                    </div>

                    <div className="skills-card-container">
                        <div className="skills-gif">
                            <img src={laravel} className="css-png-1" />
                        </div>
                        <div className="skills-content">
                            <h3>Laravel</h3>
                        </div>
                    </div>

                    <div className="skills-card-container">
                        <div className="skills-gif">
                            <img src={php} className="css-png-1" />
                        </div>
                        <div className="skills-content">
                            <h3>PHP</h3>
                        </div>
                    </div>

                    <div className="skills-card-container">
                        <div className="skills-gif">
                            <img src={node} className="css-png-1" />
                        </div>
                        <div className="skills-content">
                            <h3>Node Js</h3>
                        </div>
                    </div>


                    <div className="other-skills">
                        <h2>OTRAS HABILIDADES</h2>
                    </div>
                    <div className="skills-card-container">
                        <div className="skills-gif">
                            <img src={adobe} className="css-png" />
                        </div>
                        <div className="skills-content">
                            <h3>ADOBE PHOTOSHOP</h3>
                        </div>
                    </div>
                    <div className="skills-card-container">
                        <div className="skills-gif">
                            <img src={figma} className="css-png" />
                        </div>
                        <div className="skills-content">
                            <h3>FIGMA</h3>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills