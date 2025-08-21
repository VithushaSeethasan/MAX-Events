import React from 'react';
import '../styles/Services.css';

import Img1 from '../images/img1.jpg';
import Img2 from '../images/img2.jpg';
import Img3 from '../images/img3.jpg';
import Img4 from '../images/img4.jpg';
import Img5 from '../images/img5.jpg';
import Img6 from '../images/img6.jpg';
import Img7 from '../images/img7.jpg';

export default function Services() {
    return (
        <section className="services-section">
            <h2 className="services-title">Our Services</h2>
            <p className="services-description">
                We provide personalized planning and seamless coordination for every event type.
            </p>

            <div className="services-grid">
                <div className="service-card">
                    <img src={Img4} alt="Birthday" className="service-img" />
                    <h3>Birthdays</h3>
                    <p>Make your birthday unforgettable with custom themes, decorations, and entertainment. </p>
                </div>

                <div className="service-card">
                    <img src={Img6} alt="Wedding" className="service-img"/>
                    <h3>Weddings</h3>
                    <p>Full wedding planning including venue, catering, decoration, and day-of coordination.</p>
                </div>

                <div className="service-card">
                    <img src={Img2} alt="Corporate" className="service-img"/>
                    <h3>Corporate Events</h3>
                    <p>Professional planning for conference, meetings, product launches, and team-building events.</p>
                </div>

                <div className="service-card">
                    <img src={Img3} alt="Special Celebrations" className="service-img"/>
                    <h3>Special Celebrations</h3>
                    <p>From anniversaries to engagement parties, we handle every detail with care.</p>
                </div>
            </div>
        </section>
    );
}