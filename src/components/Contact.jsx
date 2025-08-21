import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();  //prevent page reload
        alert(`Thank you, ${formData.name}! Your message has been received.`);
        setFormData({name:'', email: '', message: ''});
    }

    return (
        <section className="contact-section" id="contact">
            <h2>Contact Us</h2>
            <p>Have a question or want to book an event? Send us a message!</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" >Send Message</button>
            </form>
        </section>
    );
}