import React, { useState } from 'react'
import BlogCard from './BlogCard'
import BlogData from './BlogData'
import './blogHome.css'

function AllBlogs() {

    const [items, setItems] = useState(BlogData)

    return (
        <>
            <section className="blog top">
                <div className="container">
                    <div className="content grid">
                        {
                            items.map((item, index) => {
                                return <BlogCard key={index} item={item} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllBlogs
