import React from 'react'
import Heroimg from '../img/hero-image.jpg'
import '../styles/Hero.css'

function Hero() {
  return (
    <div className='hero__box'>
        <div className='hero__text'>
            <h1 className='hero__heading'>
                NEED <br/><span>SOMEONE</span> TO TALK TO?
            </h1>
            <p className='hero__about'>
                We listen, conduct listening training workshops and build listening communities so everyone feel heard,<br /> connected and supported.
            </p>
            <button className='hero__btn'>
                Book Now
            </button>
        </div>
        <div className='hero__img'>
            <img src={Heroimg} />
        </div>
    </div>
  )
}

export default Hero