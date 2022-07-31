import React from 'react';
import HeaderEngDark from "./HeaderEngDark";
import HomeEngDark from './HomeEngDark';
import SkillsEngDark from './SkillsEngDark';
import PortfolioEngDark from './PortfolioEngDark';
import AboutEngDark from "./AboutEngDark";
import ContactEngDark from "./ContactEngDark";

const Main = () => {
    return (
        <>
            <div className="engdark">
                <HeaderEngDark/>
                <HomeEngDark/>
                <AboutEngDark/>
                <SkillsEngDark/>
                <PortfolioEngDark/>
                <ContactEngDark/>
            </div>
        </>
    );
};

export default Main;