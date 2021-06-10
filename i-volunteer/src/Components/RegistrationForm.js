import React, { useState } from 'react';

export default function RegistrationForm({addNewShift}) { 
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [modal, setModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewShift(fullName, userName, email, contact, gender, startTime, endTime);
        setFullName("");
        setUserName("");
        setEmail("");
        setContact("");
        setGender("Male");
        setStartTime("");
        setEndTime("");
    }
    const showModal = () => {
        console.log("yes")
        setModal(true);
    }

    const hideModal = () => {
        setModal(false);
    }
    return (
        <form onSubmit={handleSubmit}>
            <ul className="registration-form">
                <li>
                    <label htmlFor="full-name">Full name</label>
                    <input type="text" id="full-name" value={fullName} onChange={e => setFullName(e.target.value)} required />
                </li>
                <li>
                    <label htmlFor="user-name">User name</label>
                    <input type="text" id="user-name" value={userName} onChange={e => setUserName(e.target.value)} required />
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </li>
                <li>
                    <label htmlFor="contact">Contact no</label>
                    <input type="tel" id="contact" value={contact} onChange={e => setContact(e.target.value)} required />
                </li>   
                <li>  
                    <p>Gender</p>         
                    <ul className="gender-input">
                        <li>
                            <label htmlFor="gender">Male</label>
                            <input type="radio" id="contact" value="Male" onChange={e => setGender(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="gender">Female</label>
                            <input type="radio" id="contact" value="Female" onChange={e => setGender(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="gender">Others</label>
                            <input type="radio" id="contact" value="Others" onChange={e => setGender(e.target.value)} />
                        </li>
                    </ul>
                </li> 
                <li>
                    <label htmlFor="start-time">Preferred start time</label>
                    <input
                        type="time"
                        id="start-time"
                        value={startTime}
                        min="08:00"
                        max="18:00"
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </li>
                <li>
                    <label htmlFor="end-time">Preferred end time</label>
                    <input
                        type="time"
                        id="end-time"
                        value={endTime}
                        min="08:00"
                        max="18:00"
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </li>
                <div className="form-button">
                    <button type="submit" onClick={showModal}>
                        Join Now!
                    </button>
                </div>
                <div className="modal-container">
                    {modal ? <div className="thanks-modal">
                        <div className="modal-content">
                            <span className="modal-close" onClick={hideModal}>&times;</span>
                            <h3>We do appreciate your time & help.</h3>
                            <h3>Looking forward to meeting you soon ☺️</h3>
                        </div>
                    </div> : <div />} 
                </div>               
            </ul>
        </form>
    )
}
