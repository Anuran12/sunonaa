import React, { useState } from 'react'
import Arrow2 from '../img/arrow2.png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import '../styles/Counter.css'

function Counter() {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className='counters'>
                <div className='counter1'>
                    <h1>LISTENERS</h1>
                    <div id="counter">{counterOn && <CountUp start={0} end={300} duration={2} delay={0} />}+</div>
                </div>
                <img className='arrow' src={Arrow2} />
                <div className='counter1'>
                    <h1>WE HEARD</h1>
                    <div id="counter">{counterOn && <CountUp start={0} end={3500} duration={2} delay={0} />}+</div>
                </div>
                <img className='arrow' src={Arrow2} />
                <div className='counter1'>
                    <h1>LIVES TOUCHED</h1>
                    <div id="counter">{counterOn && <CountUp start={0} end={6000} duration={2} delay={0} />}+</div>
                </div>
            </div>
    </ScrollTrigger>
  )
}

export default Counter