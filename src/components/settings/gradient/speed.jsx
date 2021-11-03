import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Slider } from "@mui/material";

import { setGradientSpeed } from "../../../redux/configSlice";

const calculateSpeed = (speed) => {
    return (1 - speed / 100) * 110 + 10;
};

const calculateSpeedReverse = (speed) => {
    return Math.round((1 - (speed - 10) / 110) * 100);
};

const Speed = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();
    return (
        <>
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
        </>
    );
};

export default Speed;
