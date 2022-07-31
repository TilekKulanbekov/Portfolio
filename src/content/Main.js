import React from 'react';
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Header from "../header/Header";

const Main = () => {
    return (
        <>
            <div className="eng">
                <Header/>
                <Home/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </div>
        </>
    );
};

export default Main;