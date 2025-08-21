import React from 'react';

export default function Hero() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth'});
        }
    };
    
    return(
        <section className="hero" id="home">
            <h1>Turning Your Moments into Extraordinary Memories</h1>
            <p>Personalized Event Planning | Birthdays • Weddings • Corporate </p>
            <button className="btn-cta">
                <a href="#contact" style={{ textDecoration:'none',color: 'inherit'}}>
                    Book Your Event
                </a>
            </button>
        </section>
    );
}