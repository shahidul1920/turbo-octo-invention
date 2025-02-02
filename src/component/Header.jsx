import { MoveRight, Search, ShoppingCart } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="mainheader container">
                <div className="logo">
                    <img src="/Vector.png" alt="" />
                </div>

                <div className="navbar">
                    <ul className='flex flex-cen'>
                        <li><NavLink to="/">Product</NavLink></li>
                        <li><NavLink to="/company">services</NavLink></li>
                        <li><NavLink to="/services">contact up</NavLink></li>
                    </ul>
                </div>

                <div className="buttons flex flex-cen">
                    <div className="icones flex flex-cen">
                        <Search />
                        <ShoppingCart />
                    </div>
                    <button className="btn">Login</button>
                    <button className="btn">Sign Up</button>
                </div>

            </div>
        </header>
    )
}
