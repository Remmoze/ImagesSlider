import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Typography, Grid, Slider } from "@mui/material";

import { setGradientSpeed } from "../../../redux/configSlice";

const calculateSliderToStorageSpeed = (speed) => {
    return (1 - speed / 100) * 110 + 10;
};

const calculateStorageToSliderSpeed = (speed) => {
    return Math.round((1 - (speed - 10) / 110) * 100);
};

const calculateSliderToStorageSpeedExtreme = (speed) => {
    return (1 - speed / 100) * 110 + 1;
};

const calculateStorageToSliderSpeedExtreme = (speed) => {
    return Math.round((1 - (speed - 1) / 110) * 100);
};

const setSpeed = (value, setSpeedValue, dispatch, extreme) => {
    value = Math.min(Math.max(value, 0), 100);
    setSpeedValue(value);
    if (extreme) {
        dispatch(setGradientSpeed(calculateSliderToStorageSpeedExtreme(value)));
    } else {
        dispatch(setGradientSpeed(calculateSliderToStorageSpeed(value)));
    }
};

const refreshSpeed = (config, setSpeedValue, dispatch, extreme) => {
    debugger;
    if (extreme) {
        setSpeed(calculateStorageToSliderSpeed(config.gradient.speed), setSpeedValue, dispatch, extreme);
    } else {
        setSpeed(calculateStorageToSliderSpeedExtreme(config.gradient.speed), setSpeedValue, dispatch, extreme);
    }
};

const Speed = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();

    const [extreme, setExtreme] = useState(false);

    const [speedValue, setSpeedValue] = useState(calculateStorageToSliderSpeed(config.gradient.speed));

    return (
        <>
            <Grid container direction="row" alignItems="center">
                <Grid item>Speed</Grid>
                <Grid item ml={1} mr={-1}>
                    <Checkbox
                        onChange={({ target }) => {
                            setExtreme(target.checked);
                            refreshSpeed(config, setSpeedValue, dispatch, target.checked);
                        }}
                        color="error"
                        size="small"
                        checked={extreme}
                    />
                </Grid>
                <Grid item>
                    <Typography fontSize={10}>Extreme mode</Typography>
                </Grid>
            </Grid>
            <Grid mt={-1} item>
                <Slider
                    onChange={(e, value) => setSpeed(value, setSpeedValue, dispatch, extreme)}
                    defaultValue={speedValue}
                    min={0}
                    max={100}
                    step={1}
                    value={speedValue}
                    valueLabelDisplay="auto"
                />
            </Grid>
        </>
    );
};

export default Speed;

/*

FIX: when changing non-extreme max value to extreme, speed should not change. Instead it maxes out

*/
