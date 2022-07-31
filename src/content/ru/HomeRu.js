import React from "react";
import Photo from "../../assets/me.png";
import "../style/home.css";

const HomeRu = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home__row">
          <div className="home__card">
            <h1 className="home__title">
              Куланбеков <br /> Тилек
            </h1>
          </div>
          <div className="home__card">
            <h2 className="home__subtitle">
              Frontend разработчик
              <br /> 20 лет <br /> Кыргызстан, Бишкек
            </h2>
          </div>
        </div>
        <img className="home__img" src={Photo} alt="#" />
      </div>
    </section>
  );
};

export default HomeRu;
