import React from'react';
import '../styles/Portfolio.css';

export default function Portfolio() {
    return(
        <section className="portfolio-section" id="portfolio">
            <h2 className="portfolio-title">Our Portfolio</h2>
            <p className="portfolio-description">
                Check out some of our recent work! More amazing events coming soon.
            </p>

            <div className="portfolio-grid">
                <div className="portfolio-card">Image 1</div>
                <div className="portfolio-card">Image 2</div>
                <div className="portfolio-card">Image 3</div>
                <div className="portfolio-card">Image 4</div>
            </div>
        </section>
    );
}