import React from "react";
import TextAboutMe from "./TextAboutMe";
import "../AboutMe/aboutmeStyles.css"

const AboutMe = () => {
    return (
        <>
            <section className="aboutme-section" id="sobreMi">
            <div className="title-container">
                    <div className="aboutme-inner">
                        <h1 className="aboutme-title">Sobre<span className="aboutme-span"> mi.</span></h1>
                    <TextAboutMe/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe