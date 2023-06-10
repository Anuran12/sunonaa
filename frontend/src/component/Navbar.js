import React from 'react'
import '../styles/Navbar.css'
import Logo from '../img/logo.png'

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
          <a href="/" class="nav-link scale">Home</a>
          <a href="./gallery.html" class="nav-link scale">About</a>
          <a href="./about.html" class="nav-link scale">Service</a>
          <a href="./T-and-C.html" class="nav-link scale">Blog</a>
          <a href="./T-and-C.html" class="nav-link scale">Collaboration</a>
          <a href="./T-and-C.html" class="nav-link scale">Become A Listener</a>

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