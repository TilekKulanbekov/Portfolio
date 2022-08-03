import React from "react";
import "./style/portfolio.css";
import Todo from "../assets/todo.png";
import Crypto from "../assets/Crypto.png";
import Travel from "../assets/travel.png";
import Weather from "../assets/weather.png";
import Kd from "../assets/kd.png";
import Coffee from "../assets/coffee.png";
import Logic from "../assets/Logic.png";

const Portfolio = () => {
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
            Travel - Homepage
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
            Online weather forecast - Homepage
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
            Online Coffee market - Homepage
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
            TodoList browser application - Homepage
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
            Online market place - Homepage
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
            Builder to LogicGates - Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
