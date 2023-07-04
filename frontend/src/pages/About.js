import React from 'react'
import Story from '../component/Story'
import AboutBox from '../component/AboutBox'
import Contact from '../component/Contact'
import Team from '../component/Team'
import Counter from '../component/Counter'


function About() {
  return (
    <div>
        <Counter />
        <Story />
        <AboutBox />
        <Team />
        <Contact />
    </div>
  )
}

export default About