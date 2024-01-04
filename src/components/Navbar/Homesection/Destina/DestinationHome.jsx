import React from 'react'
import AllItems from '../../../Destinations/AllItems'
import '../popular/popular.css'


function DestinationHome() {
    return (
        <>
            <section className="popular top">
                <div className="full_container">
                    <div className="heading">
                        <h1>Most popular Destination</h1>
                        <div className="line"></div>
                    </div>
                    <div className="content">
                        <AllItems />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DestinationHome
