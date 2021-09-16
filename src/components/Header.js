import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Dofus</h1>
                <Typed
                    className="Typed-text"
                    strings={["Tournaments", "Meet a team", "Events", "Sponsors"]}
                    typeSpeed={30}
                    backSpeed={50}
                    loop
                />
                <a href="#action1" className="btn-main-offer">contact me</a>
            </div>            
        </div>
    )
}

export default Header;
