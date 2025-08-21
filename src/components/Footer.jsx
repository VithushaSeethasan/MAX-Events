import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <p>© 2025 Moments And Xtraordinary Events. All rights reserved.</p>

            <div className="social-links">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon instagram"><FaInstagram size={24}/></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon facebook"><FaFacebook size={24}/></a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="icon whatsapp"><FaWhatsapp size={24}/></a>
            </div>
        </footer>
    );
}