import React from "react";
import "../styleDark/aboutDark.css";

const AboutEngDark = () => {
  return (
    <section id="about" className="aboutdark">
      <div className="container">
        <h2 className="aboutdark__title">About me</h2>
        <div className="aboutdark__row">
          <p className="aboutdark__subtitle">
            Hi, I'm Tilek – Frontend web developer from Bishkek. <br /> I'm
            interested in web development and everything connected with it.
          </p>
          <p className="aboutdark__subtitle">
            I'm studying at Ala-Too International University. <br /> now I'm
            learning from everything little by little in the world of technology
            in particular programming
            <br /> Before i learned Frontend web development:{" "}
            <span className="italic">JavaScript / React</span>.
          </p>
          <p className="aboutdark__subtitle">
            Ready to implement cool projects <br /> with wonderful people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutEngDark;
