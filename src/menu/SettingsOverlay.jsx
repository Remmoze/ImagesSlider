import React from "react";
import { Box, Slide } from "@mui/material";

import SettingsContainer from "./SettingsContainer";

const SettingsOverlay = () => {
    return (
        <Box
            sx={{
                position: "absolute",
                top: 7,
                left: 7,
                width: "100%",
                maxWidth: 350,
                backgroundColor: "#101020a0",
                borderRadius: 3,
            }}
        >
            <SettingsContainer />
        </Box>
    );
};

const SettingsRef = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} {...props}>
            <SettingsOverlay />
        </div>
    );
});

const AnimatedSettingsOverlay = ({ active }) => {
    return (
        <Slide
            timeout={{ enter: 3e2, exit: 1e3 }}
            easing={{ enter: "cubic-bezier(0, 0.5, 1, 1)" }}
            direction="right"
            in={active}
            appear={false}
            mountOnEnter
            unmountOnExit
        >
            <SettingsRef />
        </Slide>
    );
};

export { AnimatedSettingsOverlay };
export default SettingsOverlay;
