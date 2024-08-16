import React from 'react';
import './ContactUs.css';
import CollapsibleExample from './Navbar';
import Footer from "./Footer";


const ContactUs = () => {
  return (
    <div>

    <CollapsibleExample/>

    <div className="contact-container">
      <b className='contact-container-text'>Contact Us</b>
      
      <form className="contact-form">
        <div className="form-group">
            <br></br>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>

    <Footer/>
    </div>
  );
};

export default ContactUs;
