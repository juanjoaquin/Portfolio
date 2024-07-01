import React from "react";
import "../ContactMe/contactmeStyle.css"

const ContactMe = () => {
    return (
        <>
            <section className="contactme-section">
                <div className="title-container">
                    <div className="contact-inner">
                        <h1 className="contact-title">Con<span className="contacto-span">táctame</span>.</h1>
                        <p className="contact-text">
                        Mis métodos de contacto:
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactMe