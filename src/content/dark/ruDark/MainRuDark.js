import React from 'react';
import HomeRuDark from "./HomeRuDark";
import AboutRuDark from "./AboutRuDark";
import SkillsRuDark from "./SkillsRuDark";
import PortfolioRuDark from "./PortfolioRuDark";
import ContactRuDark from "./ContactRuDark";
import HeaderRuDark from "./HeaderRuDark";
import '../styleDark/mainDark.css';

const MainRuDark = () => {
    return (
        <>
            <div className="rudark">
                <HeaderRuDark/>
                <HomeRuDark/>
                <AboutRuDark/>
                <SkillsRuDark/>
                <PortfolioRuDark/>
                <ContactRuDark/>
            </div>
        </>
    );
};

export default MainRuDark;