// src/components/Footer.js

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
                        <li>how it works</li>
                        <li>how to create a profile</li>
                        <li>Find jobs</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>For Client</h4>
                    <ul>
                        <li>how it works</li>
                        <li>how to post a job</li>
                        <li>Find dev</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Stay connected</h4>
                    <div className="footer-section">
    <h4>Stay connected</h4>
    <div>
        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
    </div>
</div>

                </div>
            </div>
            <div className="footer-bottom">
                <h3>DevLink</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                    <li>Code of conduct</li>
                </ul>
            </div>
            <footer className="footer">
                &copy; 2023 DevLink Marketplace. All rights reserved.
            </footer>
        </div>
    );
}

export default Footer;
