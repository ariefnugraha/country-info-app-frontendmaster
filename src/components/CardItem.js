import React from 'react'

export default function CardItem() {
    return (
        <div className="card">
            <figure>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US_flag_51_stars.svg/1235px-US_flag_51_stars.svg.png" alt="flag" />
            </figure>
            <div className="content">
                <p className="name">Indonesia</p>
                <p><span>Population:</span> 1.000.000</p>
                <p><span>Region:</span> Oceania</p>
                <p><span>Capital:</span> Jakarta</p>
            </div>
        </div>
    )
}
