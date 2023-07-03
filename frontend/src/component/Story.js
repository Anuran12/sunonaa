import React, { useState } from 'react';
import '../styles/Story.css';
import Story1 from '../img/story/story1.png';
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";


function Story() {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  
    
  return (
    <div className='story'>
      <h1 className='story__title'>OUR STORY</h1>
    <section class="ps-timeline-sec"
    {...events}
      ref={ref}>
    <div class="container">
        <ol class="ps-timeline">
            <li>
                <div class="img-handler-top">
                    <img src={Story1} alt=""/>
                </div>
                <div class="ps-bot">
                    <p>Our first social experiment with listening happened</p>
                </div>
                <span class="ps-sp-top">2017</span>
            </li>
            <li>
                <div class="img-handler-bot">
                    <img src={Story1} alt=""/>
                </div>
                <div class="ps-top">
                    <p>We did a series of street listening, public listening sessions</p>
                </div>
                <span class="ps-sp-bot">2018</span>
            </li>
            <li>
                <div class="img-handler-top">
                    <img src={Story1} alt=""/>
                </div>
                <div class="ps-bot">
                    <p>Received huge requests from our existing/new users for virtual sessions; started online active listening sessions</p>
                </div>
                <span class="ps-sp-top">2019</span>
            </li>
            <li>
                <div class="img-handler-bot">
                    <img src={Story1} alt=""/>
                </div>
                <div class="ps-top">
                    <p>We created a listening volunteer community and trained hundreds of people with listening skills</p>
                </div>
                <span class="ps-sp-bot">2020</span>
            </li>
            <li>
                <div class="img-handler-top">
                    <img src={Story1} alt=""/>
                </div>
                <div class="ps-bot">
                    <p>We conducted thousands of listening sessions for students, working professionals, volunteers, institutions</p>
                </div>
                <span class="ps-sp-top">2021</span>
            </li>
            <li>
                <div class="img-handler-bot">
                    <img src={Story1} alt=""/>
                </div>
                <div class="ps-top">
                    <p>Hosted mental health awareness sessions, listening & emotional wellbeing trainings & launched peer support listening service for organisations</p>
                </div>
                <span class="ps-sp-bot">2022</span>
            </li>
        </ol>
    </div>
</section>
    </div>
    
  )
}

export default Story