import "./Footer.css";

import logo from "../../assets/logo.png";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* LEFT */}

                <div className="footer-logo">

                    <img
                        src={logo}
                        alt="Inventure Logo"
                    />

                    <p>
                        WHERE TECHNOLOGY MEETS LIFESTYLE
                    </p>

                </div>

                {/* FIND US */}

                <div className="footer-column">

                    <h3>Find Us</h3>

                    <a href="#">
                        <FaInstagram className="instagram"/>
                        Instagram
                    </a>

                    <a href="#">
                        <FaFacebook className="facebook"/>
                        Facebook
                    </a>

                    <a href="#">
                        <FaYoutube className="youtube"/>
                        Youtube
                    </a>

                </div>

                {/* CATEGORIES */}

                <div className="footer-column">

                    <h3>Categories</h3>

                    <a href="#">Earbuds</a>

                    <a href="#">Microphone</a>

                    <a href="#">Headphone</a>

                    <a href="#">Speaker</a>

                    <a href="#">Watch</a>

                </div>

                {/* CONTACT */}

                <div className="footer-column">

                    <h3>Contact</h3>

                    <a href="#">
                        <FaPhoneAlt />
                        97562323232
                    </a>

                    <a href="#">
                        <FaEnvelope />
                        inventure@gmail.com
                    </a>

                </div>

            </div>

        </footer>

    );

}

export default Footer;