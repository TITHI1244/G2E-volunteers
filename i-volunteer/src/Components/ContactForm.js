import React, {useState} from 'react'

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}
Email: ${email}
Contact: ${contact}
Query: ${query}`);
        setName("");
        setEmail("");
        setContact("");
        setQuery("");
    }
    return (
        <form className="contact-form" onSubmit={handleSubmit} method="POST">
            <ul>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="contact">Contact no</label>
                    <input type="tel" id="contact" value={contact} onChange={e => setContact(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="query">Your query</label>
                    <textarea name="query" id="query" value={query} onChange={e => setQuery(e.target.value)} rows="5" cols="25" />
                </li>
            </ul>
            <div className="form-button">
                <button type="submit">Contact us</button>
            </div>
        </form>
    )
}
