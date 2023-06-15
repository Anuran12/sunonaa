import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Services from '../component/Services'
import Story from '../component/Story'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <Services />
      <Story />
      <Contact />
      <Footer />
    </div>
    
  )
}

export default Home