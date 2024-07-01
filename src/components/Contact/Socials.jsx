import React from "react";
import "../Contact/socialsStyle.css"



const Socials = () => {
    return (
        <>
            <section className="socials-section" id="socials">
                <div className="socials-container">
                    <div className="socials-background">
                    <i class="bi-gi bi-envelope-fill"></i> 
                    <a href="mailto:juanmanueljoaquin@hotmail.com"><h4 className="text-socials">juanmanueljoaquin@hotmail.com</h4></a>
                    </div>
                    <div className="socials-background">
                    <i className="bi-gi bi-linkedin"></i>
                    
                    <a href="https://www.linkedin.com/in/juan-manuel-joaquin-3a55a5224/" target="_new"><h4 className="text-socials">Juan Manuel Joaquin</h4></a>
                    </div>
                    <div className="socials-background">
                    <i className="bi-gi bi-github"></i> <a href="https://github.com/juanjoaquin" target="_new"><h4 className="text-socials">Juan Joaquin</h4></a>
                    </div>
                </div>
            </section>

        </>

    );
};

export default Socials;