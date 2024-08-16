import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-heading">About Us</h2>
          <p>
            We are dedicated to providing the best hotel reservation experience. Our platform
            offers a wide range of options to suit every traveler's needs.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-heading">Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><Link to="/contact">Contact Us</Link></li>

            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-heading">Contact Us</h2>
          <p>Email: info@hotelreservation.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Hotel Reservation | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
