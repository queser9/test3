import React from 'react';
import '../styles/Footer.css';
import '../styles/FooterContent.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-sections">
                <div className="footer-section">
                    <h4>For Dev</h4>
                    <ul>
                        <li><a href="#">how it works</a></li>
                        <li><a href="#">how to create a profile</a></li>
                        <li><a href="#">Find jobs</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>For Client</h4>
                    <ul>
                        <li><a href="#">how it works</a></li>
                        <li><a href="#">how to post a job</a></li>
                        <li><a href="#">Find dev</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Stay connected</h4>
                    <div>
                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <h3>DevLink</h3>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Code of conduct</a></li>
                </ul>
            </div>
            <footer className="footer">
                &copy; 2023 DevLink Marketplace. All rights reserved.
            </footer>
        </div>
    );
}

export default Footer;
