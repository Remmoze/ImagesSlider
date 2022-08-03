import React, { useState } from "react";

import { Checkbox } from "@mui/material";

import { AnimatedSettingsOverlay } from "./menu/SettingsOverlay";
import Display from "./display/canvas/Display";

const MainContainer = () => {
    const [checked, setCheck] = useState(true);
    return (
        <div>
            <Checkbox
                sx={{
                    position: "absolute",
                    bottom: 7,
                    left: 7,
                }}
                checked={checked}
                onChange={({ target }) => setCheck(target.checked)}
            />
            <AnimatedSettingsOverlay active={checked} />
            <Display />
        </div>
    );
};

export default MainContainer;
