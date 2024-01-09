import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import logo from '../components/assets/shoe-logo.png'

function Sidebar({handleChange}) {
  
  return (
  <>
  <section className="sidebar">
    <div className="logo-container">
      <img className="logo" src={logo} alt="" />
      <h1>SHOE DEPOSITORY</h1>
    </div>

    {/* passes handleChange as a prop */}
    <Category handleChange={handleChange} />
    <Price handleChange={handleChange} />
    <Colors handleChange={handleChange} />

  </section>
  </>
  )
}

export default Sidebar;