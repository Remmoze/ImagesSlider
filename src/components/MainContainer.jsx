import React from "react";

import SettingsOverlay from "./settings/SettingsOverlay";
import Display from "./display/Display";
import { styled } from "@mui/system";

const StyledDisplay = styled(Display)({
    cursor: "none",
    visibility: "hidden",
});

const MainContainer = () => {
    return (
        <div>
            <SettingsOverlay />
            <StyledDisplay />
        </div>
    );
};

export default MainContainer;
