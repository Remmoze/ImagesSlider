import React from "react";

import Display from "./display/Display";
import SettingsContainer from "./settings/SettingsContainer";

const MainContainer = () => {
    return (
        <React.Fragment>
            <SettingsContainer />
            <Display />
        </React.Fragment>
    );
};

export default MainContainer;
