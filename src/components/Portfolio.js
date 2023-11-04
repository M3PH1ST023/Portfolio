import React from "react";
import "../css/pages.css";
import card1 from "../assets/passManager.jpg";
import card2 from "../assets/network.jpg";
import card3 from "../assets/steg.jpg";

const Portfolio = () => {
    return (
        <div className="portfolio-content">
            <h1 className="heading-h1">Projects</h1>
            <div class="cards">
                <a
                    href="https://github.com/M3PH1ST023/Password-manager"
                    className="links"
                >
                    <div class="card card1">
                        <div class="container">
                            <img src={card1} alt="las vegas" />
                        </div>
                        <div class="details">
                            <h3>Project Manager</h3>
                            <p>
                                A Full Stack web application to store our
                                password in a secured and clearly structured way
                                which is made accessbile whenever needed.
                            </p>
                        </div>
                    </div>
                </a>
                <a
                    href="https://github.com/M3PH1ST023/AnalytixNet"
                    className="links"
                >
                    <div class="card card2">
                        <div class="container">
                            <img src={card2} alt="New York" />
                        </div>
                        <div class="details">
                            <h3>AnalytixNet</h3>
                            <p>
                                An software application for analysis of the
                                network packets travelling across our network
                                and managing those packets. Provided with other
                                feature like cryptography, steganography and
                                digital forensics.
                            </p>
                        </div>
                    </div>
                </a>
                <a
                    href="https://github.com/M3PH1ST023/Steg_analyser"
                    className="links"
                >
                    <div class="card card3">
                        <div class="container">
                            <img src={card3} alt="Singapore" />
                        </div>
                        <div class="details">
                            <h3>Steg Analyser</h3>
                            <p>
                                A scripting tool for analysis of any type of
                                extension or file type irrespective of
                                encryption.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};
export default Portfolio;
