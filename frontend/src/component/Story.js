import React, { useState } from 'react';
import '../styles/Story.css';
import dummy from '../img/dummy.png';
import Arrow2 from '../img/arrow2.png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Story() {
    const [counterOn, setCounterOn] = useState(false);
    
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className='story'>
        
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
            <div className='story__box'>
                <h1 className='story__title'>Our <br/>Story</h1>
                <img src={dummy} className='story__img1' />
                <img src={dummy} className='story__img2' />
                <iframe className='youtube-video' src="https://www.youtube.com/embed/5kW0RtcJZC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img src={dummy} className='story__img3' />
                <h1 className='story__title2'>How it all began... <br/>A small story</h1>
            </div>
        </div>
    </ScrollTrigger>
    
  )
}

export default Story