import React from "react";
import "./style/about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about__title">About me</h2>
        <div className="about__row">
          <p className="about__subtitle">
            Hi, I'm Tilek – Frontend web developer from Bishkek. <br /> I'm
            interested in web development and everything connected with it.
          </p>
          <p className="about__subtitle">
            I'm studying at Ala-Too International University. <br /> now I'm
            learning from everything little by little in the world of technology
            in particular programming
            <br /> Before i learned Frontend web development:{" "}
            <span className="italic">JavaScript / React</span>.
          </p>
          <p className="about__subtitle">
            Ready to implement cool projects <br /> with wonderful people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
