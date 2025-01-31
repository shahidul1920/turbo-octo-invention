import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className="logo">
            <h1>Logo</h1>
        </div>
        <div className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
        </div>
    </header>
  )
}
