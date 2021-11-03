import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Slider } from "@mui/material";

import { setGradientSpeed } from "../../../redux/configSlice";

const calculateSpeed = (speed) => {
    return (1 - speed / 100) * 110 + 10;
};

const calculateSpeedReverse = (speed) => {
    return Math.round((1 - (speed - 10) / 110) * 100);
};

const setSpeed = (speed, setSpeedValue, dispatch) => {
    setSpeedValue(speed);
    dispatch(setGradientSpeed(calculateSpeed(speed)));
};

const Speed = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();

    const [speedValue, setSpeedValue] = useState(calculateSpeedReverse(config.gradient.speed));

    return (
        <>
            <Grid item>Speed</Grid>
            <Grid item>
                <Slider
                    onChange={(e, value) => setSpeed(value, setSpeedValue, dispatch)}
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
