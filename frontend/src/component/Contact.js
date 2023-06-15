import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact__container'>
    <div className='contact'>
        <div className='contact__text'>
            <span>Ask Us Question</span>
            <h1>Contact Us<br/> Today</h1>
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