import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='main-footer'>


      <div className="subsSecction">
        <div className="img">
          <img src="/subImag.png" alt="" />
        </div>
        <div className="text">
          <h1>Subscribe to our Newsletter</h1>
          <p>Get the latest updates on new products and upcoming sales</p>
          <input type="email" placeholder='Enter email...' />
          <button className='btn btn-p'>Subscribe</button>
        </div>
      </div>

      <div className="footer">
        <div className="footerContainer container">
          <div className="footerLogo">
            <img src="/Vector (2).png" alt="" />
            <p>Shop your daily essentials at unbeatable prices. From fresh produce to pantry staples, we’ve got you covered every day!</p>
          </div>
          <div className="footerLinks">
            <h1>Quick Links</h1>
            <ul>
              <li><NavLink to="/product">Product</NavLink></li>
              <li><NavLink to="/company">services</NavLink></li>
              <li><NavLink to="/services">contact up</NavLink></li>
            </ul>
          </div>
          <div className="footerContact">
            <h1>Contact Us</h1>
            <ul>
              <li>Address: 1234 Street Name, City Name, United States</li>
              <li>Phone: +123-456-7890</li>
              <li>Email:</li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}
