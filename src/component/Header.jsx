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

                <div className="flexnav flex flex-cn">
                    <div className="navbar flex flex-cn">
                        <ul className='flex flex-cen'>
                            <li><NavLink to="/product">Product</NavLink></li>
                            <li><NavLink to="/company">services</NavLink></li>
                            <li><NavLink to="/services">contact up</NavLink></li>
                        </ul>
                    </div>

                    <div className="buttons flex flex-cn">
                        <div className="icones flex flex-cn">
                            <Search />
                            <ShoppingCart />
                        </div>
                        <button className="btn btn-s">Login</button>
                        <button className="btn btn-p">Sign Up</button>
                    </div>
                </div>

            </div>
        </header>
    )
}
