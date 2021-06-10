import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Logo from '../Assets/Images/logo.png';

export default function Navbar() {    
  const [burgerMenu, setBurgerMenu] = useState(false);
  const handleNav = () => {
    setBurgerMenu(!burgerMenu);
  }
    return (
        <div className="navbar-section">
            <nav>
                <a href="/#"><img src={Logo} alt="logo" className="logo" /></a>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/registered-shifts">Registered shifts</Link></li>
                    <li className="close">X</li>
                </ul>
                <div className="menu">Menu</div>
            </nav>
        </div>
    )
}
