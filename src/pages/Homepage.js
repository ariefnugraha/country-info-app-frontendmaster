import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Navbar from '../components/Navbar';
import SearchFilter from '../components/SearchFilter';
import CardItem from '../components/CardItem';
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';

export default function Homepage() {
    const [countries, setcountries] = useState([]);
    const [keyword, setkeyword] = useState("");
    const [region, setregion] = useState("")
    const [theme, settheme] = useState("day");
    const handleKeyword = (getKeyword) => {
        setkeyword(getKeyword)
    }
    const [checkData, setcheckData] = useState(true)

    const handleRegion = getRegion => {
        setregion(getRegion);
    }

    let body = document.querySelector("body");
    let renderData;

    useEffect(() => {
        if(localStorage.getItem('country-app-theme') === "day") {
            if(body.classList.contains("night")) {
                body.classList.remove("night");
            }
            settheme("day");
            body.classList.add('day');
        } else if(localStorage.getItem('country-app-theme') !== '') {
            if(body.classList.contains("day")) {
                body.classList.remove("day")
            }
            settheme("night");
            body.classList.add('night');
        } else {
            settheme("day");
            body.classList.add("day")
        }

        if (keyword === "") {
            axios.get("https://restcountries.eu/rest/v2/all")
                .then(response => setcountries(response.data))
                .catch(error => console.log(error));
        } else {
            axios.get(`https://restcountries.eu/rest/v2/name/${keyword}`)
                .then(response => setcountries(response.data))
                .catch(error => {
                    if(error.response.status === 404) {
                        setcheckData(false)
                    }
                });
        }
    }, [keyword, body])

    //GET COUNTRY BASED ON USER SEARCH
    useEffect(() => {
        if (region === "All") {
            axios.get("https://restcountries.eu/rest/v2/all")
                .then(response => setcountries(response.data))
                .catch(error => console.log(error));
        } else if (region !== "") {
            axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
                .then(response => setcountries(response.data))
                .catch(error => console.log(error))
        }
    }, [region])

    function ListCard() {
        //CHECK IF STATE COUNTRIES ALREADY HAVE CONTENT FROM API OR NOTE
        if(countries.length === 0) {
            return <Loading />
        } else {

        }
        return (    
            <div className="list-countries">
                {countries.map(country => {
                    return (
                        <CardItem key={country.name} name={country.name} flag={country.flag} population={country.population} region={country.region} capital={country.capital} code={country.alpha3Code} />
                    )
                })}
            </div>
        )
    }

    //CHECK IF USER SEARCH COUNTRY
    checkData === false && keyword.length > 0 ? renderData = <NotFound keyword={keyword} /> : renderData = <ListCard /> 

    return (
        <div className="homepage day">
            <Navbar themeMode={theme} />
            <SearchFilter keyword={handleKeyword} region={handleRegion} />
            {renderData}        
        </div>
    )
}