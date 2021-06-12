import React from 'react';
import RegistrationForm from './RegistrationForm';

export default function Registration({addNewShift}) {    
    return (
        <div className="registration-section">
            <h1 className="header">Become a G2E insider!</h1>
            <h3 className="subheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            <RegistrationForm addNewShift={addNewShift} />
        </div>
    )
}
