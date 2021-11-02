import React from "react";
import { Box } from "@mui/material";
import SettingsContainer from "./SettingsContainer";

const SettingsOverlay = () => {
    return (
        <Box
            sx={{
                position: "absolute",
                top: 7,
                left: 7,
                width: "100%",
                height: "100%",
                maxWidth: 350,
                maxHeight: 500,
                backgroundColor: "#000000a0",
                borderRadius: 3,
            }}
        >
            <SettingsContainer />
        </Box>
    );
};

export default SettingsOverlay;
