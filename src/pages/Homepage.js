import React from 'react'

import Navbar from '../components/Navbar';
import SearchFilter from '../components/SearchFilter';
import CardItem from '../components/CardItem';

export default function Homepage() {
    return (
        <div className="homepage day">
            <Navbar />
            <SearchFilter />
            <div className="list-countries">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </div>
    )
}
