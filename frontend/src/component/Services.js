import React from 'react'
import Service1 from '../img/services/service1.png'
import Service2 from '../img/services/service2.png'
import Service3 from '../img/services/service3.png'
import Service4 from '../img/services/service4.png'
import '../styles/Services.css'

function Services() {
  return (
    <div className='services'>
        <h1>Services</h1>
        <div className='services__box'>
            <div className='service'>
                <div>
                    <h1>CONNECT WITH A LISTENER</h1>
                    <button>Book Now</button>
                </div>
                <img src={Service1}/>
            </div>
            <div className='service'>
                <div>
                    <h1>LISTENING CIRCLE</h1>
                    <button>Book Now</button>
                </div>
                <img src={Service2}/>
            </div>
            <div className='service'>
                <div>
                    <h1>LISTENING WORKSHOP</h1>
                    <button>Book Now</button>
                </div>
                <img src={Service3}/>
            </div>
            <div className='service'>
                <div>
                    <h1>COUNSELING</h1>
                    <button>Book Now</button>
                </div>
                <img src={Service4}/>
            </div>
        </div>
    </div>
  )
}

export default Services