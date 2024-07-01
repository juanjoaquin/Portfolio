import React from "react";
import { Link as RouterLink } from "react-router-dom"; 
import { Link as ScrollLink } from "react-scroll"; 
import "../Profile/profileStyle.css";

const Profile = () => {
    return (
        <>
            <section>
                <div className="quien-soy-container">
                    <div className="sobre-mi-inner">
                        <h1 className="sobre-mi-title">
                            Hola, soy <span className="span-name">Juan</span>, <br />
                            Desarrollador Front & Back End<span className="span-name">.</span>
                        </h1>
                        <div className="profile-general">
                            <div className="profile-line"></div>
                            <RouterLink to="https://github.com/juanjoaquin">
                                <i className="bi-gi bi-github"></i>
                            </RouterLink>
                            <RouterLink to="https://www.linkedin.com/in/juan-manuel-joaquin-3a55a5224/">
                                <i className="bi-li bi-linkedin"></i>
                            </RouterLink>

                        </div>
                        <p className="sobre-mi-text">
                            Siempre me llamó la atención el diseño gráfico. En
                            vez de aplicar para diseño gráfico, me orienté hacia el desarrollo web.
                        </p>
                        {/* <div className="profile-img-section">
                    <img src={webdeveloper} className="profile-img"/>
                    </div> */}
                        <ScrollLink
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            <button className="sobre-mi-button">Proyectos</button>
                        </ScrollLink>
                        <ScrollLink
                            to="socials"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                        <button className="sobre-mi-button">Contacto</button>
                        </ScrollLink>
                        {/* <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
