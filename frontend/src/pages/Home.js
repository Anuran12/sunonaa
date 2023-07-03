import React from 'react'
import Hero from '../component/Hero'
import Services from '../component/Services'
import Story from '../component/Story'
import Contact from '../component/Contact'
import Chatbot from '../component/Chatbot'
import Counter from '../component/Counter'


function Home() {
  return (
    <div className='home'>
      <Hero />
      <Counter />
      <Services />
      <Story />
      <Contact />
      <Chatbot />
    </div>
    
  )
}

export default Home