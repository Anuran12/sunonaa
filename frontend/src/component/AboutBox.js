import React from 'react'
import AboutImg1 from '../img/about1.png'
import AboutImg2 from '../img/about2.png'
import '../styles/AboutBox.css'


function AboutBox() {
  return (
    <div className='about'>
    <div className='about__box'>
        <h1 className='vision'>VISION</h1>
        <div className='vision__box'>
            <div>
                <p>
                Sunonaa’s listening community found that people should simply be able to talk about what they are going through – in non-clinical, everyday language – and get supportive care, resources, and/or service referrals, in that exact moment, that match their mental or physical health needs.
                </p>
            </div>
            <img src={AboutImg1} />
        </div>
        <h1 className='mission'>MISSION</h1>
        <div className='vision__box mission__box'>
            <div>
                <p>
                    Sunonaa is an online on-demand emotional health and wellbeing service. Our platform anonymously & securely connects real people to real trained listeners, in one-on-one video/chat sessions. Anyone who wants to talk about whatever is on their mind can quickly reach out to a trained, compassionate listener through our network.
                </p>
            </div>
            <img src={AboutImg2} />
        </div>
    </div>
    </div>
  )
}

export default AboutBox