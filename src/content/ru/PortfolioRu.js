import React from 'react';
import '../style/portfolio.css'
import Todo from '../../assets/todo.png';
import Travel from '../../assets/travel.png';
import Weather from '../../assets/weather.png';
import Orion from '../../assets/orion.png';
import Mealdb from '../../assets/mealdb.png';
import Crypto from "../../assets/Crypto.png";
import Education from '../../assets/education.png';

const PortfolioRu = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <h2 className="portfolio__title">Портфолио</h2>
                <div className="portfolio__card">
                    <a target="_blank" href="https://negeniy228.github.io/Travel/">
                        <img className="portfolio__img" src={Travel} alt="Travel"/>
                    </a>
                    <a className="portfolio__link" href="#">Travel - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <a target="_blank" href="https://education-js.herokuapp.com">
                        <img className="portfolio__img" src={Education} alt="Education"/>
                    </a>
                    <a className="portfolio__link"  target="_blank" href="https://education-js.herokuapp.com">Платформа для онлайн обучения</a>
                </div>
                <div className="portfolio__card">
                    <a target="_blank" href="https://weather-iota-one.vercel.app/">
                        <img className="portfolio__img" src={Weather} alt="Weather"/>
                    </a>
                    <a className="portfolio__link" href="#">Прогноз погоды - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <a target="_blank" href="https://appcrypto.vercel.app/">
                        <img className="portfolio__img" src={Crypto} alt="Crypto"/>
                    </a>
                    <a target="_blank" className="portfolio__link" href="https://appcrypto.vercel.app/">Криптовалюта - Lymcoin</a>
                </div>
                <div className="portfolio__card">
                    <a target="_blank" href="https://orion-ebon.vercel.app/">
                        <img className="portfolio__img" src={Orion} alt="Orion Trans"/>
                    </a>
                    <a target="_blank" className="portfolio__link" href="https://orion-ebon.vercel.app/">Сайт для логистической компании - Орион Транс</a>
                </div>
                <div className="portfolio__card">
                    <a target="_blank" href="http://mealdb-iota.vercel.app">
                        <img className="portfolio__img" src={Mealdb} alt="Mealdb"/>
                    </a>
                    <a className="portfolio__link" href="#">Меню для ресторана - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <a target="_blank" href="http://todo-chi-two.vercel.app">
                        <img className="portfolio__img" src={Todo} alt="TodoList"/>
                    </a>
                    <a className="portfolio__link" href="#">Веб приложение для планирования задач - Homepage</a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioRu;