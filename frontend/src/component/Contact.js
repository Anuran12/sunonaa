import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact__container'>
    <div className='contact'>
        <div className='contact__text'>
            <span>Ask Us Question</span>
            <h1>Contact Us<br/> Today</h1>
            <p>+91 85060 01113</p>
            <p>we@sunonaa.com</p>
            <p>sonali@sunonaa.com</p>
            <p>http://www.sunonaa.com/</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29475.500147982977!2d88.412362!3d22.562734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743203255595%3A0x9c37b30c00660fab!2sJadavpur%20University%20Salt%20Lake%20Campus!5e0!3m2!1sen!2sin!4v1687020714936!5m2!1sen!2sin"
              width="250"
              height="170"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
            <p>Kolkata, India</p>
        </div>
        <div className='contact__box'>
            <label for="name" className='text'>Name<span>*</span></label>
            <input type="text" id="name" className='input' name="name" required /><br/>

            <label for="phone" className='text'>Phone Number<span>*</span></label>
            <input type="tel" id="phone" className='input' name="phone" required/><br/>

            <label for="email" className='text'>Email<span>*</span></label>
            <input type="email" id="email" className='input' name="email" required/><br/>

            <label for="question" className='text'>Question<span>*</span></label>
            <textarea id="question" name="question" required></textarea><br/>

            <input type="submit" className='button' value="Submit"/>
            
        </div>

    </div>
    </div>
  )
}

export default Contact