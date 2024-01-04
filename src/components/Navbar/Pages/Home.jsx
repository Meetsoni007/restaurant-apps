import React from 'react'
import DestinationHome from '../Homesection/Destina/DestinationHome';
import Download from '../Homesection/Download/Download';
import Gallery from '../Homesection/gallery/Gallery';
import Hero from '../Homesection/Hero';
import HomeAbout from '../Homesection/HomeAbout';
import Popular from '../Homesection/popular/Popular';
import Works from '../Homesection/Work/Works';

const Home = () => {
    return (
        <>
            <Hero />
            <HomeAbout />
            <Popular />
            <DestinationHome />
            <Download />
            <Works />
            <Gallery />
        </>
    )
}

export default Home