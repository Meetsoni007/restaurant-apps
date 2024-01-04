import React from "react"
import "./about.css"
import aboutImage from '../images/Bgimage.jpg'

const AboutCard = () => {
    return (
        <>
            <div className='aboutCard top flex_space'>
                <div className='row row1'>
                    <h4>About Us</h4>
                    <h1>
                        We<span>provide Solution</span> to grow your business
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla</p>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                    <button className='secondary-btn primary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>
                <div className='row image'>
                    <img style={{ width: '90%' }} src={aboutImage} alt='' />
                    <div className='control-btn'>
                        <button className='prev'>
                            <i className='fas fa-play'></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard