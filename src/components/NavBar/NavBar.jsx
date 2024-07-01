import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../NavBar/navStyle.css"
import { Link } from "react-scroll";

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false)

    const closeNav = () => {
        setNavOpen(false);
    }

    return (
        <div className="navbar">
                            <div className="nav-desktop">
                    <Link to="sobreMi" spy={true} smooth={true} offset={-100} duration={500}><li>SOBRE MI</li></Link>
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}><li>PROYECTOS</li></Link>
                    <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}><li>SKILLS</li></Link>
                    <Link to="socials" spy={true} smooth={true} offset={-100} duration={500}><li>CONTACTAME</li></Link>
            </div>
            <div className={`nav_items ${navOpen && "open"}`}>
                <Link to="sobreMi" spy={true} smooth={true} offset={-100} duration={500} onClick={closeNav}>SOBRE MI</Link>
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={closeNav}>PROYECTOS</Link>
                <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} onClick={closeNav}>SKILLS</Link>
                <Link to="socials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeNav}>CONTACTAME</Link>
                
            </div>

            <div className={`nav_toggle ${navOpen && "open"}`} 
            onClick={() => setNavOpen(!navOpen)} >

            <i className="bi-ham bi-list"></i>
            
            </div>
        </div>
    )
}

export default NavBar