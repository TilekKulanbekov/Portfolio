import React from "react";
import "../styleDark/portfolioDark.css";
import Todo from "../../../assets/todo.png";
import Travel from "../../../assets/travel.png";
import Weather from "../../../assets/weather.png";
import Kd from "../../../assets/kd.png";
import Coffee from "../../../assets/coffee.png";
import Logic from "../../../assets/Logic.png";

const PortfolioRu = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="portfolio__title">Portfolio</h2>
        <div className="portfolio__card">
          <a
            target="_blank"
            href="https://tilekkulanbekov.github.io/travel-agency/"
          >
            <img className="portfolio__img" src={Travel} alt="Travel" />
          </a>
          <a
            target="_blank"
            className="portfolio__link"
            href="https://tilekkulanbekov.github.io/travel-agency/"
          >
            Путешествие - Главная страница
          </a>
        </div>
        <div className="portfolio__card">
          <a target="_blank" href=" https://leafy-kataifi-ca89b3.netlify.app/">
            <img className="portfolio__img" src={Weather} alt="weather" />
          </a>
          <a
            target="_blank"
            className="portfolio__link"
            href=" https://leafy-kataifi-ca89b3.netlify.app/"
          >
            Онлайн прогноз погоды - Главная страница
          </a>
        </div>
        <div className="portfolio__card">
          <a
            target="_blank"
            href=" https://tilekkulanbekov.github.io/CoffeeStyle/"
          >
            <img className="portfolio__img" src={Coffee} alt="coffee" />
          </a>
          <a
            target="_blank"
            className="portfolio__link"
            href=" https://tilekkulanbekov.github.io/CoffeeStyle/"
          >
            Онлайн кофе маркет - Главная страница
          </a>
        </div>
        <div className="portfolio__card">
          <a target="_blank" href=" http://todo-chi-two.vercel.app">
            <img className="portfolio__img" src={Todo} alt="TodoList" />
          </a>
          <a
            target="_blank"
            className="portfolio__link"
            href=" http://todo-chi-two.vercel.app"
          >
            Список дел - Главная страница
          </a>
        </div>
        <div className="portfolio__card">
          <a
            target="_blank"
            href=" https://tilekkulanbekov.github.io/Kd-adaptive/"
          >
            <img className="portfolio__img" src={Kd} alt="Kd" />
          </a>
          <a
            target="_blank"
            className="portfolio__link"
            href=" https://tilekkulanbekov.github.io/Kd-adaptive/"
          >
            Онлайн магазин запчастей - Главная страница
          </a>
        </div>
        <div className="portfolio__card">
          <a
            target="_blank"
            href=" https://tilekkulanbekov.github.io/LogicGates/"
          >
            <img className="portfolio__img" src={Logic} alt="Logic" />
          </a>
          <a
            target="_blank"
            className="portfolio__link"
            href=" https://tilekkulanbekov.github.io/LogicGates/"
          >
            Контструктор Logic gates - Главная страница
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioRu;
