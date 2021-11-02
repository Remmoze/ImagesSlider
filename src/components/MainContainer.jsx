import React from "react";
import { styled } from "@mui/system";

import Display from "./display/Display";
import SettingsContainer from "./settings/SettingsContainer";

const SettingsContainerOverlay = styled(SettingsContainer)({ position: "absolute" });

const MainContainer = () => {
    return (
        <React.Fragment>
            <SettingsContainerOverlay />
            <Display />
        </React.Fragment>
    );
};

export default MainContainer;
