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
          <Link to='/' class="nav-link scale" onClick={() => setShowMediaIcons(!showMediaIcons)}>Home</Link>
          <Link to='/About' class="nav-link scale" onClick={() => setShowMediaIcons(!showMediaIcons)}>About</Link>
          <Link to='/Services' class="nav-link scale" onClick={() => setShowMediaIcons(!showMediaIcons)}>Service</Link>
          <Link to='/Blogs' class="nav-link scale" onClick={() => setShowMediaIcons(!showMediaIcons)}>Blogs</Link>
          <Link to='/Collaboration' class="nav-link scale" onClick={() => setShowMediaIcons(!showMediaIcons)}>Collaboration</Link>
          <Link to='/Listener' class="nav-link scale" onClick={() => setShowMediaIcons(!showMediaIcons)}>Become A Listener</Link>
          <div className='nav_btns_mobile'>
          <button id="volunteer" onclick="">Volunteer</button>
          <button id="donate" onclick="">Donate</button>
        </div>
          

        </nav>



        </div>
        <div className='nav_btns'>
        <button id="volunteer" onclick="">Volunteer</button>
        <button id="donate" onclick="">Donate</button>
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