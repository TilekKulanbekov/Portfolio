import React from 'react';
import '../styleDark/portfolioDark.css';
import Todo from '../../../assets/todo.png';
import Travel from '../../../assets/travel.png';
import Weather from '../../../assets/weather.png';
import Mealdb from '../../../assets/mealdb.png';
import Romsem from '../../../assets/romsem.png';
import Crypto from "../../../assets/Crypto.png";
import Orion from "../../../assets/orion.png";
import Education from '../../../assets/education.png';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfoliodark">
            <div className="container">
                <h2 className="portfoliodark__title">Portfolio</h2>
                <div className="portfoliodark__card">
                    <a target="_blank" href="https://negeniy228.github.io/Travel/">
                        <img className="portfoliodark__img" src={Travel} alt="Travel"/>
                    </a>
                    <a target="_blank" className="portfoliodark__link" href="https://negeniy228.github.io/Travel/">Travel
                        - Homepage</a>
                </div>
                <div className="portfoliodark__card">
                    <a target="_blank" href="https://education-js.herokuapp.com">
                        <img className="portfoliodark__img" src={Education} alt="Education"/>
                    </a>
                    <a className="portfoliodark__link" target="_blank" href="https://education-js.herokuapp.com">Online
                        Frontend courses - Platform</a>
                </div>
                <div className="portfoliodark__card">
                    <a target="_blank" href="https://weather-iota-one.vercel.app/">
                        <img className="portfoliodark__img" src={Weather} alt="Weather"/>
                    </a>
                    <a target="_blank" className="portfoliodark__link" href="https://weather-iota-one.vercel.app/">Online
                        weather forecast - Homepage</a>
                </div>
                <div className="portfoliodark__card">
                    <a target="_blank" href="https://appcrypto.vercel.app/">
                        <img className="portfoliodark__img" src={Crypto} alt="Crypto"/>
                    </a>
                    <a target="_blank" className="portfoliodark__link" href="https://appcrypto.vercel.app/">Cryptocurrency
                        - Lymcoin</a>
                </div>
                <div className="portfolioDark__card">
                    <a target="_blank" href="https://orion-ebon.vercel.app/">
                        <img className="portfoliodark__img" src={Orion} alt="OrionTrans"/>
                    </a>
                    <a target="_blank" className="portfoliodark__link" href="https://orion-ebon.vercel.app/">Logistic
                        company - Orion Trans</a>
                </div>
                <div className="portfoliodark__card">
                    <a target="_blank" href="http://mealdb-iota.vercel.app">
                        <img className="portfoliodark__img" src={Mealdb} alt="Mealdb"/>
                    </a>
                    <a target="_blank" className="portfoliodark__link" href="http://mealdb-iota.vercel.app">Online
                        restaurant - Homepage</a>
                </div>
                <div className="portfoliodark__card">
                    <a target="_blank" href="http://todo-chi-two.vercel.app">
                        <img className="portfoliodark__img" src={Todo} alt="TodoList"/>
                    </a>
                    <a target="_blank" className="portfoliodark__link" href="http://todo-chi-two.vercel.app">TodoList
                        browser application - Homepage</a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;