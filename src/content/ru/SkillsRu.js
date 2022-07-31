import React from 'react';
import '../style/skills.css';
import ReduxPhoto from '../../assets/redux.png';
import JavaScriptPhoto from '../../assets/js.png';
import ReactPhoto from '../../assets/react.png';
import HtmlPhoto from '../../assets/html.png';
import BootstrapPhoto from '../../assets/Bootstrap.png';
import CssPhoto from '../../assets/css.png';


const SkillsRu = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="skills__title">Навыки</h2>
                <div className="skills__row">
                    <div className="skills__card">
                        <img className="skills__img" src={ReduxPhoto} alt="Redux"/>
                        <p className="skills__subtitle">Redux</p>
                    </div>
                    <div className="skills__card">
                        <img className="skills__img" src={JavaScriptPhoto} alt="JavaScript"/>
                        <p className="skills__subtitle">JavaScript</p>
                    </div>
                    <div className="skills__card">
                        <img className="skills__img react" src={ReactPhoto} alt="React"/>
                        <p className="skills__subtitle">React</p>
                    </div>
                    <div className="skills__card">
                        <img className="skills__img" src={HtmlPhoto} alt="HTML"/>
                        <p className="skills__subtitle">HTML</p>
                    </div>
                    <div className="skills__card bootstrap">
                        <img className="skills__img" src={BootstrapPhoto} alt="Bootstrap"/>
                        <p className="skills__subtitle">Bootstrap</p>
                    </div>
                    <div className="skills__card">
                        <img className="skills__img" src={CssPhoto} alt="CSS"/>
                        <p className="skills__subtitle">CSS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsRu;