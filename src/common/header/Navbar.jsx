import React, { useState } from "react"
import { Link } from "react-router-dom"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Slider from 'react-slick';


const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

        </div>
      </header>
    </>
  )
}

export default Navbar
