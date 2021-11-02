import React from "react";
import { Grid, Typography, Slider } from "@mui/material";

const SettingsContainer = () => {
    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid container justifyContent="center" item xs={12}>
                <Typography variant="h4">Settings</Typography>
            </Grid>

            <Grid container direction="column" item>
                <Grid item>Speed</Grid>
                <Grid item>
                    <Slider valueLabelDisplay="auto" />
                </Grid>

                <Grid item>Rotation</Grid>
                <Grid item>
                    <Slider valueLabelDisplay="auto" />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SettingsContainer;
