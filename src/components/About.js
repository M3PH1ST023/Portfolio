import React from "react";
import "../css/pages.css";

const About = () => {
    return (
        <div className="about-content">
            <h2>
                About <span>Me</span>
            </h2>
            <h4>
                Full Stack <span>Development</span>
            </h4>
            <p>
                Python and Java full stack development with html, css and react
                libraries as front end,
                <br /> Rest services for the data transfer across the backend
                and client side,
                <br /> Mongo Database services for storage purpose and managing
                of details across the application.
            </p>
            <h4>
                Cyber <span>Security</span>
            </h4>
            <p>
                Worked on concepts involving networking and basic Operating
                system related concepts,
                <br />
                Participated in some <span>Capture the flag</span> events and{" "}
                <br />
                practically worked on concepts involving digital forensics,
                penetration testing and ethical hacking
            </p>
            <h4>
                Software <span>Testing</span>
            </h4>
            <p>
                Hands on experience with unit testing using tools like
                <br />
                <span>Insomnia, Postman and Burp Suite </span>
                <br />
                and worked on automation testing using stack incolving languages
                like <span>C# and python.</span>
            </p>
            <a href="/skills" className="btn-box">
                More About Me
            </a>
        </div>
    );
};
export default About;
