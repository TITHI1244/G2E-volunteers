import React, { useState } from 'react';
import Form from './Form';
import ShiftList from './ShiftList';

export default function Registration() {
    const [shifts, setShifts] = useState([]);

    const addNewShift = (fullName, userName, email, contact, gender, startTime, endTime) => {
        const newShift = {fullName, userName, email, contact, gender, startTime, endTime};
        setShifts([...shifts, newShift]);
    }
    return (
        <div className="registration-section" data-index="1">
            <h1>Become a G2E insider!</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            <Form addNewShift={addNewShift} />
        </div>
    )
}
