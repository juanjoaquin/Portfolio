import React from "react";
import { Link } from "react-router-dom";

import "../Proyectos/projectsStyle.css"


const FirstCard = ({title, gif, cardBody}) => {
    return(
        <>
                        <div className="card-container">
                    <div className="gif-container">
                        <img src={gif} className="gif-1" />
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                        <h3>{title}</h3>
                        </div>
                        <div className="card-body">
                            <p>{cardBody}</p>
                            <Link to="https://github.com/juanjoaquin/PF--Joaquin">
                                <i className="bi-gi bi-github"></i>
                            </Link>
                        </div>
                        <div className="btn">
                        
                        <Link to="https://commerce-firebase-react.netlify.app/" target="_blank"><button className="btn-card">Ver más</button></Link></div>
                        </div>
                    </div>
                
        </>
    );
};

export default FirstCard;