import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>E-Commerce</h2>
          <p>Your one-stop shop for all your needs. We offer a wide variety of products to cater to your every desire.</p>
          <div className="contact">
            <span><i className="fa fa-phone"></i> &nbsp; 123-456-789</span>
            <span><i className="fa fa-envelope"></i> &nbsp; info@ecommerce.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#" method="post">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fa fa-paper-plane"></i>
              Send
            </button>
          </form>
        </div> */}
      </div>

      <div className="footer-bottom">
        &copy; ecommerce.com | Designed by YourCompany
      </div>
    </footer>
  );
}

export default Footer;
