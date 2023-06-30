import React, { useEffect, useState, useRef } from 'react'
import '../styles/Team.css'
import DummyImg from '../img/dummy2.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";

function Team() {
    gsap.registerPlugin(ScrollTrigger);

    const images = gsap.utils.toArray('img');

    const showDemo = () => {
    document.body.style.overflow = 'auto';
    document.scrollingElement.scrollTo(0, 0);
    gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
    
    gsap.utils.toArray('section').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = (index % 2) ? ['65%', (w.scrollWidth - 1000) * -1] : [(w.scrollWidth - 700) * -1, '10%'];
        gsap.fromTo(w, {  x  }, {
        x: xEnd,
        scrollTrigger: { 
            trigger: section, 
            scrub: 0.9
        }
        });
    });
    }

    imagesLoaded(images).on('always', showDemo);
  return (
    <div className='team'>
        <h1>Meet Our Team</h1>
        <div className='founder'>
            <div>
                <h2>Founder</h2>
                <p>I love listening, hugs and crazy dancing. I am internationally certified facilitator, healer, social entrepreneur and lucky enough to be chosen by Sunonaa in its mission to create a more connected heart centred world.How does it get better than this and what else is possible now to invite more awesomeness to this planet?</p>
            </div>
            <div>
                <img className='founder__img' src={DummyImg} />
                <h2 className='founder__name'>Name</h2>
            </div>
        </div>
        <div className='team__seaction'>
            <h3 className='team__title'>Core Team</h3>
            <section class='demo-gallery'>
                <ul class='wrapper'>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                </ul>
            </section>
            <h3 className='volunteer__title'>VOLUNTEERS</h3>
            <section class='demo-gallery'>
                <ul class='wrapper'>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                </ul>
            </section>
            <section class='demo-gallery'>
                <ul class='wrapper'>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                <li>
                    <img height='274' src={DummyImg} width='300'/>
                </li>
                </ul>
            </section>  
        </div>
    </div>
  )
}

export default Team