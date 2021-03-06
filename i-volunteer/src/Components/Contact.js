import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <>
        <h3 className="contact-header">I'd love to hear from you!</h3>
        <div className="contact">            
            <div>
                <h2>Contact me directly 👇</h2>
                <ul className="contact-info">
                    <li>TITHI KUNDU</li>
                    <li>tithi124410@gmail.com</li>
                    <li>+45 91 62 76 55</li>
                </ul>
            </div>
            <div>
                <h2>Contact Form</h2>
                <ContactForm />
            </div>
        </div>
        </>
    )
}
