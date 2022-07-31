import React from "react";
import Photo from "../../../assets/me.png";
import "../styleDark/homeDark.css";

const HomeRuDark = () => {
  return (
    <section id="home" className="homedark">
      <div className="container">
        <div className="homedark__row">
          <div className="homedark__card">
            <h1 className="homedark__title">
              Куланбеков <br /> Тилек
            </h1>
          </div>
          <div className="homedark__card">
            <h2 className="homedark__subtitle">
              Frontend разработчик
              <br /> 20 лет <br /> Кыргызстан, Бишкек
            </h2>
          </div>
        </div>
        <img className="homedark__img" src={Photo} alt="Max" />
      </div>
    </section>
  );
};

export default HomeRuDark;
