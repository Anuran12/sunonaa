import React from 'react'
import '../styles/Navbar.css'
import Logo from '../img/logo.png'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <header class="nav">
        <img
          src={Logo}
          alt="The Assignment Nerd"
          class="logo-top"
          onclick="window.location = '/';"
        />
        <nav class="nav-list">
          <Link to='/' class="nav-link scale">Home</Link>
          <Link to='/About' class="nav-link scale">About</Link>
          <Link to='/Services' class="nav-link scale">Service</Link>
          <Link to='/Blogs' class="nav-link scale">Blogs</Link>
          <Link to='/Collaboration' class="nav-link scale">Collaboration</Link>
          <Link to='/Listener' class="nav-link scale">Become A Listener</Link>

        </nav>
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
        
        {/* <button class="right" id="collapse-btn" onclick="showMenu(event)">
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
        </button> */}
      </header>
  )
}

export default Navbar