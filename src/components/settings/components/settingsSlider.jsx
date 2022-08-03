import React from "react";

import { Grid, Slider } from "@mui/material";

const SettingsSlider = ({ defaultValue, label, onChange, min, max, step, color }) => {
    return (
        <>
            <Grid item>{label}</Grid>
            <Grid item>
                <Slider
                    sx={{ color }}
                    onChange={(e, value) => onChange(value)}
                    value={defaultValue}
                    min={min}
                    max={max}
                    step={step}
                    valueLabelDisplay="off"
                />
            </Grid>
        </>
    );
};

export default SettingsSlider;
