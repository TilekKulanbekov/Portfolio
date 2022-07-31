import React from 'react';
import '../styleDark/skillsDark.css';
import ReduxPhoto from '../../../assets/redux.png';
import JavaScriptPhoto from '../../../assets/js.png';
import ReactPhoto from '../../../assets/react.png';
import HtmlPhoto from '../../../assets/html.png';
import BootstrapPhoto from '../../../assets/Bootstrap.png';
import CssPhoto from '../../../assets/css.png';


const Skills = () => {
    return (
        <section id="skills" className="skillsdark">
            <div className="container">
                <h2 className="skillsdark__title">Skills</h2>
                <div className="skillsdark__row">
                    <div className="skillsdark__card">
                        <img className="skillsdark__img" src={ReduxPhoto} alt="Redux"/>
                        <p className="skillsdark__subtitle">Redux</p>
                    </div>
                    <div className="skillsdark__card">
                        <img className="skillsdark__img" src={JavaScriptPhoto} alt="JavaScript"/>
                        <p className="skillsdark__subtitle">JavaScript</p>
                    </div>
                    <div className="skillsdark__card">
                        <img className="skillsdark__img react__dark" src={ReactPhoto} alt="React"/>
                        <p className="skillsdark__subtitle">React</p>
                    </div>
                    <div className="skillsdark__card">
                        <img className="skillsdark__img" src={HtmlPhoto} alt="HTML"/>
                        <p className="skillsdark__subtitle">HTML</p>
                    </div>
                    <div className="skillsdark__card bootstrap__dark">
                        <img className="skillsdark__img" src={BootstrapPhoto} alt="Bootstrap"/>
                        <p className="skillsdark__subtitle">Bootstrap</p>
                    </div>
                    <div className="skillsdark__card">
                        <img className="skillsdark__img" src={CssPhoto} alt="CSS"/>
                        <p className="skillsdark__subtitle">CSS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;