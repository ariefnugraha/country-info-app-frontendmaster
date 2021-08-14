import React from 'react'
import flag from '../assets/icons/flag.svg';

export default function NotFound({keyword}) {
    return (
        <div className="notfound">
            <img src={flag} alt="Flag Icon" />
            <p>Sorry The Data For <b>{keyword.substr(1, keyword.length)}</b> is Not Found</p>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}
