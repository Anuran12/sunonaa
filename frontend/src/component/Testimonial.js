import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import '../styles/Testimonial.css'

function Testimonial() {
  return (
    <div className='testimonial_container'>
        <h1>Testimonials</h1>
        <div className='testimonial_box'>
            <div className='testimonial'>
                <h1>Amzing service</h1>
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
                <p> Lorem ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum  ipsum lorem ipsum ipsum lorem ipsum</p>
            </div>
            <div className='testimonial'>
                <h1>Amzing service</h1>
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
                <p> Lorem ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum  ipsum lorem ipsum ipsum lorem ipsum</p>
            </div>
            <div className='testimonial'>
                <h1>Amzing service</h1>
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
                <p> Lorem ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum  ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum  ipsum lorem ipsum ipsum lorem ipsum</p>
            </div>

        </div>
    </div>
  )
}

export default Testimonial