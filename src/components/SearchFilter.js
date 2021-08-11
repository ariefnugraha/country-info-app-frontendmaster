import React, { useState } from 'react'
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function SearchFilter() {
    const [keyword, setkeyword] = useState("");
    const handleInput = e => {
        e.preventDefault();
    };

    const showDropdown = () => {
        let dropdown = document.querySelector(".filter ul");
        dropdown.classList.toggle("show-dropdown")
    }

    return (
        <div className="search-filter">
            <form>
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" placeholder="Search for a country..." onChange={handleInput} />
            </form>

            <div className="filter" onClick={showDropdown}>
                <span>Filter by Region <FontAwesomeIcon icon={faCaretDown} size="lg" className="filter-icon" /></span>

                <ul>
                    <li>Africa</li>
                    <li>America</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                </ul>

            </div>
        </div>
    )
}
