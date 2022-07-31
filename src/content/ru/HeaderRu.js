import React from 'react';
import '../../header/Header.css';

const HeaderRu = () => {
    return (
        <header id="header" className="header">
           <div className="container">
               <ul className="header__menu">
                   <li className="header__list">
                       <a href="#home" className="header__link">Главная</a>
                   </li>
                   <li className="header__list">
                       <a href="#about" className="header__link">Обо мне</a>
                   </li>
                   <li className="header__list">
                       <a href="#skills" className="header__link">Навыки</a>
                   </li>
                   <li className="header__list">
                       <a href="#portfolio" className="header__link">Портфолио</a>
                   </li>
                   <li className="header__list">
                       <a href="#contact" className="header__link">Контакты</a>
                   </li>
               </ul>
           </div>
        </header>
    );
};

export default HeaderRu;