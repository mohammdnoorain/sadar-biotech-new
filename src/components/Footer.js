import React from "react";
import "../components/styleCssFiles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* Footer Links */}
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/products">How it works</Link>
            <Link to="/research">Testimonials</Link>
            <Link to="/about">Careers</Link>
            <Link to="/about">Investors</Link>
            <Link to="/about">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Support</Link>
            <Link to="/about">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="https://www.facebook.com/Sadarbiotech/">Facebook</Link>
            <Link to="https://www.linkedin.com/in/sadarbiotech">LinkedIn</Link>
          </div>
        </div>
      </div>
      {/* Social Media */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              SadarBiotech
            </Link>
          </div>
          <small className="website-rights">
            © SadarBiotech Pvt Ltd. Designed With ♥ By NeoTech
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="https://www.facebook.com/Sadarbiotech/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="https://www.linkedin.com/in/sadarbiotech"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
