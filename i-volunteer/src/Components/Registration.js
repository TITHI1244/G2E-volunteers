import React, { useState } from 'react';
import Form from './Form';
import ShiftList from './ShiftList';

export default function Registration() {
    const [shifts, setShifts] = useState([]);
    const [showList, setShowList] = useState(false);

    const addNewShift = ({fullName}) => {
        const newShift = [fullName];
        setShifts(prev => prev.concat(newShift));
    }

    const alterDisplay = () => {
        setShowList(!showList);
    }
    return (
        <div>
            <h3>Become a G2E insider!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <Form addNewShift={addNewShift} />
            <button onClick={alterDisplay}>{showList ? 'X' : 'Display shifts'}</button>
            {showList ? <ShiftList shifts={shifts} /> : <div />}            
        </div>
    )
}
