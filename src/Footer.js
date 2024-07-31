// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Helping Hands Foundation</h3>
          <p>Uplifting Individuals Through Healthcare & Education.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/helpinghandf.hyd"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/helpinghandf_hyd/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/@HelpingHandFoundationHyderabad"><i className="fab fa-youtube"></i></a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FHelpingHandHyd"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/helping-hand-foundation-hyd/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/About">About us</a></li>
            <li><a href="/Donate">Donate now</a></li>
            <li><a href="/Actions">Actions</a></li>
            <li><a href="/impact">Impact</a></li>
          </ul>
        </div>
       
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i className="fas fa-phone"></i> +91 8074208355</p>
          <p><i className="fas fa-envelope"></i> Info@helpinghandf.org</p>
          <p><i className="fas fa-map-marker-alt"></i> Rajendranagar, Hyderabad, India.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2020 - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;