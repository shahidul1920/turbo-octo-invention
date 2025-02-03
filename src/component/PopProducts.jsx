import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function PopProducts() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    return (
        <div className='popProducts'>
            <div className="container">
                <h2 className='heading-min'>Popular Products</h2>
                <div className="prodBox">

                    <div className="discount">
                        <h2>30% off</h2>
                        <p>
                            Discover a world of fresh and affordable products with our discount offers.
                        </p>
                        <button>Buy Now</button>
                        <img src="/VegBan.png" alt="" />
                    </div>


                    <div className="otherProds">
                        {products.map((p)=>(
                            <div className="prod" key={p.id}>
                                <div className="img">
                                    <img src={p.image} alt="" />
                                </div>
                                <div className="text">
                                    <div className="icn flex flex-cen">
                                        <img src="/star.png" alt="" />
                                        <p>{p.rating}</p>
                                    </div>
                                    <h4>{p.name}</h4>
                                    <h5>{p.price}</h5>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>

            </div>
        </div>
    )
}
