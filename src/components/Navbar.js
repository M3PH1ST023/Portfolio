import React from "react";
import "../css/pages.css";

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav>
                <h1 className="logo">
                    Port<span>folio</span>
                </h1>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/skills">Skills</a>
                    </li>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="/contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
