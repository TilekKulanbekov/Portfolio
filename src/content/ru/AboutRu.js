import React from "react";
import "../style/about.css";

const AboutRu = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about__title">Обо мне</h2>
        <div className="about__row">
          <p className="about__subtitle">
            Привет, я Тилек - Frontend разработчик. Меня интересует веб
            разработка и все что связано с этим.
          </p>
          <p className="about__subtitle">
            Я учусь в международном университете Ала-Тоо. В университете я
            обучаюсь на факультете програмирования. До университета я выучил веб
            разработку, а именно:{" "}
            <span className="italic">JavaScript / React</span>.
          </p>
          <p className="about__subtitle">
            Готов реализовывать крутые проекты :))
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutRu;
