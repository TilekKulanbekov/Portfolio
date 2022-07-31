import React from 'react';
import '../styleDark/headerDark.css'

const HeaderEngDark = () => {
    return (
        <header id="header" className="headerdark">
           <div className="container">
               <ul className="headerdark__menu">
                   <li className="headerdark__list">
                       <a href="#home" className="headerdark__link">Home</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="#about" className="headerdark__link">About me</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="#skills" className="headerdark__link">Skills</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="#portfolio" className="headerdark__link">Portfolio</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="#contact" className="headerdark__link">Contacts</a>
                   </li>
               </ul>
           </div>
        </header>
    );
};

export default HeaderEngDark;