import React from "react";
import "../styleDark/aboutDark.css";

const AboutRuDark = () => {
  return (
    <section id="about" className="aboutdark">
      <div className="container">
        <h2 className="aboutdark__title">Обо мне</h2>
        <div className="aboutdark__row">
          <p className="aboutdark__subtitle">
            Привет, я Тилек - Frontend разработчик. Меня интересует веб
            разработка и все что связано с этим.{" "}
          </p>
          <p className="aboutdark__subtitle">
            Я учусь в международном университете Ала-Тоо. В университете я
            обучаюсь на факультете програмирования. До университета я выучил веб
            разработку, а именно:{" "}
            <span className="italic__dark">JavaScript / React</span>.
          </p>
          <p className="aboutdark__subtitle">
            Готов реализовывать крутые проекты :))
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutRuDark;
