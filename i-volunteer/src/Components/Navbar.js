import React, {useState} from 'react';
import {
    Link
  } from "react-router-dom";
import Logo from '../Assets/Images/logo.png';

export default function Navbar() { 
    return (
        <div className="navbar-section">
            <nav>
                <a href="/#"><img src={Logo} alt="logo" className="logo" /></a>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/registered-shifts">Registered shifts</Link></li>
                </ul>
            </nav>
        </div>
    )
}
