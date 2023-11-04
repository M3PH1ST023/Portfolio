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
                        <a href="/Portfolio">Home</a>
                    </li>
                    <li>
                        <a href="https://m3ph1st023.github.io/about">About</a>
                    </li>
                    <li>
                        <a href="/Portfolio/skills">Skills</a>
                    </li>
                    <li>
                        <a href="/Portfolio/portfolios">Portfolio</a>
                    </li>
                    <li>
                        <a href="/Portfolio/contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
