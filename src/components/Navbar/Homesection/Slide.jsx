import React, { useState } from 'react'
import data from './Data';


const Slide = () => {

    const [current, setCurrent] = useState(0)
    const length = data.length


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    if (!Array.isArray(data)) {
        return null
    }

    return (
        <>
            <section className='slider'>
                <div className="control-btn">
                    <button className='prev' onClick={prevSlide}>
                        <i className='fas fa-caret-left'></i>
                    </button>
                    <button className='Next' onClick={nextSlide} >
                        <i className='fas fa-caret-right'></i>
                    </button>
                </div>

                {data.map((meet, i) =>
                    <div className={i === current ? "slide active" : "slide"} key={i}>
                        {i === current && <img className='image' src={meet.img} alt={""} />}
                    </div>
                )}

            </section>



            <section className='slide-form'>
                <div className="container">
                    <h2>Enjoy Your Holiday</h2>
                    <span>Search and Book Hotel</span>

                    <form action="">
                        <input type="text" placeholder='Search City' name='' id='' />
                        <div className="flex_space">
                            <input type="date" placeholder='Check In' />
                            <input type="date" placeholder='Check Out' />
                        </div>
                        <div className="flex_space">
                            <input type="number" placeholder='Adult(s)(+18)' />
                            <input type="number" placeholder='Children(0 - 17)' />
                        </div>
                        <input type="number" placeholder='Rooms' />
                        <input type="Submit" value='Search' className='submit' />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Slide