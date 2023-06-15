import React from 'react'
import FooterImg from '../img/footer.png'
import CloudsImg from '../img/clouds.png'
import Logo from '../img/logo.png'
import '../styles/Footer.css'

function Footer() {
  return (
    <div>
        <img className='footer__img' src={CloudsImg} /> 
        <img className='footer__img' src={FooterImg} /> 
        <div className='footer'>
            <div className='footer__heading'>
                <img className='logo' src={Logo} />
                <h1>Reinventing mental health for<br/> a new generation</h1>
            </div>
            <div className='footer__details'>
                <div className='details__box'>
                    <h1>Services</h1>
                    <div>
                    <span>Connect with a Listener</span>
                    <span>Listening Circle</span>
                    <span>Listening Workshop</span>
                    <span>Counseling</span>
                    </div>
                </div>
                <div className='details__box middle__box'>
                    <h1>Company</h1>
                    <div>
                        <span>About us </span>
                        <span>abcd@gmail.com</span>
                        <span>+91 1234567890</span>
                        <span>Delhi, India</span>
                    </div>
                </div>
                <div className='details__box'>
                    <h1>Follow us</h1>
                    <div>
                        <span>Twitter</span>
                        <span>Instagram </span>
                        <span>Facebook</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer__bottom'>
            <span>© 2023 Sunonaa</span>
            <span>Terms | Privacy | Contact us</span>
        </div>
    </div>
  )
}

export default Footer