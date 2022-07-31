import React, { useState } from "react";
import "../style/contact.css";
import Linkedin from "../../../src/assets/linkedin.png";
import Telegram from "../../../src/assets/telegram.png";
import Gmail from "../../../src/assets/gmail.png";
import Whatsapp from "../../../src/assets/whatsapp.png";

const ContactRu = () => {
  const [state, setState] = useState(true);
  const stateHandler = () => {
    return setState(!state);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1 className="contact__title">Контакты</h1>
        <p className="contact__subtitle">
          Хотите узнать больше?
          <br />
          Пишите!
        </p>
        <a
          target="_blank"
          className="contact__btn"
          href="https://t.me/Kulanbekov519"
        >
          Отправить сообщение
        </a>
        <div className="contact__icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tilek-%D0%BA%D1%83%D0%BB%D0%B0%D0%BD%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-04a415236/"
          >
            <img className="contact__img" src={Linkedin} alt="Linkedin" />
          </a>
          <a target="_blank" href="https://t.me/Kulanbekov519">
            <img className="contact__img" src={Telegram} alt="Telegram" />
          </a>
          <a target="_blank" href="https://wa.me/996500323732">
            <img className="contact__img" src={Whatsapp} alt="Whatsapp" />
          </a>
          <div className="contact__img-gmail">
            {state ? (
              <img
                onClick={() => stateHandler()}
                style={{ display: `${state ? "block" : "none"}` }}
                className="contact__img"
                src={Gmail}
                alt="Gmail"
              />
            ) : (
              <p className="contact__img gmail" onClick={() => stateHandler()}>
                Kulanbekov519@gmail.com
              </p>
            )}
          </div>
        </div>
        <div className="contact__chat">
          Пишите мне в
          <br />
          <a
            className="contact__chat"
            target="_blank"
            href="https://t.me/Kulanbekov519"
          >
            {" "}
            Telegram
          </a>
          ,
          <a
            className="contact__chat"
            target="_blank"
            href="https://www.linkedin.com/in/tilek-%D0%BA%D1%83%D0%BB%D0%B0%D0%BD%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-04a415236/"
          >
            {" "}
            LinkedIn
          </a>
          ,
          <a
            className="contact__chat"
            target="_blank"
            href="https://wa.me/996500323732"
          >
            {" "}
            Whatsapp
          </a>
          , Gmail.
        </div>
      </div>
    </section>
  );
};

export default ContactRu;
