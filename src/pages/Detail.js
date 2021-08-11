import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../components/Navbar';

export default function Detail(props) {
    let countryName = props.location.state.name;
    let renderData;
    let renderBorders;
    const [country, setcountry] = useState([]);
    const [borders, setBorders] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then(response => {
                setcountry(response.data);
                if(response.data[0].borders.length > 0) {
                    axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${response.data[0].borders.join(";")}`)
                    .then(response => setBorders(response.data))
                    .catch(error => console.log(error))
                } else {
                    console.log("COBA LAGI")
                }        
            })
            .catch(error => console.log(error))
    }, [])

    console.log(borders)

    const ShowBorders = () => {
        return (
            
            borders.map(border => {
                return (
                    <Link to="/" key={border.name}>{border.name}</Link>
                )
            })
        )
    }

    const Wait = () => {
        return (
            <h1>ada</h1>
        )
    }

    const ShowData = () => {
        return (
            <>
                <figure>
                    <img src={country[0].flag} alt={`${country[0].name} flag`} />
                </figure>

                <section className="info">
                    <h1>{country[0].name}</h1>
                    <div className="attribute">
                        <div>
                            <p><span>Native Name:</span> {country[0].nativeName}</p>
                            <p><span>Population:</span> {country[0].population.toLocaleString("id-ID")}</p>
                            <p><span>Region:</span> {country[0].region}</p>
                            <p><span>Sub Region:</span> {country[0].subregion}</p>
                            <p><span>Capital:</span> {country[0].capital}</p>
                        </div>

                        <div>
                            <p><span>Top Level Domain:</span> {country[0].topLevelDomain}</p>
                            <p><span>Currencies:</span> {`${country[0].currencies[0].symbol} ${country[0].currencies[0].name}`}</p>
                            <p><span>Language:</span> {country[0].languages[0].name}</p>

                        </div>
                    </div>

                    <div className="borders">
                        <span>Border Countries:</span>
                        {renderBorders}
                    </div>
                </section>
            </>
        )
    }

    const Loading = () => {
        return (
            <h1>LOading</h1>
        )
    }

    if(country.length === 0 || countryName === "" || borders.length === 0) {
        renderData = <Loading />
        renderBorders = <Wait />
    } else {
        renderBorders = <ShowBorders />
        renderData = <ShowData />
        
    }
    
    return (
        <>
            <Navbar />
            <div className="detail">
                <Link to="/" className="back"><FontAwesomeIcon icon={faLongArrowAltLeft} size="lg" className="back-icon" /> Back</Link>

                <div className="content">
                    {renderData}
                </div>
            </div>

        </>
    )
}
