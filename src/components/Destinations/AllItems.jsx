import React, { useState } from 'react'
import Dcard from './Dcard'
import Sdata from './Sdata'

function AllItems() {

    const [items, setItem] = useState(Sdata);

    return (
        <div>
            <section className='gallery desi mtop'>
                <div className="container">
                    <div className="content grid">

                        {items.map((value) => {
                            return <Dcard key={value.id} item={value} />
                        })}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default AllItems
