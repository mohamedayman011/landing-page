import { useState } from "react";
import "./header.css";
import Logo from "/Logo.png";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { RiCloseLargeFill } from "react-icons/ri";
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    let Links = [
        { name: "Home", url: "/" },
        { name: "Service", url: "#service" },
        { name: "Feature", url: "#" },
        { name: "Product", url: "#product" },
        { name: "Testimonial", url: "#" },
        { name: "FAQ", url: "#faq" },
    ];
    return (
        <header>
            <div className="container">
                <a href="/" className="logo">
                    <img src={Logo} alt="logo" />
                </a>
                <nav className="navbar">
                    <ul>
                        {Links.map(({ name, url }, i) => (
                            <li key={i}>
                                <a href={url}>{name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="login">
                    <button className="btn btn-3">Login</button>
                    <button className="btn btn-1">Sign up</button>
                </div>
                <button
                    className="btn-menu btn-1"
                    onClick={() => setIsOpen(true)}>
                    <PiDotsThreeOutlineVerticalBold />
                </button>
            </div>
            {isOpen && (
                <div className="module">
                    <div className="module-container">
                        <button
                            className="close-menu"
                            onClick={() => setIsOpen(false)}>
                            <RiCloseLargeFill />
                        </button>
                        <nav>
                            <ul>
                                {Links.map(({ name, url }, i) => (
                                    <li key={i}>
                                        <a href={url}>{name}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="signup">
                            <button className="btn btn-3">Login</button>
                            <button className="btn btn-1">Sign up</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
