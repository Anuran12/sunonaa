import React from 'react'
import ServicesMain from '../component/ServicesMain'
import Faqsec from '../component/Faqsec'
import Contact from '../component/Contact'
import Testimonial from '../component/Testimonial'

function Services() {
  return (
    <div>
      <ServicesMain />
      <Testimonial />
      <Faqsec />

      <Contact />
    </div>
  )
}

export default Services