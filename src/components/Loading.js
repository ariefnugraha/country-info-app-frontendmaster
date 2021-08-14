import React from 'react'
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export default function Loading() {
    return (
        <div className="loading">
            <FontAwesomeIcon icon={faCircleNotch} size="5x" className="icon" />
            <p className="loading-text">LOADING</p>
            <p className="loading-description">Hi, Please Wait We Still Prepare The Content For You</p>
        </div>
    )
}
