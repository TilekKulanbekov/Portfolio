import React from "react";
import Photo from "../../../assets/me.png";
import "../styleDark/homeDark.css";

const Home = () => {
  return (
    <section id="home" className="homedark">
      <div className="container">
        <div className="homedark__row">
          <div className="homedark__card">
            <h1 className="homedark__title">
              Kulanbekov <br /> Tilek
            </h1>
          </div>
          <div className="homedark__card">
            <h2 className="homedark__subtitle">
              Frontend web developer <br /> 20 years old <br /> Kyrgyzstan,
              Bishkek
            </h2>
          </div>
        </div>
        <img className="homedark__img" src={Photo} alt="Max" />
      </div>
    </section>
  );
};

export default Home;
