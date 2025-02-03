import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Services from '../component/Services'
import PopProducts from '../component/PopProducts'

export default function Home() {
  const services = useLoaderData()
  
  return (
    <div>
      {/* hero section */}
      <div className="hero">
      <section className='container'>
        <div className="textTop">
          <h1>
            Freshness <span>You Can
            Count </span>On, Prices You’ll Love!
          </h1>
          <p>
            Shop your daily essentials at unbeatable prices. From fresh produce to pantry staples, we’ve got you covered every day!
          </p>
        </div>

        <div className="image">
          <img src="/Hero.png" alt="" />
        </div>
      </section>
      </div>

      {/* services section */}
      <Services services={services} />

      {/* products section */}
      <PopProducts />





    </div>
  )
}
