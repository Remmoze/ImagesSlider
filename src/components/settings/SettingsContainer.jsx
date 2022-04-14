import React from "react";

import { Grid, Typography } from "@mui/material";

import Mode from "./modeSelector";

const SettingsContainer = () => {
    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid container justifyContent="center" item mb={-1}>
                <Typography gutterBottom variant="h5">
                    Settings
                </Typography>
            </Grid>

            <Grid container direction="column" item>
                <Mode />
            </Grid>
        </Grid>
    );
};

export default SettingsContainer;
