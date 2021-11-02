import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Slider } from "@mui/material";

import { setGradientRotation, setGradientSpeed } from "../../redux/configSlice";

const getRotationLabel = (angle) => {
    return `${angle.toFixed(2)} rad / ${((angle * 180) / Math.PI).toFixed(2)} degrees`;
};

const calculateSpeed = (speed) => {
    return (1 - speed / 100) * 110 + 10;
};

const calculateSpeedReverse = (speed) => {
    return Math.round((1 - (speed - 10) / 110) * 100);
};

const SettingsContainer = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();
    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid container justifyContent="center" item xs={12}>
                <Typography variant="h4">Settings</Typography>
            </Grid>

            <Grid container direction="column" item>
                <Grid item>Speed</Grid>
                <Grid item>
                    <Slider
                        onChange={(e, value) => dispatch(setGradientSpeed(calculateSpeed(value)))}
                        defaultValue={calculateSpeedReverse(config.gradient.speed)}
                        min={0}
                        max={100}
                        step={1}
                        valueLabelDisplay="auto"
                    />
                </Grid>

                <Grid item>Rotation - {getRotationLabel(config.gradient.rotation)}</Grid>
                <Grid item>
                    <Slider
                        onChange={(e, value) => dispatch(setGradientRotation(value))}
                        defaultValue={config.gradient.rotation}
                        min={0}
                        max={Math.PI * 2}
                        //step={Math.PI / 4}
                        step={0.01}
                        valueLabelDisplay="off"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SettingsContainer;
