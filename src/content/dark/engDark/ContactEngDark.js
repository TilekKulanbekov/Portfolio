import React, { useState } from "react";
import "../styleDark/contactDark.css";
import Linkedin from "../../../../src/assets/linkedin.png";
import Telegram from "../../../../src/assets/telegram.png";
import Gmail from "../../../../src/assets/gmail.png";
import Whatsapp from "../../../../src/assets/whatsapp.png";

const ContactEngDark = () => {
  const [state, setState] = useState(true);
  const stateHandler = () => {
    return setState(!state);
  };

  return (
    <section id="contact" className="contactdark">
      <div className="container">
        <h1 className="contactdark__title">Contacts</h1>
        <p className="contactdark__subtitle">
          Want to know more or just chat? <br />
          You are welcome!
        </p>
        <a
          target="_blank "
          className="contactdark__btn"
          href="https://t.me/Kulanbekov519"
        >
          Send message
        </a>
        <div className="contactdark__icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tilek-%D0%BA%D1%83%D0%BB%D0%B0%D0%BD%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-04a415236/"
          >
            <img className="contactdark__img" src={Linkedin} alt="Linkedin" />
          </a>
          <a target="_blank" href="https://t.me/Kulanbekov519">
            <img className="contactdark__img" src={Telegram} alt="Telegram" />
          </a>
          <a target="_blank" href="https://wa.me/996500323732">
            <img className="contactdark__img" src={Whatsapp} alt="Whatsapp" />
          </a>
          <div className="contactdark__img-gmail">
            {state ? (
              <img
                onClick={() => stateHandler()}
                style={{ display: `${state ? "block" : "none"}` }}
                className="contactdark__img"
                src={Gmail}
                alt="Gmail"
              />
            ) : (
              <p
                className="contactdark__img gmail__dark"
                onClick={() => stateHandler()}
              >
                Kulanbekov519@gmail.com
              </p>
            )}
          </div>
        </div>
        <div className="contactdark__chat">
          Write me on
          <br />
          <a
            className="contactdark__chat"
            target="_blank"
            href="https://t.me/Kulanbekov519"
          >
            {" "}
            Telegram
          </a>
          ,
          <a
            className="contactdark__chat"
            target="_blank"
            href="https://www.linkedin.com/in/tilek-%D0%BA%D1%83%D0%BB%D0%B0%D0%BD%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-04a415236/"
          >
            {" "}
            LinkedIn
          </a>
          ,
          <a
            className="contactdark__chat"
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

export default ContactEngDark;
