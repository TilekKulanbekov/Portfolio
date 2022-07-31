import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Main from "./content/Main";
import MainRu from "./content/ru/MainRu";
import MainEngDark from "./content/dark/engDark/MainEngDark";
import MainRuDark from "./content/dark/ruDark/MainRuDark";
const SetMode = () => {

    const [mode, setMode] = useState('light');
    const [language, setLanguage] = useState('eng');
    const main = `${language}${mode}`;

    const [burger, setBurger] = useState(false);

    const burgerHandler = () => {
        return setBurger(!burger)
    };

    const lightHandler = () => {
        return setMode(`light`)
    };

    const darkHandler = () => {
        return setMode(`dark`)
    };

    const engHandler = () => {
        return setLanguage(`eng`)
    };

    const ruHandler = () => {
        return setLanguage(`ru`)
    };
    return (
        <>
            <button onClick={() => burgerHandler()} className={`${mode === 'light' ? 'burger__btn' : 'burger__btn-dark'}`}>
                {burger === false
                    ? <FontAwesomeIcon icon={faBars} />
                    : <FontAwesomeIcon icon={faTimes}/>
                }
            </button>
            {language === 'eng'
                ? <div style={{display: `${burger === false ? 'none' : 'flex'}`}} className={`${mode === 'light' ? 'burger' : 'burger-dark'}`}>
                    <h2 className={`${mode === 'light' ? 'burger__title' : 'burger__title-dark'}`}>Max Abdurasulov</h2>
                    <ul className={`${mode === 'light' ? 'burger__menu' : 'burger__menu-dark'}`}>
                        <li className="burger__menu_item">
                            <a onClick={() => burgerHandler()} className={`${mode === 'light' ? 'burger__menu_link' : 'burger__menu_link-dark'}`} href="#home">Home</a>
                        </li>
                        <li className="burger__menu_item">
                            <a onClick={() => burgerHandler()} className={`${mode === 'light' ? 'burger__menu_link' : 'burger__menu_link-dark'}`} href="#home">About me</a>
                        </li>
                        <li className="burger__menu_item">
                            <a onClick={() => burgerHandler()} className={`${mode === 'light' ? 'burger__menu_link' : 'burger__menu_link-dark'}`} href="#home">Skills</a>
                        </li>
                        <li className="burger__menu_item">
                            <a onClick={() => burgerHandler()} className={`${mode === 'light' ? 'burger__menu_link' : 'burger__menu_link-dark'}`} href="#home">Portfolio</a>
                        </li>
                        <li className="burger__menu_item">
                            <a onClick={() => burgerHandler()} className={`${mode === 'light' ? 'burger__menu_link' : 'burger__menu_link-dark'}`} href="#home">Contacts</a>
                        </li>
                    </ul>
                    <div style={{background: `${mode === 'dark' ? '#524c6e' : 'none'}`}} className="burger__language_btns">
                        <button style={{color: `${language === 'eng' ? '#000000' : '#828282'}`}} onClick={() => engHandler()} className="btn">ENG</button>
                        <span className="line">|</span>
                        <button style={{color: `${language === 'eng' ? '#828282' : '#000000'}`}} onClick={() => ruHandler()} className="btn">RU</button>
                    </div>
                    <div style={{background: `${mode === 'dark' ? '#524c6e' : 'none'}`}} className="burger__mode_btns">
                        <button style={{color: `${mode === 'light' ? '#000000' : '#828282'}`}} onClick={() => lightHandler()} className="btn">LIGHT</button>
                        <span className="line">|</span>
                        <button style={{color: `${mode === 'light' ? '#828282' : '#000000'}`}} onClick={() => darkHandler()} className="btn">DARK</button>
                    </div>
                </div>
                : <div style={{display: `${burger === false ? 'none' : 'flex'}`}} className={`${mode === 'light' ? 'burger' : 'burger-dark'}`}>
                    <h2 className={`${mode === 'light' ? 'burger__title' : 'burger__title-dark'}`}>Максат Абдурасулов</h2>
                    <ul className={`${mode === 'light' ? 'burger__menu' : 'burger__menu-dark'}`}>
                        <li className="burger__menu_item">
                            <a onClick={() => burgerHandler()} className={`${mode === 'light' ? 'burger__menu_link' : 'burger__menu_link-dark'}`} href="#home">Главная</a>
                        </li>
                        <li className="burger__menu_item">
                            <a onClick={() => burgerHandler()} className={`${mode === 'light' ? 'burger__menu_link' : 'burger__menu_link-dark'}`} href="#home">Обо мне</a>
                        </li>
                        <li className="burger__menu_item">
                            <a onClick={() => burgerHandler()} className={`${mode === 'light' ? 'burger__menu_link' : 'burger__menu_link-dark'}`} href="#home">Навыки</a>
                        </li>
                        <li className="burger__menu_item">
                            <a onClick={() => burgerHandler()} className={`${mode === 'light' ? 'burger__menu_link' : 'burger__menu_link-dark'}`} href="#home">Портфолио</a>
                        </li>
                        <li className="burger__menu_item">
                            <a onClick={() => burgerHandler()} className={`${mode === 'light' ? 'burger__menu_link' : 'burger__menu_link-dark'}`} href="#home">Контакты</a>
                        </li>
                    </ul>
                    <div style={{background: `${mode === 'dark' ? '#524c6e' : 'none'}`}} className="burger__language_btns">
                        <button style={{color: `${language === 'eng' ? '#000000' : '#828282'}`}} onClick={() => engHandler()} className="btn">ENG</button>
                        <span className="line">|</span>
                        <button style={{color: `${language === 'eng' ? '#828282' : '#000000'}`}} onClick={() => ruHandler()} className="btn">RU</button>
                    </div>
                    <div style={{background: `${mode === 'dark' ? '#524c6e' : 'none'}`}} className="burger__mode_btns">
                        <button style={{color: `${mode === 'light' ? '#000000' : '#828282'}`}} onClick={() => lightHandler()} className="btn">LIGHT</button>
                        <span className="line">|</span>
                        <button style={{color: `${mode === 'light' ? '#828282' : '#000000'}`}} onClick={() => darkHandler()} className="btn">DARK</button>
                    </div>
                </div>

            }
            <div style={{background: `${mode === 'dark' ? '#524c6e' : 'none'}`}} className="language__btns">
                <button style={{color: `${language === 'eng' ? '#000000' : '#828282'}`}} onClick={() => engHandler()} className="btn" id="eng">ENG</button>
                <span className="line">|</span>
                <button style={{color: `${language === 'eng' ? '#828282' : '#000000'}`}} onClick={() => ruHandler()} className="btn" id='ru'>RU</button>
            </div>
            <div style={{background: `${mode === 'dark' ? '#524c6e' : 'none'}`}} className="mode__btns">
                <button style={{color: `${mode === 'light' ? '#000000' : '#828282'}`}} onClick={() => lightHandler()} className="btn" id="light">LIGHT</button>
                <span className="line">|</span>
                <button style={{color: `${mode === 'light' ? '#828282' : '#000000'}`}} onClick={() => darkHandler()} className="btn" id='dark'>DARK</button>
            </div>
            <a href="#header" className={`${mode === 'light' ? 'btn_up' : 'btn_up-dark'}`}>
                <FontAwesomeIcon className={`${mode === 'light' ? 'btn_up__icon' : 'btn_up__icon-dark'}`} icon={faChevronUp} />
            </a>
            <div style={{display: `${burger === true ? 'none' : 'block'}`}}>
                { main === 'englight'
                    ? <Main/>
                    : main === 'rulight'
                        ? <MainRu/>
                        : main === 'engdark'
                            ? <MainEngDark/>
                            : main === 'rudark'
                                ? <MainRuDark/>
                                : ''
                }
            </div>
        </>
    );
};

export default SetMode;