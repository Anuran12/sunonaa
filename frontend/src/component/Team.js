import React, { useEffect, useState, useRef } from 'react'
import '../styles/Team.css'
import DummyImg from '../img/dummy2.png'
import TeamMember from '../img/dummy2.png'

function Team() {
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
            <div className='gallery'>
                <div class="card">
                    <img src={DummyImg} alt="" srcset="" />
                    <div class="content">
                        <p class="title">Sayan Das<br /><span>Creative Designer</span></p>
                    </div>
                </div>
                <div class="card">
                    <img src={DummyImg} alt="" srcset="" />
                    <div class="content">
                        <p class="title">Sayan Das<br /><span>Creative Designer</span></p>
                    </div>
                </div>
                <div class="card">
                    <img src={DummyImg} alt="" srcset="" />
                    <div class="content">
                        <p class="title">Sayan Das<br /><span>Creative Designer</span></p>
                    </div>
                </div>
                <div class="card">
                    <img src={DummyImg} alt="" srcset="" />
                    <div class="content">
                        <p class="title">Sayan Das<br /><span>Creative Designer</span></p>
                    </div>
                </div>

            </div>
            <h3 className='volunteer__title'>VOLUNTEERS</h3>
            
            <div className='gallery'>
                <div class="card">
                    <img src={DummyImg} alt="" srcset="" />
                    <div class="content">
                        <p class="title">Sayan Das<br /><span>Creative Designer</span></p>
                    </div>
                </div>
                <div class="card">
                    <img src={DummyImg} alt="" srcset="" />
                    <div class="content">
                        <p class="title">Sayan Das<br /><span>Creative Designer</span></p>
                    </div>
                </div>
                <div class="card">
                    <img src={DummyImg} alt="" srcset="" />
                    <div class="content">
                        <p class="title">Sayan Das<br /><span>Creative Designer</span></p>
                    </div>
                </div>
                <div class="card">
                    <img src={DummyImg} alt="" srcset="" />
                    <div class="content">
                        <p class="title">Sayan Das<br /><span>Creative Designer</span></p>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Team