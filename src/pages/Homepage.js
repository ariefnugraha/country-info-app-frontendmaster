import React from 'react'

import Navbar from '../components/Navbar';
import SearchFilter from '../components/SearchFilter';

export default function Homepage() {
    return (
        <div className="homepage day">
            <Navbar />
            <SearchFilter />
        </div>
    )
}
