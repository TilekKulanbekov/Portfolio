import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header id="header" className="header">
           <div className="container">
               <ul className="header__menu">
                   <li className="header__list">
                       <a href="#home" className="header__link">Home</a>
                   </li>
                   <li className="header__list">
                       <a href="#about" className="header__link">About me</a>
                   </li>
                   <li className="header__list">
                       <a href="#skills" className="header__link">Skills</a>
                   </li>
                   <li className="header__list">
                       <a href="#portfolio" className="header__link">Portfolio</a>
                   </li>
                   <li className="header__list">
                       <a href="#contact" className="header__link">Contacts</a>
                   </li>
               </ul>
           </div>
        </header>
    );
};

export default Header;