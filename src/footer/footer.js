import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
    const handleSubmit = (e) => {
        e.preventDefault(); 
    };

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="container-items">
                    <div className="container-first">
                        <div className="container-first-title">
                        <div>
                            <Link className="logo-links" to="/">Lingua</Link>
                        </div>
                        <div className="subscribe">
                            Subscribe
                        </div>
                        <div>
                            <div action="#" id="newsletter_form" className="newsletter_form" onSubmit={handleSubmit}>
                                <input type="email" className="newsletter_input" placeholder="Email" required />
                                <button className="newsletter_button">
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container-second">
                        <div className="second-title">
                            About Us
                        </div>
                        <ul>
                            <li><Link className="links" to="/"> Courses</Link></li>
                            <li><Link className="links" to="/"> Team</Link></li>
                            <li><Link className="links" to="/"> Brand Guidelines</Link></li>
                            <li><Link className="links" to="/"> Jobs</Link></li>
                            <li><Link className="links" to="/"> Advertise with us</Link></li>
                            <li><Link className="links" to="/"> Press</Link></li>
                            <li><Link className="links" to="/"> Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="container-third">
                        <div className="third-title">
                            Help & Support
                        </div>
                        <ul>
                            <li><Link className="links" to="/"> Discussions</Link></li>
                            <li><Link className="links" to="/"> Troubleshooting</Link></li>
                            <li><Link className="links" to="/"> Duolingo FAQs</Link></li>
                            <li><Link className="links" to="/"> Schools FAQs</Link></li>
                            <li><Link className="links" to="/"> Duolingo English Test FAQs</Link></li>
                            <li><Link className="links" to="/"> Status</Link></li>
                        </ul>
                    </div>
                    <div className="container-four">
                        <div className="four-title">
                            Privacy & Terms
                        </div>
                        <ul>
                            <li><Link className="links" to="/"> Community Guidelines</Link></li>
                            <li><Link className="links" to="/"> Team</Link></li>
                            <li><Link className="links" to="/"> Brand Guidelines</Link></li>
                            <li><Link className="links" to="/"> Privacy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
