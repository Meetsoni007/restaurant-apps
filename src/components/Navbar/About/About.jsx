import React from 'react'
import AboutCard from './AboutCard'
import "./about.css"
import aboutImage from '../images/Bgimage.jpg'
import Headtitle from '../../../common/HeadTitle/Headtitle'

function About() {
    return (
        <>
            <Headtitle />
            <section className='about top'>
                <div className="container">
                    <AboutCard />
                </div>
            </section>

            <section className='features top'>
                <div className="container aboutCard flex_space">
                    <div className="row row1 row2">
                        <h1>Out <span>Features</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolor in repellendus, rerum unde laborum ab officia fugiat enim. Nostrum maiores facilis eum quaerat ab atque doloremque, ratione iure pariatur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quisquam pariatur consequatur aliquid asperiores explicabo dolores suscipit temporibus harum, facere animi nemo cupiditate ipsum dolor sit accusantium neque dolorem architecto.</p>

                        <button className='secondary-btn primary-btn'>
                            Explore More <i className='fas fa-long-arrow-alt-right'></i>
                        </button>
                    </div>

                    <div className='row image'>
                        <img src={aboutImage} alt='' />
                        <div className='control-btn'>
                            <button className='prev'>
                                <i className='fas fa-play'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About



