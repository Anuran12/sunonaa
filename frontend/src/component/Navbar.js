import React, { useState } from 'react'
import '../styles/Navbar.css'
import Logo from '../img/logo.png'
import {Link} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <header class="nav">
        <img
          src={Logo}
          alt="The Assignment Nerd"
          class="logo-top"
          onclick="window.location = '/';"
        />
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
            <nav class="nav-list">
          <Link to='/' class="nav-link scale">Home</Link>
          <Link to='/About' class="nav-link scale">About</Link>
          <Link to='/Services' class="nav-link scale">Service</Link>
          <Link to='/Blogs' class="nav-link scale">Blogs</Link>
          <Link to='/Collaboration' class="nav-link scale">Collaboration</Link>
          <Link to='/Listener' class="nav-link scale">Become A Listener</Link>
          <div className='nav_btns_mobile'>
        <a
          id="nav-btn1"
          class="nav-btn"
          >Volunteer
          </a>
        <a
          id="nav-btn2"
          class="nav-btn"
          >Donate
          </a>
        </div>
          

        </nav>



        </div>
        <div className='nav_btns'>
        <a
          id="nav-btn1"
          class="nav-btn"
          >Volunteer
          </a>
        <a
          id="nav-btn2"
          class="nav-btn"
          >Donate
          </a>
        </div>
        <div className="hamburger-menu">
            <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        
        
        {/* <button class="right" id="collapse-btn" onclick="showMenu(event)">
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
        </button> */}
      </header>
  )
}

export default Navbar