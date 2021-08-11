import React from 'react'
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../components/Navbar';
export default function Detail() {
    return (
        <>
            <Navbar />
            <div className="detail">
                <Link to="/" className="back"><FontAwesomeIcon icon={faLongArrowAltLeft} size="lg" className="back-icon" /> Back</Link>

                <div className="content">
                    <figure>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US_flag_51_stars.svg/1235px-US_flag_51_stars.svg.png" alt="flag" />
                    </figure>

                    <section className="info">
                        <h1>Indonesia</h1>
                        <div className="attribute">
                            <div>
                                <p><span>Native Name:</span> Indonesia</p>
                                <p><span>Population:</span> Indonesia</p>
                                <p><span>Region:</span> Indonesia</p>
                                <p><span>Sub Region:</span> Indonesia</p>
                                <p><span>Capital:</span> Indonesia</p>
                            </div>

                            <div>
                                <p><span>Top Level Domain:</span> Indonesia</p>
                                <p><span>Currencies:</span> Indonesia</p>
                                <p><span>Language:</span> Indonesia</p>

                            </div>
                        </div>

                        <div className="borders">
                                <span>Border Countries:</span>
                                <Link to="/">France</Link>
                                <Link to="/">France</Link>
                                <Link to="/">France</Link>
                            </div>
                    </section>
                </div>
            </div>

        </>

    )
}
