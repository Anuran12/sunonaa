import React, { useEffect, useState } from 'react'
import '../styles/Contact.css'

function Contact() {



  const initialValues = { username: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const num = /^\+[1-9]{1}[0-9]{3,14}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.password = "Phone number is required";
    } else if (!num.test(values.phone)) {
      errors.phone = "Please enter your country code!";
    }
    return errors;
  };



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
        <form onSubmit={handleSubmit} className='contact__box'>
            <label for="name" className='text'>Name<span>*</span></label>
            <input type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              id="name" 
              className='input' required />
              <p className='error'>{formErrors.username}</p>

            <label for="phone" className='text'>Phone Number<span>*</span></label>
            <input type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formValues.phone}
            onChange={handleChange} 
            id="phone" 
            className='input' required/>
            <p className='error'>{formErrors.phone}</p>

            <label for="email" className='text'>Email<span>*</span></label>
            <input type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange} 
              id="email" 
              className='input' required/>
              <p className='error'>{formErrors.email}</p>

            <label for="question" className='text'>Question<span>*</span></label>
            <textarea id="question" name="question" required></textarea><br/>

            <button type="submit" className='button' value="Submit">Submit</button>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="success">Thank you to contact us!</div>
            ) : (
                <pre className='json'>{JSON.stringify(formValues, undefined, 2)}</pre>
            )}
            
        </form>
        

    </div>
    </div>
  )
}

export default Contact