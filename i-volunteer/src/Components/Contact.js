import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <div className="contact-section" data-index="2">
            <h3>We'd love to hear from you!</h3>
            <h2>Contact us directly 👇</h2>
            <ul className="contact-info">
                <li>TITHI KUNDU</li>
                <li>tithi124410@gmail.com</li>
                <li>+45 91 62 76 55</li>
            </ul>
            <h2>Or via this form 👇</h2>
            <ContactForm />
        </div>
    )
}
