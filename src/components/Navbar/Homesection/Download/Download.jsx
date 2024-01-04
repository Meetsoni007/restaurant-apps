import React from 'react'
import '../Download/download.css'

function Download() {
    return (
        <>
            <section className="download top">
                <div className="container flex_space">
                    <div className="row">
                        <h3>Download Our app</h3>
                        <h1>Wow! Get This Template App For You Mobile</h1>
                        <ul>
                            <li>&#10003; Get Paperless confirmation</li>
                            <li>&#10003; Get Paperless confirmation</li>
                            <li>&#10003; Get Paperless confirmation</li>
                            <li>&#10003; Get Paperless confirmation</li>
                            <li>&#10003; Get Paperless confirmation</li>
                            <li>&#10003; Get Paperless confirmation</li>
                            <li>&#10003; Get Paperless confirmation</li>
                            <li>&#10003; Get Paperless confirmation</li>
                        </ul>
                        <div className="img flex">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1024px-Google_Play_Store_badge_EN.svg.png" alt="" />
                        </div>
                    </div>
                    <div className="row row2">
                        <img className='row-image' src="https://help.apple.com/assets/634D93C867B48F12442A1784/634D93C967B48F12442A1792/en_US/877b33bec53670ba14140dc98df3d674.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Download
