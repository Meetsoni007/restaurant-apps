import React from 'react'
import Cards from './Cards'
import './popular.css'

function Popular() {
    return (
        <>
            <section className="popular top">
                <div className="full_container">
                    <div className="heading">
                        <h1>Most Popular Hotels</h1>
                        <div className="line"></div>
                    </div>
                    <div className="content"></div>
                    <Cards />
                </div>
            </section>
        </>
    )
}

export default Popular
