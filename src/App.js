import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/portfolio" Component={Home} />
                    <Route path="/about" Component={About} />
                    <Route path="/skills" Component={Skills} />
                    <Route path="/portfolios" Component={Portfolio} />
                    <Route path="/contact" Component={Contact} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
