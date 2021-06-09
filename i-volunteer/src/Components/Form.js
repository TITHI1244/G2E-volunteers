import React, { useState } from 'react'

export default function Form({addNewShift}) {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("Male");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName, userName, email, contact, gender);
        addNewShift(fullName);
        setFullName("");
        setUserName("");
        setEmail("");
        setContact("");
        setGender("Male");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="personal-details">
                <div>
                    <label htmlFor="full-name">Full name: </label>
                    <input type="text" id="full-name" value={fullName} onChange={e => setFullName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="user-name">User name: </label>
                    <input type="text" id="user-name" value={userName} onChange={e => setUserName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="contact">Contact no: </label>
                    <input type="tel" id="contact" value={contact} onChange={e => setContact(e.target.value)} />
                </div>
                <div className="gender-input">
                    <label htmlFor="gender">Male</label>
                    <input type="radio" id="contact" value="Male" onChange={e => setGender(e.target.value)} />
                    <label htmlFor="gender">Female</label>
                    <input type="radio" id="contact" value="Female" onChange={e => setGender(e.target.value)} />
                    <label htmlFor="gender">Others</label>
                    <input type="radio" id="contact" value="Others" onChange={e => setGender(e.target.value)} />
                </div>
            </div>
            <hr />
            <div className="time-details">
                <div>
                    <label htmlFor="start-time">Suitable time</label>
                    <input
                        type="datetime-local"
                        id="start-time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="end-time">Suitable time</label>
                    <input
                        type="datetime-local"
                        id="end-time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </div>
            </div>
            <hr />

            <button type="submit">
                Join Now!
            </button>
        </form>
    )
}
