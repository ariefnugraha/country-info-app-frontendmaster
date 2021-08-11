import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

    const [theme, settheme] = useState("day");
    return (
        <nav className="navbar">
            <Link to="/">Where in the world?</Link>
            <button type="button" className="theme light">
                <FontAwesomeIcon icon={theme === "day" ? faMoon : faSun} size="lg" className="moon" /> 
                 Dark Mode
            </button>
        </nav>
    )
}
