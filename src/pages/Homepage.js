import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Navbar from '../components/Navbar';
import SearchFilter from '../components/SearchFilter';
import CardItem from '../components/CardItem';

export default function Homepage() {
    const [countries, setcountries] = useState([]);
    const [keyword, setkeyword] = useState("");
    const [region, setregion] = useState("")
    const [theme, settheme] = useState("day");
    const handleKeyword = (getKeyword) => {
        setkeyword(getKeyword)
    }

    const handleRegion = getRegion => {
        setregion(getRegion);
    }

    let body = document.querySelector("body");
    let renderCard;

    useEffect(() => {
        
        if(localStorage.getItem('country-app-theme') === "day") {
            if(body.classList.contains("night")) {
                body.classList.remove("night");
            }
            body.classList.add('day');
        } else {
            if(body.classList.contains("day")) {
                body.classList.remove("day")
            }
            body.classList.add('night');
        }

        if (keyword === "") {
            axios.get("https://restcountries.eu/rest/v2/all")
                .then(response => setcountries(response.data))
                .catch(error => console.log(error));
        } else {
            axios.get(`https://restcountries.eu/rest/v2/name/${keyword}`)
                .then(response => setcountries(response.data))
                .catch(error => console.log(error));
        }

    }, [keyword])

    useEffect(() => {
        if (region === "All") {
            axios.get("https://restcountries.eu/rest/v2/all")
                .then(response => setcountries(response.data))
                .catch(error => console.log(error));
        } else {
            axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
                .then(response => setcountries(response.data))
                .catch(error => console.log(error))
        }
    }, [region])

    function ListCard() {
        return (    
            <>
                {countries.map(country => {
                    return (
                        <CardItem key={country.name} name={country.name} flag={country.flag} population={country.population} region={country.region} capital={country.capital} code={country.alpha3Code} />
                    )
                })}
            </>
        )
    }

    let ShowLoading = () => {
        return <h1>Please Wait</h1>
    }

    countries === null || countries === undefined ? renderCard = <ShowLoading /> : renderCard = <ListCard />;

    return (
        <div className="homepage day">
            <Navbar themeMode={theme} />
            <SearchFilter keyword={handleKeyword} region={handleRegion} />
            <div className="list-countries">
                {renderCard}
            </div>
        </div>
    )
}