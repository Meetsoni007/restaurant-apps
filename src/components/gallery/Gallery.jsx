import React from 'react'
import Headtitle from '../../common/HeadTitle/Headtitle'
import Card from './Card'
import GalleryData from './GalleryData'
import './gallery.css'

function Gallery() {
    return (
        <>
            <Headtitle />
            <div className="gallery top">
                <div className="container grid">
                    {
                        GalleryData.map((value) => {
                            return <Card images={value.img} title={value.title} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Gallery
