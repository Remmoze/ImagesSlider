import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Slider } from "@mui/material";

import { setGradientRotation } from "../../../redux/configSlice";

const getRotationLabel = (angle) => {
    return `${angle.toFixed(2)} rad / ${((angle * 180) / Math.PI).toFixed(2)} degrees`;
};

const Rotation = () => {
    const config = useSelector((storage) => storage.config);
    const dispatch = useDispatch();
    return (
        <>
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
        </>
    );
};

export default Rotation;
