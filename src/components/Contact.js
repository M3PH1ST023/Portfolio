import React from "react";
import "../css/pages.css";
import mail from "../assets/email.png";
import git from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";
import discord from "../assets/discord.png";
//#00BFFD
const Contact = () => {
    return (
        <div className="about-content">
            <h2>Contact</h2>
            <hr className="end-line" />
            <div className="contact-logo">
                <img src={mail} alt="mail" />
            </div>
            <div className="contact">
                <div className="contact-type">Email&nbsp;:&nbsp;</div>
                <div className="contact-info">
                    <a href="athidya23.03.2003@gmail.com">
                        athidya23.03.2003@gmail.com
                    </a>
                </div>
            </div>
            <div className="contact-logo">
                <img src={git} alt="mail" />
            </div>
            <div className="contact">
                <div className="contact-type">Github&nbsp;:&nbsp;</div>
                <div className="contact-info">
                    <a href="https://github.com/M3PH1ST023">Link</a>
                </div>
            </div>
            <div className="contact-logo">
                <img src={linkedIn} alt="mail" />
            </div>
            <div className="contact">
                <div className="contact-type">LinkedIn&nbsp;:&nbsp;</div>
                <div className="contact-info">
                    <a href="https://www.linkedin.com/in/athidya-udayakumar-103506213/">
                        Link
                    </a>
                </div>
            </div>
            <div className="contact-logo">
                <img src={discord} alt="mail" />
            </div>
            <div className="contact">
                <div className="contact-type">Discord&nbsp;:&nbsp;</div>
                <div className="contact-info">
                    <a href="/contact">0xMeph1sto#5740</a>
                </div>
            </div>
        </div>
    );
};
export default Contact;
