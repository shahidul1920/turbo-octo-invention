import { Menu, MoveRight, Search, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="mainheader container">
        <div className="logo">
          <NavLink to="/">
            <img src="/Vector.png" alt="" />
          </NavLink>
        </div>

        <div className="navIcnM">
          <Menu />
        </div>

        <div className="flexnav flex flex-cn">
          <div className="navbar flex flex-cn">
            <ul className="flex flex-cen">
              <li>
                <NavLink to="/product">Product</NavLink>
              </li>
              <li>
                <NavLink to="/services">services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">contact us</NavLink>
              </li>
            </ul>
          </div>

          <div className="buttons flex flex-cn">
            <div className="icones flex flex-cn">
              <Search />
              <ShoppingCart />
            </div>

            <NavLink to="/logIn">
              <button className="btn btn-s">Log In</button>
            </NavLink>

            <NavLink to="/signup">
              <button className="btn btn-p">Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
