import React from "react";

import SettingsOverlay from "./settings/SettingsOverlay";
import Display from "./display/Display";

const MainContainer = () => {
    return (
        <>
            <SettingsOverlay />
            <Display />
        </>
    );
};

export default MainContainer;
