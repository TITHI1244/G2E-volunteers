import React, { useState } from 'react';
import Skills from './Skills';

export default function RegistrationForm({addNewShift}) { 
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [additional, setAdditional] = useState("");
    const [skills, setSkills] = useState([]);
    const [modal, setModal] = useState(false);

    const handleSubmit = (e) => {
        setModal(true);
        e.preventDefault();
        addNewShift(fullName, userName, email, contact, gender, startTime, endTime, additional, skills);
        setFullName("");
        setUserName("");
        setEmail("");
        setContact("");
        setStartTime("");
        setEndTime("");
        setAdditional("");
        setGender("");
        setSkills([]);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const getVolunteerSkills = (skillsArray) => {
        setSkills(skillsArray);
    }
    const hideModal = () => {
        setModal(false);
    }
    return (
        <form onSubmit={handleSubmit} className="registration-form">
            <div className="registration-flex">
                <div>
                    <input type="text" id="full-name" value={fullName} placeholder="Full name" onBlur={e => console.log('done')} onChange={e => setFullName(e.target.value)} required />
                    <input type="text" id="user-name" value={userName} placeholder="User name" onChange={e => setUserName(e.target.value)} required />
                    <input type="email" id="email" value={email} placeholder="Email address" onChange={e => setEmail(e.target.value)} required />
                    <input type="tel" id="contact" value={contact} placeholder="Contact no" onChange={e => setContact(e.target.value)} required />
                    <textarea name="additional" id="additional" value={additional} placeholder="Additional info or comment" onChange={e => setAdditional(e.target.value)} rows="5" cols="25" />
                </div>
                <div className="registration-info">
                    <div className="gender-div">
                        <p>Gender</p>         
                        <div className="gender-input" onChange={handleGenderChange}>
                            <label htmlFor="gender">Male
                                <input type="radio" name="gender" value="Male" />
                                <span className="checkbox" />
                            </label>
                            <label htmlFor="gender">Female
                                <input type="radio" name="gender" value="Female" />
                                <span className="checkbox" />
                            </label>
                            <label htmlFor="gender">Other
                                <input type="radio" name="gender" value="Other" />
                                <span className="checkbox" />
                            </label>
                        </div>    
                    </div>
                    <div>
                        <label htmlFor="start-time">Preferred start time</label>
                        <input
                            type="time"
                            id="start-time"
                            value={startTime}
                            min="08:00"
                            max="18:00"
                            onChange={(e) => setStartTime(e.target.value)}
                        />  
                    </div> 
                    <div>            
                        <label htmlFor="end-time">Preferred end time</label>
                        <input
                            type="time"
                            id="end-time"
                            value={endTime}
                            min="08:00"
                            max="18:00"
                            onChange={(e) => setEndTime(e.target.value)}
                        />
                    </div>
                    <Skills volunteerSkills={getVolunteerSkills} />
                </div>
            </div>        
            <div className="form-button">
                <button type="submit">
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
        </form>
    )
}
