import React, { useEffect, useState } from 'react'
import PopProducts from '../component/PopProducts'

export default function ProductPage() {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('/allProduct.json')
            .then(res => res.json())
            .then(json => setAllProducts(json))
    }, [])
    

  return (
    <div className='allProductPage'>
        <div className="popularProdct">
            <PopProducts />
        </div>

      <div className="container mainProducts">
        {allProducts.map((p)=>(
            <div className="prod" key={p.id}>
                <div className="img">
                    <img src={p.image} alt="" />
                </div>
                <div className="text">
                    <div className="title">
                        <h4>{p.title}</h4>
                        <div className="rating flex flex-cn">
                            <img src="/star.png" alt="" />
                            <p>{p.rating}</p>
                        </div>
                    </div>
                    <div className="priceNnane flex flex-cn">
                        <h2>$ {p.price}</h2>
                        <h5>{p.name} <span>per KG</span></h5>
                    </div>
                    <div className="button">
                        <button className='btn btn-p'>Add to Cart</button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
