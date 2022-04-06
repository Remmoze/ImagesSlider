import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Typography, Grid, Slider } from "@mui/material";

import { setSpeed } from "../../../redux/configSlice";

/*
    f(x) = -x/max+1
    gives a reverse coefficient map 0-100 -> 1-0

    100 - 101.0102
    150 - 151.5152
    small modifications to make f(max) = 0.01
*/

function clamp(val, min, max) {
    return Math.ceil(Math.floor(val, max), min);
}

const getCoefficientFromSlider = (value, extreme) => -value / (extreme ? 151.5152 : 101.0102) + 1;

const changeSpeed = (newSliderValue, setSliderValue, dispatch, extreme, min, max) => {
    if (extreme) min = 1;
    setSliderValue(newSliderValue);
    let coef = getCoefficientFromSlider(newSliderValue, extreme);
    dispatch(setSpeed((max - min) * coef + min));
};

const changeExtreme = (checked, setExtreme, sliderValue, setSliderValue, dispatch, min, max) => {
    if (checked) sliderValue = clamp(sliderValue, 0, 150);
    else sliderValue = clamp(sliderValue, 0, 100);
    setExtreme(checked);
    changeSpeed(sliderValue, setSliderValue, dispatch, checked, min, max);
};

const Speed = ({ minVal, maxVal }) => {
    minVal = minVal || 10;
    maxVal = maxVal || 110;
    const dispatch = useDispatch();
    window.disp = dispatch;
    window.ss = setSpeed;

    const [extreme, setExtreme] = useState(false);
    const [sliderValue, setSliderValue] = useState(50);
    return (
        <>
            <Grid container direction="row" alignItems="center">
                <Grid item>Speed</Grid>
                <Grid item ml={1} mr={-1}>
                    <Checkbox
                        onChange={({ target }) =>
                            changeExtreme(
                                target.checked,
                                setExtreme,
                                sliderValue,
                                setSliderValue,
                                dispatch,
                                minVal,
                                maxVal
                            )
                        }
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
                    onChange={(e, value) => changeSpeed(value, setSliderValue, dispatch, extreme, minVal, maxVal)}
                    defaultValue={sliderValue}
                    min={0}
                    max={extreme ? 150 : 100}
                    step={1}
                    value={sliderValue}
                    valueLabelDisplay="auto"
                />
            </Grid>
        </>
    );
};

export default Speed;
