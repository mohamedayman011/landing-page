import "./footer.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import LogoFooter from "../../assets/footerLogo.png";
import { FiSend } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
    return (
        <footer>
            <div className="top">
                <div className="container">
                    <h2>Pellentesque suscipit fringilla libero eu.</h2>
                    <button className="btn btn-1">
                        Get a Demo
                        <HiOutlineArrowNarrowRight />
                    </button>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="left">
                        <a href="/" className="footer-logo">
                            <img src={LogoFooter} alt="logo-footer" />
                        </a>
                        <p>Copyright © 2020 Nexcent ltd.</p>
                        <p>All rights reserved</p>
                        <div className="social">
                            <a href="#">
                                <FaInstagram />
                            </a>
                            <a href="#">
                                <FaDribbble />
                            </a>
                            <a href="#">
                                <FaTwitter />
                            </a>
                            <a href="#">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="col">
                            <h3>Company</h3>
                            <ul>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Contact us</a>
                                </li>
                                <li>
                                    <a href="#">Pricing</a>
                                </li>
                                <li>
                                    <a href="#">Testimonials</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Support</h3>
                            <ul>
                                <li>
                                    <a href="#">Help center</a>
                                </li>
                                <li>
                                    <a href="#">Terms of service</a>
                                </li>
                                <li>
                                    <a href="#">Legal</a>
                                </li>
                                <li>
                                    <a href="#">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#">Status</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Stay up to date</h3>
                            <div className="input">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your email address"
                                />
                                <button type="submit">
                                    <FiSend />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
