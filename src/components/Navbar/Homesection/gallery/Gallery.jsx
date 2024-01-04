import React from 'react'
import './gallery.css'
import Data from './Data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    };
    return (
        <>

            <section className="collection">
                <div className="container top">
                    <Slider {...settings}>
                        {
                            Data.map((value, index) => {
                                return (
                                    <div className="box">
                                        <img className='images-logo' key={index} src={value.cover} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>

        </>
    )
}

export default Gallery
