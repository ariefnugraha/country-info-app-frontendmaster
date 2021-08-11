import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Navbar from '../components/Navbar';
import SearchFilter from '../components/SearchFilter';
import CardItem from '../components/CardItem';

export default function Homepage() {
    const [countries, setcountries] = useState([]);
    let renderCard;

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(response => setcountries(response.data))
            .catch(error => console.log(error));
    }, [])

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
            <Navbar />
            <SearchFilter />
            <div className="list-countries">
                {renderCard}
            </div>
        </div>
    )
}