import React, { useState } from 'react'
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function SearchFilter(props) {
    const [region, setregion] = useState("Filter by Region")    
    const handleInput = e => {
        e.preventDefault();
        props.keyword(e.target.value);
    };


    const showDropdown = () => {
        let dropdown = document.querySelector(".filter ul");
        let dropdownList = document.querySelectorAll(".filter ul li");
        dropdown.classList.toggle("show-dropdown")
        
        for(let i = 0; i < dropdownList.length; i++) {
            dropdownList[i].addEventListener("click", function() {
                let text = dropdownList[i].innerHTML;
                props.region(text)
                setregion(text);
            })    
        }
    }

    return (
        <div className="search-filter">
            <form>
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" placeholder="Search for a country..." onKeyUp={handleInput} />
            </form>

            <div className="filter" onClick={showDropdown}>
                <span>{region} <FontAwesomeIcon icon={faCaretDown} size="lg" className="filter-icon" /></span>

                <ul>
                    <li>All</li>
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
