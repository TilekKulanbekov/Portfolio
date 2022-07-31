import React from 'react';
import '../styleDark/headerDark.css';

const HeaderRuDark = () => {
    return (
        <header id="header" className="headerdark">
           <div className="container">
               <ul className="headerdark__menu">
                   <li className="headerdark__list">
                       <a href="#home" className="headerdark__link">Главная</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="#about" className="headerdark__link">Обо мне</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="#skills" className="headerdark__link">Навыки</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="#portfolio" className="headerdark__link">Портфолио</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="#contact" className="headerdark__link">Контакты</a>
                   </li>
               </ul>
           </div>
        </header>
    );
};

export default HeaderRuDark;