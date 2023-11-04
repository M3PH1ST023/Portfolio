import React from "react";
import "../css/pages.css";
import pic from "../assets/photo.png";

const Home = () => {
    return (
        <div className="body-container">
            <div className="home-content">
                <h3>Hello, This is</h3>
                <h1>
                    Athidya <span>U</span>
                </h1>
                <p>
                    I am a Web developer, designer, Cyber Security practitioner,
                    penetration tester, CTF player and software tester.
                    <br />
                    Currently a student from &nbsp;
                    <a href="https://www.skcet.ac.in">
                        Sri Krisna college of engineering and technology
                    </a>
                </p>
                <div className="home-sci">
                    <a href="https://github.com/M3PH1ST023">
                        <i className="fi fi-brands-github"></i>
                    </a>
                    <a href="/temp">
                        <i className="fi fi-brands-instagram"></i>
                    </a>
                    <a href="/temp">
                        <i className="fi fi-brands-discord"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/athidya-udayakumar-103506213/">
                        <i className="fi fi-brands-linkedin"></i>
                    </a>
                </div>
                <a href="/about" className="btn-box">
                    More About Me
                </a>
            </div>
            <div className="photo-outer">
                <img src={pic} alt="outer"></img>
            </div>
        </div>
    );
};
export default Home;
