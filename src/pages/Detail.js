import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../components/Navbar';

export default function Detail(props) {
    const [country, setcountry] = useState([]);
    const [borders, setBorders] = useState([]);
    const [theme, settheme] = useState("day")
    let countryName = props.location.state.name;
    let renderData;
    let renderBorders;
    let body = document.querySelector("body");
    

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
    }, [body])

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${countryName}`)
            .then(response => {
                setcountry(response.data);
                if (response.data[0].borders.length > 0) {
                    axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${response.data[0].borders.join(";")}`)
                        .then(response => setBorders(response.data))
                        .catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))
    }, [countryName])

    const ShowBorders = () => {
        return (
            <div>
                {borders.map(border => {
                    return (
                        <Link to={{
                            pathname: "/detail",
                            search: `?country=${border.name}`,
                            state: { name: border.alpha3Code }
                        }} key={border.name}>{border.name}</Link>
                    )
                })}
            </div>
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

    if (country.length === 0 || countryName === "") {
        renderData = <Loading />
    } else {
        borders.length === 0 ? renderBorders = <span>-</span> : renderBorders = <ShowBorders />
        renderData = <ShowData />
    }

    return (
        <>
            <Navbar themeMode={theme} />
            <div className="detail">
                <Link to="/" className="back"><FontAwesomeIcon icon={faLongArrowAltLeft} size="lg" className="back-icon" /> Back</Link>

                <div className="content">
                    {renderData}
                </div>
            </div>

        </>
    )
}
