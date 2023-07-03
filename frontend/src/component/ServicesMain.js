import React from 'react'
import '../styles/ServicesMain.css'
import Service1 from '../img/services/service1.png'
import Service2 from '../img/services/service2.png'
import Service3 from '../img/services/service3.png'
import Service4 from '../img/services/service4.png'

import Session1 from '../img/session1.png'
import Session2 from '../img/session2.png'
import Session3 from '../img/session3.png'

function ServicesMain() {
  return (
    <div>
        <main class="wrapper2 index">
        <section class="intro" id="1">
          <div class="intro-left">
            <h1 class="hero">Connect With A Listener</h1>
            <p class="content">
            what is one on one listing?<br/>
            How it is beneficial?<br/>
            How safe it is?

            </p>
            <a
              href="#"
              class="cta red"
              >Book Now</a>
          </div>
          <img
            src={Service1}
            alt="Stress Buster Image"
            class="intro-right"
          />
        </section>
        <section class="intro" id="2">
          <img
            src={Service2}
            alt="Stress Buster Image"
            class="intro-left"
          />
          <div class="intro-right">
            <h1 class="hero">LISTENING CIRCLE</h1>
            <p class="content">
            what is one on one listing?<br/>
            How it is beneficial?<br/>
            How safe it is?

            </p>
            <a
              href="#"
              class="cta"
              >Book Now</a>
          </div>
        </section>
        <section class="intro" id="3">
          <div class="intro-left">
            <h1 class="hero">LISTENING WORKSHOP</h1>
            <p class="content">
            what is one on one listing?<br/>
            How it is beneficial?<br/>
            How safe it is?

            </p>
            <a
              href="#"
              class="cta red"
              >Learn With Us</a>
          </div>
          <img
            src={Service3}
            alt="Stress Buster Image"
            class="intro-right"
          />
        </section>
        <section class="intro" id="4">
          <img
            src={Service4}
            alt="Stress Buster Image"
            class="intro-left"
          />
          <div class="intro-right">
            <h1 class="hero">COUNSELING</h1>
            <p class="content">
            what is one on one listing?<br/>
            How it is beneficial?<br/>
            How safe it is?

            </p>
            <a
              href="#"
              class="cta"
              >Connect Us</a>
          </div>
        </section>
      </main>
      <div className='session'>
        <h1>OUR Trainers have hosted sessions for </h1>
        <div>
          <img src={Session1} />
          <img src={Session2} />
          <img src={Session3} />

        </div>
      </div>
    </div>
  )
}

export default ServicesMain