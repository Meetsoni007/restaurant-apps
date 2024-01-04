import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './headtitle.css'

function Headtitle() {
    const location = useLocation()
    return (
        <>
            <section className="image-heading">
                <div className="container">

                    <h1>{location.pathname.split('/')[1]}</h1>
                    <button>
                        <Link top='/'>Home / </Link>
                        <span>{location.pathname.split('/')[1]}</span>

                    </button>
                </div>
            </section>
        </>
    )
}

export default Headtitle