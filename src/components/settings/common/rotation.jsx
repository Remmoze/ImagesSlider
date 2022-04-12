import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Slider } from "@mui/material";

import { setRotation } from "../../../redux/gradientSlice";

const getRotationLabel = (angle) => {
    return `${angle.toFixed(2)} rad / ${((angle * 180) / Math.PI).toFixed(2)} degrees`;
};

const changeRotation = (rotation, setRotationValue, dispatch) => {
    setRotationValue(rotation);
    dispatch(setRotation(rotation));
};

const Rotation = () => {
    const gradient = useSelector((storage) => storage.gradient);
    const dispatch = useDispatch();
    const [rotationValue, setRotationValue] = useState(gradient.rotation);
    return (
        <>
            <Grid item>Rotation - {getRotationLabel(gradient.rotation)}</Grid>
            <Grid item>
                <Slider
                    onChange={(e, value) => changeRotation(value, setRotationValue, dispatch)}
                    defaultValue={rotationValue}
                    min={0}
                    max={Math.PI * 2}
                    //step={Math.PI / 4}
                    step={0.01}
                    value={rotationValue}
                    valueLabelDisplay="off"
                />
            </Grid>
        </>
    );
};

export default Rotation;
