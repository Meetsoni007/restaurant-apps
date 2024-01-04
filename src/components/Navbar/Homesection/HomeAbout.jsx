import React from 'react'
import AboutCard from '../About/AboutCard'
import '../About/about.css'

function HomeAbout() {
    return (
        <>
            <section className='homeabout'>
                <div className="container top">
                    <AboutCard />
                </div>
            </section>
        </>
    )
}

export default HomeAbout