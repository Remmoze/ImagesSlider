import React from "react";
//import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography } from "@mui/material";

import Mode from "./gradient/modeSelector";

const SettingsContainer = () => {
    //const config = useSelector((storage) => storage.config);
    //const dispatch = useDispatch();
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
