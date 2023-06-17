import React from 'react'
import Hero from '../component/Hero'
import Services from '../component/Services'
import Story from '../component/Story'
import Contact from '../component/Contact'


function Home() {
  return (
    <div className='home'>
      <Hero />
      <Services />
      <Story />
      <Contact />
    </div>
    
  )
}

export default Home