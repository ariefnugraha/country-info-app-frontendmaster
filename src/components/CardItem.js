import React from 'react'
import { Link } from 'react-router-dom';

export default function CardItem({ name, flag, population, capital, region, code }) {

    return (
        <div className="card">
            <Link to={{
                pathname: "/detail",
                search: `?country=${name}`,
                state: { name: code }
            }}>
                <figure>
                    <img src={flag} alt={`${name} flag`} />
                </figure>
            </Link>
            <div className="content">
                <Link to={{
                    pathname: "/detail",
                    search: `?country=${name}`,
                    state: { name: code }
                }} className="name">{name}</Link>
                <p><span>Population:</span> {population.toLocaleString("id-ID")}</p>
                <p><span>Region:</span> {region}</p>
                <p><span>Capital:</span> {capital}</p>
            </div>
        </div>
    )
}
