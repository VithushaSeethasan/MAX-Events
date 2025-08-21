import React from 'react';
import '../styles/About.css';


export default function About() {
    return(
        <section className="about-section" id="about">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">Moments And Xtraordinary Events is dedicated to turning your special occasions into unforgettable memories. We handle everything from planning to execution.</p>
        
        <h3 className="about-subtitle">Our Mission</h3>
        <p className="about-text">To create personalized and seamless event experiences that leave lasting memories.</p>

        <h3 className="about-subtitle">Our Team</h3>
        <p className="about-text">Our skilled event planners, decorators, and coordinators ensure every detail is perfect.</p>

        <h3 className="about-subtitle">Why Choose Us?</h3>
        <ul className="about-features">
            <li>Customizable event themes</li>
            <li>Professional coordination</li>
            <li>Attention to every detail</li>
            <li>Experienced team with creative ideas</li>
        </ul>
        </section>
    );
}
