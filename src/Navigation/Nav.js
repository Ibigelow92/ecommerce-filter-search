import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Nav() {
  return (
    <nav>
        <div className="nav-container">
            <input 
                className="search-input" 
                type="text" 
                placeholder="Enter your search criteria" 
            />
        </div>

        <div className="profile-container">
            <a href="#">
                <FiHeart className="nav-icons" />
            </a>

            <a>
                <AiOutlineShoppingCart className="nav-icons" />
            </a>
            <a>
                <AiOutlineUserAdd className="nav-icons" />
            </a>
        </div>

    </nav>
  )
}

export default Nav;
