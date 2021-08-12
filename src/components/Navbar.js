import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({themeMode}) {
    const [theme, settheme] = useState("day");
    let renderTheme;
    
    const handleTheme = () => {
        let buttonTheme = document.querySelector("button.theme");
        let body = document.querySelector("body");

        if (buttonTheme.classList.contains("day") && themeMode === 'day') {
            console.log("MASUK")
            settheme("night");
            localStorage.setItem("country-app-theme", "night");
            buttonTheme.classList.remove("day");
            buttonTheme.classList.add("night");
            body.classList.add("night");
            body.classList.remove("day");
        } else {
            console.log("ENGGA")
            settheme("day")
            localStorage.setItem("country-app-theme", "day");
            buttonTheme.classList.remove("night");
            buttonTheme.classList.add("day");
            body.classList.add("day");
            body.classList.remove("night");
        }
    }

    const DayThemeText = () => {
        return (
            <>
                <FontAwesomeIcon icon={faMoon} size="lg" className="theme-icon moon" />
                Dark Mode
            </>
        )
    }

    const NightThemeMode = () => {
        return (
            <>
                <FontAwesomeIcon icon={faSun} size="lg" className="theme-icon sun" />
                Light Mode
            </>
        )
    }

    theme === "day" || localStorage.getItem("country-app-theme") === "day" ? renderTheme = <DayThemeText /> : renderTheme = <NightThemeMode />

    return (
        <nav className="navbar">
            <Link to="/">Where in the world?</Link>
            <button type="button" onClick={handleTheme} className="theme day">{renderTheme}</button>
        </nav>
    )
}
