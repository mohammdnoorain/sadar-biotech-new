import React, { useState } from 'react';
import '../components/styleCssFiles/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { GiPlantsAndAnimals } from "react-icons/gi";

function Footer() {
  const [formData, setFormData] = useState({

    email: '',
   
  }); // State to hold the email input
  const [message, setMessage] = useState(''); // State for feedback message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    }); // Update the state when the user types
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here

    const serviceID = 'service_6v8qvub'; // Replace with your EmailJS Service ID
    const templateID = 'template_294n8ok'; // Replace with your EmailJS Template ID
     const publicKey = 'SftXTRJ8K1da2gx5v'; // Replace with your EmailJS Public Key
    
    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({
          email: '',
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best deals
        </p>
        <p className='footer-subscription-text'>You can unsubscribe at any time.</p>
        <div className='input-areas'>
        <form 
  onSubmit={sendEmail}
  className="flex flex-col lg:flex-row lg:items-center lg:gap-4"
>
  {/* Email Input */}
  <input
    className="footer-input flex-grow border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
    name="email"
    type="email"
    placeholder="Your Email"
    value={formData.email} // Controlled input value
    onChange={handleInputChange} // Update state on input change
    required
  />

  {/* Submit Button */}
  <button
    type="submit"
    className="h-12  mb-5 bg-green-600 text-white p-3 rounded-md shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 lg:w-auto"
  >
    Submit
  </button>
</form>

          {/* Feedback Message */}
          {message && <p className='feedback-message'>{message}</p>}
        </div>
      </section>
      {/* Footer Links */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/products'>How it works</Link>
            <Link to='/research'>Testimonials</Link>
            <Link to='/about'>Careers</Link>
            <Link to='/about'>Investors</Link>
            <Link to='/about'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/contact'>Support</Link>
          
            <Link to='/about'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
           
            <Link to='https://www.facebook.com/Sadarbiotech/'>Facebook</Link>
            <Link to='https://www.linkedin.com/in/sadarbiotech'>LinkedIn</Link>
           
          </div>
        </div>
      </div>
      {/* Social Media */}
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              SadarBiotech
              {/* <GiPlantsAndAnimals /> */}
            </Link>
          </div>
          <small className='website-rights'>© SadarBiotech Pvt Ltd. Designed With ♥ By NeoTech</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/Sadarbiotech/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='https://www.linkedin.com/in/sadarbiotech'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

// const serviceID = 'service_6v8qvub'; // Replace with your EmailJS Service ID
// const templateID = 'template_294n8ok'; // Replace with your EmailJS Template ID
// const publicKey = 'SftXTRJ8K1da2gx5v'; // Replace with your EmailJS Public Key

