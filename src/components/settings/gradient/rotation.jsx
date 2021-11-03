import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Slider } from "@mui/material";

import { setGradientRotation } from "../../../redux/configSlice";

const getRotationLabel = (angle) => {
    return `${angle.toFixed(2)} rad / ${((angle * 180) / Math.PI).toFixed(2)} degrees`;
};

const setRotation = (rotation, setRotationValue, dispatch) => {
    setRotationValue(rotation);
    dispatch(setGradientRotation(rotation));
};

const Rotation = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();
    const [rotationValue, setRotationValue] = useState(config.gradient.rotation);
    return (
        <>
            <Grid item>Rotation - {getRotationLabel(config.gradient.rotation)}</Grid>
            <Grid item>
                <Slider
                    onChange={(e, value) => setRotation(value, setRotationValue, dispatch)}
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
