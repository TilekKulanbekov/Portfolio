import React from 'react';
import HomeRu from "./HomeRu";
import AboutRu from "./AboutRu";
import SkillsRu from "./SkillsRu";
import PortfolioRu from "./PortfolioRu";
import ContactRu from "./ContactRu";
import HeaderRu from "./HeaderRu";

const MainRu = () => {
    return (
        <>
            <div className="ru">
                <HeaderRu/>
                <HomeRu/>
                <AboutRu/>
                <SkillsRu/>
                <PortfolioRu/>
                <ContactRu/>
            </div>
        </>
    );
};

export default MainRu;